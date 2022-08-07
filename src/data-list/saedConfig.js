import {
  CobieneLogoLarge,
  Institute1,
  Institute10,
  Institute11,
  Institute12,
  Institute13,
  Institute14,
  Institute15,
  Institute16,
  Institute17,
  Institute18,
  Institute19,
  Institute2,
  Institute20,
  Institute21,
  Institute22,
  Institute23,
  Institute24,
  Institute25,
  Institute26,
  Institute27,
  Institute3,
  Institute4,
  Institute5,
  Institute6,
  Institute7,
  Institute8,
  Institute9,
  SaedAboutUs,
  SaedBannePublic,
  SaedSlider1,
  UniversidadAgraria,
  UniversidadCatolica,
  UniversidadCatolicaSedeSapientiale,
  UniversidadCesarVallejo,
  UniversidadDelPacifico,
  UniversidadESAN,
  UniversidadMarcelinO,
  UniversidadPeruanadeCiencias,
  UniversidadPrivadadelNorte,
  UniversidadRicardoPalma,
  UniversidadSanJuanBautista,
  UniversidadSanMarcos,
  UniversidadSanmartinPorres,
  UniversidadSeñorSipan,
  UniversidadSnIgnacioLoyola,
  UniversidadUnifeSagradoCorazon,
  UniversidadUtp,
} from "../images";

export const saedConfig = {
  header: {
    name: "saed",
    title: "Sección de Apoyo Educativo",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "information", name: "INFORMACIÓN" },
      { id: "contact", name: "CONTÁCTANOS" },
    ],
  },
  main: {
    sectionCarousel: {
      title: "SECCIÓN DE APOYO EDUCATIVO.",
      imgBackground: SaedSlider1, //AQUI VA IMAGEN
      buttons: [
        {
          title: "Nosotros",
        },
        {
          title: "Información",
        },
      ],
    },
    sectionAbout: {
      title: "Nosotros",
      description: [
        "Profesionales confiables\n" +
          "Somos un grupo de instituciones educativas que forman estudiantes con alto rendimiento académico mediante un Sistema de Educación basado en la comprensión del conocimiento, la disciplina y la Investigación, con la finalidad de que sean capaces de enfrentar con éxito cualquier problema.\n" +
          "\n" +
          "El departamento de apoyo educativo realiza la suscripción de convenios educativos; otorgamiento de becas, etc.",
      ],
      img: [SaedAboutUs, SaedBannePublic],
    },
    sectionConvenios: {
      title: "Universidades :",
      cards: [
        {
          img: UniversidadAgraria,
          title: "Agraria",
        },
        // {
        //   img: UniversidadCientifica,
        //   title: "Cientifica del sur",
        // },
        {
          img: UniversidadCatolica,
          title: "Catolica del Perú",
        },
        {
          img: UniversidadCesarVallejo,
          title: "Cesar Vallejo",
        },
        {
          img: UniversidadESAN,
          title: "ESAN",
        },
        // {
        //   img: UniversidadJaimeBausate,
        //   title: "Jaime Bausate Mesa",
        // },
        {
          img: UniversidadMarcelinO,
          title: "Marcelino CHAMPAGNAT",
        },
        // {
        //   img: UniversidadNorbert,
        //   title: "NORBERT WIENER",
        // },
        {
          img: UniversidadDelPacifico,
          title: "DEL PACIFICO",
        },
        {
          img: UniversidadRicardoPalma,
          title: "RICARDO PALMA",
        },
        {
          img: UniversidadSnIgnacioLoyola,
          title: "SAN IGNACIO DE LOYOLA",
        },
        {
          img: UniversidadSanJuanBautista,
          title: "SAN JUAN BAUTISTA",
        },
        {
          img: UniversidadSanmartinPorres,
          title: "SAN MARTIN DE PORRES",
        },
        {
          img: UniversidadSanMarcos,
          title: "SAN MARCOS FACULTAD CC. ECONOMICAS",
        },
        {
          img: UniversidadSeñorSipan,
          title: "SEÑOR DE SIPAN",
        },
        {
          img: UniversidadUtp,
          title: "UTP",
        },
        {
          img: UniversidadCatolicaSedeSapientiale,
          title: "CATOLICA SEDE SAPIENTIALE",
        },
        {
          img: UniversidadUnifeSagradoCorazon,
          title: "UNIFE SAGRADO CORAZÓN",
        },
        {
          img: UniversidadPrivadadelNorte,
          title: "UNIV.PRIVADA DEL NORTE",
        },
        {
          img: UniversidadPeruanadeCiencias,
          title: "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS UPC",
        },
      ],

      titleInstitutos: "Institutos :",
      cardInstitutos: [
        {
          img: Institute1,
          title: "CENTRO DE ALTOS ESTUDIOS DE LA MODA",
        },
        {
          img: Institute2,
          title: "CEPEA",
        },
        {
          img: Institute3,
          title: "CEPEBAN",
        },
        {
          img: Institute4,
          title: "CESCA",
        },
        {
          img: Institute5,
          title: "CETRO GAMOR",
        },
        {
          img: Institute6,
          title: "CEVATUR PERÚ",
        },
        {
          img: Institute7,
          title: "CORPORACION EDUCATIVA SAN VICENTE",
        },
        {
          img: Institute8,
          title: "DANIEL A.CARRIÓN",
        },
        {
          img: Institute9,
          title: "INSTITUTO DE DESARROLLO GERENCIAL",
        },
        {
          img: Institute10,
          title: "INSTITUTO DESARROLLO PROFESIONAL Y TECNOLOGICO",
        },
        {
          img: Institute11,
          title: "",
        },
        {
          img: Institute12,
          title: "ESCUELA INTERNACIONAL DE GERENCIA",
        },
        {
          img: Institute13,
          title: "AKRON",
        },
        {
          img: Institute14,
          title: "EUROIDIOMAS",
        },
        {
          img: Institute15,
          title: "HEADWAY COLLEGE",
        },
        {
          img: Institute16,
          title: "INTECI",
        },
        {
          img: Institute17,
          title: "LECTURA VELOZ(ILVEM)",
        },
        {
          img: Institute18,
          title: "LATINO",
        },
        {
          img: Institute19,
          title: "LIBERTADOR",
        },
        {
          img: Institute20,
          title: "INIDHE",
        },
        {
          img: Institute21,
          title: "PRIVATEACHER",
        },
        {
          img: Institute22,
          title: "SAN IGNACIO DE LOYOLA ",
        },
        {
          img: Institute23,
          title: "ICPNA",
        },
        {
          img: Institute24,
          title: "BRITANICO",
        },
        {
          img: Institute25,
          title: "INST.DEFORMACION EMPRESARIAL",
        },
        {
          img: Institute26,
          title: "ESCUELA INTERNACIONAL DE GRADUADOS",
        },
        {
          img: Institute27,
          title: "ALIANZA FRANCESA",
        },
      ],
    },
  },
  footer: {},
};
