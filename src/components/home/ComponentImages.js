import React, { useState } from "react";

export const ComponentImages = () => {
  const title = "juan"; // constante de prueba xd
  const [titulo, setTitulo] = useState("");
  const newTitle = () => {
    setTitulo(title);
  };
  const imagesArray = [img, dad, dasdas, dasda]; // ejemplo de array xd

  return (
    <Container>
      <WrapperTitle>
        <h1>{newTitle}</h1>
      </WrapperTitle>
      <WrapperImg>
        {imagesArray.map((imageArray, index) => (
          <img key={index} src={imageArray} />
        ))}
      </WrapperImg>
    </Container>
  );
};
