import React from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const buttonsType = {
  primary: {
    background: ({ theme }) => theme.colors.primary,
    border: "transparent",
    color: "#fff",
  },
  secondary: {
    background: ({ theme }) => theme.colors.secondary,
    border: "transparent",
    color: "#fff",
  },
  tertiary: {
    background: ({ theme }) => theme.colors.tertiary,
    border: "transparent",
    color: "#fff",
  },
};

export const Button = ({
  text,
  type = "primary",
  href,
  onClick,
  width = "auto",
  loading = false,
  disabled = false,
}) => {
  const btnStyle = buttonsType[type];
  return (
    <Container
      href={href}
      onClick={() => onClick()}
      width={width}
      background={btnStyle.background}
      color={btnStyle.color}
      border={btnStyle.border}
      disabled={disabled}
    >
      <div className="content-button">
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin={loading}
            className="item-icon"
          />
        )}
        {text}
      </div>
    </Container>
  );
};

const Container = styled.a`
  ${({ background, color, border, width }) => css`
    width: ${width};
    padding: 0.5rem 1.1rem;
    border-radius: 0.7rem;
    border: ${border};
    background: ${background};
    color: ${color};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    font-size: 1.1rem;

    ${mediaQuery.minTablet} {
      font-size: 1.2rem;
    }

    &:hover {
      box-shadow: 2px 2px 5px #181818;
      transition: 0.5s;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        &:disabled,
        &[disabled] {
          border: #999999;
          background-color: #cccccc;
          cursor: not-allowed;
          color: #666666;
        }
      `}
    .content-button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      .item-icon {
        margin-right: 0.5rem;
      }
    }
  `}
`;
