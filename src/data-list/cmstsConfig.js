import {
  CmstsCarousel,
  CmstsCollage1,
  CmstsCollage2,
  CmstsCollage3,
  CmstsCollage4,
  CmstsSedeChorillos1,
  CmstsSedeChorillos2,
  CmstsSedeRimac,
  CmstsSedeTarapaca,
  CmstsServices,
  CobieneLogoLarge,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const cmstsConfig = {
  header: {
    name: "cmsts",
    title: "Círculo Militar Supervisores Técnicos de Sub Oficiales",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "services", name: "Servicios" },
      { id: "campus", name: "Sedes" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "TUS MEJORES MOMENTOS.",
        imgBackground: CmstsCarousel,
        buttons: [
          {
            title: "Nuestros Servicios",
          },
          {
            title: "Sedes",
          },
        ],
      },
    ],
    sectionServices: {
      title: "DISFRUTA LO QUE BRINDA LA ASOCIACIÓN CMSTS",
      descriptions: [
        "SALONES PARA EVENTOS.",
        "RESTAURANTE.",
        "AROBICOS.",
        "KARATE.",
        "CANCHAS SINTETICA.",
        "ZONA DE PARRILLAS.",
        "HOSPEDAJE.",
        "PISCINA OLIMPICA/SEMIOLIMPICA.",
        "PAINTBALL",
      ],
      images: [CmstsServices],
    },
    sectionCampus: [
      {
        title: "SEDE CHORRILLOS",
        items: [
          {
            image: CmstsSedeChorillos1,
            description:
              "CONTAMOS CON UN SALÓN PRINCIPAL Y ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA SEMI OLÍMPICA.",
          },
          {
            image: CmstsSedeChorillos2,
            description:
              "CONTAMOS CON UNA TERRAZA, UN SALÓN MULTIUSO, LA CABAÑA DEL GUERRERO, SALÓN ALFA Y BRAVO PARA REALIZAR TODO TIPO DE EVENTOS Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
          },
        ],
      },
      {
        title: "SEDE TARAPACA",
        items: [
          {
            image: CmstsSedeTarapaca,
            description:
              "CONTAMOS CON ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA OLÍMPICA, RESTAURANTE Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
          },
          {
            image: CmstsSedeTarapaca,
            description:
              "CONTAMOS CON LOS AMBIENTES IDEALES PARA REALIZAR TODO TIPO DE EVENTOS, HOSPEDAJE Y JUEGOS DEPORTIVOS PAINTBALL.",
          },
        ],
      },
      {
        title: "SEDE RIMAC",
        items: [
          {
            image: CmstsSedeRimac,
            description:
              "Cuenta con los ambientes ideales para realizar todo tipo de eventos. Además de tener disponible la piscina semi olímpica y cancha deportiva de material sintético.",
          },
        ],
      },
    ],
    sectionCollage: {
      title: "",
      images: [CmstsCollage1, CmstsCollage2, CmstsCollage3, CmstsCollage4],
    },
  },
  sectionContact: {
    title: "CONTÁCTANOS",
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
