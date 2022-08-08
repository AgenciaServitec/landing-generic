import React, { createContext, useContext, useEffect, useState } from "react";
import {
  cmstsConfig,
  jaceConfig,
  jaeConfig,
  sadConfig,
  saedConfig,
} from "../data-list";

const templateConfigs = {
  cmsts: cmstsConfig,
  jace: jaceConfig,
  jae: jaeConfig,
  sad: sadConfig,
  saed: saedConfig,
  saeco: saedConfig,
  default: saedConfig,
};

const TemplateConfigContext = createContext({
  templateConfig: null,
});

export const TemplateConfig = ({ children }) => {
  const [templateType, setTemplateType] = useState("cmsts");

  const hostName = window.location.hostname;

  useEffect(() => {
    return () => {
      getThemeAndTemplateConfig();
    };
  }, [templateType]);

  const getThemeAndTemplateConfig = () => {
    switch (hostName) {
      case "cmsts.cobiene.mil.pe":
        return setTemplateType("primary");
      case "jace.cobiene.mil.pe":
        return setTemplateType("primary");
      case "jae.cobiene.mil.pe":
        return setTemplateType("primary");
      case "sad.cobiene.mil.pe":
        return setTemplateType("primary");
      case "saed.cobiene.mil.pe":
        return setTemplateType("primary");
      case "saeco.cobiene.mil.pe":
        return setTemplateType("primary");
      default:
        return setTemplateType("saed");
    }
  };

  console.log("templateConfigs->", templateConfigs[templateType]);

  return (
    <TemplateConfigContext.Provider
      value={{ templateConfig: templateConfigs[templateType] }}
    >
      {children}
    </TemplateConfigContext.Provider>
  );
};

export const useTemplateConfig = () => useContext(TemplateConfigContext);
