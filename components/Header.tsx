import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const isDesktop = useMediaQuery(`(min-width: 700px)`);
  return (
    <div>
      <div className="tru-core-navbar-wrapper">
        <header
          className="tru-core-header enable-animation"
          style={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <nav
            role="presentation"
            className="tru-core-navbar tru-core-background-tertiary"
            style={{
              height: `85px`,
              zIndex: 5,
              width: `100%`,
              minWidth: `100%`,
              borderTop: `var(--truBorderWidthSm) solid var(--truColorPrimaryDark)`,
              ...(isDesktop
                ? {
                    position: `fixed`,
                    top: 0,
                    transition: `top var(--truNavbarAnimationDuration) var(--truAnimationEasingBase)`,
                    height: `75px`,
                    borderTop: 0,
                    borderBottom: `var(--truBorderWidthSm) solid var(--truColorPrimaryDark)`,
                  }
                : {}),
            }}
          >
            <div
              className="tru-core-navbar__container"
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                paddingLeft: `var(--truGutterWidthMobile)`,
                paddingRight: `var(--truGutterWidthMobile)`,
                maxWidth: `1400px`,
                display: `flex`,
                width: `100%`,
                height: `100%`,
                ...(isDesktop
                  ? {
                      paddingLeft: `var(--truGutterWidthDesktop)`,
                      paddingRight: `var(--truGutterWidthDesktop)`,
                    }
                  : {}),
              }}
            >
              <div className="tru-core-skip-nav ng-star-inserted">
                <span
                  className="tru-core-skip-nav-wrapper ng-star-inserted"
                  style={{
                    position: `absolute`,
                    width: `1px`,
                    height: `1px`,
                    padding: 0,
                    margin: `-1px`,
                    overflow: `hidden`,
                    clip: `rect(0,0,0,0)`,
                    whiteSpace: `nowrap`,
                    border: 0,
                    WebkitAppearance: `none`,
                    outline: 0,
                  }}
                >
                  <div className="tru-core-link-wrapper ng-star-inserted">
                    {/**/}
                    {/**/}
                    <a className="tru-core-link tru-core-link-text ng-star-inserted">
                      {/**/}Skip to main content{/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </a>
                    {/**/}
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </span>
                {/**/}
                {/**/}
                {/**/}
              </div>
              {/**/}
              <div
                className="tru-core-navbar__section tru-core-navbar__section--logo"
                style={{
                  letterSpacing: `normal`,
                  textIndent: 0,
                  textShadow: `none`,
                  textTransform: `none`,
                  textAlign: `initial`,
                  fontStyle: `normal`,
                  verticalAlign: `initial`,
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <div
                  className="tru-core-icon-wrapper tru-core-navbar__logo-icon"
                  style={{
                    margin: `25px`,
                    height: `26px`,
                    lineHeight: 0,
                    width: `110px`,
                    letterSpacing: `normal`,
                    textIndent: 0,
                    textShadow: `none`,
                    textTransform: `none`,
                    textAlign: `initial`,
                    fontStyle: `normal`,
                    verticalAlign: `initial`,
                    display: `inline-flex`,
                    alignItems: `center`,
                  }}
                >
                  <svg
                    className="tru-core-icon tru-core-icon--sm ng-star-inserted"
                    aria-hidden="true"
                    style={{
                      fontSize: `medium`,
                      fill: `currentColor`,
                      fillOpacity: 1,
                      stroke: `none`,
                      height: `inherit`,
                      width: `inherit`,
                      color: `#fff`,
                    }}
                  >
                    <use xlinkHref="/images/truist-core-docs-sprite.svg#Truist-Logo" />
                  </svg>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
              </div>
            </div>
          </nav>
          <div
            className="tru-core-navbar__spacer"
            style={{
              display: `none`,
              ...(isDesktop
                ? {
                    display: `block`,
                    height: `75px`,
                    width: `100%`,
                    marginTop: 0,
                    transition: `margin-top var(--truNavbarAnimationDuration) var(--truAnimationEasingBase)`,
                  }
                : {}),
            }}
          />
        </header>
      </div>
    </div>
  );
};
