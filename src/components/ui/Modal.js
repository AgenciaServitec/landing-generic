import React from "react";
import AntdModal from "antd/lib/modal";
import styled from "styled-components";

// interface Props {
//   closable: boolean;
//   centered: boolean;
//   footer: null;
//   children: JSX.Element;
// }

export const Modal = ({
  closable = false,
  centered = true,
  footer = null,
  children,
  ...props
}) => (
  <ModalContainer
    closable={closable}
    centered={centered}
    footer={footer}
    {...props}
  >
    {children}
  </ModalContainer>
);

const ModalContainer = styled(AntdModal)`
  width: 100% !important;
  max-height: 100%;
`;
