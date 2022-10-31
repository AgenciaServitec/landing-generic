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
  const sectionSetPro = templateConfig.main.sectionSetPro || false;
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
  const sectionCollages = templateConfig.main.sectionCollages || false;
  const sectionCobertura = templateConfig.main.sectionCobertura || false;
  const sectionBancos = templateConfig.main.sectionBancos || false;
  const sectionSalud = templateConfig.main.sectionSalud || false;
  const sectionDiversos = templateConfig.main.sectionDiversos || false;
  const sectionFinancieras = templateConfig.main.sectionFinancieras || false;
  const sectionSeguros = templateConfig.main.sectionSeguros || false;
  const sectionTransporte = templateConfig.main.sectionTransporte || false;
  const sectionHoteles = templateConfig.main.sectionHoteles || false;
  const sectionTecnologia = templateConfig.main.sectionTecnologia || false;
  const sectionProvincial = templateConfig.main.sectionProvincial || false;
  const sectionProvincial2 = templateConfig.main.sectionProvincial2 || false;
  const sectionProvincial3 = templateConfig.main.sectionProvincial3 || false;
  const sectionProvincial4 = templateConfig.main.sectionProvincial4 || false;
  const sectionProvincial5 = templateConfig.main.sectionProvincial5 || false;
  const sectionProvincial6 = templateConfig.main.sectionProvincial6 || false;
  const sectionProvincial7 = templateConfig.main.sectionProvincial7 || false;
  const sectionProvincial8 = templateConfig.main.sectionProvincial8 || false;
  const sectionProvincial9 = templateConfig.main.sectionProvincial9 || false;
  const sectionInternacionales =
    templateConfig.main.sectionInternacionales || false;

  const sectionServiceRel = templateConfig.main.sectionServiceRel || false;

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
            id={sectionAboutUs.id}
            subTitle={sectionAboutUs.subTitle}
            descriptions={sectionAboutUs.descriptions}
            buttons={sectionAboutUs.buttons}
            images={sectionAboutUs.images}
          />
        )}
        {(sectionSetPro || sectionSetPro.images) && (
          <CardsInlineBlock
            title={sectionSetPro.title}
            subTitle={sectionSetPro.subTitle}
            direction={sectionSetPro.direction}
            descriptions={sectionSetPro.descriptions}
            buttons={sectionSetPro.buttons}
            images={sectionSetPro.images}
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
        {(sectionCobertura || sectionCobertura.images) && (
          <CardsInlineBlock
            id={sectionCobertura.id}
            title={sectionCobertura.title}
            descriptions={sectionCobertura.descriptions}
            buttons={sectionCobertura.buttons}
            images={sectionCobertura.images}
          />
        )}
        {sectionCollages && (
          <ComponentImages collages={sectionCollages.collages} />
        )}
        {(sectionBancos || sectionBancos.cards) && (
          <ListCards
            id={sectionBancos.id}
            title={sectionBancos.title}
            titleImage={sectionBancos.titleImage}
            items={sectionBancos.cards}
            type="secondary"
          />
        )}
        {(sectionSalud || sectionSalud.cards) && (
          <ListCards
            title={sectionSalud.title}
            items={sectionSalud.cards}
            type="secondary"
          />
        )}
        {(sectionDiversos || sectionDiversos.cards) && (
          <ListCards
            title={sectionDiversos.title}
            items={sectionDiversos.cards}
            type="secondary"
          />
        )}
        {(sectionFinancieras || sectionFinancieras.cards) && (
          <ListCards
            title={sectionFinancieras.title}
            items={sectionFinancieras.cards}
            type="secondary"
          />
        )}
        {(sectionSeguros || sectionSeguros.images) && (
          <ListCards
            title={sectionSeguros.title}
            items={sectionSeguros.cards}
            type="secondary"
          />
        )}
        {(sectionTransporte || sectionTransporte.cards) && (
          <ListCards
            title={sectionTransporte.title}
            items={sectionTransporte.cards}
            type="secondary"
          />
        )}
        {(sectionHoteles || sectionHoteles.cards) && (
          <ListCards
            title={sectionHoteles.title}
            items={sectionHoteles.cards}
            type="secondary"
          />
        )}
        {(sectionTecnologia || sectionTecnologia.cards) && (
          <ListCards
            title={sectionTecnologia.title}
            items={sectionTecnologia.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial || sectionProvincial.cards) && (
          <ListCards
            title={sectionProvincial.title}
            items={sectionProvincial.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial2 || sectionProvincial2.cards) && (
          <ListCards
            title={sectionProvincial2.title}
            items={sectionProvincial2.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial3 || sectionProvincial3.cards) && (
          <ListCards
            title={sectionProvincial3.title}
            items={sectionProvincial3.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial4 || sectionProvincial4.cards) && (
          <ListCards
            title={sectionProvincial4.title}
            items={sectionProvincial4.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial5 || sectionProvincial5.cards) && (
          <ListCards
            title={sectionProvincial5.title}
            items={sectionProvincial5.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial6 || sectionProvincial6.cards) && (
          <ListCards
            title={sectionProvincial6.title}
            items={sectionProvincial6.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial7 || sectionProvincial7.cards) && (
          <ListCards
            title={sectionProvincial7.title}
            items={sectionProvincial7.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial8 || sectionProvincial8.cards) && (
          <ListCards
            title={sectionProvincial8.title}
            items={sectionProvincial8.cards}
            type="secondary"
          />
        )}
        {(sectionProvincial9 || sectionProvincial9.cards) && (
          <ListCards
            title={sectionProvincial9.title}
            items={sectionProvincial9.cards}
            type="secondary"
          />
        )}
        {(sectionInternacionales || sectionInternacionales.cards) && (
          <ListCards
            title={sectionInternacionales.title}
            items={sectionInternacionales.cards}
            type="secondary"
          />
        )}
        {(sectionServiceRel || sectionServiceRel.images) && (
          <CardsInlineBlock
            id={sectionServiceRel.id}
            title={sectionServiceRel.title}
            titleImage={sectionServiceRel.titleImage}
            subTitle={sectionServiceRel.subTitle}
            descriptions={sectionServiceRel.descriptions}
            buttons={sectionServiceRel.buttons}
            images={sectionServiceRel.images}
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
            id={sectionRequirements.id}
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
            id={cardsConventions.id}
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
            id={sectionSchoolsLima.id}
            title={sectionSchoolsLima.title}
            items={sectionSchoolsLima.cards}
            type="secondary"
          />
        )}
        {(sectionProvinceSchools || sectionProvinceSchools.cards) && (
          <ListCards
            id={sectionProvinceSchools.id}
            title={sectionProvinceSchools.title}
            items={sectionProvinceSchools.cards}
            type="secondary"
          />
        )}
        {(sectionContact || sectionContact.socialsRed) && (
          <Contact
            title={sectionContact.title}
            subtitle={sectionContact.subtitle}
            socialsRed={sectionContact.socialsRed}
            values={sectionContact.values}
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
