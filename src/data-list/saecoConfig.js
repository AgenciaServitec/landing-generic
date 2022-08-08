import {
  CobieneLogoLarge,
  SaecoImgAbout,
  SaecoImgAlcance,
  SaecoImgCarousel,
} from "../images";

export const saecoConfig = {
  header: {
    name: "saeco",
    title: "Sección de Apoyo Economico",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "cobertura", name: "Cobertura" },
      { id: "alcance", name: "Alcance" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "Sección de Apoyo Economico",
        imgBackground: SaecoImgCarousel,
        buttons: [
          {
            title: "Servicios",
          },
          {
            title: "Programar una Sesión",
          },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "OTORGAMIENTO DE AYUDA ECONÓMICA SOCIAL A LOS FAMILIARES DIRECTOS DEL PERSONAL COBIENE Y PERSONAL CIVIL, NOMBRADO Y CONTRATADO EN SITUACIONES DE ACTIVIDAD CON RECURSOS ASIGNADOS AL PRESUPUESTO DEL COBIENE. ",
      ],
      images: [SaecoImgAbout],
    },
    sectionCobertura: {
      tile: "COBERTURA - RUBROS",
      descriptions: [
        "* AYUDA ECONOMICA POR SERVICIO: ",
        "* PAGO DE SEVICIOS MEDICOS, PAGO DE PENSIÓN POR ENSEÑANZA Y TERAPIAS, PAGOS DE TRATAMIENTOS DE REHABILITACIÓN FISICA, PSICOLOGICA Y PSIQUIATRA. ",
        "* AYUDA ECONOMICA POR ADQUISIONES:",
        "* ADQUISICIÓN DE ALIMENTOS: SOBRE ALIMENTACIÓN Y SUPLEMENTOS NUTRICIONALES",
        "* ADQUISICIÓN DE MATERIAL INSUMOS E INSTRUMENTAL (SILLA DE RUEDAS, AUDIFONOS, ZAPATOS ORTOPEDICOS, MEDICINAS, PAÑALES, MULETAS, ANDADORES).",
      ],
      images: [SaecoImgAlcance],
    },
    sectionAlcance: {
      title: "ALCANCE",
      descriptions: [
        "* FAMILIARES DIRECTOS DEL TITULAR (ESPOSO(A)), HIJOS Y POR UNICA VEZ A LOS PADRES",
        "* MONTO",
        "* MAXIMO 2 UIT",
      ],
      images: [SaecoImgAlcance],
    },
  },
  footer: {},
};
