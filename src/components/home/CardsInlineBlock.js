import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const CardsInlineBlock = ({
  title = "",
  subTitle = "",
  descriptions = [],
  buttons = [],
  images = [],
}) => {
  return (
    <Container id="about-us">
      <div className="content-items">
        <div className="content">
          <div className="heading">
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
    .title {
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .description {
      max-width: 40rem;
      font-weight: 500;
    }
    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
      gap: 1rem;
    }
  }
  .content-image {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    ${mediaQuery.minTablet} {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
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
