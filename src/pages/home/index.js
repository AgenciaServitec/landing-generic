import React from "react";
import styled from "styled-components";
import {
  SectionInlineBlock,
  Carousel,
  Contact,
  ListItems,
  CardsBlack,
  ComponentImages,
  SectionCollage,
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
  const collageImages = templateConfig.main.collageImages || false;
  const sectionCampus = templateConfig.main.sectionCampus || false;
  const sectionSchoolsLima = templateConfig.main.sectionSchoolsLima || false;
  const sectionProvinceSchools =
    templateConfig.main.sectionProvinceSchools || false;
  const sectionCollage = templateConfig.main.sectionCollage || false;
  const sectionCobertura = templateConfig.main.sectionCobertura || false;
  const sectionAlcance = templateConfig.main.sectionAlcance || false;

  return (
    <>
      <Container>
        <Carousel carouselItems={sectionCarousel} />
        {(sectionAboutUs || sectionAboutUs.images) && (
          <SectionInlineBlock
            title={sectionAboutUs.title}
            subTitle={sectionAboutUs.subTitle}
            descriptions={sectionAboutUs.descriptions}
            buttons={sectionAboutUs.buttons}
            images={sectionAboutUs.images}
          />
        )}

        {(sectionOther || sectionOther.images) && (
          <SectionInlineBlock
            title={sectionOther.title}
            descriptions={sectionOther.descriptions}
            buttons={sectionOther.buttons}
            images={sectionOther.images}
          />
        )}

        {collageImages && <SectionCollage images={collageImages} />}
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
          <SectionInlineBlock
            title={sectionCobertura.title}
            descriptions={sectionCobertura.descriptions}
            buttons={sectionCobertura.buttons}
            images={sectionCobertura.images}
          />
        )}

        {(sectionAlcance || sectionAlcance.images) && (
          <SectionInlineBlock
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

        {/*<Banner />*/}
        {(cardsConventions || cardsConventions.cards) && (
          <ListItems
            title={cardsConventions.title}
            items={cardsConventions.cards}
          />
        )}

        {(cardsInstitutes || cardsInstitutes.cards) && (
          <ListItems
            title={cardsInstitutes.title}
            items={cardsInstitutes.cards}
          />
        )}
        {(sectionSchoolsLima || sectionSchoolsLima.cards) && (
          <ListItems
            title={sectionSchoolsLima.title}
            items={sectionSchoolsLima.cards}
          />
        )}
        {(sectionProvinceSchools || sectionProvinceSchools.cards) && (
          <ListItems
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
