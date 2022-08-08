import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

const listCardsTypes = {
  primary: {
    border: "none",
    justifyContent: "start",
    contentImg: "repeat(auto-fit, minmax(20rem, 1fr))",
  },
  secondary: {
    border: "2px solid #ccc",
    justifyContent: "center",
    contentImg: "repeat(auto-fit, minmax(15rem, 1fr))",
  },
};

export const ListCards = ({ title, items = [], type = "primary" }) => {
  const listCardsStyle = listCardsTypes[type];

  return (
    <Container id="services" contentImg={listCardsStyle.contentImg}>
      <div className="content-items">
        {title ? <h2 className="title">{title}</h2> : ""}
        <div className="content-img">
          {items.map((item, index) => (
            <ItemCards
              key={index}
              border={listCardsStyle.border}
              justifyContent={listCardsStyle.justifyContent}
            >
              {item.image && (
                <img src={item.image} alt={item.title} className="image-bg" />
              )}
              {item.title && <h3>{item.title}</h3>}
              {item.title2 && <h5>{item.title2}</h5>}
              {item.title2 && <h5>{item.title2}</h5>}
              {item.description && <p>{item.description}</p>}
            </ItemCards>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  .content-items {
    padding: 3rem 0;
    .title {
      font-weight: 800;
      margin: 3rem 0;
      font-size: 2rem;
      text-align: start;
      ${mediaQuery.minTablet} {
        font-size: 3rem;
      }
    }
    .content-img {
      display: grid;
      grid-template-columns: ${({ contentImg }) => contentImg};
      gap: 2rem;
      text-align: center;
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const ItemCards = styled.div`
  ${mediaQuery.minTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: ${({ border }) => border};
    border-radius: 2rem;
    padding: 1rem 1.2rem;
    //box-shadow: 15px 0px #bbb;
  }
  img {
    width: 12rem;
    height: auto;
    object-fit: contain;
  }
  h3 {
    margin-top: 0.8rem;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  h5 {
    line-height: 1.5rem;
  }
  p {
    text-align: justify;
  }
`;
