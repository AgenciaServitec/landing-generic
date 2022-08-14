import React, { createContext, useContext, useEffect, useState } from "react";
import {
  cmstsConfig,
  jaceConfig,
  jaeConfig,
  sadConfig,
  saecoConfig,
  saedConfig,
} from "../data-list";

const templateConfigs = {
  cmsts: cmstsConfig,
  jace: jaceConfig,
  jae: jaeConfig,
  sad: sadConfig,
  saed: saedConfig,
  saeco: saecoConfig,
  default: saedConfig,
};

const TemplateConfigContext = createContext({
  templateConfig: null,
  onClickTemplateType: () => null,
});

export const TemplateConfig = ({ children }) => {
  const [templateType, setTemplateType] = useState("cmsts");

  const hostName = window.location.hostname;

  console.log("hostName:", hostName);

  useEffect(() => {
    getTemplateConfig();
  }, [templateType, hostName]);

  const getTemplateConfig = () => {
    switch (hostName) {
      case "cmsts.cobiene.mil.pe":
        return setTemplateType("cmsts");
      case "jace.cobiene.mil.pe":
        return setTemplateType("jace");
      case "jae.cobiene.mil.pe":
        return setTemplateType("jae");
      case "sad.cobiene.mil.pe":
        return setTemplateType("sad");
      case "saed.cobiene.mil.pe":
        return setTemplateType("saed");
      case "saeco.cobiene.mil.pe":
        return setTemplateType("saeco");
      default:
        return setTemplateType("cmsts");
    }
  };

  const onClickTemplateType = (type) => setTemplateType(type);

  return (
    <TemplateConfigContext.Provider
      value={{
        templateConfig: templateConfigs[templateType],
        onClickTemplateType,
      }}
    >
      {children}
    </TemplateConfigContext.Provider>
  );
};

export const useTemplateConfig = () => useContext(TemplateConfigContext);
