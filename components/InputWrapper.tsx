import React from "react";

interface InputWrapperProps {
  children?: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => {
  return (
    <div
      className="form-control tru-core-margin-top--sm ng-tns-c111-1 is-invalid tru-core-form-field-wrapper tru-core-input-wrapper ng-untouched ng-pristine ng-invalid ng-star-inserted"
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
      {children}
    </div>
  );
};
