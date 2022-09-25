import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const CardsInlineBlock = ({
  title,
  titleImage,
  id = "about-us",
  subTitle = "",
  direction = false,
  descriptions = [],
  buttons = [],
  images = [],
}) => {
  return (
    <Container id={id} direction={direction}>
      <div className="content-items">
        <div className="content">
          <div className="heading">
            {titleImage && (
              <img className="imgTitle" src={titleImage} alt="nohay" />
            )}
            {title && <h2 className="title">{title}</h2>}
            {subTitle && <h4 className="title">{subTitle}</h4>}
          </div>
          <div className="description">
            {descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
          {buttons && (
            <div className="btn-item">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  text={button.title}
                  type={button.type}
                  href={`#${button.id}`}
                />
              ))}
            </div>
          )}
        </div>
        {images && (
          <div className="content-image">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="item-image"
                alt="about us"
              />
            ))}
          </div>
        )}
      </div>
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
  .content-items {
    direction: ${({ direction }) => (direction ? "rtl" : "ltr")};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.7rem;
    padding: 3rem 0.5rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }
    .content {
      .heading {
        h4 {
          font-size: 20px;
        }
      }
    }
    .imgTitle {
      width: 70%;
      //margin-left: 6.5rem;
      margin-bottom: 2rem;
    }
    .title {
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 3rem;
      margin-right: 2rem;
    }
    .description {
      margin-right: 2rem;
      max-width: 40rem;
      font-weight: 500;
      text-align: justify;
      p {
        font-size: 1.2rem;
      }
    }
    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
      gap: 1rem;
    }
  }
  .content-image {
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    grid-template-columns: 1fr;
    ${mediaQuery.minTablet} {
      //grid-template-rows: 1fr;
      //grid-template-columns: 1fr 1fr;
    }

    .item-image {
      width: 100%;
      height: 100%;
      padding-left: 0.5rem;
      max-width: 29rem;
      height: auto;
      object-fit: cover;
      padding-bottom: 0.5rem;
      ${mediaQuery.minTablet} {
        padding-bottom: 0.5rem;
      }
    }
  }
`;
