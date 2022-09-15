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

export const ComponentImages = ({ collages = [], type = "primary" }) => {
  // const { title } = props; // props para el titulo
  // const { imagesArray } = props;//props para el array de imagenes
  // --------- prueba de array para que no se buggee porque no tiene props que traer por ahora------//

  const wrapperImgStyle = wrapperImgType[type];

  return (
    <div>
      {collages.map((card, index) => (
        <Container id={card.id} key={index}>
          {card.titleImage ? (
            <img className="imgTitle" alt="no hay" src={card.titleImage} />
          ) : (
            ""
          )}
          <WrapperTitle>
            {/*<h1>{title}</h1>*/}
            {card.title ? <h2>{card.title}</h2> : ""}
          </WrapperTitle>
          <div className="descriptionTop">
            {card.descriptionTop ? <p>{card.descriptionTop}</p> : ""}
          </div>
          <WrapperImg gridTemplateColumns={wrapperImgStyle.gridTemplateColumns}>
            {card.images.map((image, index) => (
              <Img key={index} src={image} alt="no hay" />
            ))}
          </WrapperImg>
          {card.description ? <p>{card.description}</p> : ""}
        </Container>
      ))}
      {/*{{ titleImage } ? <img className="imgTitle" src={titleImage} /> : ""}*/}
      {/*<WrapperTitle>*/}
      {/*  /!*<h1>{title}</h1>*!/*/}
      {/*  {{ title } ? <h2>{title}</h2> : ""}*/}
      {/*</WrapperTitle>*/}
      {/*<div className="descriptionTop">*/}
      {/*  {{ descriptionTop } ? <p>{descriptionTop}</p> : ""}*/}
      {/*</div>*/}
      {/*<WrapperImg gridTemplateColumns={wrapperImgStyle.gridTemplateColumns}>*/}
      {/*  {images.map((image, index) => (*/}
      {/*    <Img key={index} src={image} alt={title} />*/}
      {/*  ))}*/}
      {/*</WrapperImg>*/}
      {/*{{ description } ? <p>{description}</p> : ""}*/}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
  .imgTitle {
    width: 35%;
    margin-left: 6.5rem;
    margin-bottom: 2rem;
  }
  .descriptionTop {
    margin: 0 6rem;
  }
  p {
    text-align: center;
  }
`;

const WrapperTitle = styled.div`
  //padding: 1.5rem;
  margin: 0 6rem;
  text-align: center;
  h2 {
    margin-top: 2.5rem;
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
  //display: grid;
  text-align: center;
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
