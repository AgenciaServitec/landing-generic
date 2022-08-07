import React from "react";
import styled from "styled-components";
import { AboutUs, Carousel, Contact, ListItems } from "../../components";
import { ComponentImages } from "../../components/home/ComponentImages";
import { useTemplateConfig } from "../../providers";
import { saedConfig } from "../../data-list";

export const Home = () => {
  const { templateConfig } = useTemplateConfig();

  const sectionAboutUs = templateConfig.main.sectionAbout;
  const sectionComponentImages = templateConfig.contentImages;
  const cardsConventions = saedConfig.main.sectionConvenios;
  const cardsInstitutes = saedConfig.main.sectionInstitutes;

  const sectionContact = saedConfig.sectionContact;
  return (
    <>
      <Container>
        <Carousel carouselItems={templateConfig.main.sectionCarousel} />
        {sectionAboutUs && (
          <AboutUs
            title={sectionAboutUs.title}
            descriptions={sectionAboutUs.descriptions}
            buttons={sectionAboutUs.buttons}
            images={sectionAboutUs.images}
          />
        )}
        {sectionComponentImages && (
          <ComponentImages
            title={sectionComponentImages.title}
            images={sectionComponentImages.images}
          />
        )}
        {/*<Banner />*/}
        {cardsConventions && (
          <ListItems
            title={cardsConventions.title}
            items={cardsConventions.cards}
          />
        )}
        {cardsInstitutes && (
          <ListItems
            title={cardsInstitutes.title}
            items={cardsInstitutes.cards}
          />
        )}
        <Contact
          title={sectionContact.title}
          subtitle={sectionContact.subtitle}
          socialsRed={sectionContact.socialsRed}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
