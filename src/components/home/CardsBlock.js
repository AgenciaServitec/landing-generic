import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { CarouselOnlyImages } from "./CarouselOnlyImages";

export const CardsBlack = ({ cards = [] }) => {
  return (
    <Container>
      {cards.map((card, index) =>
        card.viewType === "carousel" ? (
          <div key={index} className="content-items-carousels">
            <div className="content">
              <div className="heading">
                {/*<h2 className="title">{card.title}</h2>*/}
                <img
                  className="item-titleImage"
                  src={card.titleImage}
                  alt="titleImage"
                />
              </div>
              {(card.items || []).map((item, index) => (
                <div key={index} className="wrapper-carousels">
                  <div className="description">
                    <p>{item.description}</p>
                  </div>
                  <div className="item-carousel">
                    <CarouselOnlyImages images={item?.images} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div key={index} className="content-items">
            <div className="content">
              <div className="heading">
                <h2 className="title">{card.title}</h2>
              </div>

              {(card.items || []).map((item, index) => (
                <div key={index} className="wrapper-card">
                  <div className="description">
                    <p>{item.description}</p>
                  </div>
                  <div className="content-image">
                    <img
                      src={item.image}
                      className="item-image"
                      alt="about us"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
  }

  .content-items-carousels {
    padding: 3rem 0.5rem;
    .content {
      width: 100%;
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 2rem;
      }
      .item-titleImage {
        width: 45%;
        margin-bottom: 1em;
      }
      .wrapper-carousels {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5rem;
        .item-carousel {
          width: 40em;
        }
      }
    }
  }

  .content-items {
    padding: 3rem 0.5rem;

    .title {
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .content {
      .wrapper-card {
        display: grid;
        margin-bottom: 1.7rem;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        ${mediaQuery.minTablet} {
          grid-template-rows: 1fr;
          grid-template-columns: 1fr 1fr;
        }
        .description {
          display: flex;
          align-items: center;
          max-width: 37rem;
          font-weight: 500;
          padding: 1.3rem;
          text-align: left;
        }
        .content-image {
          padding: 0 1rem;
          .item-image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
