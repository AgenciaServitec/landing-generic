import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ButtonsFloating = ({ wspPhone }) => (
  <Container>
    <a
      href={`https://wa.me/+51${wspPhone.phone}`}
      target="_blank"
      rel="noreferrer"
    >
      <WrapperButton bg="#5cc753">
        <div className="item-text">
          <div>Atención inmediata</div>
          <div>{wspPhone.phone}</div>
        </div>
        <div className="item-icon">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </div>
      </WrapperButton>
    </a>
  </Container>
);

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 15%;
  z-index: 998;
`;

const WrapperButton = styled.div`
  ${({ bg }) => css`
    background: ${bg};
    padding: 0.3rem 0.7rem;
    border: none;
    margin-bottom: 0.7rem;
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 7rem;
    border-bottom-left-radius: 7rem;
    ${mediaQuery.minTablet} {
      padding: 0.3rem 0.9rem;
    }
    .item-icon {
      order: 1;
      margin-left: 0.5rem;
      padding: 0.3rem;
      svg {
        color: #fff;
        font-size: 2.5rem;
        ${mediaQuery.minTablet} {
          font-size: 3rem;
        }
      }
    }
    .item-text {
      order: 2;
      font-size: 0.8rem;
      color: #fff;
      div {
        line-height: 1.5rem;
      }
      div:last-child {
        font-size: 1.3rem;
      }

      ${mediaQuery.minTablet} {
        font-size: 0.9rem;
        div {
          line-height: 1.7rem;
        }
        div:last-child {
          font-size: 1.6rem;
        }
      }
    }
  `}
`;
