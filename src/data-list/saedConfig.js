import {
  CobieneLogoLarge,
  Institute10,
  Institute11,
  Institute12,
  Institute13,
  Institute14,
  Institute35,
  Institute34,
  Institute16,
  Institute2,
  Institute32,
  Institute20,
  Institute21,
  Institute22,
  Institute23,
  Institute24,
  Institute25,
  Institute30,
  Institute26,
  Institute3,
  Institute5,
  Institute6,
  Institute7,
  Institute8,
  Institute33,
  Institute31,
  Institute9,
  SaedAboutUs,
  SaedBannePublic,
  SaedSlider1,
  UniversidadCatolicaSedeSapientiale,
  UniversidadCesarVallejo,
  UniversidadDelPacifico,
  UniversidadESAN,
  UniversidadChampagnat,
  UniversidadPrivadadelNorte,
  UniversidadRicardoPalma,
  UniversidadSanJuanBautista,
  UniversidadSanMarcos,
  UniversidadSanmartinPorres,
  UniversidadSeñorSipan,
  UniversidadUnifeSagradoCorazon,
  UniversidadUtp,
  UniversidadCientifica,
  UniversidadNorbert,
  UniversidadJaimeBausate,
  UniversidadNacionalMusica,
  UniversidadFedericoVillareal,
  UniversidadUpc,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

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
    sectionCarousel: [
      {
        title: "APOYO ESTUDIOS SUPERIORES.",
        imgBackground: SaedSlider1, //AQUI VA IMAGEN
        buttons: [
          {
            type: "primary",
            id: "about-us",
            title: "Nosotros",
          },
          {
            type: "secondary",
            id: "contact",
            title: "Información",
          },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "En el ámbito de la educación superior y tecnológica, promoviendo de manera permanente la suscripción de convenios y otros procedimientos de ayuda, con las diferentes Universidades e institutos, Escuelas de grado y postgrado y otras Instituciones de este genero, orientados a lograr beneficios para el personal milita, civil y sus familiares directos fin de contribuir al bienestar general de la familia militar.",
      ],
      buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
      images: [SaedAboutUs],
    },
    sectionConvenios: {
      title: "Universidades :",
      cards: [
        // {
        //   image: UniversidadAgraria,
        //   title: "Agraria",
        //jace@mil.pe
        // },
        // {
        //   image: UniversidadCatolica,
        //   title: "Catolica del Perú",
        // },
        {
          image: UniversidadSanJuanBautista,
          title: "SAN JUAN BAUTISTA",
        },
        {
          image: UniversidadChampagnat,
          title: "Marcelino CHAMPAGNAT",
        },
        {
          image: UniversidadCesarVallejo,
          title: "Cesar Vallejo",
        },
        {
          image: UniversidadESAN,
          title: "ESAN",
        },
        {
          image: UniversidadCatolicaSedeSapientiale,
          title: "CATOLICA SEDE SAPIENTIALE",
        },
        {
          image: UniversidadUnifeSagradoCorazon,
          title: "UNIFE SAGRADO CORAZÓN",
        },
        {
          image: UniversidadCientifica,
          title: "Cientifica del sur ",
        },
        // {
        //   image: UniversidadJaimeBausate,
        //   title: "Jaime Bausate Mesa",
        // },

        {
          image: UniversidadPrivadadelNorte,
          title: "UNIV.PRIVADA DEL NORTE",
        },
        {
          image: UniversidadSanmartinPorres,
          title: "SAN MARTIN DE PORRES",
        },
        {
          image: UniversidadNacionalMusica,
          title: "Universidad Nacional de Musica",
        },
        {
          image: UniversidadRicardoPalma,
          title: "RICARDO PALMA",
        },
        {
          image: UniversidadFedericoVillareal,
          title: "Universidad Nacional Federico Villarreal",
        },
        {
          image: UniversidadNorbert,
          title: "NORBERT WIENER",
        },
        {
          image: UniversidadJaimeBausate,
          title: "Universidad Jaime Bausate y Meza",
        },
        // {
        //   image: UniversidadSnIgnacioLoyola,
        //   title: "SAN IGNACIO DE LOYOLA",
        // },
        {
          image: UniversidadDelPacifico,
          title: "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS UPC",
        },
        {
          image: UniversidadSeñorSipan,
          title: "SEÑOR DE SIPAN",
        },
        {
          image: UniversidadUtp,
          title: "UTP",
        },
        {
          image: UniversidadUpc,
          title: "UPC ",
        },
        {
          image: UniversidadSanMarcos,
          title: "SAN MARCOS FACULTAD CC. ECONOMICAS",
        },
      ],
    },
    sectionInstitutes: {
      title: "Institutos :",
      cards: [
        {
          image: Institute5,
          title: "CETPRO Benjamin Galecio Matos",
        },
        {
          image: Institute6,
          title: "CEVATUR PERÚ",
        },
        {
          image: Institute7,
          title: "CORPORACION EDUCATIVA SAN VICENTE",
        },
        {
          image: Institute10,
          title: "INSTITUTO DESARROLLO PROFESIONAL Y TECNOLOGICO",
        },
        {
          image: Institute11,
          title: "INSTITUTO DE DESARROLLO PROFESIONAL Y TÉCNICO",
        },
        {
          image: Institute12,
          title: "ESCUELA INTERNACIONAL DE GERENCIA",
        },
        {
          image: Institute13,
          title: "AKRON",
        },
        {
          image: Institute14,
          title: "EUROIDIOMAS",
        },
        {
          image: Institute23,
          title: "ICPNA",
        },
        {
          image: Institute24,
          title: "BRITANICO",
        },
        {
          image: Institute25,
          title: "INST.DEFORMACION EMPRESARIAL",
        },
        {
          image: Institute26,
          title: "ESCUELA INTERNACIONAL DE GRADUADOS",
        },
        {
          image: Institute30,
          title: "GUIDE",
        },
        {
          image: Institute31,
          title: "Von Braun",
        },
        {
          image: Institute32,
          title: "ECAPREV",
        },
        {
          image: Institute33,
          title: "ISPACJ",
        },
        {
          image: Institute20,
          title: "INIDHE",
        },
        {
          image: Institute3,
          title: "CEPEBAN",
        },
        {
          image: Institute8,
          title: "D'Gallia",
        },
        {
          image: Institute9,
          title: "Instituto Carrión",
        },
        {
          image: Institute16,
          title: "INTECI",
        },
        {
          image: Institute21,
          title: "PRIVATEACHER",
        },
        {
          image: Institute22,
          title: "SAN IGNACIO DE LOYOLA ",
        },
        {
          image: Institute2,
          title: "CEPEA",
        },
        {
          image: Institute34,
          title: "CIM",
        },
        {
          image: Institute35,
          title: "ANDRE VESALIO",
        },

        // {
        //   image: Institute4,
        //   title: "CESCA",
        // },
        // {
        //   image: Institute5,
        //   title: "CETRO GAMOR",
        // },
        //
        // {
        //   image: Institute15,
        //   title: "HEADWAY COLLEGE",
        // },
        // {
        //   image: Institute17,
        //   title: "LECTURA VELOZ(ILVEM)",
        // },
        // {
        //   image: Institute18,
        //   title: "LATINO",
        // },
        // {
        //   image: Institute19,
        //   title: "LIBERTADOR",
        // },
        // {
        //   image: Institute27,
        //   title: "ALIANZA FRANCESA",
        // },
      ],
    },
  },
  contentImages: {
    title: "",
    images: [SaedBannePublic],
  },
  sectionContact: {
    title: "CONTACT COBIENE",
    subtitle: "No dudes en comunicarte",
    socialsRed: [
      {
        href: "https://api.whatsapp.com/send/?phone=+51929054672&text=Buenos+dias+tengo+una+consulta&app_absent=0",
        icon: faWhatsapp,
        name: "Whatsapp",
        value: "929054672",
      },
      {
        href: "contacto@cobiene.com",
        icon: faEnvelope,
        name: "Email",
        value: "contacto@cobiene.com",
      },
      {
        href: "https://es-la.facebook.com/BienestarEP",
        icon: faFacebook,
        name: "Facebook",
      },
      { href: "tel:941801827", icon: faMobile, name: "Celular" },
      {
        href: "https://goo.gl/maps/Bh9esULuN4LvV64n6",
        icon: faGlobe,
        name: "Dirección",
        value: "Chorrillos-lima-Perú",
      },
    ],
  },
  footer: {},
};
