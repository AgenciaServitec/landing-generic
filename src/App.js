import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
import { setLocale } from "yup";
import { TemplateConfig, useTemplateConfig } from "./providers";
import { Spinner } from "./components/ui";

export const App = () => {
  const { templateConfig } = useTemplateConfig();

  const [loadingApp, setLoadingApp] = useState(true);
  const [themeType, setThemeType] = useState("default");

  const hostName = window.location.hostname;

  useEffect(() => {
    setLocale(yup["es"]);
    getThemeConfig();
    setLoadingApp(false);
  }, [themeType]);

  const getThemeConfig = () => {
    switch (hostName) {
      case "cmsts.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      case "jace.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      case "jae.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      case "sad.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      case "saed.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      case "saeco.cobiene.mil.pe": {
        return setThemeType("primary");
      }
      default: {
        return setThemeType("default");
      }
    }
  };

  console.log("templateConfig->", templateConfig);
  console.log("theme->", themes[themeType]);

  if (loadingApp) return <Spinner height="100vh" />;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[themeType]}>
        <GlobalStyles />
        <TemplateConfig>
          <Router />
        </TemplateConfig>
      </ThemeProvider>
    </BrowserRouter>
  );
};
