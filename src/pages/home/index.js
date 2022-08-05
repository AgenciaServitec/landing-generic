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

const temporalListConvenions = [
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
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
