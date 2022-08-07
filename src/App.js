import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
import { setLocale } from "yup";
import {
  cmstsConfig,
  jaceConfig,
  jaeConfig,
  sadConfig,
  saedConfig,
} from "./data-list";

const templateConfigs = {
  cmsts: cmstsConfig,
  jace: jaceConfig,
  jae: jaeConfig,
  sad: sadConfig,
  saed: saedConfig,
  saeco: saedConfig,
  default: saedConfig,
};

export const App = () => {
  const [templateType, setTemplateType] = useState("default");
  const [themeType, setThemeType] = useState("default");

  const hostName = window.location.hostname;

  useEffect(() => {
    return () => {
      setLocale(yup["es"]);
      getThemeAndTemplateConfig();
    };
  }, []);

  const getThemeAndTemplateConfig = () => {
    switch (hostName) {
      case "cmsts.cobiene.mil.pe": {
        setTemplateType("cmsts");
        return setThemeType("primary");
      }
      case "jace.cobiene.mil.pe": {
        setTemplateType("jace");
        return setThemeType("primary");
      }
      case "jae.cobiene.mil.pe": {
        setTemplateType("jae");
        return setThemeType("primary");
      }
      case "sad.cobiene.mil.pe": {
        setTemplateType("sad");
        return setThemeType("primary");
      }
      case "saed.cobiene.mil.pe": {
        setTemplateType("saed");
        return setThemeType("primary");
      }
      case "saeco.cobiene.mil.pe": {
        setTemplateType("saeco");
        return setThemeType("primary");
      }
      default: {
        setTemplateType("saed");
        return setThemeType("default");
      }
    }
  };

  console.log("template->", templateConfigs[templateType]);
  console.log("theme->", themes[themeType]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[themeType]}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};
