/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useRef, useState } from "react";
import Webcam from "react-webcam";
import { AltButton } from "../../../components/AltButton";
import { Button } from "../../../components/Button";
import { InputWrapper } from "../../../components/InputWrapper";
import { Wrapper } from "../../../components/Wrapper";
import { dataURItoBlob } from "../../../utils/dataURItoBlob";
import { getNextUrl } from "../../../utils/getNextUrl";
import { getProgress } from "../../../utils/getProgress";
import { DataContext } from "../../_app";

interface SelfieProps {}

export const Selfie: React.FC<SelfieProps> = ({}) => {
  const { data: datas, setData } = useContext(DataContext);

  const { push } = useRouter();

  const [imageSrc, setImageSrc] = useState(``);
  const [timer, setTimer] = useState(4);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null) as any;

  const capture = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            setImageSrc(
              webcamRef.current ? webcamRef.current.getScreenshot() : ``
            );
            setTimer(4);
            clearInterval(interval);
          }
          return prevTimer - 1;
        });
      }, 1000);
    },
    []
  );

  const onSubmit = async () => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`selfie`, dataURItoBlob(imageSrc));
    formData.append(`form`, `SELFIE`);

    await axios.post(`/api/send-selfie`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      selfie: imageSrc,
    });

    const url = getProgress()[getProgress().indexOf(`SELFIE`) + 1];

    push(getNextUrl(url));
  };

  return (
    <Wrapper title="Take a selfie">
      <div
        className="tru-core-card-content tru-core-card-section"
        style={{
          paddingTop: `var(--truSpacingXl)`,
          letterSpacing: `normal`,
          textIndent: 0,
          textShadow: `none`,
          textTransform: `none`,
          textAlign: `initial`,
          fontStyle: `normal`,
          verticalAlign: `initial`,
          fontSize: `var(--truFontSizeMd)`,
          color: `var(--truColorTextPrimary)`,
          display: `flex`,
          flexGrow: 1,
          flexDirection: `column`,
        }}
      >
        <p
          className="tru-core-card-copy--retail"
          style={{
            marginTop: 0,
            marginBottom: `16px`,
          }}
        >
          {" "}
          {`Let's`} verify your document.{" "}
        </p>
        <>
          {imageSrc ? (
            <img
              alt="selfie"
              src={imageSrc}
              style={{
                width: `100%`,
                objectFit: `contain`,
              }}
            />
          ) : (
            <InputWrapper>
              <Webcam
                audio={false}
                height={`100%`}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={`100%`}
                videoConstraints={{
                  facingMode: `user`,
                }}
              />
            </InputWrapper>
          )}
        </>
      </div>
      <div
        className="tru-core-card-actions tru-core-card-section"
        style={{
          paddingTop: `var(--truSpacing2xl)`,
          paddingBottom: `var(--truSpacingLg)`,
          letterSpacing: `normal`,
          textIndent: 0,
          textShadow: `none`,
          textTransform: `none`,
          textAlign: `initial`,
          fontStyle: `normal`,
          verticalAlign: `initial`,
          fontSize: `var(--truFontSizeMd)`,
          color: `var(--truColorTextPrimary)`,
          display: `flex`,
          flexGrow: 1,
          flexDirection: `column`,
        }}
      >
        <>
          {timer < 4 && !imageSrc ? (
            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
              }}
            >
              <div
                style={{
                  fontWeight: `bold`,
                }}
              >
                {timer}
              </div>
            </div>
          ) : (
            <>
              {imageSrc ? (
                <div
                  style={{
                    letterSpacing: `normal`,
                    textIndent: 0,
                    textShadow: `none`,
                    textTransform: `none`,
                    textAlign: `initial`,
                    fontStyle: `normal`,
                    verticalAlign: `initial`,
                    display: `grid`,
                    gridTemplateColumns: `repeat(2,1fr)`,
                    gridGap: `var(--truSpacingMd)`,
                    width: `100%`,
                  }}
                >
                  <Button
                    label={`Continue`}
                    disabled={loading}
                    onClick={onSubmit}
                  />
                  <AltButton label={`Retake`} onClick={() => setImageSrc(``)} />
                </div>
              ) : (
                <Button label={`Take`} onClick={capture} />
              )}
            </>
          )}
        </>
      </div>
    </Wrapper>
  );
};

export default Selfie;
