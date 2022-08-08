import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ComponentImages = ({ title, images }) => {
  // const { title } = props; // props para el titulo
  // const { imagesArray } = props;//props para el array de imagenes

  // --------- prueba de array para que no se buggee porque no tiene props que traer por ahora------//

  return (
    <Container>
      <WrapperTitle>
        {/*<h1>{title}</h1>*/}
        {{ title } ? <h1>{title}</h1> : ""}
      </WrapperTitle>
      <WrapperImg>
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
`;

const WrapperImg = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  background-repeat: no-repeat;
  display: grid;
  margin-bottom: 1.7rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  ${mediaQuery.minTablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  //display: flex;
  //justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  padding: 0.5rem;
`;
