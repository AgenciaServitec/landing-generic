import {
  CirculoChorrillos2,
  CirculoChorrillos3,
  CirculoChorrillos4,
  CirculoChorrillos5,
  CirculoRimac1,
  CirculoTarapaca1,
  CirculoTarapaca2,
  CirculoTarapaca3,
  CirculoTarapaca4,
  CmstsCarousel,
  CmstsCollage1,
  CmstsCollage2,
  CmstsCollage3,
  CmstsCollage4,
  CirculoRimac2,
  CirculoRimac3,
  CirculoRimac4,
  CirculoRimac5,
  CirculoRimac6,
  CirculoRimac7,
  CirculoRimac8,
  CirculoRimac9,
  CmstsServices,
  CobieneLogoLarge,
  TitleChorrillos,
  TitleRimac,
  TitleTarapaca,
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
        image: CmstsCarousel,
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
        titleImage: TitleChorrillos,
        viewType: "carousel",
        items: [
          {
            images: [
              CirculoChorrillos2,
              CirculoChorrillos3,
              CirculoChorrillos4,
              CirculoChorrillos5,
            ],
            description:
              "CONTAMOS CON UN SALÓN PRINCIPAL Y ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA SEMI OLÍMPICA.",
          },
        ],
      },
      {
        titleImage: TitleTarapaca,
        viewType: "carousel",
        items: [
          {
            images: [
              CirculoTarapaca1,
              CirculoTarapaca2,
              CirculoTarapaca3,
              CirculoTarapaca4,
            ],
            description:
              "CONTAMOS CON ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA OLÍMPICA, RESTAURANTE Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
          },
        ],
      },
      {
        titleImage: TitleRimac,
        viewType: "carousel",
        items: [
          {
            images: [
              CirculoRimac1,
              CirculoRimac2,
              CirculoRimac3,
              CirculoRimac4,
              CirculoRimac5,
              CirculoRimac6,
              CirculoRimac7,
              CirculoRimac8,
              CirculoRimac9,
            ],
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
