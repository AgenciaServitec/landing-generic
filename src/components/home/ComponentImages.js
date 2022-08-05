import React from "react";
import styled from "styled-components";

export const ComponentImages = (props) => {
  // const { title } = props; // props para el titulo
  // const { imagesArray } = props;//props para el array de imagenes

  // --------- prueba de array para que no se buggee porque no tiene props que traer por ahora------//
  const title = "juanEjemplo";
  const imagesArray = ["dsa", "dsad", "dasd", "dasd"]; // ejemplo de array xd

  return (
    <Container>
      <WrapperTitle>
        {/*<h1>{title}</h1>*/}
        <h1>{title}</h1>
      </WrapperTitle>
      <WrapperImg>
        {imagesArray.map((imageArray, index) => (
          <img key={index} src={imageArray} alt="no hay nada" />
        ))}
      </WrapperImg>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const WrapperTitle = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const WrapperImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
