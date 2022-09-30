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
  const [templateType, setTemplateType] = useState("default");

  const hostName = window.location.hostname;

  console.log("HostName: ", hostName);

  useEffect(() => {
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
      case "apoyosocial.cobiene.mil.pe":
        return setTemplateType("saeco");
      default:
        return setTemplateType("default");
    }
  }, [hostName]);

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
