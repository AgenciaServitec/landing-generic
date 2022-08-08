import React from "react";
import styled from "styled-components";
import {
  AboutUs,
  Carousel,
  Contact,
  ListItems,
  CardsBlack,
  ComponentImages,
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
  const sectionCampus = templateConfig.main.sectionCampus || false;
  const sectionSchoolsLima = templateConfig.main.sectionSchoolsLima || false;
  const sectionProvinceSchools =
    templateConfig.main.sectionProvinceSchools || false;
  const sectionCollage = templateConfig.main.sectionCollage;

  console.log("sectionContact->", sectionContact);

  return (
    <>
      <Container>
        <Carousel carouselItems={sectionCarousel} />
        {(sectionAboutUs || sectionAboutUs.images) && (
          <AboutUs
            title={sectionAboutUs.title}
            subTitle={sectionAboutUs.subTitle}
            descriptions={sectionAboutUs.descriptions}
            buttons={sectionAboutUs.buttons}
            images={sectionAboutUs.images}
          />
        )}

        {(sectionOther || sectionOther.images) && (
          <AboutUs
            title={sectionOther.title}
            descriptions={sectionOther.descriptions}
            buttons={sectionOther.buttons}
            images={sectionOther.images}
          />
        )}

        {(sectionServices || sectionServices.images) && (
          <AboutUs
            title={sectionServices.title}
            descriptions={sectionServices.descriptions}
            buttons={sectionServices.buttons}
            images={sectionServices.images}
          />
        )}
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
