import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { useNavigate } from "react-router";

export const AboutUs = ({
  title = "",
  subTitle = "",
  descriptions = [],
  buttons = [],
  images = [],
}) => {
  const navigate = useNavigate();

  const onClickButton = (url) => navigate(url);

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
            <div className="button">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  text={button.name}
                  type={button.type}
                  onClick={() => onClickButton(`/#${button.id}`)}
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
    .title {
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .description {
      max-width: 40rem;
      font-weight: 500;
    }
  }
  .content-image {
    .item-image {
      width: 100%;
      height: 100%;
    }
  }
`;
