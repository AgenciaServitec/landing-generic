import React from "react";
import { SaedBannePublic } from "../../images";
import styled from "styled-components";

export const Banner = () => (
  <Container>
    <img src={SaedBannePublic} alt="Banner" />
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
    margin: auto;
  }
`;
