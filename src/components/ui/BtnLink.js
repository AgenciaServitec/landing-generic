import React from "react";
import styled from "styled-components";

export const BtnLink = ({ children, href }) => {
  return (
    <Container href={href} target="_blank">
      {children}
    </Container>
  );
};

const Container = styled.a`
  border: none;
  border-radius: 1em;
  padding: 0.3em 0.5em;
  font-size: 0.5em;
  background-color: #46a6ff;
  color: black;
  width: auto;
  display: block;
  text-align: center;
  &:hover {
    color: black;
  }
`;
