/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface WrapperProps {
  title: string;
  children?: React.ReactNode;
  error?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({ title, error, children }) => {
  const [hideError, setHideError] = useState(true);
  return (
    <>
      <Head>
        <link href="/styles/styles.css" rel="stylesheet" type="text/css" />
        <title>DIAS Selfservice</title>
      </Head>
      <div className="app-wrapper">
        <div className="main-content-wrapper">
          <Header />
          <div className="tru-core-padding-top--lg tru-core-padding-bottom--lg tru-core-grid--retail-background">
            <div className="tru-core-container">
              <h1 className="tru-core-card-header--login">{title}</h1>
              <div className="tru-core-margin-top--lg tru-core-form-max-width--sm">
                <form className="ng-untouched ng-pristine ng-invalid">
                  <div
                    className="tru-core-card--retail-border tru-core-card-wrapper"
                    style={{
                      letterSpacing: `normal`,
                      textIndent: 0,
                      textShadow: `none`,
                      textTransform: `none`,
                      textAlign: `initial`,
                      fontStyle: `normal`,
                      verticalAlign: `initial`,
                      display: `flex`,
                      alignItems: `flex-start`,
                    }}
                  >
                    <div
                      className="tru-core-card"
                      style={{
                        backgroundColor: `var(--truColorBackgroundPrimary)`,
                        border: `var(--truBorderWidthSm) solid var(--truColorBorderPrimary)`,
                        borderRadius: `var(--truBorderRadiusMd)`,
                        width: `100%`,
                        display: `flex`,
                        flexDirection: `column`,
                        overflow: `hidden`,
                      }}
                    >
                      {error && hideError ? (
                        <div
                          className="tru-core-margin-bottom--sm ng-tns-c67-4 tru-core-block-message-wrapper ng-star-inserted"
                          style={{
                            letterSpacing: "normal",
                            textIndent: "0",
                            textShadow: "none",
                            textTransform: "none",
                            textAlign: "initial",
                            fontStyle: "normal",
                            verticalAlign: "initial",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          <div
                            tabIndex={-1}
                            className="ng-tns-c67-4 ng-trigger ng-trigger-truCoreSlideDownUp tru-core-block-message tru-core-block-message--error ng-star-inserted"
                            aria-label="Error!"
                            role="complementary"
                            style={{
                              display: "flex",
                              textAlign: "left",
                              transformOrigin: "top",
                              overflow: "hidden",
                              position: "relative",
                              border: "var(--truBorderWidthSm) solid",
                              borderRadius: "5px",
                              transition:
                                "opacity var(--truAnimationDurationFast) var(--truAnimationEasingBase)",
                              borderColor: "#d61d00",
                            }}
                          >
                            <div
                              className="tru-core-block-message__pre-content ng-tns-c67-4"
                              style={{
                                backgroundColor:
                                  "var(--truColorStatusErrorBase)",
                                borderRightColor: "#d61d00",
                                borderRight: "var(--truBorderWidthSm) solid",
                                padding: "var(--truSpacingMd)",
                                lineHeight: "0",
                              }}
                            >
                              <div
                                className="ng-tns-c67-4 tru-core-icon-wrapper"
                                style={{
                                  letterSpacing: "normal",
                                  textIndent: "0",
                                  textShadow: "none",
                                  textTransform: "none",
                                  textAlign: "initial",
                                  fontStyle: "normal",
                                  verticalAlign: "initial",
                                  display: "inline-flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  className="tru-core-icon tru-core-icon--lg ng-star-inserted"
                                  aria-hidden="true"
                                  style={{
                                    color: "var(--truColorNeutralWhite)",
                                    fontSize: "medium",
                                    fill: "currentColor",
                                    fillOpacity: "1",
                                    stroke: "none",
                                    height: "var(--truIconSizeLg)",
                                    width: "var(--truIconSizeLg)",
                                  }}
                                >
                                  <use xlinkHref="/images/tru-core-icon-sprite.svg#Alert-High" />
                                </svg>
                                {/**/}
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                            </div>
                            <div
                              className="tru-core-block-message__full-content ng-tns-c67-4"
                              style={{
                                backgroundColor:
                                  "var(--truColorBackgroundPrimary)",
                                width: "100%",
                                padding: "var(--truSpacingLg)",
                                wordWrap: "break-word",
                                paddingRight:
                                  "calc(12px + var(--truFixedHeightSm))",
                              }}
                            >
                              <div
                                className="tru-core-block-message__content ng-tns-c67-4"
                                style={{
                                  letterSpacing: "normal",
                                  textIndent: "0",
                                  textShadow: "none",
                                  textTransform: "none",
                                  textAlign: "initial",
                                  fontStyle: "normal",
                                  verticalAlign: "initial",
                                  fontSize: "var(--truFontSizeMd)",
                                  color: "var(--truColorTextPrimary)",
                                  display: "block",
                                }}
                              >
                                {" "}
                                One or more fields were left blank. Please enter
                                all required information and try again{" "}
                              </div>
                            </div>
                            <div
                              className="tru-core-block-message__close ng-tns-c67-4 tru-core-button-wrapper ng-star-inserted"
                              style={{
                                position: "absolute",
                                right: "12px",
                                top: "var(--truSpacingMd)",
                              }}
                            >
                              {/**/}
                              {/**/}
                              <button
                                type="button"
                                aria-label="Dismiss message "
                                className="tru-core-button tru-core-button-tertiary tru-core-button--icon-only ng-star-inserted alert-close-btn"
                                style={{
                                  padding: "0",
                                  border: "0",
                                  boxShadow: "none",
                                  height: "var(--truFixedHeightSm)",
                                  width: "var(--truFixedHeightSm)",
                                  backgroundColor:
                                    "var(--truColorBackgroundPrimary)",
                                  color: "var(--truColorInteractiveBase)",
                                  fontSize: "var(--truFontSizeMd)",
                                  fontFamily: "var(--truFontFamilyBold)",
                                  fontWeight: "var(--truFontWeightBold)",
                                  borderRadius: "var(--truBorderRadiusMd)",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  whiteSpace: "nowrap",
                                  margin: "0",
                                  lineHeight: "normal",
                                  textDecoration: "none",
                                  cursor: "pointer",
                                  position: "relative",
                                  transition:
                                    "background-color var(--truAnimationDurationBase) var(--truAnimationEasingBase),color var(--truAnimationDurationBase) var(--truAnimationEasingBase),border-color var(--truAnimationDurationBase) var(--truAnimationEasingBase),box-shadow var(--truAnimationDurationFast) var(--truAnimationEasingBase)",
                                }}
                                onClick={() => setHideError(false)}
                              >
                                <style>
                                  {`
                                  button.alert-close-btn:hover {
                                    box-shadow: none !important;
                                    color: var(--truColorInteractiveHover) !important;
                                    border-color: var(--truColorInteractiveHover) !important;
                                    background-color: var(--truColorBackgroundPrimary) !important;
                                  }

                                  button.alert-close-btn:focus {
                                    box-shadow: none !important;
                                    color: var(--truColorBackgroundPrimary) !important;
                                    border-color: var(--truColorInteractivePressed) !important;
                                    background-color: var(--truColorInteractivePressed) !important;
                                    outline: none !important;
                                  }


                                  `}
                                </style>
                                {/**/}
                                <div
                                  className="tru-core-icon-wrapper"
                                  style={{
                                    letterSpacing: "normal",
                                    textIndent: "0",
                                    textShadow: "none",
                                    textTransform: "none",
                                    textAlign: "initial",
                                    fontStyle: "normal",
                                    verticalAlign: "initial",
                                    display: "inline-flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <svg
                                    className="tru-core-icon tru-core-icon--sm ng-star-inserted"
                                    aria-hidden="true"
                                    style={{
                                      fontSize: "medium",
                                      fill: "currentColor",
                                      fillOpacity: "1",
                                      stroke: "none",
                                      height: "var(--truIconSizeSm)",
                                      width: "var(--truIconSizeSm)",
                                    }}
                                  >
                                    <use xlinkHref="/images/tru-core-icon-sprite.svg#X-Low" />
                                  </svg>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </div>
                                {/**/}
                                {/**/}
                              </button>
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                        </div>
                      ) : null}
                      {children}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
