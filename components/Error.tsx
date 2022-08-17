import React from "react";

interface ErrorProps {}

export const Error: React.FC<ErrorProps> = ({}) => {
  return (
    <>
      <div
        className="tru-core-sign-in-block-message ng-star-inserted"
        style={{
          marginBottom: "var(--truSpacingLg)",
        }}
      >
        <div
          tru-core-block-message=""
          className="tru-core-margin-bottom--md form-max-width ng-tns-c75-5 tru-core-block-message-wrapper ng-star-inserted"
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
            maxWidth: "380px",
          }}
        >
          <div
            tabIndex={-1}
            className="ng-tns-c75-5 ng-trigger ng-trigger-truCoreSlideDownUp tru-core-block-message tru-core-block-message--error ng-star-inserted"
            aria-label="Error!"
            role="complementary"
            style={{
              position: "relative",
              display: "flex",
              border: "var(--truBorderWidthSm) solid",
              borderRadius: "var(--truBorderRadiusMd)",
              overflow: "hidden",
              borderColor: "var(--truColorStatusErrorContrast)",
            }}
          >
            <div
              className="tru-core-block-message__pre-content ng-tns-c75-5"
              style={{
                padding: "var(--truSpacingMd) var(--truSpacingSm)",
                borderRight: "var(--truBorderWidthSm) solid",
                backgroundColor: "var(--truColorStatusErrorBase)",
                borderRightColor: "var(--truColorStatusErrorContrast)",
              }}
            >
              <div
                className="ng-tns-c75-5 tru-core-icon-wrapper"
                style={{
                  letterSpacing: "normal",
                  textIndent: "0",
                  textShadow: "none",
                  textTransform: "none",
                  textAlign: "initial",
                  fontStyle: "normal",
                  verticalAlign: "initial",
                  display: "inline-flex",
                }}
              >
                <svg
                  className="tru-core-icon tru-core-icon--lg ng-star-inserted"
                  aria-hidden="true"
                  style={{
                    width: "var(--truIconSizeMd)",
                    height: "var(--truIconSizeMd)",
                    color: "var(--truColorNeutralWhite)",
                    fill: "currentColor",
                    fillOpacity: "1",
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
              className="tru-core-block-message__full-content ng-tns-c75-5"
              style={{
                width: "100%",
                padding: "var(--truSpacingLg)",
                wordWrap: "break-word",
                backgroundColor: "var(--truColorBackgroundPrimary)",
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
              <div
                _nghost-omn-c72=""
                className="tru-core-block-message__content ng-tns-c75-5"
              >
                {" "}
                Your user ID or password is not recognized. Please try again.{" "}
              </div>
            </div>
            {/**/}
          </div>
          {/**/}
          {/**/}
        </div>
        {/**/}
      </div>
      <div
        className="tru-core-sign-in-introduction ng-star-inserted"
        style={{
          marginBottom: "var(--truSpacingLg)",
        }}
      >
        <div
          className="bbtHstLnkPad ng-star-inserted"
          style={{
            paddingTop: "1.5em",
            paddingBottom: "1em",
          }}
        >
          <div
            className="ng-tns-c77-6 tru-core-block-message-wrapper ng-star-inserted"
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
              className="ng-tns-c77-6 ng-trigger ng-trigger-truCoreSlideDownUp tru-core-block-message tru-core-block-message--warning ng-star-inserted"
              aria-label="Warning!"
              role="complementary"
              style={{
                position: "relative",
                display: "flex",
                border: "var(--truBorderWidthSm) solid",
                borderRadius: "var(--truBorderRadiusMd)",
                overflow: "hidden",
                borderColor: "var(--truColorStatusWarningContrast)",
              }}
            >
              <div
                className="tru-core-block-message__pre-content ng-tns-c77-6"
                style={{
                  padding: "var(--truSpacingMd) var(--truSpacingSm)",
                  borderRight: "var(--truBorderWidthSm) solid",
                  backgroundColor: "var(--truColorStatusWarningBase)",
                  borderRightColor: "var(--truColorStatusWarningContrast)",
                }}
              >
                <div
                  className="ng-tns-c77-6 tru-core-icon-wrapper"
                  style={{
                    letterSpacing: "normal",
                    textIndent: "0",
                    textShadow: "none",
                    textTransform: "none",
                    textAlign: "initial",
                    fontStyle: "normal",
                    verticalAlign: "initial",
                    display: "inline-flex",
                  }}
                >
                  <svg
                    className="tru-core-icon tru-core-icon--lg ng-star-inserted"
                    aria-hidden="true"
                    style={{
                      color: "var(--truColorPrimaryBase)",
                      width: "var(--truIconSizeMd)",
                      height: "var(--truIconSizeMd)",
                      fill: "currentColor",
                      fillOpacity: "1",
                    }}
                  >
                    <use xlinkHref="/images/tru-core-icon-sprite.svg#Warning-High" />
                  </svg>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
              </div>
              <div
                className="tru-core-block-message__full-content ng-tns-c77-6"
                style={{
                  width: "100%",
                  padding: "var(--truSpacingLg)",
                  wordWrap: "break-word",
                  backgroundColor: "var(--truColorBackgroundPrimary)",
                }}
              >
                <div
                  className="tru-core-block-message__content ng-tns-c77-6"
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
                  <span className="bbtHstLnkTxtClr">
                    If you {`haven't`} signed into Truist
                    <br /> Online Banking before, {`you'll`} <br /> need to
                    first sign in through your <br /> original bank through the
                    link <br /> below.
                    <br />
                  </span>
                  <div
                    className="bbtHstLnkTop tru-core-link-wrapper"
                    style={{
                      paddingTop: "1em",
                      letterSpacing: "normal",
                      textIndent: "0",
                      textShadow: "none",
                      textTransform: "none",
                      textAlign: "initial",
                      fontStyle: "normal",
                      verticalAlign: "initial",
                      display: "inline-flex",
                    }}
                  >
                    {/**/}
                    <a
                      className="tru-core-link tru-core-link-text ng-star-inserted"
                      style={{
                        color: "var(--truColorInteractiveBase)",
                        wordBreak: "break-word",
                        cursor: "pointer",
                      }}
                    >
                      {/**/}Sign in to BB&amp;T {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </a>
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                  <br />
                  <div
                    style={{
                      paddingTop: "1em",
                      letterSpacing: "normal",
                      textIndent: "0",
                      textShadow: "none",
                      textTransform: "none",
                      textAlign: "initial",
                      fontStyle: "normal",
                      verticalAlign: "initial",
                      display: "inline-flex",
                    }}
                  >
                    {/**/}
                    <a
                      className="tru-core-link tru-core-link-text ng-star-inserted"
                      style={{
                        color: "var(--truColorInteractiveBase)",
                        wordBreak: "break-word",
                        cursor: "pointer",
                      }}
                    >
                      {/**/}Sign in to SunTrust {/**/}
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
              {/**/}
            </div>
            {/**/}
            {/**/}
          </div>
        </div>
        {/**/}
      </div>
    </>
  );
};
