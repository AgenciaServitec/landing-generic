import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

const wrapperImgType = {
  primary: {
    gridTemplateColumns: "1fr 1fr",
  },
  secondary: {
    gridTemplateColumns: "1fr",
  },
};

export const ComponentImages = ({ title, images, type = "primary" }) => {
  // const { title } = props; // props para el titulo
  // const { imagesArray } = props;//props para el array de imagenes
  // --------- prueba de array para que no se buggee porque no tiene props que traer por ahora------//

  const wrapperImgStyle = wrapperImgType[type];

  return (
    <Container>
      <WrapperTitle>
        {/*<h1>{title}</h1>*/}
        {{ title } ? <h2>{title}</h2> : ""}
      </WrapperTitle>
      <WrapperImg gridTemplateColumns={wrapperImgStyle.gridTemplateColumns}>
        {images.map((image, index) => (
          <Img key={index} src={image} alt={title} />
        ))}
      </WrapperImg>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
`;

const WrapperTitle = styled.div`
  padding: 1.5rem;
  text-align: center;
  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    ${mediaQuery.minTablet} {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

const WrapperImg = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  display: grid;
  margin-bottom: 1.7rem;
  grid-template-columns: 1fr;
  ${mediaQuery.minTablet} {
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 65rem;
  padding: 1rem;
  margin: auto;
`;
