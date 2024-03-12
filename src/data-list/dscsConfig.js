import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { CobieneLogoLarge, DscsBanner, JaceAbout2 } from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const dscsConfig = {
  helmet: {
    title: "Departamento de Supervisión de Calidad del Servicio",
    link: "https://dscs.cobiene.mil.pe",
    description:
      "Garantizando calidad en servicios clave del Ejército para personal militar y sus familias.",
    keywords: "supervision,calidad,servicio",
  },
  header: {
    name: "dscs",
    title: "Departamento de Supervisión de Calidad del Servicio",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "sugerencias", name: "Sugerencias" },
      { id: "contact", name: "Contáctanos" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "Supervisión de calidad",
        image: DscsBanner,
        buttons: [],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "El departamento de supervisión de la calidad de servicios es responsable de asesorar, supervisar, Evaluar el rendimiento del sistema de gestión de la calidad que presta el Ejército al personal militar y familiares directos en educación, vivienda de servicio, programas de vivienda (FOVIME) y las prestaciones de servicio establecidas mediante convenios firmados con la Asociación de Circulo Militar del Perú (ACMP) y Circulo Militar de Supervisores, Técnicos y Sub Oficiales (AC-STS), Bazar Central del Ejército (BCE) y el Fondo Solidario de Sepelio del Ejército (FOSSEP).",
      ],
      buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
      images: [JaceAbout2],
    },
    sectionSuggestionsComplaints: {
      title: "Sugerencias - Reclamos",
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
