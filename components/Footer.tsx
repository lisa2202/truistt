import React from "react";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const isMobile = useMediaQuery(`(max-width: 480px)`);
  const is703 = useMediaQuery(`(max-width: 703px)`);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="ng-star-inserted">
        <footer
          className="tru-footer print-hide"
          style={{
            width: `100%`,
            minWidth: `100%`,
            marginTop: `32px`,
          }}
        >
          <div
            className="tru-footer-collapse tru-core-collapse"
            style={{
              letterSpacing: `normal`,
              textIndent: 0,
              textShadow: `none`,
              textTransform: `none`,
              textAlign: `initial`,
              fontStyle: `normal`,
              verticalAlign: `initial`,
              fontSize: `var(--truFontSizeMd)`,
              display: `block`,
            }}
          >
            <div
              className="ng-tns-c105-0 tru-core-collapse__panel ng-star-inserted"
              id="tru-core-collapse__panel-1"
              style={{
                letterSpacing: `normal`,
                textIndent: 0,
                textShadow: `none`,
                textTransform: `none`,
                textAlign: `initial`,
                fontStyle: `normal`,
                verticalAlign: `initial`,
                fontSize: `var(--truFontSizeMd)`,
                display: `block`,
              }}
            >
              <div
                className="ng-tns-c105-0 tru-core-collapse__panel--standard-trigger"
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  width: `100%`,
                  borderBottom: `var(--truBorderWidthSm) solid var(--truColorBorderPrimary)`,
                }}
              >
                <button
                  type="button"
                  className="tru-core-collapse__trigger ng-tns-c105-0 tru-core-collapse__panel-always-visible ng-star-inserted btn-footer"
                  id="tru-core-collapse__trigger-1"
                  data-aria-controls="tru-core-collapse__collapsable-1"
                  aria-expanded="false"
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    padding: `16px`,
                    cursor: `pointer`,
                    position: `relative`,
                    backgroundColor: `transparent`,
                    ...(isMobile
                      ? { width: `55%` }
                      : is703
                      ? { width: `26%` }
                      : { width: `12%` }),
                    justifyContent: `start`,
                    borderRadius: `5px 5px 0 0`,
                    top: `1px`,
                    border: `1px solid #ccc`,
                    borderBottom: `2px solid #fff`,
                    marginLeft: `10%`,
                  }}
                >
                  <style>
                    {`
                    button.btn-footer:focus {
                      outline: none !important;
                      background-color: transparent !important;
                    }

                    button.btn-footer:hover {
                      outline: none !important;
                      background-color: transparent !important;
                    }

                    button.btn-footer:focus:hover {
                      content: "" !important;
                      position: absolute !important;
                      border: var(--truBorderWidthSm) solid var(--truColorBorderFocus) !important;
                      border-radius: var(--truBorderRadiusSm) !important;
                      top: 2px !important;
                      left: 2px !important;
                      right: 2px !important;
                      bottom: 2px !important;
                    }
                  `}
                  </style>
                  <div className="ng-tns-c105-0">
                    <div
                      className="tru-core-collapse__title ng-tns-c105-0"
                      style={{
                        fontSize: `20px`,
                        padding: `0 15px`,
                        marginRight: `10px`,
                        letterSpacing: `normal`,
                        textIndent: 0,
                        textShadow: `none`,
                        textTransform: `none`,
                        textAlign: `initial`,
                        fontStyle: `normal`,
                        verticalAlign: `initial`,
                        display: `flex`,
                        fontFamily: `var(--truFontFamilyBold)`,
                        fontWeight: `var(--truFontWeightBold)`,
                        lineHeight: `var(--truLineHeightSm)`,
                        color: `var(--truColorTextSecondary)`,
                      }}
                    >
                      Disclosures
                    </div>
                  </div>
                  <div className="ng-tns-c105-0" />
                  <div
                    className="tru-core-collapse__panel-always-visible-caret ng-tns-c105-0 ng-trigger ng-trigger-truCoreRotate180Degrees tru-core-icon-wrapper"
                    style={{
                      transform: "rotate(0deg)",
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
                    <svg
                      className="tru-core-icon tru-core-icon--sm ng-star-inserted"
                      aria-hidden="true"
                      style={{
                        color: `var(--truColorInteractiveBase)`,
                        height: `var(--truIconSizeSm)`,
                        width: `var(--truIconSizeSm)`,
                        fill: `currentColor`,
                        fillOpacity: 1,
                      }}
                    >
                      <use xlinkHref="/images/tru-core-icon-sprite.svg#Carat-Down-Low" />
                    </svg>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </button>
                {/**/}
                {/**/}
                <div
                  role="region"
                  className="tru-core-collapse__panel-collapsable ng-tns-c105-0 ng-trigger ng-trigger-truCoreExpandCollapseVertically"
                  id="tru-core-collapse__collapsable-1"
                  aria-labelledby="tru-core-collapse__trigger-1"
                  style={{
                    height: 0,
                    visibility: "hidden",
                    opacity: 0,
                    overflowY: "hidden",
                  }}
                >
                  <div className="ng-tns-c105-0">
                    <div
                      className="ng-tns-c105-0 tru-core-collapse__content"
                      style={{
                        marginLeft: `9%`,
                        letterSpacing: `normal`,
                        textIndent: 0,
                        textShadow: `none`,
                        textTransform: `none`,
                        textAlign: `initial`,
                        fontStyle: `normal`,
                        verticalAlign: `initial`,
                        display: `flex`,
                        flexDirection: `column`,
                        padding: `16px`,
                        fontSize: `var(--truFontSizeMd)`,
                        color: `var(--truColorTextPrimary)`,
                      }}
                    >
                      <p>
                        Truist Bank, Member FDIC. © 2022 Truist Financial
                        Corporation. Truist, the Truist logo and Truist Purple
                        are service marks of Truist Financial Corporation.
                      </p>
                      <p>
                        Truist Bank, Member FDIC and an Equal Housing Lender{" "}
                        <div className="tru-core-icon-wrapper">
                          <svg
                            className="tru-core-icon tru-core-icon--sm ng-star-inserted"
                            aria-hidden="true"
                            style={{}}
                          >
                            <use xlinkHref="/images/tru-core-icon-sprite.svg#Home-Low" />
                          </svg>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                      </p>
                      <p className="tru-core-margin-top--lg">
                        <strong>Investment and Insurance Products:</strong>
                      </p>
                      <p>
                        <strong>
                          • Are Not FDIC or any other Government Agency Insured
                          • Are Not Bank Guaranteed • May Lose Value
                        </strong>
                      </p>
                      <p className="tru-core-margin-top--lg">
                        All Truist mortgage professionals are registered on the
                        Nationwide Mortgage Licensing System &amp; Registry
                        (NMLS), which promotes uniformity and transparency
                        throughout the residential real estate industry.&nbsp;
                        <div className="tru-core-link tru-core-link-wrapper">
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}Search the NMLS Registry. {/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                      </p>
                      <p className="tru-core-margin-top--lg">
                        Services provided by the following affiliates of Truist
                        Financial Corporation: Banking products and services,
                        including loans and deposit accounts, are provided by
                        SunTrust Bank and Branch Banking and Trust Company, both
                        now Truist Bank, Member FDIC. Trust and investment
                        management services are provided by SunTrust Bank and
                        Branch Banking and Trust Company, both now Truist Bank,
                        and Truist Delaware Trust Company. Securities, brokerage
                        accounts and /or insurance (including annuities) are
                        offered by Truist Investment Services, Inc., and P.J.
                        Robb Variable Corp., which are SEC registered
                        broker-dealers, members&nbsp;
                        <div className="tru-core-link tru-core-link-wrapper">
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}FINRA{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>{" "}
                        and&nbsp;{" "}
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}SIPC{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        , and a licensed insurance agency where applicable.
                        Investment advisory services are offered by Truist
                        Advisory Services, Inc. , GFO Advisory Services, LLC,
                        Sterling Capital Management, LLC, and Precept Advisory
                        Group, LLC, each SEC registered investment advisers.
                        Sterling Capital Funds are advised by Sterling Capital
                        Management, LLC. Mortgage products and services are
                        offered through SunTrust Mortgage, a tradename for
                        SunTrust Bank now Truist Bank. Insurance products and
                        services are offered through McGriff Insurance Services,
                        Inc. Life insurance products are offered through Truist
                        Life Insurance Services, a division of Crump Life
                        Insurance Services, Inc., AR license #100103477. Both
                        McGriff and Crump are wholly owned subsidiaries of
                        Truist Insurance Holdings, Inc.
                      </p>
                      <p className="tru-core-margin-top--lg">
                        {`"Truist Advisors" may be officers and/or associated persons of
                            the following affiliates of Truist Financial Corporation:
                            Truist Bank, our commercial bank, which provides banking,
                            trust and asset management services; Truist Investment
                            Services, Inc., a registered broker-dealer, which is a member`}
                        of{" "}
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            _ngcontent-ows-c64=""
                            target="_self"
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}FINRA{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>{" "}
                        and&nbsp;{" "}
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}SIPC{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        , and a licensed insurance agency, and which provides
                        securities, annuities and life insurance products;
                        Truist Advisory Services, Inc., an SEC registered
                        investment adviser which provides Investment Advisory
                        services.
                      </p>
                      <p>
                        Comments regarding tax implications are informational
                        only. Truist and its representatives do not provide tax
                        or legal advice. You should consult your individual tax
                        or legal professional before taking any action that may
                        have tax or legal consequences.
                      </p>
                      <p className="tru-core-margin-top--lg">
                        Truist Wealth, International Wealth, Center for Family
                        Legacy, Business Owner Specialty Group, Sports and
                        Entertainment Group, and Legal and Medical Specialty
                        Groups are marketing names used by Truist Bank, Truist
                        Investment Services, Inc., and Truist Advisory Services,
                        Inc.
                      </p>
                      <p className="tru-core-margin-top--lg">
                        Truist Securities is the trade name for the corporate
                        and investment banking services of Truist Financial
                        Corporation and its subsidiaries, including Truist
                        Securities, Inc., member&nbsp;{" "}
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}FINRA{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        &nbsp;and&nbsp;{" "}
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}SIPC{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        .{" "}
                      </p>
                      <p className="tru-core-margin-top--lg">
                        <strong>New York City residents:</strong>
                        &nbsp;Translation or other language access services may
                        be available. When calling our office regarding
                        collection activity, if you speak a language other than
                        English and need verbal translation services, be sure to
                        inform the representative. A description and translation
                        of commonly-used debt collection terms is available in
                        multiple languages at&nbsp;
                        <div
                          className="tru-core-link tru-core-link-wrapper"
                          _nghost-ows-c64=""
                        >
                          {/**/}
                          <a
                            className="tru-core-link tru-core-link-text ng-star-inserted"
                            style={{}}
                          >
                            {/**/}http://www.nyc.gov/dca{/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </a>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        .{" "}
                      </p>
                    </div>
                  </div>
                  <div className="ng-tns-c105-0" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer-container"
            style={{
              borderTop: `1px solid #c9c9c9`,
              padding: `1rem`,
              background: `#2e1a47`,
              display: `block`,
              width: `100%`,
              height: `100%`,
            }}
          >
            <div
              className="footer-heading"
              style={{
                fontWeight: 700,
                fontSize: `16px`,
                marginBottom: `5px`,
              }}
            >
              <div
                className="tru-core-margin-bottom--sm tru-core-grid--1-columns-sm-up tru-core-grid--gutters tru-core-grid"
                style={{
                  gridGap: `var(--truSpacingMd)`,
                  gridTemplateColumns: `repeat(1,1fr)`,
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
                <ul
                  style={{
                    ...(isMobile ? {} : { display: `flex` }),
                    justifyContent: `space-between`,
                    listStyleType: `none`,
                    padding: `10px 0`,
                  }}
                >
                  <li
                    id="truist-logo"
                    style={{
                      display: `block`,
                      margin: `auto`,
                      maxWidth: `50%`,
                      ...(isMobile ? { width: `200px` } : { width: `260px` }),
                      height: `30px`,
                      position: `relative`,
                      top: `-30px`,
                    }}
                  >
                    <div
                      className="tru-core-image-wrapper tru-core-image-full-width"
                      style={{
                        alignItems: `center`,
                        justifyContent: `center`,
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
                      <picture className="ng-star-inserted">
                        {/**/}
                        {/**/}
                        {/**/}
                        {/**/}
                        {/**/}
                        <img
                          id=""
                          src="/images/tru_lg_hrz_rgb_wht_rev.png"
                          alt="Truist White logo"
                          className="ng-star-inserted"
                          style={{
                            width: `100%`,
                            maxWidth: `100%`,
                            height: `auto`,
                          }}
                        />
                        {/**/}
                      </picture>
                      {/**/}
                      {/**/}
                    </div>
                  </li>
                  {[
                    `Privacy`,
                    `Fraud & security`,
                    `Terms and conditions`,
                    `Accessibility`,
                  ].map((text) => (
                    <li
                      className="footer-links ng-star-inserted"
                      style={{
                        display: `block`,
                        margin: `auto`,
                        textAlign: `center`,
                        ...(isMobile ? {} : { maxWidth: `50%` }),
                        width: `auto`,
                      }}
                      key={text}
                    >
                      <div
                        id="footer-hover-link"
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
                          id="footer-hover-link"
                          className="tru-core-link tru-core-link-text ng-star-inserted"
                          style={{
                            wordBreak: `break-word`,
                            cursor: `pointer`,
                            fontWeight: `600`,
                            fontSize: `20px`,
                            color: `var(--body-link-color)`,
                          }}
                        >
                          {/**/}
                          <span className="ng-star-inserted"> {text} </span>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
                        </a>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="disclosure-container"
            style={{
              backgroundColor: `#000`,
              padding: `1rem`,
            }}
          >
            <p style={{ textAlign: "center", color: `#fff`, fontSize: `18px` }}>
              © 2022, Truist. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
