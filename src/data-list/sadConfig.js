import {
  CobieneLogoLarge,
  SadAbout,
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
  helmet: {
    title: "Sección de Apoyo al Discapacitado",
    link: "https://sad.cobiene.mil.pe",
    description: "Sección de Apoyo al Discapacitado",
    keywords: "salud,servicios,convenios",
  },
  header: {
    name: "sad",
    title: "Sección de Apoyo al Discapacitado",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "Nosotros", name: "Nosotros" },
      { id: "services", name: "Especialidades" },
      { id: "contact", name: "Contacto" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "PRESENTE HOY Y SIEMPRE.",
        image: [SadCarousel],
        buttons: [],
      },
    ],
    sectionAbout: {
      id: "Nosotros",
      title: "Nosotros",
      descriptions: [
        "La Sección de Apoyo al Personal con Discapacidad (SAD), brindará orientación y/o capacitación al personal militar pensionista en la condición de discapacidad sobre: salud, educación, pensión y otros beneficios que por ley le corresponda a fin de contribuir en el bienestar de la familia militar.",
      ],
      images: [SadPro],
    },
    sectionSetPro: {
      title: "Funciones sad ",
      direction: true,
      descriptions: [
        "Brinda apoyo y orientación al personal del personal Oficiales, Tcos SSOO pensionistas en la condición de discapacidad en las diversas gestiones administrativas",
        "En coordinación con el personal de Informática llevar al día la base de datos alimentando con información actualizada del personal de Oficiales, Supervisores, Técnicos y Suboficiales pensionistas en la condición de discapacidad",
        "Apertura y elabora legajos al personal de Oficiales, Supervisores, Técnicos y Suboficiales pensionistas en la condición de discapacidad",
        "Organiza y clasifica los legajos del Personal de Oficiales, Supervisores, Técnicos y Suboficiales pensionistas en la condición de discapacidad ",
        "Organiza el archivo de su responsabilidad, a fin de ser explotados con facilidad",
        "Dispone de legajos con reportes actualizados que contengan reporte de la base de datos del personal de Oficiales, Supervisores, Técnicos y Suboficiales pensionistas en la condición de discapacidad",
      ],
      images: [SadAbout],
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
        href: "https://www.facebook.com/profile.php?id=61555409192993&mibextid=sCpJLy",
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
