import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDevice } from "../../hooks";
import styled from "styled-components";
import { useTemplateConfig } from "../../providers";

export const Header = ({ setVisibleDrawer }) => {
  const { templateConfig } = useTemplateConfig();

  const { isMobile } = useDevice();

  const headerTemplate = templateConfig.header;

  return (
    <Container>
      {isMobile ? (
        <div className="menu-mobile">
          <div className="item-logo">
            <Link to="/">
              <img src={headerTemplate.logoImg} alt="Logo" />
              <h2>{headerTemplate.title}</h2>
            </Link>
          </div>
          <div className="icon-bar" onClick={() => setVisibleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </div>
      ) : (
        <div className="menu-list">
          <div className="logo-item">
            <Link to="/">
              <img src={headerTemplate.logoImg} alt="Logo" />
              <h2>{headerTemplate.title}</h2>
            </Link>
          </div>
          <div className="list">
            <ul>
              <Link to="/">
                <li>INICIO</li>
              </Link>
              {headerTemplate.menuList.map((menu, index) => (
                <a key={index} href="#about-us">
                  <li>{menu.name}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem 1.7rem;
  display: grid;
  grid-area: auto;

  .menu-list {
    display: grid;
    grid-template-columns: 50% 1fr;

    .logo-item {
      list-style: none;

      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          width: 4rem;
          margin-right: 1rem;
        }
        h2 {
          margin: 0;
        }
      }
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        margin: 0;
        li {
          color: #000;
          font-weight: bold;
          font-size: 1.1rem;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease-in-out;
          margin-left: 1.5rem;
          cursor: pointer;
        }
        li:hover {
          color: #4cc2c0;
          border-bottom: 2px solid #4cc2c0;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  .menu-mobile {
    width: 100%;
    color: #000;
    display: grid;
    grid-template-columns: 85% 1fr;
    .item-logo {
      a {
        display: flex;
        align-items: center;
        justify-content: start;
        img {
          width: 4rem;
          max-width: 5rem;
          margin-right: 1rem;
        }
        h2 {
          margin: 0;
        }
      }
    }

    .icon-bar {
      width: auto;
      height: 100%;
      padding: 0.7rem 0.1rem 0.7rem 1.7rem;
    }
  }
`;
