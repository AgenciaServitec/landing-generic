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
      { id: "about-us", name: "Nosotros" },
      { id: "services", name: "Especialidades" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "PRESENTE HOY Y SIEMPRE.",
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
      descriptions: [
        "La Sección de Apoyo al Personal con Discapacidad (SAD), brindará orientación y/o capacitación al personal militar pensionista en la condición de discapacidad sobre: salud, educación, pensión y otros beneficios que por ley le corresponda a fin de contribuir en el bienestar de la familia militar.",
        "Las Actividades de bienestar se desarrolla de acuerdo a lo programado por la COBIENE, realizando las coordinaciones con entidades públicas y privadas, para el mejoramiento de la calidad en la atención del personal con discapacidad",
        "Se brinda atención y se viene empadronando y actualizando lo datos del personal militar con discapacidad, así como la de sus familiares directos, a quienes se les informa respecto a la Ley Na 29487 (Ley que otorga prestaciones de salud gratuita al personal con discapacidad de las FFAA y sus familiares directos)",
      ],
      images: [SadAbout, SadAboutTwo],
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
    title: "CONTACT COBIENE",
    subtitle: "No dudes en comunicarte",
    socialsRed: [
      {
        href: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+%2F+servicio&app_absent=0",
        icon: faWhatsapp,
        name: "Whatsapp",
        value: "941801827",
      },
      {
        href: "mailto:contactos@servitec-peru.com",
        icon: faEnvelope,
        name: "Email",
        value: "contactos@servitec-peru.com",
      },
      {
        href: "https://www.facebook.com/Servitec.chorrillos/",
        icon: faFacebook,
        name: "Facebook",
      },
      { href: "tel:941801827", icon: faMobile, name: "Celular" },
      {
        href: "https://goo.gl/maps/Lc37rVhC9WEStpj66",
        icon: faGlobe,
        name: "Dirección",
        value: "Chorrillos-lima-Perú",
      },
    ],
  },
  footer: {},
};
