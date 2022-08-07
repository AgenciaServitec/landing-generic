import {
  CmstsCarousel,
  CmstsCollage1,
  CmstsCollage2,
  CmstsCollage3,
  CmstsSedeChorillos1,
  CmstsSedeChorillos2,
  CmstsSedeRimac,
  CmstsSedeTarapaca,
  CmstsServices,
  CobieneLogoLarge,
} from "../images";

export const cmstsConfig = {
  header: {
    name: "cmsts",
    title: "Círculo Militar Supervisores Técnicos de Sub Oficiales",
    logoImg: CobieneLogoLarge,
    menuHeader: ["Servicios", "Sedes"],
  },
  main: {
    sectionCarousel: [
      {
        title: "Círculo Militar Supervisores Técnicos de Sub Oficiales.",
        imgBackground: CmstsCarousel,
        buttons: [
          {
            title: "Nuestros Servicios",
          },
          {
            title: "Sedes",
          },
        ],
      },
    ],
    sectionServices: {
      title: "DISFRUTA LO QUE BRINDA LA ASOCIACIÓN CMSTS",
      list: [
        "SALONES PARA EVENTOS.",
        "RESTAURANTE.",
        "AROBICOS.",
        "KARATE.",
        "CANCHAS SINTETICA.",
        "ZONA DE PARRILLAS.",
        "HOSPEDAJE.",
        "PISCINA OLIMPICA/SEMIOLIMPICA.",
        "PAINTBALL",
      ],
      image: CmstsServices,
    },
    sectionCampus: [
      {
        title: "SEDE CHORRILLOS",
        content: [
          {
            image: CmstsSedeChorillos1,
            description:
              "CONTAMOS CON UN SALÓN PRINCIPAL Y ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA SEMI OLÍMPICA.",
          },
          {
            image: CmstsSedeChorillos2,
            description:
              "CONTAMOS CON UNA TERRAZA, UN SALÓN MULTIUSO, LA CABAÑA DEL GUERRERO, SALÓN ALFA Y BRAVO PARA REALIZAR TODO TIPO DE EVENTOS Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
          },
        ],
      },
      {
        title: "SEDE TARAPACA",
        content: [
          {
            image: CmstsSedeTarapaca,
            description:
              "CONTAMOS CON ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA OLÍMPICA, RESTAURANTE Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
          },
          {
            image: CmstsSedeTarapaca,
            description:
              "CONTAMOS CON LOS AMBIENTES IDEALES PARA REALIZAR TODO TIPO DE EVENTOS, HOSPEDAJE Y JUEGOS DEPORTIVOS PAINTBALL.",
          },
        ],
      },
      {
        title: "SEDE RIMAC",
        content: [
          {
            image: CmstsSedeRimac,
            description:
              "Cuenta con los ambientes ideales para realizar todo tipo de eventos. Además de tener disponible la piscina semi olímpica y cancha deportiva de material sintético.",
          },
        ],
      },
    ],
    sectionCollage: {
      title: "",
      images: [CmstsCollage1, CmstsCollage2, CmstsCollage3],
    },
  },
  footer: {},
};
