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
        title: "SECCIÓN DE APOYO EDUCATIVO",
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
        "Profesionales confiables\n" +
          "Somos un grupo de instituciones educativas que forman estudiantes con alto rendimiento académico mediante un Sistema de Educación basado en la comprensión del conocimiento, la disciplina y la Investigación, con la finalidad de que sean capaces de enfrentar con éxito cualquier problema.\n" +
          "\n" +
          "El departamento de apoyo educativo realiza la suscripción de convenios educativos; otorgamiento de becas, etc.",
      ],
      buttons: [{ type: "secondary", name: "CONTÁCTANOS" }],
      images: [SaedAboutUs],
    },
    sectionConvenios: {
      title: "Universidades :",
      cards: [
        {
          image: UniversidadAgraria,
          title: "Agraria",
        },
        // {
        //   image: UniversidadCientifica,
        //   title: "Cientifica del sur",
        // },
        {
          image: UniversidadCatolica,
          title: "Catolica del Perú",
        },
        {
          image: UniversidadCesarVallejo,
          title: "Cesar Vallejo",
        },
        {
          image: UniversidadESAN,
          title: "ESAN",
        },
        // {
        //   image: UniversidadJaimeBausate,
        //   title: "Jaime Bausate Mesa",
        // },
        {
          image: UniversidadMarcelinO,
          title: "Marcelino CHAMPAGNAT",
        },
        // {
        //   image: UniversidadNorbert,
        //   title: "NORBERT WIENER",
        // },
        {
          image: UniversidadDelPacifico,
          title: "DEL PACIFICO",
        },
        {
          image: UniversidadRicardoPalma,
          title: "RICARDO PALMA",
        },
        {
          image: UniversidadSnIgnacioLoyola,
          title: "SAN IGNACIO DE LOYOLA",
        },
        {
          image: UniversidadSanJuanBautista,
          title: "SAN JUAN BAUTISTA",
        },
        {
          image: UniversidadSanmartinPorres,
          title: "SAN MARTIN DE PORRES",
        },
        {
          image: UniversidadSanMarcos,
          title: "SAN MARCOS FACULTAD CC. ECONOMICAS",
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
          image: UniversidadCatolicaSedeSapientiale,
          title: "CATOLICA SEDE SAPIENTIALE",
        },
        {
          image: UniversidadUnifeSagradoCorazon,
          title: "UNIFE SAGRADO CORAZÓN",
        },
        {
          image: UniversidadPrivadadelNorte,
          title: "UNIV.PRIVADA DEL NORTE",
        },
        {
          image: UniversidadPeruanadeCiencias,
          title: "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS UPC",
        },
      ],
    },
    sectionInstitutes: {
      title: "Institutos :",
      cards: [
        {
          image: Institute1,
          title: "CENTRO DE ALTOS ESTUDIOS DE LA MODA",
        },
        {
          image: Institute2,
          title: "CEPEA",
        },
        {
          image: Institute3,
          title: "CEPEBAN",
        },
        {
          image: Institute4,
          title: "CESCA",
        },
        {
          image: Institute5,
          title: "CETRO GAMOR",
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
          image: Institute8,
          title: "DANIEL A.CARRIÓN",
        },
        {
          image: Institute9,
          title: "INSTITUTO DE DESARROLLO GERENCIAL",
        },
        {
          image: Institute10,
          title: "INSTITUTO DESARROLLO PROFESIONAL Y TECNOLOGICO",
        },
        {
          image: Institute11,
          title: "",
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
          image: Institute15,
          title: "HEADWAY COLLEGE",
        },
        {
          image: Institute16,
          title: "INTECI",
        },
        {
          image: Institute17,
          title: "LECTURA VELOZ(ILVEM)",
        },
        {
          image: Institute18,
          title: "LATINO",
        },
        {
          image: Institute19,
          title: "LIBERTADOR",
        },
        {
          image: Institute20,
          title: "INIDHE",
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
          image: Institute27,
          title: "ALIANZA FRANCESA",
        },
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
        href: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+%2F+servicio&app_absent=0",
        icon: faWhatsapp,
        name: "Whatsapp",
        phone: "941801827",
      },
      {
        href: "mailto:contactos@servitec-peru.com",
        icon: faEnvelope,
        name: "Email",
      },
      {
        href: "https://www.facebook.com/Servitec.chorrillos/",
        icon: faFacebook,
        name: "Facebook",
      },
      { href: "https://youtu.be/FNMfFy4iKvg", icon: faMobile, name: "Phone" },
      {
        href: "https://youtu.be/FNMfFy4iKvg",
        icon: faGlobe,
        name: "Direción",
      },
    ],
  },
  footer: {},
};
