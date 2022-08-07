import {
  CobieneLogoLarge,
  JaceAbout,
  JaceMap,
  JaceMap2,
  JaceServices,
  SaedSlider1,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const jaceConfig = {
  header: {
    name: "jace",
    title: "Jefatura de Administración de Casas del Ejercito",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "information", name: "Requisitos" },
      { id: "contact", name: "Contáctanos" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "JEFATURA DE ADMINISTRACION DE CASAS DEL EJÉRCITO.",
        imgBackground: SaedSlider1,
        buttons: [
          {
            type: "primary",
            id: "about-us",
            title: "Nosotros",
          },
          {
            type: "secondary",
            id: "contact",
            title: "Requisitos",
          },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "La JACE asesorar al Comando de Bienestar del Ejército en los aspectos inherentes de la administración de casas de servicios del Ejército. Asimismo, planificara, ejecutara y supervisara los trabajos de conservación, mejoramiento y rehabilitación de la infraestructura, inmobiliaria de las casas de servicio de la guarnición de Lima, a fin de contribuir a la consecución de los objetivos de Bienestar del Ejército.",
      ],
      buttons: [{ type: "secondary", name: "CONTÁCTANOS" }],
      images: [JaceAbout],
    },
    sectionServices: {
      title: "",
      images: [JaceServices],
    },
    sectionRequirements: [
      {
        image: "",
        title: "Paso 1",
        description: [
          "Deberá encontrarse en situación militar de actividad con no más de 25 años para Oficiales y 28 años para Tcos y Sub Oficiales.",
        ],
      },
      {
        image: "",
        title: "Paso 2",
        description: [
          "Deberá ser casado y tener hijos con su conyugue, mantener una relación estable y vivir con su conyugue en la guarnición donde solicita la casa.",
        ],
      },
      {
        image: "",
        title: "Paso 3",
        description: [
          "Deberá tener como mínimo 4 años de servicio cumplido como Oficial o Sub Oficial, con el grado mínimo de Teniente o Sub Oficial 2o.",
        ],
      },
      {
        image: "",
        title: "Paso 4",
        description: [
          "El personal militar que proviene de la reserva puede solicitar asignación de casa de servicio a partir de la fecha que pasen a la efectividad",
        ],
      },
      {
        image: "",
        title: "Paso 5",
        description: [
          "No deben haber sido favorecidos con un préstamo de Ores –Fovime.",
        ],
      },
      {
        image: "",
        title: "Paso 6",
        description: [
          "No debe haber ocupado casa de servicio en los 3 últimos años en la guarnición donde solicita.",
        ],
      },
      {
        image: "",
        title: "Paso 7",
        description: [
          "El personal militar que proviene de la reserva puede solicitar asignación de casa de servicio a partir de la fecha que pasen a la efectividad.",
        ],
      },
      {
        title:
          "FLUJOGRAMA PARA LA ASIGNACION DE CASA DE SERVICIO EN LA JEFATURA DE ADMINISTRACION DE CASAS DEL EJERCITO (JACE)",
        images: [JaceMap, JaceMap2],
      },
    ],
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
  },
  footer: "",
};
