import React, { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import ReactInputMask from "react-input-mask";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  wrapperStyle?: React.CSSProperties;
  name: string;
  placeholder?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: any;
  mask?: string;
  curValue?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  wrapperStyle,
  name,
  placeholder,
  register = () => ({}),
  registerOptions,
  mask,
  error,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="ng-tns-c125-1 tru-core-form-field-wrapper tru-core-input-wrapper ng-untouched ng-pristine ng-invalid ng-star-inserted"
      style={{
        letterSpacing: `normal`,
        textIndent: 0,
        textShadow: `none`,
        textTransform: `none`,
        textAlign: `initial`,
        fontStyle: `normal`,
        verticalAlign: `initial`,
        display: `flex`,
        ...wrapperStyle,
      }}
    >
      {/**/}
      {/**/}
      {/**/}
      <div
        className="tru-core-input-container ng-tns-c125-1 ng-star-inserted"
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `100%`,
        }}
      >
        <div
          className="tru-core-input-label-and-contextual-help ng-tns-c125-1"
          style={{
            display: `inline-flex`,
            alignItems: `center`,
            marginBottom: `var(--truSpacingSm)`,
          }}
        >
          <label
            className="tru-core-input__label ng-tns-c125-1 ng-star-inserted"
            htmlFor="tru-core-input-1"
            id="tru-core-input-label-1"
            aria-owns="tru-core-input-1"
            style={{
              fontSize: `var(--truFontSizeMd)`,
              lineHeight: `var(--truLineHeightMd)`,
              fontFamily: `var(--truFontFamilyRegular)`,
              fontWeight: `var(--truFontWeightRegular)`,
              color: `var(--truColorTextSecondary)`,
              display: `inline-block`,
            }}
          >
            <div
              className="ng-tns-c125-1"
              style={{
                letterSpacing: `normal`,
                textIndent: 0,
                textShadow: `none`,
                textTransform: `none`,
                textAlign: `initial`,
                fontStyle: `normal`,
                verticalAlign: `initial`,
                fontSize: `var(--truFontSizeMd)`,
                color: error
                  ? `var(--truColorStatusErrorContrast)`
                  : `var(--truColorTextSecondary)`,
                padding: 0,
                display: `inline-block`,
              }}
            >
              {label}
            </div>
          </label>
          {/**/}
          {/**/}
        </div>
        <div
          className="tru-core-input__input-group ng-tns-c125-1 ng-star-inserted"
          style={{
            borderRadius: `var(--truBorderRadiusMd)`,
            border: `var(--truBorderWidthSm) solid var(--truColorInteractiveBase)`,
            outline: `var(--truBorderWidthSm) solid transparent`,
            display: `flex`,
            backgroundColor: `var(--truColorBackgroundPrimary)`,
            position: `relative`,
            overflow: `hidden`,
            height: `48px`,
            ...(isFocus
              ? {
                  borderColor: `var(--truColorInteractivePressed)`,
                  boxShadow: error
                    ? `0 0 0 var(--truBorderWidthSm) var(--truColorStatusErrorContrast)`
                    : `0 0 0 var(--truBorderWidthSm) var(--truColorInteractivePressed)`,
                }
              : {}),
            ...(error
              ? {
                  borderColor: `var(--truColorStatusErrorContrast)`,
                }
              : {}),
          }}
        >
          <div
            className="ng-tns-c111-1 tru-core-input-email-prefix-wrapper ng-star-inserted"
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
            {type === `email` ? (
              <div
                className="tru-core-form-field-prefix"
                style={{
                  color: `var(--truColorTextPrimary)`,
                  letterSpacing: `normal`,
                  textIndent: 0,
                  textShadow: `none`,
                  textTransform: `none`,
                  textAlign: `initial`,
                  fontStyle: `normal`,
                  verticalAlign: `initial`,
                  display: `flex`,
                  alignItems: `center`,
                  flexShrink: 0,
                  backgroundColor: `var(--truColorBackgroundSecondary)`,
                }}
              >
                <div
                  className="tru-core-icon-wrapper"
                  style={{
                    alignItems: `center`,
                    padding: `0 var(--truSpacingSm)`,
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
                  <svg
                    className="tru-core-icon tru-core-icon--md ng-star-inserted"
                    aria-hidden="true"
                    id="tru-core-input-email-prefix-icon-1"
                    style={{
                      fontSize: `medium`,
                      fill: `currentColor`,
                      fillOpacity: 1,
                      stroke: `none`,
                      height: `var(--truIconSizeMd)`,
                      width: `var(--truIconSizeMd)`,
                    }}
                  >
                    <use xlinkHref="/images/tru-core-icon-sprite.svg#Messages-Med" />
                  </svg>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`tru-core-input__input-wrapper ng-tns-c125-1 ${
              isFocus ? `tru-core-input__input-has-focus` : ``
            }`}
            style={{
              display: `flex`,
              width: `100%`,
              borderRadius: `var(--truBorderRadiusMd)`,
              ...(isFocus
                ? {
                    boxShadow: `inset 0 0 0 2px var(--truColorBackgroundPrimary),inset 0 0 0 3px var(--truColorBorderFocus)`,
                  }
                : {}),
            }}
          >
            {mask ? (
              <ReactInputMask
                mask={mask}
                {...register(name, {
                  onBlur: () => {
                    setIsFocus(false);
                  },
                  ...registerOptions,
                })}
                onFocus={() => {
                  setIsFocus(true);
                }}
              >
                {
                  // @ts-ignore
                  () => (
                    <input
                      className="tru-core-input__input ng-tns-c125-1 ng-untouched ng-pristine ng-invalid"
                      id="tru-core-input-1"
                      placeholder=""
                      aria-invalid="false"
                      aria-required="true"
                      autoComplete="off"
                      required
                      aria-describedby=""
                      defaultValue=""
                      style={{
                        fontSize: `var(--truFontSizeMd)`,
                        borderRadius: `var(--truBorderRadiusMd)`,
                        overflow: `auto`,
                        fontFamily: `var(--truFontFamilyRegular)`,
                        lineHeight: `var(--truLineHeightMd)`,
                        fontWeight: `var(--truFontWeightRegular)`,
                        color: `var(--truColorTextPrimary)`,
                        padding: `0 var(--truSpacingMd)`,
                        width: `100%`,
                        border: 0,
                        backgroundColor: `transparent`,
                        margin: 0,
                        ...(isFocus ? { outline: 0 } : {}),
                        ...(!showPassword ? { letterSpacing: `.2rem` } : {}),
                      }}
                      type={showPassword ? `text` : type}
                      {...register(name, {
                        onBlur: () => {
                          setIsFocus(false);
                        },
                        ...registerOptions,
                      })}
                      {...props}
                    />
                  )
                }
              </ReactInputMask>
            ) : (
              <input
                className="tru-core-input__input ng-tns-c125-1 ng-untouched ng-pristine ng-invalid"
                id="tru-core-input-1"
                placeholder=""
                aria-invalid="false"
                aria-required="true"
                autoComplete="off"
                required
                aria-describedby=""
                defaultValue=""
                onFocus={() => {
                  setIsFocus(true);
                }}
                style={{
                  fontSize: `var(--truFontSizeMd)`,
                  borderRadius: `var(--truBorderRadiusMd)`,
                  overflow: `auto`,
                  fontFamily: `var(--truFontFamilyRegular)`,
                  lineHeight: `var(--truLineHeightMd)`,
                  fontWeight: `var(--truFontWeightRegular)`,
                  color: `var(--truColorTextPrimary)`,
                  padding: `0 var(--truSpacingMd)`,
                  width: `100%`,
                  border: 0,
                  backgroundColor: `transparent`,
                  margin: 0,
                  ...(isFocus ? { outline: 0 } : {}),
                  ...(!showPassword && type === `password`
                    ? { letterSpacing: `.2rem` }
                    : {}),
                }}
                type={showPassword ? `text` : type}
                {...register(name, {
                  onBlur: () => {
                    setIsFocus(false);
                  },
                  ...registerOptions,
                })}
                {...props}
              />
            )}
            {/**/}
          </div>
          {type === `password` ? (
            <div
              className="ng-tns-c126-2 tru-core-input-password-button-wrapper ng-star-inserted"
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
                className="tru-core-form-field-suffix"
                style={{
                  color: `var(--truColorTextPrimary)`,
                  borderLeft: 0,
                  alignItems: `stretch`,
                  letterSpacing: `normal`,
                  textIndent: 0,
                  textShadow: `none`,
                  textTransform: `none`,
                  textAlign: `initial`,
                  fontStyle: `normal`,
                  verticalAlign: `initial`,
                  display: `flex`,
                  // alignItems: `center`,
                  flexShrink: 0,
                }}
              >
                <div
                  className="tru-core-form-field-suffix-button tru-core-button-wrapper"
                  style={{
                    height: `100%`,
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
                  {/**/}
                  <button
                    type="button"
                    className="tru-core-button tru-core-button-tertiary ng-star-inserted"
                    style={{
                      borderRadius: 0,
                      paddingLeft: `var(--truSpacingMd)`,
                      paddingRight: `var(--truSpacingMd)`,
                      backgroundColor: `transparent`,
                      boxShadow: `none`,
                      height: `48px`,
                      fontSize: `var(--truFontSizeMd)`,
                      fontFamily: `var(--truFontFamilyBold)`,
                      fontWeight: `var(--truFontWeightBold)`,
                      display: `inline-flex`,
                      cursor: `pointer`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      textAlign: `center`,
                      whiteSpace: `nowrap`,
                      textDecoration: `none`,
                      padding: `0 16px`,
                      width: `100%`,
                      position: `relative`,
                      transitionProperty: `background-color,border-color,color,box-shadow`,
                      transitionDuration: `var(--truAnimationDurationBase)`,
                      transitionTimingFunction: `var(--truAnimationEasingBase)`,
                      color: `var(--truColorInteractiveBase)`,
                      border: 0,
                      margin: 0,
                      overflow: `visible`,
                      background: `transparent`,
                      font: `inherit`,
                      lineHeight: `normal`,
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/**/}
                    <div
                      aria-hidden="true"
                      className="tru-core-icon-wrapper"
                      style={{
                        padding: 0,
                        alignItems: `center`,
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
                      <svg
                        className="tru-core-icon tru-core-icon--md ng-star-inserted"
                        aria-hidden="true"
                        style={{
                          height: `var(--truIconSizeMd)`,
                          width: `var(--truIconSizeMd)`,
                          fill: `currentColor`,
                          fillOpacity: 1,
                        }}
                      >
                        <use
                          _ngcontent-qty-c56=""
                          xlinkHref={`/images/tru-core-icon-sprite.svg#${
                            !showPassword ? `Show-` : `Hide-`
                          }Med`}
                        />
                      </svg>
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                    <span className="tru-core-screen-reader-only">
                      {" "}
                      Show password.{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </button>
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
              </div>
            </div>
          ) : null}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
        </div>
        {/**/}
        <div
          _ngcontent-evm-c125=""
          className="ng-tns-c125-1 ng-trigger ng-trigger-truCoreDisableInitialAnimation ng-star-inserted"
        >
          <div
            _ngcontent-evm-c125=""
            className="ng-tns-c125-1 ng-trigger ng-trigger-truCoreSlideDown ng-star-inserted"
            style={{ opacity: 1, transform: "translateY(0%)" }}
          >
            {/**/}
            {/**/}
          </div>
          {/**/}
        </div>
        <span
          _ngcontent-evm-c125=""
          aria-live="assertive"
          aria-atomic="true"
          className="ng-tns-c125-1 ng-star-inserted"
        >
          {/**/}
        </span>
        {/**/}
        {error ? (
          <span
            _ngcontent-omn-c126=""
            aria-live="assertive"
            aria-atomic="true"
            className="ng-tns-c126-2 ng-star-inserted"
          >
            <div
              _ngcontent-omn-c126=""
              className="tru-core-error-message-container ng-tns-c126-2 ng-trigger ng-trigger-truCoreSlideDown ng-star-inserted"
              style={{
                opacity: "1",
                transform: "translateY(0%)",
                marginTop: "var(--truSpacingXs)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                _ngcontent-omn-c156=""
                _nghost-omn-c79=""
                id="tru-core-error-2"
                className="tru-core-error-wrapper ng-tns-c126-2 ng-star-inserted"
                style={{
                  letterSpacing: "normal",
                  textIndent: "0",
                  textShadow: "none",
                  textTransform: "none",
                  textAlign: "initial",
                  fontStyle: "normal",
                  verticalAlign: "initial",
                  color: "var(--truColorStatusErrorContrast)",
                  display: "inline-flex",
                  alignItems: "flex-start",
                  animation:
                    "fade-in var(--truAnimationDurationBase) var(--truAnimationEasingBase)",
                }}
              >
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
                    fontSize: "inherit",
                    color: "inherit",
                    marginRight: "var(--truSpacing2xs)",
                  }}
                >
                  <svg
                    className="tru-core-icon tru-core-icon--sm ng-star-inserted"
                    aria-hidden="true"
                    style={{
                      height: "var(--truIconSizeSm)",
                      width: "var(--truIconSizeSm)",
                      fill: "currentColor",
                      fillOpacity: "1",
                      fontSize: "inherit",
                      color: "inherit",
                    }}
                  >
                    <use xlinkHref="/images/tru-core-icon-sprite.svg#Alert-Low" />
                  </svg>
                  <span className="tru-core-screen-reader-only ng-star-inserted">
                    Error!
                  </span>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
                {error}
              </div>
              {/**/}
            </div>
            {/**/}
          </span>
        ) : null}
      </div>
      {/**/}
      {/**/}
      {/**/}
    </div>
  );
};
