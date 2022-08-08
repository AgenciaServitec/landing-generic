import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
import { setLocale } from "yup";
import { TemplateConfig } from "./providers";
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
      case "jace.cobiene.mil.pe":
        return setThemeType("default");
      case "jae.cobiene.mil.pe":
        return setThemeType("default");
      case "sad.cobiene.mil.pe":
        return setThemeType("default");
      case "saed.cobiene.mil.pe":
        return setThemeType("default");
      case "saeco.cobiene.mil.pe":
        return setThemeType("default");
      default:
        return setThemeType("default");
    }
  };

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
