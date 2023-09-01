import {
  CobieneLogoLarge,
  JaceAbout2,
  JaceMap,
  JaceMap2,
  JacePaso1,
  JacePaso2,
  JacePaso3,
  JacePaso4,
  JacePaso5,
  JacePaso6,
  JacePaso7,
  JacePaso8,
  JaceServices,
  JaceSlider1,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faHouse,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const jaceConfig = {
  helmet: {
    title: "Jefatura de Administración de Casas del Ejército",
    link: "https://jace.cobiene.mil.pe",
    description: "Apoyo social",
    keywords: "salud,servicios,convenios",
  },
  header: {
    name: "jace",
    title: "Jefatura de Administración de Casas del Ejército",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "requisitos", name: "Requisitos" },
      { id: "contact", name: "Contáctanos" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "CASAS DE SERVICIO.",
        image: JaceSlider1,
        buttons: [],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "La Jefatura de Administración de Casas del Ejército asesora al Comando de Bienestar del Ejército en los aspectos inherentes de la administración de casas de servicios del Ejército. Asimismo, planificará, ejecutará y supervisará los trabajos de conservación, mejoramiento y rehabilitación de la infraestructura, inmobiliaria de las casas de servicio de la guarnición de Lima, a fin de contribuir a la consecución de los objetivos de Bienestar del Ejército.",
      ],
      buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
      images: [JaceAbout2],
    },
    collageImages: [JaceServices],
    sectionRequirements: {
      id: "requisitos",
      title: "Requisitos:",
      cards: [
        {
          image: JacePaso1,
          title: "Paso 1",
          description: [
            "Deberá encontrarse en situación militar de actividad con no más de 25 años para Oficiales y 28 años para Tcos. y Sub Oficiales.",
          ],
        },
        {
          image: JacePaso2,
          title: "Paso 2",
          description: [
            "Deberá ser casado y tener hijos con su cónyuge, mantener una relación estable y vivir con su cónyuge en la guarnición donde solicita la casa.",
          ],
        },
        {
          image: JacePaso3,
          title: "Paso 3",
          description: [
            "Deberá tener como mínimo 4 años de servicio cumplido como Oficial o Sub Oficial, con el grado mínimo de Teniente o Sub Oficial 2º.",
          ],
        },
        {
          image: JacePaso4,
          title: "Paso 4",
          description: [
            "El personal militar que proviene de la reserva puede solicitar asignación de casa de servicio a partir de la fecha que pasen a la efectividad",
          ],
        },
        {
          image: JacePaso5,
          title: "Paso 5",
          description: [
            "No deben haber sido favorecidos con un préstamo de Ores –Fovime.",
          ],
        },
        {
          image: JacePaso6,
          title: "Paso 6",
          description: [
            "No debe haber ocupado casa de servicio en los 3 últimos años en la guarnición donde solicita.",
          ],
        },
        {
          image: JacePaso7,
          title: "Paso 7",
          description: [
            "El personal militar candidato a usuario no debe haber sido obligado a desocupar la casa de servicio en cualquiera de las guarniciones de Ejército donde existan casas de servicio.",
          ],
        },
        {
          image: JacePaso8,
          title: "Paso 8",
          description: [
            "El personal militar candidato a “usuario” que solicite asignación especial o excepcional deberá contar con lo siguiente:\n",
            "-Documentos que acreditn la situacion de especialidad o excepcionalidad.",
            "-El Dictamen legal favorable.",
            "-La opinion del Crl Ing.Jefe de la DACE.",
            "-La Aprobacion del General de Brigada Comandante General del COBIENE, para la guarnición de Lima.",
          ],
        },
      ],
    },
    sectionMap: {
      title:
        "FLUJOGRAMA PARA LA ASIGNACIÓN DE CASA DE SERVICIO EN LA JEFATURA DE ADMINISTRACIÓN DE CASAS DEL EJÉRCITO (JACE)",
      images: [JaceMap, JaceMap2],
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
      {
        href: "https://ws.ejercito.mil.pe/sirecase/#/login",
        name: "Siracase",
        value: "Siracase",
      },
    ],
  },
  footer: "",
};
