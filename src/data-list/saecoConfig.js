import {
  CobieneLogoLarge,
  FinancieraEfectiva,
  FinancieraFinantel,
  FinancieraLarehabilitadora,
  SaecoImgAbout,
  BancoGng,
  BancoInterbank,
  BancoScotiabank,
  BancoComercio,
  ConvenioSalud1,
  ConvenioSalud2,
  ConvenioSalud3,
  Transporte1,
  Transporte2,
  ConvenioSalud4,
  ConvenioSalud5,
  ConvenioSalud6,
  ConvenioSalud7,
  ConvenioSalud8,
  SaecoImgCarousel,
  Banner2,
  BannerServices,
  BannerSalud,
  BannerEconomico,
  SeguroRimac,
  SeguroSaludPositiva,
  SeguroVehicular,
  SeguroVehicularPositiva,
  SmartFit,
  TiendaFootloose,
  TiendaLazzos,
  TiendaLogistas,
  TiendaRenzoCosta,
  TiendaSugo,
  SaecoBautismo,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const saecoConfig = {
  header: {
    name: "saeco",
    title: "Sección de Servicio Social",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "cobertura", name: "COBERTURA" },
      { id: "services", name: "ALCANCE" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "Sección de Servicio Social",
        imgBackground: [SaecoImgCarousel],
        buttons: [
          // {
          //   type: "primary",
          //   id: "services",
          //   title: "Convenios MultiServicios",
          // },
          // {
          //   type: "primary",
          //   id: "cobertura",
          //   title: "Ayuda Económica Social",
          // },
          // {
          //   type: "primary",
          //   id: "servicerRel",
          //   title: "Servicio Religioso",
          // },
        ],
      },
    ],
    sectionAbout: {
      id: "about-us",
      title: "Nosotros",
      descriptions: [
        "La Sección de Servicio Social se encarga de los otorgamientos de ayudas económicas para nuestro personal que lo necesita; asimismo nos encargamos de la suscripción de convenios multisectoriales que permitan beneficios para el personal militar, empleados civiles y familiares directos, también nos encargamos de realizar diversas actividades de recreación, cultural   y religiosa a fin de integrar más a la familia militar y sostener nuestro espíritu cristiano.",
      ],
      images: [SaecoImgAbout],
    },
    // sectionCollageServices: {
    //   title:
    //     "La Ayuda Económica social otorga,Bienes y servicios en los siguientes rubros",
    //   images: [],
    // },
    sectionCobertura: {
      id: "cobertura",
      title:
        "La Ayuda Económica social otorga, bienes y servicios en los siguientes rubros",
      descriptions: [
        "* Alimentos y bebidas para consumo humano.(leche medicada, dietas hipercalórica, hipoglucémica e hipo grasa)",
        "* Adquisición de material, insumos, instrumental y accesorios médicos, quirúrgicos, odontológicos y laboratorio. (silla ruedas colchón anti escaras, audífonos, lentes correctores, artículos ortopédicos, prótesis o parte de él, medicinas, pañales, balón de oxígeno.) ",
        "* Servicios, (educación personalizada, educación especializada, terapias integrales, terapias de rehabilitación, exámenes de diagnóstico especializado, intervenciones quirúrgicas, honorarios profesionales.) ",
      ],
      images: [Banner2],
    },
    // sectionCollageAliments: {
    //   subtitle:
    //     "Alimentos y bebidas para consumo humano.(leche medicada, dietas hipercalórica, hipoglucémica e hipo grasa",
    //   images: [Alimentos, Alimentos2],
    // },
    // sectionCollageServices: {
    //   title: "Convenios Multiservicios",
    //   images: [],
    // },
    sectionBancos: {
      id: "services",
      title: "Convenios con Bancos :",
      cards: [
        {
          image: BancoComercio,
          title: "Banco Comercio",
          description: "TEA hasta 16%",
        },
        {
          image: BancoGng,
          title: "Banco Gng",
          description: "TEA hasta 9.5%",
        },
        // {
        //   image: BancoPichincha,
        //   title: "Banco Pichincha",
        // },
        // {
        //   image: BancoContinental,
        //   title: "Banco Continental",
        // },
        {
          image: BancoInterbank,
          title: "Banco Interbank",
          description: "TEA hasta 16%",
        },
        {
          image: BancoScotiabank,
          title: "Banco Scotiabank",
          description: "TEA hasta 16%",
        },
      ],
    },
    sectionSalud: {
      title: "Convenios de Servicios de Salud : ",
      cards: [
        {
          image: ConvenioSalud1,
          title: "Apelac",
        },
        {
          image: ConvenioSalud2,
          title: "Biolinks",
        },
        {
          image: ConvenioSalud3,
          title: "Dent",
        },
        {
          image: ConvenioSalud4,
          title: "Inppares",
        },
        {
          image: ConvenioSalud5,
          title: "Mediofon",
        },
        {
          image: ConvenioSalud6,
          title: "MultiDent",
        },
        {
          image: ConvenioSalud7,
          title: "Tinnitus",
        },
        {
          image: ConvenioSalud8,
          title: "Unilabs",
        },
      ],
    },
    sectionDiversos: {
      title: "Convenios con Tiendas :",
      cards: [
        {
          image: TiendaFootloose,
          title: "Footloose",
        },
        {
          image: TiendaLazzos,
          title: "Lazzos",
        },
        {
          image: TiendaLogistas,
          title: "Logistas",
        },
        {
          image: TiendaRenzoCosta,
          title: "Renzo Costa",
        },
        {
          image: SmartFit,
          title: "SmartFit",
        },
        {
          image: TiendaSugo,
          title: "Sugo",
        },
      ],
    },
    sectionFinancieras: {
      title: "Convenios con Financieras :",
      cards: [
        {
          image: FinancieraEfectiva,
          title: "Financiera Efectiva",
          description: "TEA hasta 18.5%",
        },
        {
          image: FinancieraFinantel,
          title: "Financiera Finantel",
          description: "TEA hasta 18.5%",
        },
        {
          image: FinancieraLarehabilitadora,
          title: "Financiera La Rehabilitadora",
          description: "TEA hasta 18%",
        },
      ],
    },
    sectionSeguros: {
      title: "Convenios con Compañias de Seguros : ",
      cards: [
        {
          image: SeguroRimac,
          title: "Seguros Rimac",
        },
        {
          image: SeguroSaludPositiva,
          title: "Seguro Salud Positiva",
        },
        {
          image: SeguroVehicular,
          title: "Seguro Vida Positiva",
        },
        {
          image: SeguroVehicularPositiva,
          title: "Seguro Vida Positiva",
        },
      ],
    },
    sectionTransporte: {
      title: "Convenios con Empresas de Transporte :",
      cards: [
        {
          image: Transporte1,
          title: "Movilbus",
        },
        {
          image: Transporte2,
          title: "Oltursa",
        },
      ],
    },
    sectionServiceRel: {
      id: "servicerRel",
      title: "SERVICIO RELIGIOSO",
      subTitle:
        "La Parroquia Inmaculada Concepción del Cuartel General del Ejército, brinda a los\n" +
        "Sres. OO, TCOS, SSOO, PTSMV, EECC y familiares, los siguientes servicios:",
      descriptions: [
        "* Bautismo, Confirmación,Penitencia o confesión, Eucaristía o comunión, Unción de los enfermos",
        "* Charla para novios, padres y padrinos",
        "* Catequesis para el bautismo, primera comunión y confirmación",
        "* Misa de salud, acción de gracia, cumpleaños, aniversario de bodas y difuntos.",
        "* Bendiciones a personas, casas, locales, vehículos e instrumentos.",
        "Asimismo, las Villas militares cuentan con la guía espiritual de los Capellanes castrenses de acuerdo al siguiente detalle\n",
        "* Villa militar Matellini : Parroquia San Nicolas",
        "* Villa militar las Palmas : Parroquia Virgen del Chapi",
        "* Villa militar OESTE : Parroquia Cristo Rey.",
        "* Villa militar RIMAC : Parroquia Señor de la Misericordia.",
      ],
      images: [SaecoBautismo],
    },
    sectionCollage: {
      title: "Nuestra Ayuda",
      images: [BannerServices, BannerSalud, BannerEconomico],
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
        value: "Chorrillos-lima-Perú",
      },
    ],
  },
  footer: {},
};
