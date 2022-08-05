import React from "react";
import styled from "styled-components";
import { breakPoints } from "../../styles/constants/breakPoints";

export const WrapperContent = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  width: 100%;
  max-width: ${breakPoints.high_resolution}px;
  margin: auto;
  height: auto;
`;
