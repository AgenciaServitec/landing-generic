import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { SaedAboutUs } from "../../images";

export const AboutUs = () => {
    return (
        <Container id="about-us">
            <div className="content-items">
                <div className="content">
                    <div className="heading">
                        <h2 className="title">Profesionales confiables</h2>
                    </div>
                    <div className="description">
                        <p>
                            Somos un grupo de instituciones educativas que forman estudiantes
                            con alto rendimiento académico mediante un Sistema de Educación
                            basado en la comprensión del conocimiento, la disciplina y la
                            Investigación, con la finalidad de que sean capaces de enfrentar
                            con éxito cualquier problema.
                        </p>
                        <p>
                            El departamento de apoyo educativo realiza la suscripción de
                            convenios educativos; otorgamiento de becas, etc.
                        </p>
                    </div>
                    <div className="button">
                        <Button text="Contáctanos" type="tertiary" />
                    </div>
                </div>
                <div className="content-image">
                    <img src={SaedAboutUs} className="item-image" alt="about us" />
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
  }
  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.7rem;
    padding: 3rem 0.5rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }
    .title {
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .description {
      max-width: 40rem;
      font-weight: 500;
    }
  }
  .content-image {
    .item-image {
      width: 100%;
      height: 100%;
    }
  }
`;