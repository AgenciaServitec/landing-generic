import {
  CmstsCarousel,
  CobieneLogoLarge,
  TitleChorrillos,
  TitleRimac,
  TitleTarapaca,
  CirculoChorrillosCentral,
  SalonesdeChorrillos,
  Cabanadelguerrero,
  ZonaEsparciminetoChorrillos,
  SalonesdeTarapac,
  SedeTarapaca,
  ZonaEsparcimientoTarapaca,
  SedeRimac,
  SalonesdeRimac,
  ZonaEsparcimientoRimac,
  CirculoChorrillosSalon,
  CirculoChorrillosDeportivo,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const cmstsConfig = {
  helmet: {
    title: "Círculo Militar Supervisores Técnicos de Sub Oficiales",
    link: "https://cmsts.cobiene.mil.pe",
    description: "Círculo Militar Supervisores Técnicos de Sub Oficiales",
    keywords: "salud,servicios,convenios",
  },
  header: {
    name: "cmsts",
    title: "Círculo Militar Supervisores Técnicos de Sub Oficiales",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "SedeChorrillos", name: "Chorrillos" },
      { id: "SedeTarapacá", name: "Tarapacá" },
      { id: "SedeRimac", name: "Rimac" },
      { id: "contact", name: "Contacto" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "TUS MEJORES MOMENTOS.",
        image: CmstsCarousel,
        buttons: [
          // {
          //   title: "Nuestros Servicios",
          // },
          // {
          //   title: "Sedes",
          // },
        ],
      },
    ],
    sectionAbout: {
      id: "about-us",
      title: "Nosotros",
      descriptions: [
        "La Asociación Círculo Militar de Supervisores Técnico y Sub Oficiales del Ejército (ACM-STS), brinda bienestar al personal de Supervisores, Técnicos y sub Oficiales del Ejército del Perú en situación de Actividad, Disponibilidad o Retiro y sus FAMILIARES DIRECTOS, en el área de alojamiento, alimentaciones, recreación, deporte y cultura. Los beneficios que brinda a los ASOCIADOS es única y exclusivamente para el: TITULAR Y SUS FAMILIARES DIRECTOS.",
      ],
      images: [CirculoChorrillosCentral],
    },
    sectionCollages: {
      collages: [
        {
          id: "SedeChorrillos",
          titleImage: TitleChorrillos,
          title: "Salones de Eventos",
          descriptionTop: "",
          images: [SalonesdeChorrillos],
          description: "Salones ideales para compartir tus mejores momentos",
        },
        {
          title: "Salon: La Cabaña del Guerrero",
          descriptionTop: "",
          images: [Cabanadelguerrero],
          description:
            "Ambientes principal y áreas para realizar todo tipo de eventos.",
        },
        {
          title: "Toldo de Ceremonias",
          descriptionTop: "",
          images: [CirculoChorrillosSalon],
        },
        {
          title: "Zona de Esparcimiento",
          descriptionTop: "",
          images: [ZonaEsparciminetoChorrillos],
          description:
            "Ambientes ideales para realizar actividades de recreación y deporte.",
        },
        {
          title: "Zonas Deportivas",
          descriptionTop: "",
          images: [CirculoChorrillosDeportivo],
        },
        {
          id: "SedeTarapacá",
          titleImage: TitleTarapaca,
          title: "",
          descriptionTop: "",
          images: [SedeTarapaca],
          description: "",
        },
        {
          title: "Amplia Zona de Esparimiento y Paint Ball",
          descriptionTop: "",
          images: [ZonaEsparcimientoTarapaca],
          description: "Amplios Ambientes de recreación y deporte",
        },
        {
          title: "Ambientes de Eventos",
          descriptionTop: "",
          images: [SalonesdeTarapac],
          description: "Áreas de Reuniones para tus Momentos inolvidables.",
        },
        {
          id: "SedeRimac",
          titleImage: TitleRimac,
          title: "",
          descriptionTop: "",
          images: [SedeRimac],
          description: "",
        },
        {
          title: "Salon de Eventos Rimac",
          descriptionTop: "",
          images: [SalonesdeRimac],
          description:
            "Salones para ese momento especial de tu vida que quieres compartir",
        },
        {
          title: "Amplia Zona de Esparcimiento",
          descriptionTop: "",
          images: [ZonaEsparcimientoRimac],
          description:
            "Modernas Canchas deportivas para un sano entretimiento.",
        },
      ],
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
