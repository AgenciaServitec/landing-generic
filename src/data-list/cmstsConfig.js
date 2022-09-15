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
      { id: "about-us", name: "Nosotros" },
      { id: "SedeChorrillos", name: "Chorrillos" },
      { id: "SedeTarapacá", name: "Tarapacá" },
      { id: "SedeRimac", name: "Rimac" },
      { id: "contact", name: "Contacto" },
      // { id: "services", name: "Servicios" },
      // { id: "campus", name: "Sedes" },
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
        "La Asociación Círculo Militar de Supervisores Técnico y Sub Oficiales del Ejército (ACM-STS), brinda bienestar al personal de Supervisores, Técnicos y sub Oficiales del Ejército del Perú en situación de Actividad, Disponibilidad o Retiro y sus FAMILIARES DIRECTOS, en el área de alojamiento, alimentaciones, recreación, deporte y cultura.\n" +
          "\n" +
          "Los beneficios que brinda a los ASOCIADOS es única y exclusivamente para el: \n" +
          "\n" +
          "TITULAR Y SUS FAMILIARES DIRECTOS.",
      ],
      images: [CirculoChorrillosCentral],
    },
    // sectionCampus: [
    //   {
    //     titleImage: TitleChorrillos,
    //     viewType: "carousel",
    //     items: [
    //       {
    //         images: [
    //           CirculoChorrillos2,
    //           CirculoChorrillos3,
    //           CirculoChorrillos4,
    //           CirculoChorrillos5,
    //         ],
    //         description:
    //           "Dispone de espacios ideales para todo tipo de reuniones, Ademas de contar canchas de futbol ",
    //         icons: [
    //           {
    //             href: "https://goo.gl/maps/Bh9esULuN4LvV64n6",
    //             icon: faFacebook,
    //             name: "Facebook",
    //           },
    //           {
    //             href: "https://goo.gl/maps/Bh9esULuN4LvV64n6",
    //             icon: faLocation,
    //             name: "Av.Escuela Militar S/N - Chorrillos",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     titleImage: TitleTarapaca,
    //     viewType: "carousel",
    //     items: [
    //       {
    //         images: [
    //           CirculoTarapaca1,
    //           CirculoTarapaca2,
    //           CirculoTarapaca3,
    //           CirculoTarapaca4,
    //         ],
    //         description:
    //           "CONTAMOS CON ÁREAS PARA REALIZAR TODO TIPO DE EVENTOS. ADEMÁS DE TENER DISPONIBLE LA PISCINA OLÍMPICA, RESTAURANTE Y CANCHAS DEPORTIVAS DE MATERIAL SINTÉTICO.",
    //         icons: [
    //           {
    //             href: "https://www.facebook.com/Campo-Deportivo-Tarapaca-Chorrillos-101277401232183/",
    //             icon: faFacebook,
    //             name: "Facebook",
    //           },
    //           {
    //             href: "https://www.google.com/maps/dir/?api=1&destination=-12.194105661443%2C-77.00196146965",
    //             icon: faLocation,
    //             name: "Av. Defensores del Morro 1170, Lima 15067",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     titleImage: TitleRimac,
    //     viewType: "carousel",
    //     items: [
    //       {
    //         images: [
    //           CirculoRimac1,
    //           CirculoRimac2,
    //           CirculoRimac3,
    //           CirculoRimac4,
    //           CirculoRimac5,
    //           CirculoRimac6,
    //           CirculoRimac7,
    //           CirculoRimac8,
    //           CirculoRimac9,
    //         ],
    //         description:
    //           "Cuenta con los ambientes ideales para realizar todo tipo de eventos. Además de tener disponible la piscina semi olímpica y cancha deportiva de material sintético.",
    //         icons: [
    //           {
    //             href: "https://m.facebook.com/profile.php?id=2154609457903406&__tn__=C-R",
    //             icon: faFacebook,
    //             name: "Facebook",
    //           },
    //           {
    //             href: "https://www.bing.com/maps?osid=7e07ef8c-0b72-47ed-893b-de74aefa10ee&cp=-12.026899~-77.040314&lvl=17&v=2&sV=2&form=S00027",
    //             icon: faLocation,
    //             name: "Av. Morro De Arica 499, Lima, Perú",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    // sectionCollage: {
    //   title: "",
    //   images: [CmstsCollage1, CmstsCollage2, CmstsCollage3, CmstsCollage4],
    // },
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
          title: "Salon: La Cabana del Guerrero",
          descriptionTop: "",
          images: [Cabanadelguerrero],
          description:
            "Ambientes principal y áreas para realizar todo tipo de eventos.",
        },
        {
          title: "Zona de Esparcimiento",
          descriptionTop: "",
          images: [ZonaEsparciminetoChorrillos],
          description:
            "Ambientes ideales para realizar actividades de recreación y deporte.",
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
