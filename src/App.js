import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
import { setLocale } from "yup";

export const App = () => {
  const [themeType, setThemeType] = useState("default");

  const hostName = window.location.hostname;

  useEffect(() => {
    setLocale(yup["es"]);
    setThemeType(getThemeType());
  }, [themeType]);

  const getThemeType = () => {
    switch (hostName) {
      case "saeco.cobiene.mil.pe":
        return "primary";
      case "saed.cobiene.mil.pe":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[themeType]}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};
