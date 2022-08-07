import React from "react";
import styled from "styled-components";
import {
  faEnvelope,
  faMobile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const Contact = ({ title, subtitle, socialsred = [] }) => {
  return (
    <Container id="contact">
      <hr />
      <div className="content-left">
        <h2>{title}</h2>
        <h3> {subtitle}</h3>
        {/*<div className="list-items">*/}
        {/*  <ul>*/}
        {/*    <li>Teléfono</li>*/}
        {/*    <li>email</li>*/}
        {/*    <li>dirección</li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className="items-socials">
          <ul>
            {socialsred.map((socialred, index) => (
              <li>
                <a href={socialred.href} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={socialred.icon} />
                </a>
                <p>{socialred.name}</p>
              </li>
            ))}

            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+%2F+servicio&app_absent=0"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faWhatsapp} />*/}
            {/*  </a>*/}
            {/*  <p>Whatsapp</p>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="mailto:contactos@servitec-peru.com"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faEnvelope} />*/}
            {/*  </a>*/}
            {/*  <p>Email</p>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://www.facebook.com/Servitec.chorrillos/"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faFacebook} />*/}
            {/*  </a>*/}
            {/*  <p>Facebook</p>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://youtu.be/FNMfFy4iKvg"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faMobile} />*/}
            {/*  </a>*/}
            {/*  <p>Phone</p>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://youtu.be/FNMfFy4iKvg"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faGlobe} />*/}
            {/*  </a>*/}
            {/*  <p>Dirreción</p>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
      {/*<div className="content-right">*/}
      {/*  <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="4x" />*/}
      {/*</div>*/}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 2.7rem 2.7rem 0 2.7rem;
  align-items: center;
  // grid-template-columns: 1fr;
  // grid-template-rows: 1fr 1fr;
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
            padding: 1rem 2rem;
            font-size: 4.4rem;
            border-radius: 14rem;
            background: beige;
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
