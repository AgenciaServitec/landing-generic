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
  SaecoImgAyudaSocial,
  SaecoImgCarousel,
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
      { id: "alcance", name: "ALCANCE" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "Sección de Servicio Social",
        image: SaecoImgCarousel,
        buttons: [
          {
            type: "primary",
            id: "about-us",
            title: "Nosotros",
          },
          {
            type: "primary",
            id: "help",
            title: "Ayuda Economica Social",
          },
          {
            type: "primary",
            id: "services",
            title: "Servicio Religioso",
          },
        ],
      },
    ],
    sectionAbout: {
      id: "about-us",
      title: "Nosotros",
      descriptions: [
        "EL BENEFICIO DE LA AYUDA ECONÓMICA SOCIAL, ES EL APORTE\n" +
          "ECONÓMICO PARCIAL O TOTAL QUE PROPORCIONA EL EJÉRCITO, AL\n" +
          "FAMILIAR DIRECTO DEL PERSONAL MILITAR EN SITUACIÓN DE\n" +
          "ACTIVIDAD Y RETIRO, ASÍ COMO AL PERSONAL CIVIL, NOMBRADO,\n" +
          "CONTRATADO Y CESANTE EN SITUACIONES EXCEPCIONALES DE\n" +
          "SALUD. ASIMISMO, A LOS SOBREVIVIENTES DEL TITULAR FALLECIDO\n" +
          "EN ACCIÓN DE ARMAS, ACTO DE SERVICIO, A CONSECUENCIA DEL\n" +
          "SERVICIO U OCASIÓN DEL SERVICIO, COADYUVANDO CON EL\n" +
          "TRATAMIENTO DE LOS FAMILIARES DIRECTOS (HIJOS Y CÓNYUGE), EN\n" +
          "CASOS EXCEPCIONALES A LOS PADRES DEL TITULAR, POR UN MONTO\n" +
          "DE HASTA DOS (02) UIT.",
      ],
      images: [SaecoImgAbout],
    },
    sectionCobertura: {
      title:
        "LA AYUDA ECONOMICA SOCIAL OTORGA, BIENES Y SERVICIOS EN LOS SIGUIENTES RUBROS",
      descriptions: [
        "* Alimentos y bebidas para consumo humano.",
        "* Adquisición de material, insumos, instrumental y accesorios médicos, quirúrgicos, odontológicos y laboratorio. ",
        "* Servicios, (educación personalizada, educación especializada, terapias integrales, terapias de rehabilitación, exámenes de diagnostico especializado, intervenciones quirúrgicas, honorarios profesionales.) ",
      ],
      images: [SaecoImgAyudaSocial],
    },
    sectionBancos: {
      id: "help",
      title: "Bancos :",
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
      title: "Convenios de Servicios de Salud",
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
      title: "Tiendas :",
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
      title: "Financieras :",
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
      title: "Seguros : ",
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
      title: "Transporte :",
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
      id: "services",
      title: "SERVICIO RELIGIOSO",
      subTitle:
        "La Parroquia Inmaculada Concepción del Cuartel General del Ejército, brinda a los\n" +
        "Sres. OO, TCOS, S$CO, BECC, PTSMV y familiares; los siguientes servicios:",
      descriptions: [
        "* Bautismo,Confirmación,Penitencia o confesión, Eucaristía o comunión,Unción de los enfermos",
        "* Charla para novios padres y padrinos",
        "* Catequesis para el bautismo, primera comunión y confirmación",
        "* Misa de salud, acción de gracia, cumpleaños, aniversario de bodas y difuntos.",
        "* Bendiciones a personas, casas, locales, vehículos e instrumentos.",
        "Asimismo, la Villas militares cuentan con la guía espiritual de los. Capellanes castrenses de acuerdo al siguiente detalle\n",
        "* Villa militar Matellini. : Parroquia San Nicolas",
        "* Villa militar las Palmas: Parroquia Virgen del Chapi",
        "* Villa militar OESTE — : Parroquia Cristo Rey.",
        "* Villa militar RIMAC : Parroquia Señor de la Misericordia.",
      ],
      images: [SaecoBautismo],
    },
  },

  sectionContact: {
    title: "CONTACT COBIENE",
    subtitle: "No dudes en comunicarte",
    socialsRed: [
      {
        href: "https://api.whatsapp.com/send?phone=929054672",
        icon: faWhatsapp,
        name: "Whatsapp",
        value: "929054672",
      },
      {
        href: "contacto@cobiene.mil.pe",
        icon: faEnvelope,
        name: "Email",
        value: "contacto@cobiene.mil.pe",
      },
      {
        href: "https://es-la.facebook.com/BienestarEP",
        icon: faFacebook,
        name: "Facebook",
      },
      { href: "tel:929054672", icon: faMobile, name: "Celular" },
      {
        href: "https://goo.gl/maps/Bh9esULuN4LvV64n6",
        icon: faGlobe,
        name: "Dirección",
        value: "lima-Perú",
      },
    ],
  },
  footer: {},
};
