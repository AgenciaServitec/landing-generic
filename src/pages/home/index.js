import React, { useState } from "react";
import styled from "styled-components";
import {
  CardsInlineBlock,
  Carousel,
  Contact,
  ListCards,
  CardsBlack,
  ComponentImages,
  Collage,
  SuggestionsComplaints,
} from "../../components";
import { useTemplateConfig } from "../../providers";
import { useAgreementsApi } from "../../hooks/useAgreementApi";
import {Input} from "../../components/ui";

export const Home = () => {
  const { templateConfig, templateType } = useTemplateConfig();
  const { agreementsData } = useAgreementsApi(templateType);

  // --- NUEVO: Estado para el buscador ---
  const [searchTerm, setSearchTerm] = useState("");

  const isApoyoSocial = templateType === "apoyoSocial";
  const isSaed = templateType === "saed";

  const sectionCarousel = templateConfig.main.sectionCarousel;
  const sectionAboutUs = templateConfig.main.sectionAbout || false;
  const sectionBanner = templateConfig.main.sectionBanner || false;
  const sectionSetPro = templateConfig.main.sectionSetPro || false;
  const sectionOther = templateConfig.main.sectionOther || false;
  const sectionContentImages = templateConfig.main.contentImages || false;
  const cardsConventions = templateConfig.main.sectionConvenios || false;
  const cardsInstitutes = templateConfig.main.sectionInstitutes || false;
  const sectionLanguageInstitutes = templateConfig.main.sectionLanguageInstitutes || false;
  const sectionSuggestionsComplaints = templateConfig.main.sectionSuggestionsComplaints || false;
  const sectionContact = templateConfig.sectionContact || false;
  const sectionServices = templateConfig.main.sectionServices || false;
  const collageImages = templateConfig.main.collageImages || false;
  const sectionCampus = templateConfig.main.sectionCampus || false;
  const sectionSchoolsLima = templateConfig.main.sectionSchoolsLima || false;
  const sectionProvinceSchools = templateConfig.main.sectionProvinceSchools || false;
  const sectionCollages = templateConfig.main.sectionCollages || false;
  const sectionCobertura = templateConfig.main.sectionCobertura || false;
  const sectionBancosStatic = templateConfig.main.sectionBancos || false;
  const sectionSaludStatic = templateConfig.main.sectionSalud || false;
  const sectionDiversosStatic = templateConfig.main.sectionDiversos || false;
  const sectionFinancierasStatic = templateConfig.main.sectionFinancieras || false;
  const sectionLegalAdvice = templateConfig.main.sectionLegalAdvice || false;
  const sectionSegurosStatic = templateConfig.main.sectionSeguros || false;
  const sectionTransporteStatic = templateConfig.main.sectionTransporte || false;
  const sectionHotelesStatic = templateConfig.main.sectionHoteles || false;
  const sectionEvents = templateConfig.main.sectionEvents || false;
  const sectionTecnologiaStatic = templateConfig.main.sectionTecnologia || false;
  const sectionProvincial = templateConfig.main.sectionProvincial || false;
  const sectionProvincial2 = templateConfig.main.sectionProvincial2 || false;
  const sectionProvincial3 = templateConfig.main.sectionProvincial3 || false;
  const sectionProvincial4 = templateConfig.main.sectionProvincial4 || false;
  const sectionProvincial5 = templateConfig.main.sectionProvincial5 || false;
  const sectionProvincial6 = templateConfig.main.sectionProvincial6 || false;
  const sectionProvincial7 = templateConfig.main.sectionProvincial7 || false;
  const sectionProvincial8 = templateConfig.main.sectionProvincial8 || false;
  const sectionProvincial9 = templateConfig.main.sectionProvincial9 || false;
  const sectionInternacionales = templateConfig.main.sectionInternacionales || false;
  const sectionServiceRel = templateConfig.main.sectionServiceRel || false;
  const sectionAlcance = templateConfig.main.sectionAlcance || false;
  const sectionMap = templateConfig.main.sectionMap || false;
  const sectionRequirements = templateConfig.main.sectionRequirements || false;

  // --- NUEVO: Lógica de Filtrado ---
  const normalizeText = (text) =>
      text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

  const filterCards = (cards) => {
    if (!cards || !Array.isArray(cards)) return [];
    if (!searchTerm) return cards; // Si no hay búsqueda, retorna todo

    const normalizedSearchTerm = normalizeText(searchTerm);
    return cards.filter((card) => {
      const normalizedTitle = normalizeText(card.title);
      return normalizedTitle.includes(normalizedSearchTerm);
    });
  };

  // --- SE APLICÓ filterCards() A LOS ARREGLOS DE DATOS ---
  const displayBancos = {
    ...sectionBancosStatic,
    cards: filterCards(isApoyoSocial && agreementsData.bancos?.length > 0 ? agreementsData.bancos : sectionBancosStatic.cards)
  };

  const displaySalud = {
    ...sectionSaludStatic,
    cards: filterCards(isApoyoSocial && agreementsData.salud?.length > 0 ? agreementsData.salud : sectionSaludStatic.cards)
  };

  const displayDiversos = {
    ...sectionDiversosStatic,
    cards: filterCards(isApoyoSocial && agreementsData.tiendas?.length > 0 ? agreementsData.tiendas : sectionDiversosStatic.cards)
  };

  const displayFinancieras = {
    ...sectionFinancierasStatic,
    cards: filterCards(isApoyoSocial && agreementsData.financieras?.length > 0 ? agreementsData.financieras : sectionFinancierasStatic.cards)
  };

  const displaySeguros = {
    ...sectionSegurosStatic,
    cards: filterCards(isApoyoSocial && agreementsData.seguros?.length > 0 ? agreementsData.seguros : sectionSegurosStatic.cards)
  };

  const displayTransporte = {
    ...sectionTransporteStatic,
    cards: filterCards(isApoyoSocial && agreementsData.transporte?.length > 0 ? agreementsData.transporte : sectionTransporteStatic.cards)
  };

  const displayHoteles = {
    ...sectionHotelesStatic,
    cards: filterCards(isApoyoSocial && agreementsData.hoteles?.length > 0 ? agreementsData.hoteles : sectionHotelesStatic.cards)
  };

  const displayTecnologia = {
    ...sectionTecnologiaStatic,
    cards: filterCards(isApoyoSocial && agreementsData.tecnologia?.length > 0 ? agreementsData.tecnologia : sectionTecnologiaStatic.cards)
  };

  const displayUniversidades = {
    ...cardsConventions,
    cards: filterCards(isSaed && agreementsData.universidades?.length > 0 ? agreementsData.universidades : cardsConventions?.cards)
  };

  const displayInstitutos = {
    ...cardsInstitutes,
    cards: filterCards(isSaed && agreementsData.institutos?.length > 0 ? agreementsData.institutos : cardsInstitutes?.cards)
  };

  const displayInstitutosIdiomas = {
    ...sectionLanguageInstitutes,
    cards: filterCards(isSaed && agreementsData.institutosIdiomas?.length > 0 ? agreementsData.institutosIdiomas : sectionLanguageInstitutes?.cards)
  };

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
          {sectionBanner && (
              <a href="https://micarrera.trabajo.gob.pe/" target="_blank" rel="noreferrer">
                <img src={sectionBanner.image} alt="" />
              </a>
          )}
          <SearchContainer>
            <Input
                type="text"
                label=""
                placeholder="Buscar por nombre de convenio"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          {sectionSuggestionsComplaints && (
              <SuggestionsComplaints title={sectionSuggestionsComplaints.title} />
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
              <ListCards title={sectionServices.title} items={sectionServices.cards} />
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

          {(displayBancos.cards && displayBancos.cards.length > 0) && (
              <ListCards id={displayBancos.id} title={displayBancos.title} titleImage={displayBancos.titleImage} items={displayBancos.cards} type="secondary" />
          )}

          {(displaySalud.cards && displaySalud.cards.length > 0) && (
              <ListCards title={displaySalud.title} items={displaySalud.cards} type="secondary" />
          )}

          {(displaySeguros.cards && displaySeguros.cards.length > 0) && (
              <ListCards title={displaySeguros.title} items={displaySeguros.cards} type="secondary" />
          )}

          {(displayDiversos.cards && displayDiversos.cards.length > 0) && (
              <ListCards title={displayDiversos.title} items={displayDiversos.cards} type="secondary" />
          )}

          {(displayHoteles.cards && displayHoteles.cards.length > 0) && (
              <ListCards title={displayHoteles.title} items={displayHoteles.cards} type="secondary" />
          )}

          {(displayTecnologia.cards && displayTecnologia.cards.length > 0) && (
              <ListCards title={displayTecnologia.title} items={displayTecnologia.cards} type="secondary" />
          )}

          {(displayFinancieras.cards && displayFinancieras.cards.length > 0) && (
              <ListCards title={displayFinancieras.title} items={displayFinancieras.cards} type="secondary" />
          )}

          {(displayTransporte.cards && displayTransporte.cards.length > 0) && (
              <ListCards title={displayTransporte.title} items={displayTransporte.cards} type="secondary" />
          )}

          {(sectionProvincial || sectionProvincial.cards) && <ListCards title={sectionProvincial.title} items={filterCards(sectionProvincial.cards)} type="secondary" />}
          {(sectionProvincial2 || sectionProvincial2.cards) && <ListCards title={sectionProvincial2.title} items={filterCards(sectionProvincial2.cards)} type="secondary" />}
          {(sectionProvincial3 || sectionProvincial3.cards) && <ListCards title={sectionProvincial3.title} items={filterCards(sectionProvincial3.cards)} type="secondary" />}
          {(sectionProvincial4 || sectionProvincial4.cards) && <ListCards title={sectionProvincial4.title} items={filterCards(sectionProvincial4.cards)} type="secondary" />}
          {(sectionProvincial5 || sectionProvincial5.cards) && <ListCards title={sectionProvincial5.title} items={filterCards(sectionProvincial5.cards)} type="secondary" />}
          {(sectionProvincial6 || sectionProvincial6.cards) && <ListCards title={sectionProvincial6.title} items={filterCards(sectionProvincial6.cards)} type="secondary" />}
          {(sectionProvincial7 || sectionProvincial7.cards) && <ListCards title={sectionProvincial7.title} items={filterCards(sectionProvincial7.cards)} type="secondary" />}
          {(sectionProvincial8 || sectionProvincial8.cards) && <ListCards title={sectionProvincial8.title} items={filterCards(sectionProvincial8.cards)} type="secondary" />}
          {(sectionProvincial9 || sectionProvincial9.cards) && <ListCards title={sectionProvincial9.title} items={filterCards(sectionProvincial9.cards)} type="secondary" />}

          {(sectionInternacionales || sectionInternacionales.cards) && (
              <ListCards title={sectionInternacionales.title} items={filterCards(sectionInternacionales.cards)} type="secondary" />
          )}

          {sectionCollages && <ComponentImages collages={sectionCollages.collages} />}

          {(sectionServiceRel || sectionServiceRel.images) && (
              <CardsInlineBlock id={sectionServiceRel.id} title={sectionServiceRel.title} titleImage={sectionServiceRel.titleImage} subTitle={sectionServiceRel.subTitle} descriptions={sectionServiceRel.descriptions} buttons={sectionServiceRel.buttons} images={sectionServiceRel.images} />
          )}

          {(sectionAlcance || sectionAlcance.images) && (
              <CardsInlineBlock title={sectionAlcance.title} descriptions={sectionAlcance.descriptions} buttons={sectionAlcance.buttons} images={sectionAlcance.images} />
          )}

          {(sectionContentImages || sectionContentImages.images) && (
              <ComponentImages title={sectionContentImages.title} images={sectionContentImages.images} />
          )}

          {(sectionRequirements || sectionRequirements.cards) && (
              <ListCards id={sectionRequirements.id} title={sectionRequirements.title} items={sectionRequirements.cards} />
          )}

          {(sectionMap || sectionMap.images) && (
              <ComponentImages title={sectionMap.title} images={sectionMap.images} type="secondary" />
          )}

          {/* --- Renderizados SAED filtrados --- */}
          {(displayUniversidades.cards && displayUniversidades.cards.length > 0) && (
              <ListCards id={displayUniversidades.id} title={displayUniversidades.title || "Universidades"} items={displayUniversidades.cards} type="secondary" />
          )}

          {(displayInstitutos.cards && displayInstitutos.cards.length > 0) && (
              <ListCards title={displayInstitutos.title || "Institutos"} items={displayInstitutos.cards} type="secondary" />
          )}

          {(displayInstitutosIdiomas.cards && displayInstitutosIdiomas.cards.length > 0) && (
              <ListCards id={displayInstitutosIdiomas.id} title={displayInstitutosIdiomas.title || "Institutos de Idiomas"} items={displayInstitutosIdiomas.cards} type="secondary" />
          )}

          {(sectionSchoolsLima || sectionSchoolsLima.cards) && (
              <ListCards id={sectionSchoolsLima.id} title={sectionSchoolsLima.title} items={filterCards(sectionSchoolsLima.cards)} type="secondary" />
          )}
          {(sectionProvinceSchools || sectionProvinceSchools.cards) && (
              <ListCards id={sectionProvinceSchools.id} title={sectionProvinceSchools.title} items={filterCards(sectionProvinceSchools.cards)} type="secondary" />
          )}

          {(sectionContact || sectionContact.socialsRed) && (
              <Contact title={sectionContact.title} subtitle={sectionContact.subtitle} socialsRed={sectionContact.socialsRed} values={sectionContact.values} />
          )}
        </Container>
      </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;

  img {
    width: 100%;
  }
`;

// --- NUEVO: Estilos para el contenedor del buscador ---
const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  
  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 8px;
    border: 2px solid #ccc;
    outline: none;
    transition: border-color 0.3s;
    
    &:focus {
      border-color: #0076fd; // O el color principal de tu tema
    }
  }
`;