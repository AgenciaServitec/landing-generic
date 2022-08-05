import React from "react";
import styled from "styled-components";
import { default as BackgroundJace } from "../images/administracioncasas.webp";

export const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <ContainerImg>
        <BackgroundImg src={BackgroundJace} />
      </ContainerImg>
      <ImgContent></ImgContent>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background: dimgray;
`;
const ContainerImg = styled.div``;

const BackgroundImg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const ImgContent = styled.div``;
