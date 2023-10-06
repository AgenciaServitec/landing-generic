import React from "react";
import styled from "styled-components";
import { useDevice } from "../../hooks";

export const BtnLink = ({ children, href }) => {
  const { isMobile } = useDevice();

  if (isMobile)
    return (
      <a href={href} target="_blank" style={{ color: "#46a6ff" }}>
        REPEDIS
      </a>
    );

  return (
    <Container href={href} target="_blank">
      {children}
    </Container>
  );
};

const Container = styled.a`
  border: none;
  border-radius: 1em;
  padding: 0.5em 1em;
  font-size: 0.8em;
  background-color: #46a6ff;
  color: #fff;
  width: auto;
  display: block;
  text-align: center;
  &:hover {
    color: black;
  }
`;
