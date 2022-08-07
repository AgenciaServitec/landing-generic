import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const Contact = ({ title, subtitle, socialsRed = [] }) => {
  return (
    <Container id="contact">
      <hr />
      <div className="content-left">
        <h2>{title}</h2>
        <h3> {subtitle}</h3>
        <div className="items-socials">
          <ul>
            {socialsRed.map((socialRed, index) => (
              <li key={index}>
                <a href={socialRed.href} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={socialRed.icon} />
                </a>
                <p>{socialRed.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 2.7rem 2.7rem 0 2.7rem;
  align-items: center;
  ${mediaQuery.minTablet} {
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
  }
  hr {
    height: 2px;
    width: 32%;
    background: #010a06;
    display: flex;
    margin: auto;
  }

  .content-left {
    text-align: center;
    font-size: 1rem;

    h2 {
      font-weight: bolder;
      font-size: 2.5rem;
      margin-top: 6rem;
    }

    h3 {
      color: dimgray;
    }

    .list-items {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }

    .items-socials {
      width: 100%;
      margin: 3rem auto;

      ul {
        list-style: none;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;

        li {
          text-align: center;
          margin: 0 1rem 1.7rem 2rem;

          a {
            color: inherit;
            font-size: 4.4rem;
            border-radius: 14rem;
            width: 7rem;
            height: 7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${({ theme }) => theme.colors.light};
          }

          p {
            margin-top: 1rem;
            margin-bottom: 1em;
          }

          &:last-child {
            span {
              border-right: none;
            }
          }
        }
      }
    }
  }

  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
