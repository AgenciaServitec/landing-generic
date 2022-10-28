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
  modalWidth = "100% !important",
  ...props
}) => (
  <ModalContainer
    closable={closable}
    centered={centered}
    footer={footer}
    modalWidth={modalWidth}
    {...props}
  >
    {children}
  </ModalContainer>
);

const ModalContainer = styled(AntdModal)`
  width: ${({ modalWidth }) => modalWidth};
  max-height: 100%;
`;
