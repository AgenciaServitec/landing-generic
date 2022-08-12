import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Link } from "react-router-dom";

export const Footer = ({ headerTemplate, menuList = [] }) => (
  <Container id="footer">
    <div className="item-logo-footer">
      <div className="item-logo">
        <Link to="/">
          <img src={headerTemplate.logoImg} alt="Logo" />
        </Link>
      </div>
    </div>

    <div className="divider" />

    <div className="wrapper-menu">
      <ul>
        <Link to="/">
          <li>INICIO</li>
        </Link>
        {menuList.map((menu, index) => (
          <a key={index} href={`#${menu.id}`}>
            <li>{menu.name}</li>
          </a>
        ))}
      </ul>
    </div>

    <div className="bottom-footer">
      <div>
        © Copyright 2022 - {headerTemplate.name.toUpperCase()} - Diseñado con{" "}
        <FontAwesomeIcon icon={faHeart} color="red" /> por{" "}
        <a href="https://agenciaservitec.com" target="_blank" rel="noreferrer">
          Agencia Servitec
        </a>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: #e5e5e5;
  color: #1f1f1f;

  .item-logo-footer {
    margin: auto;

    .item-logo {
      display: flex;
      justify-content: center;

      img {
        width: 7rem;
        height: auto;
        margin: 0.3rem 0 1.2rem 0;
      }
    }
  }

  .divider {
    clear: both;
    width: 100%;
    position: relative;
    width: 80%;
    //max-width: 30rem;
    height: 1px;
    background: #797777;
    margin: 1rem auto;
  }

  .wrapper-menu {
    width: 100%;
    margin: 3rem auto;

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      gap: 2rem;
      text-transform: uppercase;
      
      a {
        color: inherit;
      }
    }
  }

  .items-contacts {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .item-contact {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 1rem;

      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr auto;
      }

      .icon {
        font-size: 3rem;
      }

      .content {
        text-align: center;
        line-height: 3rem;

        p {
          opacity: 0.4;
        }

        a {
          font-size: 1.5rem;
          color: inherit;
        }

        a:hover {
          color: #3f7c57;
        }
      }
    }
  }

  .bottom-footer {
    width: 100%;
    padding: 1.5rem;

    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;

      a {
        font-weight: 500;
        color: #bfa600;
      }
    }
  }
`;
