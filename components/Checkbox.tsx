import React, { useState } from "react";

interface CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = ({}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      _ngcontent-qty-c156=""
      className="tru-core-margin-bottom--lg ng-star-inserted"
    >
      <div
        className="tru-core-checkbox ng-untouched ng-valid ng-dirty"
        style={{
          letterSpacing: `normal`,
          textIndent: 0,
          textShadow: `none`,
          textTransform: `none`,
          textAlign: `initial`,
          fontStyle: `normal`,
          verticalAlign: `initial`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        {/**/}
        {/**/}
        {/**/}
        <div
          className="tru-core-checkbox-input__wrapper ng-star-inserted"
          style={{
            display: `flex`,
            position: `relative`,
            alignItems: `center`,
          }}
        >
          <input
            type="checkbox"
            className="tru-core-checkbox__input ng-star-inserted"
            id="tru-core-checkbox-input-1"
            name="tru-core-checkbox-name-1"
            defaultValue="tru-core-checkbox-value-1"
            checked={isChecked}
            onChange={(value) => {
              setIsChecked(value.target.checked);
            }}
            style={{
              margin: 0,
              flexShrink: 0,
              opacity: 0,
              height: `24px`,
              width: `24px`,
              position: `relative`,
              zIndex: 1,
              cursor: `pointer`,
            }}
          />
          <span
            className="tru-core-checkbox__custom-input ng-star-inserted"
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              position: `absolute`,
              left: 0,
              height: `24px`,
              width: `24px`,
              borderRadius: `2px`,
              border: `2px solid var(--truColorInteractiveBase)`,
              transition: `border-color var(--truAnimationDurationFast) var(--truAnimationEasingBase),transform var(--truAnimationDurationFast) var(--truAnimationEasingBase)`,
              ...(isChecked
                ? {
                    backgroundColor: `var(--truColorInteractiveSelected)`,
                    borderColor: `var(--truColorInteractiveSelected)`,
                    boxShadow: `none`,
                  }
                : {}),
            }}
          >
            <span
              //   classes="tru-core-checkbox__checkmark"
              //   size="sm"
              //   _nghost-qty-c56=""
              className="tru-core-icon-wrapper"
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
              <svg
                className="tru-core-icon tru-core-checkbox__checkmark tru-core-icon--sm ng-star-inserted"
                aria-hidden="true"
                style={{
                  color: `var(--truColorBackgroundPrimary)`,
                  opacity: isChecked ? 1 : 0,
                  transition: `opacity var(--truAnimationDurationFast) var(--truAnimationEasingBase)`,
                  height: `var(--truIconSizeSm)`,
                  width: `var(--truIconSizeSm)`,
                  fill: `currentColor`,
                  fillOpacity: 1,
                }}
              >
                <use
                  _ngcontent-qty-c56=""
                  xlinkHref="/images/tru-core-icon-sprite.svg#Checkmark-Low"
                />
              </svg>
              {/**/}
              {/**/}
              {/**/}
              {/**/}
            </span>
          </span>
          {/**/}
          <label
            className="tru-core-checkbox__label ng-star-inserted"
            id="tru-core-checkbox-label-1"
            htmlFor="tru-core-checkbox-input-1"
            style={{
              fontSize: `var(--truFontSizeMd)`,
              lineHeight: `var(--truLineHeightMd)`,
              fontFamily: `var(--truFontFamilyRegular)`,
              fontWeight: `var(--truFontWeightRegular)`,
              color: `var(--truColorTextSecondary)`,
              display: `inline-block`,
              marginLeft: `12px`,
            }}
          >
            <div
              _nghost-qty-c88=""
              style={{
                letterSpacing: `normal`,
                textIndent: 0,
                textShadow: `none`,
                textTransform: `none`,
                textAlign: `initial`,
                fontStyle: `normal`,
                verticalAlign: `initial`,
                fontSize: `var(--truFontSizeMd)`,
                color: `var(--truColorTextSecondary)`,
                padding: 0,
                display: `inline-block`,
              }}
            >
              Save user ID
            </div>
            {/**/}
          </label>
          {/**/}
        </div>
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        {/**/}
      </div>
    </div>
  );
};
