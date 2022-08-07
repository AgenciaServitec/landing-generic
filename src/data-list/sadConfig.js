import {
  CobieneLogoLarge,
  SadAbout,
  SadAboutTwo,
  SadCarousel,
  SadServiceArtesania,
  SadServiceComputer,
  SadServiceCuero,
  SadServiceEstampado,
  SadServiceTejido,
  SadServiceTextil,
} from "../images";

export const sadConfig = {
  header: {
    name: "sad",
    title: "Sección de Apoyo al Discapacitado",
    logoImg: CobieneLogoLarge,
    menuHeader: ["Inicio", "Nosotros", "Especialidades"],
  },
  main: {
    sectionCarousel: [
      {
        title: "Jefatura de APOYO AL DISCAPACITADO.",
        imgBackground: SadCarousel,
        buttons: [
          {
            title: "Nosotros",
          },
          {
            title: "Especialidades Técnicas",
          },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      description: [
        "La Sección de Apoyo al Personal con Discapacidad (SAD), brindará orientación y/o capacitación al personal militar pensionista en la condición de discapacidad sobre: salud, educación, pensión y otros beneficios que por ley le corresponda a fin de contribuir en el bienestar de la familia militar.",
        "Las Actividades de bienestar se desarrolla de acuerdo a lo programado por la COBIENE, realizando las coordinaciones con entidades públicas y privadas, para el mejoramiento de la calidad en la atención del personal con discapacidad",
        "Se brinda atención y se viene empadronando y actualizando lo datos del personal militar con discapacidad, así como la de sus familiares directos, a quienes se les informa respecto a la Ley Na 29487 (Ley que otorga prestaciones de salud gratuita al personal con discapacidad de las FFAA y sus familiares directos)",
      ],
      img: [SadAbout, SadAboutTwo],
    },
    sectionServices: {
      title: "Especialidades :",
      card: [
        {
          img: SadServiceEstampado,
          title: "Estampado",
        },
        {
          img: SadServiceTejido,
          title: "Tejido Manual",
        },
        {
          img: SadServiceArtesania,
          title: "Artesanía – Manualidades",
        },
        {
          img: SadServiceTextil,
          title: "Confección Textil",
        },
        {
          img: SadServiceComputer,
          title: "Computación",
        },
        {
          img: SadServiceCuero,
          title: "Cuero y Calzado",
        },
      ],
    },
  },
  footer: {},
};
