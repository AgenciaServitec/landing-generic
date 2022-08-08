import React from "react";
import styled from "styled-components";
import {
  CardsInlineBlock,
  Carousel,
  Contact,
  ListCards,
  CardsBlack,
  ComponentImages,
  Collage,
} from "../../components";
import { useTemplateConfig } from "../../providers";

export const Home = () => {
  const { templateConfig } = useTemplateConfig();

  const sectionCarousel = templateConfig.main.sectionCarousel;
  const sectionAboutUs = templateConfig.main.sectionAbout || false;
  const sectionOther = templateConfig.main.sectionOther || false;
  const sectionContentImages = templateConfig.main.contentImages || false;
  const cardsConventions = templateConfig.main.sectionConvenios || false;
  const cardsInstitutes = templateConfig.main.sectionInstitutes || false;
  const sectionContact = templateConfig.sectionContact || false;
  const sectionServices = templateConfig.main.sectionServices || false;
  const collageImages = templateConfig.main.collageImages || false;
  const sectionCampus = templateConfig.main.sectionCampus || false;
  const sectionSchoolsLima = templateConfig.main.sectionSchoolsLima || false;
  const sectionProvinceSchools =
    templateConfig.main.sectionProvinceSchools || false;
  const sectionCollage = templateConfig.main.sectionCollage || false;
  const sectionCobertura = templateConfig.main.sectionCobertura || false;
  const sectionAlcance = templateConfig.main.sectionAlcance || false;
  const sectionMap = templateConfig.main.sectionMap || false;
  const sectionRequirements = templateConfig.main.sectionRequirements || false;

  return (
    <>
      <Container>
        <Carousel carouselItems={sectionCarousel} />
        {(sectionAboutUs || sectionAboutUs.images) && (
          <CardsInlineBlock
            title={sectionAboutUs.title}
            subTitle={sectionAboutUs.subTitle}
            descriptions={sectionAboutUs.descriptions}
            buttons={sectionAboutUs.buttons}
            images={sectionAboutUs.images}
          />
        )}
        {(sectionServices || sectionServices.cards) && (
          <ListCards
            title={sectionServices.title}
            items={sectionServices.cards}
          />
        )}

        {(sectionOther || sectionOther.images) && (
          <CardsInlineBlock
            title={sectionOther.title}
            descriptions={sectionOther.descriptions}
            buttons={sectionOther.buttons}
            images={sectionOther.images}
          />
        )}

        {collageImages && <Collage images={collageImages} />}
        {sectionCampus && <CardsBlack cards={sectionCampus} />}

        {sectionCollage && (
          <ComponentImages
            title={sectionCollage.title}
            images={sectionCollage.images}
          />
        )}

        {/*{(sectionCampus || sectionCampus.images) && (*/}
        {/*  <AboutUs*/}
        {/*    title={sectionCampus.title}*/}
        {/*    descriptions={sectionCampus.descriptions}*/}
        {/*    buttons={sectionCampus.buttons}*/}
        {/*    images={sectionCampus.images}*/}
        {/*  />*/}
        {/*)}*/}

        {(sectionCobertura || sectionCobertura.images) && (
          <CardsInlineBlock
            title={sectionCobertura.title}
            descriptions={sectionCobertura.descriptions}
            buttons={sectionCobertura.buttons}
            images={sectionCobertura.images}
          />
        )}

        {(sectionAlcance || sectionAlcance.images) && (
          <CardsInlineBlock
            title={sectionAlcance.title}
            descriptions={sectionAlcance.descriptions}
            buttons={sectionAlcance.buttons}
            images={sectionAlcance.images}
          />
        )}

        {(sectionContentImages || sectionContentImages.images) && (
          <ComponentImages
            title={sectionContentImages.title}
            images={sectionContentImages.images}
          />
        )}

        {(sectionRequirements || sectionRequirements.cards) && (
          <ListCards
            title={sectionRequirements.title}
            items={sectionRequirements.cards}
          />
        )}

        {(sectionMap || sectionMap.images) && (
          <ComponentImages
            title={sectionMap.title}
            images={sectionMap.images}
            type="secondary"
          />
        )}

        {/*<Banner />*/}
        {(cardsConventions || cardsConventions.cards) && (
          <ListCards
            title={cardsConventions.title}
            items={cardsConventions.cards}
            type="secondary"
          />
        )}

        {(cardsInstitutes || cardsInstitutes.cards) && (
          <ListCards
            title={cardsInstitutes.title}
            items={cardsInstitutes.cards}
            type="secondary"
          />
        )}
        {(sectionSchoolsLima || sectionSchoolsLima.cards) && (
          <ListCards
            title={sectionSchoolsLima.title}
            items={sectionSchoolsLima.cards}
          />
        )}
        {(sectionProvinceSchools || sectionProvinceSchools.cards) && (
          <ListCards
            title={sectionProvinceSchools.title}
            items={sectionProvinceSchools.cards}
          />
        )}
        {(sectionContact || sectionContact.socialsRed) && (
          <Contact
            title={sectionContact.title}
            subtitle={sectionContact.subtitle}
            socialsRed={sectionContact.socialsRed}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
