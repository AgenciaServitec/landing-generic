import React from "react";
import styled from "styled-components";
import {
  AboutUs,
  Banner,
  Carousel,
  Contact,
  ListItems,
} from "../../components";
import { AgrariaLogo, CientificaDelSur } from "../../images";
import { ComponentImages } from "../../components/home/ComponentImages";

const temporalListConvenions = [
  {
    title: "Agraria",
    image: AgrariaLogo,
  },
  {
    title: "Cientifica del Sur",
    image: CientificaDelSur,
  },
  {
    title: "Agraria",
    image: AgrariaLogo,
  },
  {
    title: "Cientifica del Sur",
    image: CientificaDelSur,
  },
];

export const Home = () => {
  return (
    <>
      <Container>
        <Carousel />
        <AboutUs />
        <Banner />
        <ListItems title="CONVENIOS" items={temporalListConvenions} />
        <ListItems title="INSTITUTOS" items={temporalListConvenions} />
        <Contact />
        <ComponentImages />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
