import React, { createContext, useContext, useEffect, useState } from "react";
import {
  apoyoSocialConfig,
  cmstsConfig,
  dscsConfig,
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
  dscs: dscsConfig,
  apoyoSocial: apoyoSocialConfig,
  default: saedConfig,
};

const TemplateConfigContext = createContext({
  templateConfig: null,
  templateType: null,
  onClickTemplateType: () => null,
});

export const TemplateConfig = ({ children }) => {
  const [templateType, setTemplateType] = useState("default");

  const hostName = window.location.hostname;

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
        return setTemplateType("apoyoSocial");
      case "dscs.cobiene.mil.pe":
        return setTemplateType("dscs");
      default:
        return setTemplateType("jace");
    }
  }, [hostName]);

  const onClickTemplateType = (type) => setTemplateType(type);

  return (
    <TemplateConfigContext.Provider
      value={{
        templateConfig: templateConfigs[templateType],
        templateType,
        onClickTemplateType,
      }}
    >
      {children}
    </TemplateConfigContext.Provider>
  );
};

export const useTemplateConfig = () => useContext(TemplateConfigContext);
