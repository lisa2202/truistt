import React from "react";

interface AltButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const AltButton: React.FC<AltButtonProps> = ({ label, ...props }) => {
  return (
    <div
      className="tru-core-button-wrapper"
      style={{
        letterSpacing: "normal",
        textIndent: "0",
        textShadow: "none",
        textTransform: "none",
        textAlign: "initial",
        fontStyle: "normal",
        verticalAlign: "initial",
        display: "inline-flex",
        alignItems: "stretch",
      }}
    >
      {/**/}
      {/**/}
      <button
        type="button"
        className="tru-core-button tru-core-button-tertiary ng-star-inserted btn-alt"
        style={{
          fontSize: "var(--truFontSizeMd)",
          fontFamily: "var(--truFontFamilyBold)",
          fontWeight: "var(--truFontWeightBold)",
          borderRadius: "var(--truBorderRadiusMd)",
          display: "inline-flex",
          width: "100%",
          height: "var(--truFixedHeightBase)",
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
          padding: "0 var(--truButtonXPadding)",
          border: "var(--truBorderWidthSm) solid var(--truColorBorderPrimary)",
          boxShadow: "inset 0 0 0 var(--truBorderWidthSm) transparent",
          backgroundColor: "transparent",
          color: "var(--truColorInteractiveBase)",
        }}
        {...props}
      >
        <style>
          {`
                button.btn-alt:hover {
                    border-color: var(--truColorInteractiveHover) !important;
                    box-shadow: inset 0 0 0 var(--truBorderWidthSm) var(--truColorInteractiveHover) !important;
                    background-color: transparent !important;
                    color: var(--truColorInteractiveHover) !important;
                }
                button.btn-alt:focus {
                    border-color: var(--truColorInteractivePressed) !important;
                    box-shadow: inset 0 0 0 var(--truBorderWidthSm) var(--truColorInteractivePressed) !important;
                    background-color: transparent !important;
                    color: var(--truColorInteractivePressed) !important;
                    outline: none !important;
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
