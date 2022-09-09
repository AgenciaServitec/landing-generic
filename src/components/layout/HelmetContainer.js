import React from "react";
import { useTemplateConfig } from "../../providers";
import { Helmet } from "react-helmet";

export const HelmetContainer = ({ children }) => {
  const { templateConfig } = useTemplateConfig();

  if (!templateConfig?.helmet) return <>{children}</>;

  const {
    title = "",
    description = "",
    keywords = "",
  } = templateConfig?.helmet;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Agencia Servitec" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      {children}
    </>
  );
};
