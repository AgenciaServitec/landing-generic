import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ButtonsFloating = ({
  socialRed,
  bottom = "15%",
  bg = "#5cc753",
}) => (
  <Container $bottom={bottom}>
    <a href={socialRed.href} target="_blank" rel="noreferrer">
      <WrapperButton bg={bg}>
        <div className="item-text">
          <div>{socialRed?.value}</div>
        </div>

        {socialRed?.icon && (
          <div className="item-icon">
            <FontAwesomeIcon icon={socialRed.icon} className="icon" />
          </div>
        )}
      </WrapperButton>
    </a>
  </Container>
);

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: ${({ $bottom }) => $bottom};
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
      font-size: 1.8rem;
      color: #fff;

      div {
        line-height: 1.9rem;
      }

      div:last-child {
        font-size: 1.3rem;
      }

      ${mediaQuery.minTablet} {
        font-size: 1.5rem;

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
