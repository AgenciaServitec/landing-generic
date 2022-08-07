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
import { useTemplateConfig } from "../../providers";
import { saedConfig } from "../../data-list";

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
  const { templateConfig } = useTemplateConfig();

  const sectionAboutUs = templateConfig.main.sectionAbout;
  const sectionComponentImages = templateConfig.contentImages;

  const cardsConventions = saedConfig.main.sectionConvenios;
  const cardsInstitutes = saedConfig.main.sectionInstitutes;

  return (
    <>
      <Container>
        <Carousel carouselItems={templateConfig.main.sectionCarousel} />
        <AboutUs
          title={sectionAboutUs.title}
          descriptions={sectionAboutUs.descriptions}
          buttons={sectionAboutUs.buttons}
          images={sectionAboutUs.images}
        />
        <ComponentImages
          title={sectionComponentImages.title}
          images={sectionComponentImages.images}
        />
        {/*<Banner />*/}
        <ListItems
          title={cardsConventions.title}
          items={cardsConventions.cards}
        />
        <ListItems
          title={cardsInstitutes.title}
          items={cardsInstitutes.cards}
        />
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
