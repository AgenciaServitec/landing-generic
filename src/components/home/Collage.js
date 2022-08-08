import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const Collage = ({ images = [] }) => {
  return (
    <Container id="about-us">
      <div className="content-items">
        {images && (
          <div className="content-image">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="item-image"
                alt="collage"
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
  .content-image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .item-image {
      width: 100%;
      max-width: 60rem;
      height: auto;
      object-fit: cover;
      margin: 1rem;
    }
  }
`;
