import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
import { setLocale } from "yup";
import { TemplateConfig } from "./providers";
import { HelmetContainer } from "./components/layout/HelmetContainer";
import { Spinner } from "./components/ui";

export const App = () => {
  const [loadingApp, setLoadingApp] = useState(true);
  const [themeType, setThemeType] = useState("default");

  const hostName = window.location.hostname;

  useEffect(() => {
    setLocale(yup["es"]);
    getThemeConfig();
    setLoadingApp(false);
  }, []);

  const getThemeConfig = () => {
    switch (hostName) {
      case "cmsts.cobiene.mil.pe":
        return setThemeType("default");
      case "sdace.cobiene.mil.pe":
        return setThemeType("default");
      case "sdae.cobiene.mil.pe":
        return setThemeType("default");
      case "sad.cobiene.mil.pe":
        return setThemeType("default");
      case "saed.cobiene.mil.pe":
        return setThemeType("default");
      case "dscs.cobiene.mil.pe":
        return setThemeType("default");
      case "apoyosocial.cobiene.mil.pe":
        return setThemeType("default");
      default:
        return setThemeType("default");
    }
  };

  if (loadingApp) return <Spinner height="100vh" />;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[themeType]}>
        <TemplateConfig>
          <HelmetContainer>
            <GlobalStyles />
            <Router />
            {/*<ItemTemplates>*/}
            {/*  <ul>*/}
            {/*    <li onClick={() => onClickTemplateType("cmsts")}>CmsTs</li>*/}
            {/*    <li onClick={() => onClickTemplateType("jace")}>jace</li>*/}
            {/*    <li onClick={() => onClickTemplateType("jae")}>jae</li>*/}
            {/*    <li onClick={() => onClickTemplateType("sad")}>sad</li>*/}
            {/*    <li onClick={() => onClickTemplateType("saed")}>saed</li>*/}
            {/*    <li onClick={() => onClickTemplateType("saeco")}>saeco</li>*/}
            {/*  </ul>*/}
            {/*</ItemTemplates>*/}
          </HelmetContainer>
        </TemplateConfig>
      </ThemeProvider>
    </BrowserRouter>
  );
};

// const ItemTemplates = styled.div`
//   width: auto;
//   height: auto;
//   position: fixed;
//   bottom: 3%;
//   left: 3%;
//   border: 1px solid #000;
//   z-index: 9999;
//
//   ul {
//     list-style: none;
//
//     li {
//       padding: 0.5rem;
//       cursor: pointer;
//
//       &:hover {
//         background: #e5e5e5;
//       }
//     }
//   }
// `;
