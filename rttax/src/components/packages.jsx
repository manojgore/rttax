import React from "react";

const Packages = () => (
  <>
    {/* Mirrored from kanakku.dreamstechnologies.com/html/template/packages.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Apr 2024 05:57:22 GMT */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Kanakku provides clean Admin Templates for managing Sales, Payment, Invoice, Accounts and Expenses in HTML, Bootstrap 5, ReactJs, Angular, VueJs and Laravel."
    />
    <meta
      name="keywords"
      content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
    />
    <meta name="author" content="Dreamguys - Bootstrap Admin Template" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@dreamstechnologies" />
    <meta
      name="twitter:title"
      content="Finance & Accounting Admin Website Templates | Kanakku"
    />
    <meta
      name="twitter:description"
      content="Kanakku is a Sales, Invoices & Accounts Admin template for Accountant or Companies/Offices with various features for all your needs. Try Demo and Buy Now."
    />
    <meta name="twitter:image" content="../../assets/img/kanakku.html" />
    <meta name="twitter:image:alt" content="Kanakku" />
    <meta property="og:url" content="https://kanakku.dreamstechnologies.com/" />
    <meta
      property="og:title"
      content="Finance & Accounting Admin Website Templates | Kanakku"
    />
    <meta
      property="og:description"
      content="Kanakku is a Sales, Invoices & Accounts Admin template for Accountant or Companies/Offices with various features for all your needs. Try Demo and Buy Now."
    />
    <meta property="og:image" content="../../assets/img/kanakku.html" />
    <meta
      property="og:image:secure_url"
      content="../../assets/img/kanakku.html"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content={1200} />
    <meta property="og:image:height" content={600} />
    <title>Kanakku - Bootstrap Admin HTML Template</title>
    <link rel="shortcut icon" href="assets/img/favicon.png" />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}",
      }}
    />
    <link
      rel="stylesheet"
      href="assets/plugins/fontawesome/css/fontawesome.min.css"
    />
    <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
    <link rel="stylesheet" href="assets/plugins/feather/feather.css" />
    <link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css" />
    <link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css" />
    <link
      rel="stylesheet"
      href="assets/plugins/datatables/datatables.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <div className="main-wrapper">
      <div className="header header-one">
        <a
          href="index.html"
          className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo"
        >
          <img
            src="assets/img/logo.png"
            className="img-fluid logo2"
            alt="Logo"
          />
        </a>
        <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
          <div className="logo-white">
            <a href="index.html">
              <img
                src="assets/img/logo-full-white.png"
                className="img-fluid logo-blue"
                alt="Logo"
              />
            </a>
            <a href="index.html">
              <img
                src="assets/img/logo-small-white.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </a>
          </div>
          <div className="logo-color">
            <a href="index.html">
              <img
                src="assets/img/logo.png"
                className="img-fluid logo-blue"
                alt="Logo"
              />
            </a>
            <a href="index.html">
              <img
                src="assets/img/logo-small.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <a href="javascript:void(0);" id="toggle_btn">
          <span className="toggle-bars">
            <span className="bar-icons" />
            <span className="bar-icons" />
            <span className="bar-icons" />
            <span className="bar-icons" />
          </span>
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <img src="assets/img/icons/search.svg" alt="img" />
            </button>
          </form>
        </div>
        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars" />
        </a>
        <ul className="nav nav-tabs user-menu">
          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <img src="assets/img/flags/us1.png" alt="flag" />
              <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt="flag" />
                <span>English</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt="flag" />
                <span>French</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt="flag" />
                <span>Spanish</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt="flag" />
                <span>German</span>
              </a>
            </div>
          </li>
          <li className="nav-item  has-arrow dropdown-heads ">
            <a href="javascript:void(0);" className="toggle-switch">
              <i className="fe fe-moon" />
            </a>
          </li>
          <li className="nav-item dropdown  flag-nav dropdown-heads">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge rounded-pill" />
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <div className="notification-title">
                  Notifications <a href="notifications.html">View all</a>
                </div>
                <a
                  href="javascript:void(0)"
                  className="clear-noti d-flex align-items-center"
                >
                  Mark all as read <i className="fe fe-check-circle" />
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md active">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Lex Murphy</span>{" "}
                            requested access to{" "}
                            <span className="noti-title">
                              UNIX directory tree hierarchy
                            </span>
                          </p>
                          <div className="notification-btn">
                            <span className="btn btn-primary">Accept</span>
                            <span className="btn btn-outline-primary">
                              Reject
                            </span>
                          </div>
                          <p className="noti-time">
                            <span className="notification-time">
                              Today at 9:42 AM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md active">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-10.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Ray Arnold</span> left
                            6 comments{" "}
                            <span className="noti-title">
                              on Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              Yesterday at 11:42 PM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-13.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Dennis Nedry</span>{" "}
                            commented on{" "}
                            <span className="noti-title">
                              {" "}
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <blockquote>
                            “Oh, I finished de-bugging the phones, but the
                            system's compiling for eighteen minutes, or twenty.
                            So, some minor systems may go on and off for a
                            while.”
                          </blockquote>
                          <p className="noti-time">
                            <span className="notification-time">
                              Yesterday at 5:42 PM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-05.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Hammond</span>{" "}
                            created{" "}
                            <span className="noti-title">
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              Last Wednesday at 11:15 AM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">Clear All</a>
              </div>
            </div>
          </li>
          <li className="nav-item  has-arrow dropdown-heads ">
            <a href="javascript:void(0);" className="win-maximize">
              <i className="fe fe-maximize" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="javascript:void(0)"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  src="assets/img/profiles/avatar-07.jpg"
                  alt="img"
                  className="profilesidebar"
                />
                <span className="animate-circle" />
              </span>
              <span className="user-content">
                <span className="user-details">Admin</span>
                <span className="user-name">John Smith</span>
              </span>
            </a>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilemenu">
                <div className="subscription-menu">
                  <ul>
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="settings.html">
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="subscription-logout">
                  <ul>
                    <li className="pb-0">
                      <a className="dropdown-item" href="login.html">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <nav className="greedys sidebar-horizantal">
              <ul className="list-inline-item list-unstyled links">
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">Admin Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-grid" /> <span> Applications</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="calendar.html">Calendar</a>
                    </li>
                    <li>
                      <a href="inbox.html">Email</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="companies.html">Companies</a>
                    </li>
                    <li>
                      <a href="subscription.html">Subscription</a>
                    </li>
                    <li>
                      <a href="packages.html" className="active">
                        Packages
                      </a>
                    </li>
                    <li>
                      <a href="domain.html">Domain</a>
                    </li>
                    <li>
                      <a href="purchase-transaction.html">
                        Purchase Transaction
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span>
                      {" "}
                      <i className="fe fe-users" /> Customers
                    </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="customers.html">
                        <i className="fe fe-users" /> <span>Customers</span>
                      </a>
                    </li>
                    <li>
                      <a href="customer-details.html">
                        <i className="fe fe-file" />{" "}
                        <span>Customer Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="vendors.html">
                        <i className="fe fe-user" /> <span>Vendors</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Inventory</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-package" />{" "}
                    <span> Products / Services</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="product-list.html">Product List</a>
                    </li>
                    <li>
                      <a href="category.html">Category</a>
                    </li>
                    <li>
                      <a href="units.html">Units</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="inventory.html">
                    <i className="fe fe-user" /> <span>Inventory</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    {" "}
                    <i className="fe fe-file-plus" />
                    <span>Signature </span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="signature-list.html">
                        <i className="fe fe-clipboard" />{" "}
                        <span>List of Signature</span>
                      </a>
                    </li>
                    <li>
                      <a href="signature-invoice.html">
                        <i className="fe fe-box" />{" "}
                        <span>Signature Invoice</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Sales</span>
                </li>
                <li className="submenu">
                  <a href="invoices.html">
                    <i className="fe fe-file" /> <span>Invoices</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="invoices.html">Invoices List</a>
                    </li>
                    <li>
                      <a href="invoice-details-admin.html">
                        Invoice Details (Admin)
                      </a>
                    </li>
                    <li>
                      <a href="invoice-details.html">
                        Invoice Details (Customer)
                      </a>
                    </li>
                    <li>
                      <a href="invoice-template.html">Invoice Templates</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button className="viewmoremenu">More Menu</button>
              <ul className="hidden-links hidden">
                <li>
                  <a href="recurring-invoices.html">
                    <i className="fe fe-clipboard" />{" "}
                    <span>Recurring Invoices</span>
                  </a>
                </li>
                <li>
                  <a href="credit-notes.html">
                    <i className="fe fe-edit" /> <span>Credit Notes</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Purchases</span>
                </li>
                <li>
                  <a href="purchases.html">
                    <i className="fe fe-shopping-cart" /> <span>Purchases</span>
                  </a>
                </li>
                <li>
                  <a href="purchase-orders.html">
                    <i className="fe fe-shopping-bag" />{" "}
                    <span>Purchase Orders</span>
                  </a>
                </li>
                <li>
                  <a href="debit-notes.html">
                    <i className="fe fe-file-text" /> <span>Debit Notes</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Finance &amp; Accounts</span>
                </li>
                <li>
                  <a href="expenses.html">
                    <i className="fe fe-file-plus" /> <span>Expenses</span>
                  </a>
                </li>
                <li>
                  <a href="payments.html">
                    <i className="fe fe-credit-card" /> <span>Payments</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Quotations</span>
                </li>
                <li>
                  <a href="quotations.html">
                    <i className="fe fe-clipboard" /> <span>Quotations</span>
                  </a>
                </li>
                <li>
                  <a href="delivery-challans.html">
                    <i className="fe fe-file-text" />{" "}
                    <span>Delivery Challans</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Reports</span>
                </li>
                <li>
                  <a href="payment-summary.html">
                    <i className="fe fe-credit-card" />{" "}
                    <span>Payment Summary</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-box" />
                    <span>Reports</span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="expense-report.html">Expense Report</a>
                    </li>
                    <li>
                      <a href="purchase-report.html">Purchase Report</a>
                    </li>
                    <li>
                      <a href="purchase-return.html">Purchase Return Report</a>
                    </li>
                    <li>
                      <a href="sales-report.html">Sales Report</a>
                    </li>
                    <li>
                      <a href="sales-return-report.html">Sales Return Report</a>
                    </li>
                    <li>
                      <a href="quotation-report.html">Quotation Report</a>
                    </li>
                    <li>
                      <a href="payment-report.html">Payment Report</a>
                    </li>
                    <li>
                      <a href="stock-report.html">Stock Report</a>
                    </li>
                    <li>
                      <a href="low-stock-report.html">Low Stock Report</a>
                    </li>
                    <li>
                      <a href="income-report.html">Income Report</a>
                    </li>
                    <li>
                      <a href="tax-purchase.html">Tax Report</a>
                    </li>
                    <li>
                      <a href="profit-loss-list.html">Profit &amp; Loss</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>User Management</span>
                </li>
                <li>
                  <a href="users.html">
                    <i className="fe fe-user" /> <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="roles-permission.html">
                    <i className="fe fe-clipboard" />{" "}
                    <span>Roles &amp; Permission</span>
                  </a>
                </li>
                <li>
                  <a href="delete-account-request.html">
                    <i className="fe fe-trash-2" />{" "}
                    <span>Delete Account Request</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Membership</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book" /> <span> Membership</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="membership-plans.html">Membership Plans</a>
                    </li>
                    <li>
                      <a href="membership-addons.html">Membership Addons</a>
                    </li>
                    <li>
                      <a href="subscribers.html">Subscribers</a>
                    </li>
                    <li>
                      <a href="transactions.html">Transactions</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Content (CMS)</span>
                </li>
                <li>
                  <a href="pages.html">
                    <i className="fe fe-folder" /> <span>Pages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book" /> <span> Blog</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="all-blogs.html">All Blogs</a>
                    </li>
                    <li>
                      <a href="categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="blog-comments.html">Blog Comments</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-map-pin" /> <span> Location</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="countries.html">Countries</a>
                    </li>
                    <li>
                      <a href="states.html">States</a>
                    </li>
                    <li>
                      <a href="cities.html">Cities</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="testimonials.html">
                    <i className="fe fe-message-square" />{" "}
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i className="fe fe-alert-circle" /> <span>FAQ</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Support</span>
                </li>
                <li>
                  <a href="contact-messages.html">
                    <i className="fe fe-printer" />{" "}
                    <span>Contact Messages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-save" /> <span> Tickets</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="tickets.html">Tickets</a>
                    </li>
                    <li>
                      <a href="tickets-list.html">Tickets List</a>
                    </li>
                    <li>
                      <a href="tickets-kanban.html">Tickets Kanban</a>
                    </li>
                    <li>
                      <a href="ticket-details.html">Ticket Overview</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                  <a href="profile.html">
                    <i className="fe fe-user" /> <span>Profile</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-lock" /> <span> Authentication </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="login.html"> Login </a>
                    </li>
                    <li>
                      <a href="register.html"> Register </a>
                    </li>
                    <li>
                      <a href="forgot-password.html"> Forgot Password </a>
                    </li>
                    <li>
                      <a href="lock-screen.html"> Lock Screen </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="error-404.html">
                    <i className="fe fe-x-square" /> <span>Error Pages</span>
                  </a>
                </li>
                <li>
                  <a href="blank-page.html">
                    <i className="fe fe-file" /> <span>Blank Page</span>
                  </a>
                </li>
                <li>
                  <a href="maps-vector.html">
                    <i className="fe fe-image" /> <span>Vector Maps</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-pocket" /> <span>Base UI </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="alerts.html">Alerts</a>
                    </li>
                    <li>
                      <a href="accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="avatar.html">Avatar</a>
                    </li>
                    <li>
                      <a href="badges.html">Badges</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="buttongroup.html">Button Group</a>
                    </li>
                    <li>
                      <a href="breadcrumbs.html">Breadcrumb</a>
                    </li>
                    <li>
                      <a href="cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="images.html">Images</a>
                    </li>
                    <li>
                      <a href="lightbox.html">Lightbox</a>
                    </li>
                    <li>
                      <a href="media.html">Media</a>
                    </li>
                    <li>
                      <a href="modal.html">Modals</a>
                    </li>
                    <li>
                      <a href="offcanvas.html">Offcanvas</a>
                    </li>
                    <li>
                      <a href="pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="popover.html">Popover</a>
                    </li>
                    <li>
                      <a href="progress.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="placeholders.html">Placeholders</a>
                    </li>
                    <li>
                      <a href="rangeslider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="spinners.html">Spinner</a>
                    </li>
                    <li>
                      <a href="sweetalerts.html">Sweet Alerts</a>
                    </li>
                    <li>
                      <a href="tab.html">Tabs</a>
                    </li>
                    <li>
                      <a href="toastr.html">Toasts</a>
                    </li>
                    <li>
                      <a href="tooltip.html">Tooltip</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="video.html">Video</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-box" /> <span>Elements </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="ribbon.html">Ribbon</a>
                    </li>
                    <li>
                      <a href="clipboard.html">Clipboard</a>
                    </li>
                    <li>
                      <a href="drag-drop.html">Drag &amp; Drop</a>
                    </li>
                    <li>
                      <a href="rating.html">Rating</a>
                    </li>
                    <li>
                      <a href="text-editor.html">Text Editor</a>
                    </li>
                    <li>
                      <a href="counter.html">Counter</a>
                    </li>
                    <li>
                      <a href="scrollbar.html">Scrollbar</a>
                    </li>
                    <li>
                      <a href="notification.html">Notification</a>
                    </li>
                    <li>
                      <a href="stickynote.html">Sticky Note</a>
                    </li>
                    <li>
                      <a href="timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="horizontal-timeline.html">Horizontal Timeline</a>
                    </li>
                    <li>
                      <a href="form-wizard.html">Form Wizard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-bar-chart" /> <span> Charts </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="chart-apex.html">Apex Charts</a>
                    </li>
                    <li>
                      <a href="chart-js.html">Chart Js</a>
                    </li>
                    <li>
                      <a href="chart-morris.html">Morris Charts</a>
                    </li>
                    <li>
                      <a href="chart-flot.html">Flot Charts</a>
                    </li>
                    <li>
                      <a href="chart-peity.html">Peity Charts</a>
                    </li>
                    <li>
                      <a href="chart-c3.html">C3 Charts</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-award" /> <span> Icons </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="icon-fontawesome.html">Fontawesome Icons</a>
                    </li>
                    <li>
                      <a href="icon-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icon-ionic.html">Ionic Icons</a>
                    </li>
                    <li>
                      <a href="icon-material.html">Material Icons</a>
                    </li>
                    <li>
                      <a href="icon-pe7.html">Pe7 Icons</a>
                    </li>
                    <li>
                      <a href="icon-simpleline.html">Simpleline Icons</a>
                    </li>
                    <li>
                      <a href="icon-themify.html">Themify Icons</a>
                    </li>
                    <li>
                      <a href="icon-weather.html">Weather Icons</a>
                    </li>
                    <li>
                      <a href="icon-typicon.html">Typicon Icons</a>
                    </li>
                    <li>
                      <a href="icon-flag.html">Flag Icons</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-sidebar" /> <span> Forms </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="form-basic-inputs.html">Basic Inputs </a>
                    </li>
                    <li>
                      <a href="form-input-groups.html">Input Groups </a>
                    </li>
                    <li>
                      <a href="form-horizontal.html">Horizontal Form </a>
                    </li>
                    <li>
                      <a href="form-vertical.html"> Vertical Form </a>
                    </li>
                    <li>
                      <a href="form-mask.html">Form Mask </a>
                    </li>
                    <li>
                      <a href="form-validation.html">Form Validation </a>
                    </li>
                    <li>
                      <a href="form-select2.html">Form Select2 </a>
                    </li>
                    <li>
                      <a href="form-fileupload.html">File Upload </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-layout" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="tables-basic.html">Basic Tables </a>
                    </li>
                    <li>
                      <a href="data-tables.html">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Settings</span>
                </li>
                <li>
                  <a href="settings.html">
                    <i className="fe fe-settings" /> <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fe fe-power" /> <span>Logout</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-file-text" /> <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fe fe-lock" /> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v2.0.4</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="fa fa-list" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }} className="level2">
                        <li>
                          <a href="javascript:void(0);">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="javascript:void(0);">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow" />
                          </a>
                          <ul style={{ display: "none" }} className="level3">
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span> </span>
              </li>
              {/* <li className="submenu">
                <a href="#">
                  <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="index.html">Admin Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-grid" /> <span> Applications</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li>
                    <a href="calendar.html">Calendar</a>
                  </li>
                  <li>
                    <a href="inbox.html">Email</a>
                  </li>
                </ul>
              </li> */}
              <li className="submenu">
                <a href="/admin-dashboard" className="">
                  <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                  <span className="menu-arrow" />
                </a>
                {/* <ul> */}
                <li>
                  <a href="/admin-dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/companies">Companies</a>
                </li>
                <li>
                  <a href="/subscription">Subscription</a>
                </li>
                <li>
                  <a href="/packages" className="active">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="/domain">Domain</a>
                </li>
                <li>
                  <a href="/purchase-transaction">Purchase Transaction</a>
                </li>
                {/* </ul> */}
              </li>
              <li className="menu-title">
                <span>Customers</span>
              </li>
              <li>
                <a href="/customer-registration">
                  <i className="fe fe-users" /> <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="customer-details.html">
                  <i className="fe fe-file" /> <span>Customer Details</span>
                </a>
              </li>
              <li>
                <a href="vendors.html">
                  <i className="fe fe-user" /> <span>Vendors</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Inventory</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-package" />{" "}
                  <span> Products / Services</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="product-list.html">Product List</a>
                  </li>
                  <li>
                    <a href="category.html">Category</a>
                  </li>
                  <li>
                    <a href="units.html">Units</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="inventory.html">
                  <i className="fe fe-user" /> <span>Inventory</span>
                </a>
              </li>
              <li className="menu-title">
                {" "}
                <span>Signature</span>
              </li>
              <li>
                <a href="signature-list.html">
                  <i className="fe fe-clipboard" />{" "}
                  <span>List of Signature</span>
                </a>
                <a href="signature-invoice.html">
                  <i className="fe fe-box" /> <span>Signature Invoice</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Sales</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-file" /> <span>Invoices</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoices.html">Invoices List</a>
                  </li>
                  <li>
                    <a href="invoice-details-admin.html">
                      Invoice Details (Admin)
                    </a>
                  </li>
                  <li>
                    <a href="invoice-details.html">
                      Invoice Details (Customer)
                    </a>
                  </li>
                  <li>
                    <a href="invoice-template.html">Invoice Templates</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="recurring-invoices.html">
                  <i className="fe fe-clipboard" />{" "}
                  <span>Recurring Invoices</span>
                </a>
              </li>
              <li>
                <a href="credit-notes.html">
                  <i className="fe fe-edit" /> <span>Credit Notes</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Purchases</span>
              </li>
              <li>
                <a href="purchases.html">
                  <i className="fe fe-shopping-cart" /> <span>Purchases</span>
                </a>
              </li>
              <li>
                <a href="purchase-orders.html">
                  <i className="fe fe-shopping-bag" />{" "}
                  <span>Purchase Orders</span>
                </a>
              </li>
              <li>
                <a href="debit-notes.html">
                  <i className="fe fe-file-text" /> <span>Debit Notes</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Finance &amp; Accounts</span>
              </li>
              <li>
                <a href="expenses.html">
                  <i className="fe fe-file-plus" /> <span>Expenses</span>
                </a>
              </li>
              <li>
                <a href="payments.html">
                  <i className="fe fe-credit-card" /> <span>Payments</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Quotations</span>
              </li>
              <li>
                <a href="quotations.html">
                  <i className="fe fe-clipboard" /> <span>Quotations</span>
                </a>
              </li>
              <li>
                <a href="delivery-challans.html">
                  <i className="fe fe-file-text" />{" "}
                  <span>Delivery Challans</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Reports</span>
              </li>
              <li>
                <a href="payment-summary.html">
                  <i className="fe fe-credit-card" />{" "}
                  <span>Payment Summary</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-box" />
                  <span>Reports</span> <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <a href="expense-report.html">Expense Report</a>
                  </li>
                  <li>
                    <a href="purchase-report.html">Purchase Report</a>
                  </li>
                  <li>
                    <a href="purchase-return.html">Purchase Return Report</a>
                  </li>
                  <li>
                    <a href="sales-report.html">Sales Report</a>
                  </li>
                  <li>
                    <a href="sales-return-report.html">Sales Return Report</a>
                  </li>
                  <li>
                    <a href="quotation-report.html">Quotation Report</a>
                  </li>
                  <li>
                    <a href="payment-report.html">Payment Report</a>
                  </li>
                  <li>
                    <a href="stock-report.html">Stock Report</a>
                  </li>
                  <li>
                    <a href="low-stock-report.html">Low Stock Report</a>
                  </li>
                  <li>
                    <a href="income-report.html">Income Report</a>
                  </li>
                  <li>
                    <a href="tax-purchase.html">Tax Report</a>
                  </li>
                  <li>
                    <a href="profit-loss-list.html">Profit &amp; Loss</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>User Management</span>
              </li>
              <li>
                <a href="users.html">
                  <i className="fe fe-user" /> <span>Users</span>
                </a>
              </li>
              <li>
                <a href="roles-permission.html">
                  <i className="fe fe-clipboard" />{" "}
                  <span>Roles &amp; Permission</span>
                </a>
              </li>
              <li>
                <a href="delete-account-request.html">
                  <i className="fe fe-trash-2" />{" "}
                  <span>Delete Account Request</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Membership</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-book" /> <span> Membership</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="membership-plans.html">Membership Plans</a>
                  </li>
                  <li>
                    <a href="membership-addons.html">Membership Addons</a>
                  </li>
                  <li>
                    <a href="subscribers.html">Subscribers</a>
                  </li>
                  <li>
                    <a href="transactions.html">Transactions</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Content (CMS)</span>
              </li>
              <li>
                <a href="pages.html">
                  <i className="fe fe-folder" /> <span>Pages</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-book" /> <span> Blog</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="all-blogs.html">All Blogs</a>
                  </li>
                  <li>
                    <a href="categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="blog-comments.html">Blog Comments</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-map-pin" /> <span> Location</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="countries.html">Countries</a>
                  </li>
                  <li>
                    <a href="states.html">States</a>
                  </li>
                  <li>
                    <a href="cities.html">Cities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="testimonials.html">
                  <i className="fe fe-message-square" />{" "}
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="faq.html">
                  <i className="fe fe-alert-circle" /> <span>FAQ</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Support</span>
              </li>
              <li>
                <a href="contact-messages.html">
                  <i className="fe fe-printer" /> <span>Contact Messages</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-save" /> <span> Tickets</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tickets.html">Tickets</a>
                  </li>
                  <li>
                    <a href="tickets-list.html">Tickets List</a>
                  </li>
                  <li>
                    <a href="tickets-kanban.html">Tickets Kanban</a>
                  </li>
                  <li>
                    <a href="ticket-details.html">Ticket Overview</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li>
                <a href="profile.html">
                  <i className="fe fe-user" /> <span>Profile</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-lock" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="error-404.html">
                  <i className="fe fe-x-square" /> <span>Error Pages</span>
                </a>
              </li>
              <li>
                <a href="blank-page.html">
                  <i className="fe fe-file" /> <span>Blank Page</span>
                </a>
              </li>
              <li>
                <a href="maps-vector.html">
                  <i className="fe fe-image" /> <span>Vector Maps</span>
                </a>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-pocket" /> <span>Base UI </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="avatar.html">Avatar</a>
                  </li>
                  <li>
                    <a href="badges.html">Badges</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="buttongroup.html">Button Group</a>
                  </li>
                  <li>
                    <a href="breadcrumbs.html">Breadcrumb</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="dropdowns.html">Dropdowns</a>
                  </li>
                  <li>
                    <a href="grid.html">Grid</a>
                  </li>
                  <li>
                    <a href="images.html">Images</a>
                  </li>
                  <li>
                    <a href="lightbox.html">Lightbox</a>
                  </li>
                  <li>
                    <a href="media.html">Media</a>
                  </li>
                  <li>
                    <a href="modal.html">Modals</a>
                  </li>
                  <li>
                    <a href="offcanvas.html">Offcanvas</a>
                  </li>
                  <li>
                    <a href="pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="progress.html">Progress Bars</a>
                  </li>
                  <li>
                    <a href="placeholders.html">Placeholders</a>
                  </li>
                  <li>
                    <a href="rangeslider.html">Range Slider</a>
                  </li>
                  <li>
                    <a href="spinners.html">Spinner</a>
                  </li>
                  <li>
                    <a href="sweetalerts.html">Sweet Alerts</a>
                  </li>
                  <li>
                    <a href="tab.html">Tabs</a>
                  </li>
                  <li>
                    <a href="toastr.html">Toasts</a>
                  </li>
                  <li>
                    <a href="tooltip.html">Tooltip</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="video.html">Video</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-box" /> <span>Elements </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="ribbon.html">Ribbon</a>
                  </li>
                  <li>
                    <a href="clipboard.html">Clipboard</a>
                  </li>
                  <li>
                    <a href="drag-drop.html">Drag &amp; Drop</a>
                  </li>
                  <li>
                    <a href="rating.html">Rating</a>
                  </li>
                  <li>
                    <a href="text-editor.html">Text Editor</a>
                  </li>
                  <li>
                    <a href="counter.html">Counter</a>
                  </li>
                  <li>
                    <a href="scrollbar.html">Scrollbar</a>
                  </li>
                  <li>
                    <a href="notification.html">Notification</a>
                  </li>
                  <li>
                    <a href="stickynote.html">Sticky Note</a>
                  </li>
                  <li>
                    <a href="timeline.html">Timeline</a>
                  </li>
                  <li>
                    <a href="horizontal-timeline.html">Horizontal Timeline</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Form Wizard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-bar-chart" /> <span> Charts </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chart-apex.html">Apex Charts</a>
                  </li>
                  <li>
                    <a href="chart-js.html">Chart Js</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris Charts</a>
                  </li>
                  <li>
                    <a href="chart-flot.html">Flot Charts</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity Charts</a>
                  </li>
                  <li>
                    <a href="chart-c3.html">C3 Charts</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-award" /> <span> Icons </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="icon-fontawesome.html">Fontawesome Icons</a>
                  </li>
                  <li>
                    <a href="icon-feather.html">Feather Icons</a>
                  </li>
                  <li>
                    <a href="icon-ionic.html">Ionic Icons</a>
                  </li>
                  <li>
                    <a href="icon-material.html">Material Icons</a>
                  </li>
                  <li>
                    <a href="icon-pe7.html">Pe7 Icons</a>
                  </li>
                  <li>
                    <a href="icon-simpleline.html">Simpleline Icons</a>
                  </li>
                  <li>
                    <a href="icon-themify.html">Themify Icons</a>
                  </li>
                  <li>
                    <a href="icon-weather.html">Weather Icons</a>
                  </li>
                  <li>
                    <a href="icon-typicon.html">Typicon Icons</a>
                  </li>
                  <li>
                    <a href="icon-flag.html">Flag Icons</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-sidebar" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html">Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validation </a>
                  </li>
                  <li>
                    <a href="form-select2.html">Form Select2 </a>
                  </li>
                  <li>
                    <a href="form-fileupload.html">File Upload </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-layout" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Settings</span>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fe fe-settings" /> <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="fe fe-power" /> <span>Logout</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#">
                  <i className="fe fe-file-text" /> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="fe fe-lock" /> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ms-auto">v2.0.4</span>
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="fa fa-list" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }} className="level2">
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }} className="level3">
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          <div className="subscription-plane-head">
            <ul>
              <li>
                <a href="packages.html" className="active">
                  Subscription Plans
                </a>
              </li>
              <li>
                <a href="subscription.html">Subscribers List</a>
              </li>
            </ul>
          </div>
          <div className="page-header">
            <div className="content-page-header">
              <h5>Plans List</h5>
              <div className="page-content">
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <a
                        className="btn-filters active"
                        href="packages.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Grid-View"
                      >
                        <span>
                          <i className="fe fe-grid" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn-filters"
                        href="plans-list.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="List-View"
                      >
                        <span>
                          <i className="fe fe-list" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn-filters"
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Refresh"
                      >
                        <span>
                          <i className="fe fe-refresh-ccw" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-filters w-auto popup-toggle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Filter"
                      >
                        <span className="me-2">
                          <img
                            src="assets/img/icons/filter-icon.svg"
                            alt="filter"
                          />
                        </span>
                        Filter
                      </a>
                    </li>
                    <li>
                      <div
                        className="dropdown dropdown-action"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Download"
                      >
                        <a
                          href="#"
                          className="btn btn-filters"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="me-2">
                            <i className="fe fe-download" />
                          </span>
                          Export
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="d-block">
                            <li>
                              <a
                                className="d-flex align-items-center download-item"
                                href="javascript:void(0);"
                                download=""
                              >
                                <i className="far fa-file-pdf me-2" />
                                Export as PDF
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-flex align-items-center download-item"
                                href="javascript:void(0);"
                                download=""
                              >
                                <i className="far fa-file-text me-2" />
                                Export as Excel
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        className="btn btn-filters"
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Print"
                      >
                        <span className="me-2">
                          <i className="fe fe-printer" />
                        </span>{" "}
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-primary"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_newpackage"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Plan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="super-admin-list-head">
            <div className="row">
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="grid-info-item total-plane">
                      <div className="grid-info">
                        <span>Total Plan</span>
                        <h4>07</h4>
                      </div>
                      <div className="grid-head-icon">
                        <i className="fe fe-package" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="grid-info-item active-plane">
                      <div className="grid-info">
                        <span>Active Plans</span>
                        <h4>07</h4>
                      </div>
                      <div className="grid-head-icon">
                        <i className="fe fe-list" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="grid-info-item inactive-plane">
                      <div className="grid-info">
                        <span>Inactive Plans</span>
                        <h4>0</h4>
                      </div>
                      <div className="grid-head-icon">
                        <i className="fe fe-pause-circle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="grid-info-item total-type">
                      <div className="grid-info">
                        <span>No of Plan Types</span>
                        <h4>04</h4>
                      </div>
                      <div className="grid-head-icon">
                        <i className="fe fe-pocket" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="packages card">
                <div className="package-header d-flex justify-content-between">
                  <div className="d-flex justify-content-between w-100">
                    <div className="">
                      <h6>Monthly</h6>
                      <h4>Free</h4>
                    </div>
                    <span className="icon-frame d-flex align-items-center justify-content-center">
                      <img src="assets/img/icons/price-01.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                <h2>$0.00</h2>
                <h6>What’s included</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check" />2 Users
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />1 Suppliers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    10 Products
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />1 Invoice
                  </li>
                </ul>
                <div className="d-flex justify-content-center package-edit">
                  <a
                    className="btn-action-icon me-2"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_package"
                  >
                    <i className="fe fe-edit" />
                  </a>
                  <a
                    className="btn-action-icon"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="fe fe-trash-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="packages card">
                <div className="package-header d-flex justify-content-between">
                  <div className="d-flex justify-content-between w-100">
                    <div className="">
                      <h6>Yearly</h6>
                      <h4>Basic</h4>
                    </div>
                    <span className="icon-frame d-flex align-items-center justify-content-center">
                      <img src="assets/img/icons/price-02.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                <h2>$19.99</h2>
                <h6>What’s included</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check" />5 Users
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />5 Suppliers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    100 Products
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    10 Invoice
                  </li>
                </ul>
                <div className="d-flex justify-content-center package-edit">
                  <a
                    className="btn-action-icon me-2"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_package"
                  >
                    <i className="fe fe-edit" />
                  </a>
                  <a
                    className="btn-action-icon"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="fe fe-trash-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="packages card">
                <div className="package-header d-flex justify-content-between">
                  <div className="d-flex justify-content-between w-100">
                    <div className="">
                      <h6>Lifetime</h6>
                      <h4>Premium</h4>
                    </div>
                    <span className="icon-frame d-flex align-items-center justify-content-center">
                      <img src="assets/img/icons/price-03.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <span className="recommend-text">Recommended</span>
                <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                <h2>$6549.99</h2>
                <h6>What’s included</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    50 Users
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    10 Suppliers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    1000 Products
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    1000 Invoice
                  </li>
                </ul>
                <div className="d-flex justify-content-center package-edit">
                  <a
                    className="btn-action-icon me-2"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_package"
                  >
                    <i className="fe fe-edit" />
                  </a>
                  <a
                    className="btn-action-icon"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="fe fe-trash-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="packages card">
                <div className="package-header d-flex justify-content-between">
                  <div className="d-flex justify-content-between w-100">
                    <div className="">
                      <h6>Yearly</h6>
                      <h4>Enterprise</h4>
                    </div>
                    <span className="icon-frame d-flex align-items-center justify-content-center">
                      <img src="assets/img/icons/price-04.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                <h2>$99.99</h2>
                <h6>What’s included</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    1000 Users
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Unlimited Suppliers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Unlimited Products
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Unlimited Invoice
                  </li>
                </ul>
                <div className="d-flex justify-content-center package-edit">
                  <a
                    className="btn-action-icon me-2"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_package"
                  >
                    <i className="fe fe-edit" />
                  </a>
                  <a
                    className="btn-action-icon"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="fe fe-trash-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toggle-sidebar">
        <div className="sidebar-layout-filter">
          <div className="sidebar-header">
            <h5>Filter</h5>
            <a href="#" className="sidebar-closes">
              <i className="fa-regular fa-circle-xmark" />
            </a>
          </div>
          <div className="sidebar-body">
            <form action="#" autoComplete="off">
              <div className="accordion" id="accordionMain3">
                <div className="card-header-new" id="headingThree">
                  <h6 className="filter-title">
                    <a
                      href="javascript:void(0);"
                      className="w-100 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Plans
                      <span className="float-end">
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="card-body-chat">
                    <div id="checkBoxes2">
                      <div className="selectBox-cont">
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> All Plans
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> Advanced
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> Basic
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> Enterprise
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" />
                          Premium
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" />
                          Free
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionMain4">
                <div className="card-header-new" id="headingFour">
                  <h6 className="filter-title">
                    <a
                      href="javascript:void(0);"
                      className="w-100 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Plans Type
                      <span className="float-end">
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="card-body-chat">
                    <div id="checkBoxes3">
                      <div className="selectBox-cont">
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> All Plan Type
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> Monthly
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" /> Weekly
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="bystatus" />
                          <span className="checkmark" />
                          Lifetime
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-last" id="accordionMain2">
                <div className="card-header-new" id="headingTwo">
                  <h6 className="filter-title">
                    <a
                      href="javascript:void(0);"
                      className="w-100 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Created Date
                      <span className="float-end">
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="card-body-chat">
                    <div className="input-block mb-3">
                      <label className="form-control-label">From</label>
                      <div className="cal-icon">
                        <input
                          type="email"
                          className="form-control datetimepicker"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3">
                      <label className="form-control-label">To</label>
                      <div className="cal-icon">
                        <input
                          type="email"
                          className="form-control datetimepicker"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-buttons">
                <button
                  type="submit"
                  className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
                >
                  Apply
                </button>
                <button
                  type="submit"
                  className="d-inline-flex align-items-center justify-content-center btn w-100 btn-secondary"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal fade p-20"
        id="add_newpackage"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Add New</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="#">
              <div className="modal-body">
                <h5 className="form-title">Plan Image</h5>
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-picture">
                      <div className="upload-profile">
                        <div className="profile-img company-profile-img">
                          <img
                            id="company-img"
                            className="img-fluid me-0"
                            src="assets/img/companies/company-add-img.svg"
                            alt="profile-img"
                          />
                        </div>
                        <div className="add-profile">
                          <h5>Upload a New Photo</h5>
                          <span>Profile-pic.jpg</span>
                        </div>
                      </div>
                      <div className="img-upload">
                        <label className="btn btn-upload">
                          Upload <input type="file" />
                        </label>
                        <a className="btn btn-remove">Remove</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h5 className="form-title mb-3">Plan Info</h5>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Plan Name"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Type</label>
                      <select className="select">
                        <option>Monthly</option>
                        <option>Yearly</option>
                        <option>Lifetime</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Position</label>
                      <select className="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Currency</label>
                      <select className="select">
                        <option>USD</option>
                        <option>$</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label className="d-flex justify-content-between">
                        <span>Price</span>
                        <span className="text-primary">
                          <i className="fa-solid fa-circle-exclamation me-2" />
                          Set 0 for free
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Package Price"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <div className="input-block mb-3">
                      <label>Discount Type</label>
                      <select className="select">
                        <option>Fixed</option>
                        <option>Percentage</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <div className="input-block mb-3">
                      <label>Discount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Discount"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Limitations Invoices</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Max Customers</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Product</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Supplier</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                </div>
                <h6>Plan Modules</h6>
                <div className="input-block mb-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Select All
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Invoices
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Payments
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Payment Summary
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Vendors
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Estimates
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Quotations
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Memberships
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Customers
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Recurring Invoices
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Delivery Challans
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Products
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Vendors
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Expenses
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Reports
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Inventory
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Signature
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Access Trial</h6>
                  <div className="status-toggle">
                    <input
                      id="access-trail-2"
                      className="check"
                      type="checkbox"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="access-trail-2"
                      className="checktoggle checkbox-bg"
                    >
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-8">
                    <div className="input-block mb-3">
                      <label>Trial Days</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <h6 className="mb-0">Is Recommended</h6>
                      <div className="status-toggle">
                        <input
                          id="recommended"
                          className="check"
                          type="checkbox"
                        />
                        <label
                          htmlFor="recommended"
                          className="checktoggle checkbox-bg"
                        >
                          checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label>Description</label>
                      <textarea
                        rows={3}
                        cols={5}
                        className="form-control"
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Status</h6>
                  <div className="status-toggle">
                    <input id="status" className="check" type="checkbox" />
                    <label htmlFor="status" className="checktoggle checkbox-bg">
                      checkbox
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-back cancel-btn me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal custom-lg-modal fade p-20"
        id="edit_package"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Edit Package</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="#">
              <div className="modal-body">
                <h5 className="form-title">Plan Image</h5>
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-picture">
                      <div className="upload-profile">
                        <div className="profile-img company-profile-img">
                          <img
                            id="company-img-2"
                            className="img-fluid me-0"
                            src="assets/img/icons/price-02.svg"
                            alt="profile-img"
                          />
                        </div>
                        <div className="add-profile">
                          <h5>Upload a New Photo</h5>
                          <span>Profile-pic.jpg</span>
                        </div>
                      </div>
                      <div className="img-upload">
                        <label className="btn btn-upload">
                          Upload <input type="file" />
                        </label>
                        <a className="btn btn-remove">Remove</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h5 className="form-title mb-3">Plan Info</h5>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Plan Name"
                        defaultValue="Enterprise"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Type</label>
                      <select className="select">
                        <option>Monthly</option>
                        <option>Yearly</option>
                        <option>Lifetime</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Position</label>
                      <select className="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label>Plan Currency</label>
                      <select className="select">
                        <option>USD</option>
                        <option>$</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="input-block mb-3">
                      <label className="d-flex justify-content-between">
                        <span>Price</span>
                        <span className="text-primary">
                          <i className="fa-solid fa-circle-exclamation me-2" />
                          Set 0 for free
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Package Price"
                        defaultValue={4545}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <div className="input-block mb-3">
                      <label>Discount Type</label>
                      <select className="select">
                        <option>Fixed</option>
                        <option>Percentage</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <div className="input-block mb-3">
                      <label>Discount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Discount"
                        defaultValue="5%"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Limitations Invoices</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                        defaultValue={50}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Max Customers</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                        defaultValue={250}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Product</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                        defaultValue={110}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label>Supplier</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                        defaultValue={14}
                      />
                    </div>
                  </div>
                </div>
                <h6>Plan Modules</h6>
                <div className="input-block mb-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Select All
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Invoices
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Payments
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Payment Summary
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Vendors
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Estimates
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Quotations
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Memberships
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Customers
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Recurring Invoices
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Delivery Challans
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Products
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Vendors
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Expenses
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Reports
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />{" "}
                          Inventory
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="checkbox"
                            defaultChecked=""
                          />
                          Signature
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Access Trial</h6>
                  <div className="status-toggle">
                    <input
                      id="access-trail"
                      className="check"
                      type="checkbox"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="access-trail"
                      className="checktoggle checkbox-bg"
                    >
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-8">
                    <div className="input-block mb-3">
                      <label>Trial Days</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <h6 className="mb-0">Is Recommended</h6>
                      <div className="status-toggle">
                        <input
                          id="recommended-2"
                          className="check"
                          type="checkbox"
                        />
                        <label
                          htmlFor="recommended-2"
                          className="checktoggle checkbox-bg"
                        >
                          checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label>Description</label>
                      <textarea
                        rows={3}
                        cols={5}
                        className="form-control"
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Status</h6>
                  <div className="status-toggle">
                    <input id="status-2" className="check" type="checkbox" />
                    <label
                      htmlFor="status-2"
                      className="checktoggle checkbox-bg"
                    >
                      checkbox
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-back cancel-btn me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal custom-modal fade modal-delete"
        id="delete_modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <div className="delete-modal-icon">
                  <span>
                    <i className="fe fe-check-circle" />
                  </span>
                </div>
                <h3>Are You Sure?</h3>
                <p>You want delete plan</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="modal-footer justify-content-center p-0">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn me-2"
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-back cancel-btn"
                  >
                    No, Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="settings-icon">
      <span
        data-bs-toggle="offcanvas"
        data-bs-target="#theme-settings-offcanvas"
        aria-controls="theme-settings-offcanvas"
      >
        <img
          src="assets/img/icons/siderbar-icon2.svg"
          className="feather-five"
          alt="layout"
        />
      </span>
    </div>
    <div
      className="offcanvas offcanvas-end border-0 "
      tabIndex={-1}
      id="theme-settings-offcanvas"
    >
      <div className="sidebar-headerset">
        <div className="sidebar-headersets">
          <h2>Customizer</h2>
          <h3>Customize your overview Page layout</h3>
        </div>
        <div className="sidebar-headerclose">
          <a data-bs-dismiss="offcanvas" aria-label="Close">
            <img src="assets/img/close.png" alt="img" />
          </a>
        </div>
      </div>
      <div className="offcanvas-body p-0">
        <div data-simplebar="" className="h-100">
          <div className="settings-mains">
            <div className="layout-head">
              <h5>Layout</h5>
              <h6>Choose your layout</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    id="customizer-layout01"
                    name="data-layout"
                    type="radio"
                    defaultValue="vertical"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="customizer-layout01"
                  >
                    <img src="assets/img/vertical.png" alt="img" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Vertical</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    id="customizer-layout02"
                    name="data-layout"
                    type="radio"
                    defaultValue="horizontal"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="customizer-layout02"
                  >
                    <img src="assets/img/horizontal.png" alt="img" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Horizontal</h5>
              </div>
              <div className="col-4 d-none">
                <div className="form-check card-radio p-0">
                  <input
                    id="customizer-layout03"
                    name="data-layout"
                    type="radio"
                    defaultValue="twocolumn"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="customizer-layout03"
                  >
                    <img src="assets/img/two-col.png" alt="img" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Two Column</h5>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-3">
              <div className="layout-head mb-0">
                <h5>RTL Mode</h5>
                <h6>Change Language Direction.</h6>
              </div>
              <div className="active-switch">
                <div className="status-toggle">
                  <input id="rtl" className="check" type="checkbox" />
                  <label htmlFor="rtl" className="checktoggle checkbox-bg">
                    checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="layout-head pt-3">
              <h5>Color Scheme</h5>
              <h6>Choose Light or Dark Scheme.</h6>
            </div>
            <div className="colorscheme-cardradio">
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio blue  p-0 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-blue"
                      defaultValue="blue"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="layout-mode-blue"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Blue</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-light"
                      defaultValue="light"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="layout-mode-light"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Light</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio dark  p-0 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-dark"
                      defaultValue="dark"
                    />
                    <label
                      className="form-check-label avatar-md w-100 "
                      htmlFor="layout-mode-dark"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Dark</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-orange"
                      defaultValue="orange"
                    />
                    <label
                      className="form-check-label  avatar-md w-100 "
                      htmlFor="layout-mode-orange"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Orange</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check card-radio maroon p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-maroon"
                      defaultValue="maroon"
                    />
                    <label
                      className="form-check-label  avatar-md w-100 "
                      htmlFor="layout-mode-maroon"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Brink Pink</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check card-radio purple p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-mode"
                      id="layout-mode-purple"
                      defaultValue="purple"
                    />
                    <label
                      className="form-check-label  avatar-md w-100 "
                      htmlFor="layout-mode-purple"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2 mb-2">Green</h5>
                </div>
              </div>
            </div>
            <div id="layout-width">
              <div className="layout-head pt-3">
                <h5>Layout Width</h5>
                <h6>Choose Fluid or Boxed layout.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-fluid"
                      defaultValue="fluid"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="layout-width-fluid"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Fluid</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-boxed"
                      defaultValue="boxed"
                    />
                    <label
                      className="form-check-label avatar-md w-100 px-2"
                      htmlFor="layout-width-boxed"
                    >
                      <img src="assets/img/boxed.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Boxed</h5>
                </div>
              </div>
            </div>
            <div id="layout-position" className="d-none">
              <div className="layout-head pt-3">
                <h5>Layout Position</h5>
                <h6>Choose Fixed or Scrollable Layout Position.</h6>
              </div>
              <div
                className="btn-group bor-rad-50 overflow-hidden radio"
                role="group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="data-layout-position"
                  id="layout-position-fixed"
                  defaultValue="fixed"
                />
                <label
                  className="btn btn-light w-sm"
                  htmlFor="layout-position-fixed"
                >
                  Fixed
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="data-layout-position"
                  id="layout-position-scrollable"
                  defaultValue="scrollable"
                />
                <label
                  className="btn btn-light w-sm ms-0"
                  htmlFor="layout-position-scrollable"
                >
                  Scrollable
                </label>
              </div>
            </div>
            <div className="layout-head pt-3">
              <h5>Topbar Color</h5>
              <h6>Choose Light or Dark Topbar Color.</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio  p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-topbar"
                    id="topbar-color-light"
                    defaultValue="light"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="topbar-color-light"
                  >
                    <img src="assets/img/vertical.png" alt="img" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Light</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-topbar"
                    id="topbar-color-dark"
                    defaultValue="dark"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="topbar-color-dark"
                  >
                    <img src="assets/img/dark.png" alt="img" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Dark</h5>
              </div>
            </div>
            <div id="sidebar-size">
              <div className="layout-head pt-3">
                <h5>Sidebar Size</h5>
                <h6>Choose a size of Sidebar.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check sidebar-setting card-radio  p-0 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-default"
                      defaultValue="lg"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="sidebar-size-default"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Default</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check sidebar-setting card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-compact"
                      defaultValue="md"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="sidebar-size-compact"
                    >
                      <img src="assets/img/compact.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Compact</h5>
                </div>
                <div className="col-4 ">
                  <div className="form-check sidebar-setting card-radio p-0 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-small-hover"
                      defaultValue="sm-hover"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="sidebar-size-small-hover"
                    >
                      <img src="assets/img/small-hover.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Small Sidebar</h5>
                </div>
              </div>
            </div>
            <div id="sidebar-view">
              <div className="layout-head pt-3">
                <h5>Sidebar View</h5>
                <h6>Choose Default or Detached Sidebar view.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check sidebar-setting card-radio  p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-default"
                      defaultValue="default"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="sidebar-view-default"
                    >
                      <img src="assets/img/compact.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Default</h5>
                </div>
                <div className="col-4">
                  <div className="form-check sidebar-setting card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-detached"
                      defaultValue="detached"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="sidebar-view-detached"
                    >
                      <img src="assets/img/detached.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Detached</h5>
                </div>
              </div>
            </div>
            <div id="sidebar-color">
              <div className="layout-head pt-3">
                <h5>Sidebar Color</h5>
                <h6>Choose a color of Sidebar.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div
                    className="form-check sidebar-setting card-radio p-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient.show"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-light"
                      defaultValue="light"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="sidebar-color-light"
                    >
                      <span className="bg-light bg-sidebarcolor" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Light</h5>
                </div>
                <div className="col-4">
                  <div
                    className="form-check sidebar-setting card-radio p-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient.show"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-dark"
                      defaultValue="dark"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="sidebar-color-dark"
                    >
                      <span className="bg-darks bg-sidebarcolor" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Dark</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check sidebar-setting card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient"
                      defaultValue="gradient"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="sidebar-color-gradient"
                    >
                      <span className="bg-gradients bg-sidebarcolor" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Gradient</h5>
                </div>
                <div className="col-4 d-none">
                  <button
                    className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient"
                    aria-expanded="false"
                  >
                    <span className="d-flex gap-1 h-100">
                      <span className="flex-shrink-0">
                        <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                          <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                          <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                          <span className="bg-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </button>
                  <h5 className="fs-13 text-center mt-2">Gradient</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer border-top p-3 text-center">
        <div className="row">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-light w-100 bor-rad-50"
              id="reset-layout"
            >
              Reset
            </button>
          </div>
          <div className="col-6">
            <a
              href="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
              target="_blank"
              className="btn btn-primary w-100 bor-rad-50"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Mirrored from kanakku.dreamstechnologies.com/html/template/packages.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Apr 2024 05:57:24 GMT */}
  </>
);

export default Packages;
