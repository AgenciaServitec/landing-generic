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
      case "cmsts.jbiene.com":
        return setTemplateType("cmsts");
      case "sdace.jbiene.com":
        return setTemplateType("sdace");
      case " sdae.jbiene.com":
        return setTemplateType("sdae");
      case "sad.jbiene.com":
        return setTemplateType("sad");
      case "saed.jbiene.com":
        return setTemplateType("saed");
      case "apoyosocial.jbiene.com":
        return setTemplateType("apoyoSocial");
      case "dscs.jbiene.com":
        return setTemplateType("dscs");
      default:
        return setTemplateType("sdace");

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
