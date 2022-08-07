import React, { createContext, useContext, useState } from "react";

const TemplateConfigContext = createContext({
  templateType: "default",
  setTemplateType: () => null,
});

export const TemplateConfig = ({ children }) => {
  const [templateType, setTemplateType] = useState("default");

  return (
    <TemplateConfigContext.Provider value={{ templateType, setTemplateType }}>
      {children}
    </TemplateConfigContext.Provider>
  );
};

export const useTemplateConfig = () => useContext(TemplateConfigContext);
