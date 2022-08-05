import React from "react";
import styled from "styled-components";
import {
  faEnvelope,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const Contact = () => {
  return (
    <Container id="contact">
      <div className="content-left">
        <h2>CONTÁCTANOS</h2>

        <div className="list-items">
          <ul>
            <li>Teléfono</li>
            <li>email</li>
            <li>dirección</li>
          </ul>
        </div>
        <div className="items-socials">
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+%2F+servicio&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a
                href="mailto:contactos@servitec-peru.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Servitec.chorrillos/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/FNMfFy4iKvg"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-right">
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="4x" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1.7rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  ${mediaQuery.minTablet} {
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
  }
  .content-left {
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

        li {
          margin-bottom: 1.7rem;

          a {
            color: inherit;
            padding: 0 1rem;
            font-size: 2.5rem;
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
