import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ListItems = ({ title = "Title no found", items = [] }) => (
  <Container id="services">
    <div className="content-items">
      <h2 className="title">{title}</h2>
      <div className="content-img">
        {items.map((item, index) => (
          <div key={index} className="item-img">
            <img src={item.image} alt="seo" className="image-bg" />
            {item.title && <h3>{item.title}</h3>}
          </div>
        ))}
      </div>
    </div>
  </Container>
);

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
      font-weight: 400;
      margin: 2rem 0;
      font-size: 2rem;
      text-align: center;
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 1rem;
      flex-wrap: wrap;

      .item-img {
        img {
          width: 15rem;
          height: 15rem;
          object-fit: contain;
        }
        h3 {
          margin-top: 0.8rem;
          color: #000;
          text-align: center;
          text-transform: uppercase;
        }
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
