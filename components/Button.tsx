import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <div
      className="tru-core-sign-in-submit-button tru-core-button-wrapper"
      style={{
        display: `block`,
        width: `100%`,
        letterSpacing: `normal`,
        textIndent: 0,
        textShadow: `none`,
        textTransform: `none`,
        textAlign: `initial`,
        fontStyle: `normal`,
        verticalAlign: `initial`,
      }}
    >
      {/**/}
      {/**/}
      <button
        type="submit"
        className="tru-core-button tru-core-button-primary ng-star-inserted btn-custom-primary"
        style={{
          fontSize: `var(--truFontSizeMd)`,
          fontFamily: `var(--truFontFamilyBold)`,
          fontWeight: `var(--truFontWeightBold)`,
          borderRadius: `var(--truBorderRadiusMd)`,
          display: `inline-flex`,
          cursor: `pointer`,
          alignItems: `center`,
          justifyContent: `center`,
          textAlign: `center`,
          whiteSpace: `nowrap`,
          textDecoration: `none`,
          padding: `0 var(--truSpacingXl)`,
          height: `var(--truFixedHeightBase)`,
          width: `100%`,
          position: `relative`,
          transitionProperty: `background-color,border-color,color,box-shadow`,
          transitionDuration: `var(--truAnimationDurationBase)`,
          transitionTimingFunction: `var(--truAnimationEasingBase)`,
          backgroundColor: `var(--truColorInteractiveBase)`,
          color: `var(--truColorBackgroundPrimary)`,
          border: `none`,
          margin: 0,
          overflow: `visible`,
          lineHeight: `normal`,
          boxShadow: `none`,
          WebkitAppearance: `none`,
        }}
        {...props}
      >
        <style>
          {`
                button.btn-custom-primary:hover {
                    background-color: var(--truColorInteractiveHover) !important;
                    color: var(--truColorBackgroundPrimary) !important;
                }
                button.btn-custom-primary:disabled {
                  background-color: var(--truColorInteractiveDisabled) !important;
                  color: var(--truColorBackgroundPrimary) !important;
                  pointer-events: none !important;
                }
                button.btn-custom-primary:focus {
                    background-color: var(--truColorInteractivePressed) !important;
                    color: var(--truColorBackgroundPrimary) !important;
                    outline-color: #7c6992 !important;
                }
                button.btn-custom-primary:focus:before {
                    border-color: var(--truColorBackgroundPrimary);
                    top: 3px;
                    left: 3px;
                    right: 3px;
                    bottom: 3px;
                    content: "";
                    position: absolute;
                    border-width: var(--truBorderWidthSm);
                    border-style: solid;
                    border-radius: var(--truBorderRadiusSm);
                }
            `}
        </style>
        {/**/} {label} {/**/}
        {/**/}
      </button>
      {/**/}
      {/**/}
      {/**/}
    </div>
  );
};
