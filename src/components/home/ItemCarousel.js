import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const ItemCarousel = ({
  title,
  description,
  imgBackground,
  buttons = [],
}) => {
  return (
    <Container imgBackground={imgBackground}>
      <div className="content-item">
        <div className="first-content">
          <div className="txt-items">
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
          </div>
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
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url(${({ imgBackground }) => imgBackground}) 100% 100% no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 85vh;

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(
      rgba(7, 7, 7, 0.39),
      rgba(0, 0, 0, 0.17),
      rgba(7, 7, 7, 0.39)
    );
  }

  .content-item {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 1250px;
    height: 100%;
    margin: auto;
    padding: 1rem;

    ${mediaQuery.minTablet} {
      grid-template-columns: 75% 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.7rem;
      padding: 1.7rem 2rem;
    }
  }

  .first-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 399;

    ${mediaQuery.minTablet} {
      padding-top: 1rem;
    }

    .txt-items {
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: start;

      h1 {
        font-size: 2.3rem;
        line-height: 2.7rem;
        color: #fff;

        ${mediaQuery.minTablet} {
          font-size: 5rem;
          line-height: 5rem;
        }
      }

      p {
        font-size: 1.3em;
        line-height: 1.5rem;
        color: #fff;

        ${mediaQuery.minTablet} {
          font-size: 1.7rem;
          line-height: 2rem;
        }
      }
    }

    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
      gap: 1rem;
    }
  }

  .second-content {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      max-width: 23rem;
      object-fit: contain;

      ${mediaQuery.minTablet} {
        width: 90%;
      }
    }
  }
`;
