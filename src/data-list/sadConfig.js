import {
  CobieneLogoLarge,
  SadAboutTwo,
  SadCarousel,
  SadPro,
  SadServiceArtesania,
  SadServiceComputer,
  SadServiceCuero,
  SadServiceEstampado,
  SadServiceTejido,
  SadServiceTextil,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const sadConfig = {
  header: {
    name: "sad",
    title: "Sección de Apoyo al Discapacitado",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "Nosotros", name: "Nosotros" },
      { id: "services", name: "Especialidades" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "PRESENTE HOY Y SIEMPRE.",
        image: [SadCarousel],
        buttons: [
          // {
          //   id: "about-us",
          //   title: "Nosotros",
          // },
          // {
          //   id: "services",
          //   title: "Especialidades Técnicas",
          // },
        ],
      },
    ],
    sectionAbout: {
      id: "Nosotros",
      title: "Nosotros",
      descriptions: [
        // "La Sección de Apoyo al Discapacitado somos los encargados de proporcionar asesoramiento al personal militar pensionista en la condición de discapacitado, para orientarlos a solucionar sus problemas de vivienda, salud, educación, pensión y otros, asimismo ejecutar acciones de bienestar a favor de dicho personal y su familia.",
        "La Sección de Apoyo al Personal con\n" +
          "Discapacidad (SAD), brindará orientación y/o\n" +
          "capacitación al personal militar pensionista en\n" +
          "la condición de discapacidad sobre: salud,\n" +
          "educación, pensión y otros beneficios que por\n" +
          "ley le corresponda a fin de contribuir en el\n" +
          "bienestar de la familia militar.\n" +
          "\n" +
          "Las Actividades de bienestar se desarrolla de\n" +
          "acuerdo a lo programado por el COBIENE,\n" +
          "realizando las coordinaciones con entidades\n" +
          "públicas y privadas, para el mejoramiento de la\n" +
          "calidad en la atención del personal con\n" +
          "discapacidad.\n" +
          "\f",
      ],
      images: [SadAboutTwo],
    },
    sectionSetPro: {
      title: "CETPRO 8va División de Infantería ",
      direction: true,
      descriptions: [
        "En las instalaciones del SAD funciona el CETPRO, reconocido mediante R.D. USE 07 N° 3321 del 10 dic de 1999 y con R.D.R. N° 01531-2008 –DRELM, su funcionamiento se encuentra enmarcado dentro de las cláusulas del convenio interinstitucional entre el COBIENE y la UGEL-03. Proporcionará conocimientos teóricos y prácticos en las seis (06) especialidades técnicas al personal de Tropa que presta su Servicio Militar Voluntario en el COSALE (HMC y Btn San A/M N° 511) y SINTE (Btn Int A/M N° 511), en atención a la Ley del Servicio Militar Voluntario N° 29248 y su reglamento, al personal militar en situación de discapacidad del Ejército del Perú y sus familiares directos, asimismo al personal civil de la comunidad considerado en pobreza y/o extrema pobreza",
      ],
      images: [SadPro],
    },
    sectionServices: {
      title: "Especialidades :",
      cards: [
        {
          image: SadServiceEstampado,
          title: "Estampado",
        },
        {
          image: SadServiceTejido,
          title: "Tejido Manual",
        },
        {
          image: SadServiceArtesania,
          title: "Artesanía – Manualidades",
        },
        {
          image: SadServiceTextil,
          title: "Confección Textil",
        },
        {
          image: SadServiceComputer,
          title: "Computación",
        },
        {
          image: SadServiceCuero,
          title: "Cuero y Calzado",
        },
      ],
    },
  },
  sectionContact: {
    title: "CONTACTO COBIENE",
    subtitle: "No dudes en comunicarte",
    socialsRed: [
      {
        href: "https://api.whatsapp.com/send/?phone=+51929054672&text=Buenos+dias+tengo+una+consulta&app_absent=0",
        icon: faWhatsapp,
        name: "Whatsapp",
        value: "929054672",
      },
      {
        href: "mailto:contacto@cobiene.mil.pe",
        icon: faEnvelope,
        name: "Email",
        value: "contacto@cobiene.mil.pe",
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
        value: "Lima-Perú",
      },
    ],
  },
  footer: {},
};
