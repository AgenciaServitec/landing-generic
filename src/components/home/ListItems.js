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
            {item.image ? (
              <img src={item.image} alt={item.title} className="image-bg" />
            ) : (
              ""
            )}
            {item.title && <h3>{item.title}</h3>}
            {item.description ? <p>{item.description}</p> : ""}
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
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      gap: 4rem;
      text-align: center;
      .item-img {
        ${mediaQuery.minTablet} {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid #ccc;
          border-radius: 2rem;
          padding: 1rem 1.2rem;
          //box-shadow: 15px 0px #bbb;
        }
        img {
          width: 8rem;
          height: 8rem;
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
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
