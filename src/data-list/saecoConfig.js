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
  SaecoBautismo,
  MisaPadre,
  TitleAyudaEconomica,
  TitleConvenios,
  TitleReli,
  Servitec,
  StoreServitec,
  Hotel1,
  Hotel2,
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
      { id: "AyudaEconomicaSocial", name: "Ayuda Economica" },
      { id: "Convenios", name: "Convenios Multiservicios" },
      { id: "ServicoReligioso", name: "Servicio Religioso" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "Bienestar con responsabilidad social",
        image: SaecoImgCarousel,
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
        "El departamento de apoyo social como parte del comando de bienestar del ejército,ayudas económicas para casos excepcionales de salud, descuento por convenios multiservicios, apoyo de servicio religioso, asesoramiento de apoyo a la familia y apoyo al personal discapacitado, orientados a lograr beneficios para el personal militar, civil en actividad, retiro, cesantes y sus familiares directos.",
      ],
      images: [SaecoImgAbout],
    },
    sectionCollages: {
      collages: [
        {
          id: "AyudaEconomicaSocial",
          titleImage: TitleAyudaEconomica,
          // titleImage: ,
          // title:
          //   "La Ayuda Económica social otorga, bienes y servicios en los siguientes rubros:",
          descriptionTop:
            "Alimentos y bebidas para consumo humano.(leche medicada, dietas hipercalórica, hipoglucémica e hipo grasa)",
          images: [BannerServices],
          description: "",
        },
        {
          title: "",
          descriptionTop:
            "Servicios, (educación personalizada, educación especializada, terapias integrales, terapias de rehabilitación, exámenes de diagnóstico especializado, intervenciones quirúrgicas, honorarios profesionale)",

          images: [BannerSalud],
          description: "",
        },
        {
          title: "",
          descriptionTop:
            "Adquisición de material, insumos, instrumental y accesorios médicos, quirúrgicos, odontológicos y laboratorio. (silla ruedas colchón anti escaras, audífonos, lentes correctores, artículos ortopédicos, prótesis o parte de él, medicinas, pañales, balón de oxígeno.) ",
          images: [BannerEconomico],
          description: "",
        },
      ],
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
      id: "Convenios",
      titleImage: TitleConvenios,
      title: "Convenios con Bancos :",
      cards: [
        {
          image: BancoComercio,
          link: "https://www.bancomercio.com",
          title: "Banco Comercio",
          description: "TEA hasta 16% por convenio",
        },
        {
          image: BancoGng,
          link: "https://www.bancognb.com.pe",
          title: "Banco Gng",
          description: "TEA hasta 9.5% por convenio",
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
          link: "https://interbank.pe",
          title: "Banco Interbank",
          description: "TEA hasta 16% por convenio",
        },
        {
          image: BancoScotiabank,
          link: "https://www.scotiabank.com.pe",
          title: "Banco Scotiabank",
          description: "TEA hasta 16% por convenio",
        },
      ],
    },
    sectionSalud: {
      title: "Convenios de Servicios de Salud : ",
      cards: [
        {
          image: ConvenioSalud1,
          title: "Apelac",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
            },
          ],
        },
        {
          image: ConvenioSalud2,
          title: "Biolinks",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "PRUEBA DE ADN RECONOCIMIENTO DE PATERNIDAD\n," +
                "TARIFA CON CONVENIO 20% DESCUENTO\n," +
                "EXÁMENES DE LABORATORIO CLÍNICO ONCOLÓGICO - ÁREA DE DIAGNÓSTICO.\n" +
                "EXAMEN DE LABORATORIO CLÍNICO - ÁREAS INFECCIOSAS",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://biolinksperu.com",
            },
          ],
        },
        {
          image: ConvenioSalud3,
          title: "Dent",
        },
        {
          image: ConvenioSalud4,
          title: "Inppares",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "TARIFAS ESPECIALES 10% DE DESCUENTO SOBRE PRECIO AL PÚBLICO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://inppares.org/",
            },
          ],
        },
        {
          image: ConvenioSalud5,
          title: "Medifon",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                " DESCUENTO DE $ 150.00 DÓLARES POR LA COMPRA DE AUDÍFONOS MARCA BELTONE\n" +
                " 25% DESCUENTO EN REPUESTOS Y ACCESORIOS",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://medifonperu.pe/",
            },
          ],
        },
        {
          image: ConvenioSalud6,
          title: "MultiDent",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                " COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://www.multident.pe",
            },
          ],
        },
        {
          image: ConvenioSalud7,
          title: "Tinnitus",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                " COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "http://tinnitusperu.com",
            },
          ],
        },
        {
          image: ConvenioSalud8,
          title: "Unilabs",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "ANÁLISIS CLÍNICOS 40% DE DESCUENTO\n" +
                "ANÁLISIS ESPECIALES 10% DE DESCUENTO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://unilabs.pe",
            },
          ],
        },
      ],
    },
    sectionDiversos: {
      title: "Convenios con Tiendas :",
      cards: [
        {
          image: TiendaFootloose,
          title: "Footloose",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "20 % DE DESCUENTO MARCAS PROPIAS Y 10% OTRAS MARCAS",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://www.footloose.pe",
            },
          ],
        },
        {
          image: TiendaLazzos,
          title: "Lazzos",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "20% DE DESCUENTO SOBRE EL PRECIO DE ETIQUETA EN TODAS LAS TIENDAS MOSSA SHOES Y VISANO TIENDA FÍSICO Y VIRTUAL",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://www.lazzos.com.pe",
            },
          ],
        },
        {
          image: TiendaLogistas,
          title: "Logistas",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "SERVICIOS DE MANTENIMIENTO VEHICULAR CORRECTIVOS\n" +
                "COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
            },
          ],
        },
        {
          image: TiendaRenzoCosta,
          title: "Renzo Costa",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "10% TIENDAS PROPIAS (MIRAFLORES, SAN ISIDRO, OUTLET FÀBRICA Y TACNA).\n" +
                "5% DESCUENTO EN LOS CENTROS COMERCIALES.",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://www.renzocosta.com",
            },
          ],
        },
        {
          image: SmartFit,
          title: "SmartFit",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              description:
                "EXONERACIÓN DEL PAGO ÚNICO DE “MATRÍCULA”.\n" +
                "EXONERACIÓN DEL PAGO ANUAL DE “MANTENIMIENTO”.\n" +
                "EXONERACIÓN DEL PAGO POR PENALIDAD\n" +
                "ENTRENAMIENTO EN TODO EL PERÚ Y LATINOAMÉRICA.\n" +
                "INVITACIÓN DE AMIGOS Y FAMILIARES HASTA 5 VECES AL MES.n\n" +
                "PAGO MENSUAL S/ 99.\n" +
                "INGRESANDO CON EL CÓDIGO DE VALIDACIÓN “CORPORATIVO EP”",
            },
            {
              title: "BENEFICIARIOS: ",
              description:
                "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
              link: "https://www.smartfit.com.pe",
            },
          ],
        },
        // {
        //   image: TiendaSugo,
        //   title: "Sugo",
        //   descriptionLarge: [
        //     {
        //       title: "BENEFICIOS :",
        //       description:
        //         "ACCESO EN LÍNEA EN SUS PLATAFORMAS EN COMPRAS DE CONSUMO SOSTENIBLE HASTA 50% DEL PRECIO EN EL MERCADO",
        //     },
        //     {
        //       title: "BENEFICIARIOS: ",
        //       description:
        //         "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
        //       link: "https://www.sugo.pe",
        //     },
        //   ],
        // },
      ],
    },
    sectionFinancieras: {
      title: "Convenios con Financieras :",
      cards: [
        {
          image: FinancieraEfectiva,
          link: "https://www.efectiva.com.pe",
          title: "Financiera Efectiva",
          description: "TEA hasta 18.5% por convenio",
        },
        {
          image: FinancieraFinantel,
          link: "https://www.finantel.pe",
          title: "Financiera Finantel",
          description: "TEA hasta 18.5% por convenio",
        },
        {
          image: FinancieraLarehabilitadora,
          link: "https://larehabilitadora.com",
          title: "Financiera La Rehabilitadora",
          description: "TEA hasta 18% por convenio",
        },
      ],
    },
    sectionSeguros: {
      title: "Convenios con Compañias de Seguros : ",
      cards: [
        {
          image: SeguroRimac,
          link: "https://www.rimac.com",
          title: "Seguros Rimac",
        },
        {
          image: SeguroSaludPositiva,
          link: "https://www.lapositiva.com.pe",
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
          link: "https://www.movilbus.pe/",
          title: "Movilbus",
        },
        {
          image: Transporte2,
          link: "https://www.oltursa.pe",
          title: "Oltursa",
        },
      ],
    },
    sectionHoteles: {
      title: "Convenios con Hoteles :",
      cards: [
        {
          image: Hotel1,
          title: "Hotel Casa Andina",
          descriptionLarge: [
            {
              title: "ALCANCE DEL CONVENIO: ",
              description:
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres); debidamente acreditados”.\n",
            },
            {
              title: "FORMA DE ACREDITACIÓN: ",
              description:
                "Presentación del carnet de identificación personal militar o civil CIP\n" +
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos)." +
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
            },
            {
              title: "BENEFICIO: ",
              descriptions: [
                "Brindará a los BENEFICIARIOS, acceso a descuentos sobre la tarifa regular, de hasta 30%, en los alojamientos propios y asociados, ubicados a nivel nacional, vigentes al momento de la reserva, según relación actualizada, de forma trimestral.",
                "El acceso a los servicios hoteleros ofrecidos, a través de porcentaje de descuento sobre las tarifas regulares, otorgados EXCLUSIVAMENTE mediante la web https://www.casa-andina.com/es/ofertas/ejercitoperu , canales de atención a través de correo electrónico centraldereservas@casa-andina.com y call center (01) 3916500.",
                "El código de acceso al descuento es EJERCITOPERU22.",
                "Validará indispensablemente, al BENEFICIARIO, mediante la presentación física del respectivo Carnet de Identidad Personal del titular (CIP), y familiares directos mediante presentación del Carnet de Identificación Familiar (CIF); al momento de ingreso al hotel.",
                "En caso el BENEFICIARIO, no pueda acreditar que es personal de “EL EJÉRCITO”, “CASA ANDINA” informará a dicho huésped, que no es acreedor al descuento por convenio y además se reserva el derecho de cobrar el monto vigente al momento del check – in.",
                " Las reservas realizadas son de tarifas NO REEMBOLSABLE.",
                "Al finalizar el pago, cabe mencionar que se aplicará el 10% a la tarifa inicial por el cargo correspondiente a servicios y el 18% de impuestos de ley vigentes; los mismos que podrán variar de acuerdo a las regulaciones gubernamentales.",
              ],
              link: "https://www.casa-andina.com/es/home",
            },
          ],
        },
        {
          image: Hotel2,
          link: "https://www.costadelsolperu.com/hoteles/hotel-costa-del-sol-wyndham-lima-ciudad/",
          title: "Hotel Costa del Sol",
        },
      ],
    },
    sectionTecnologia: {
      title: "Tecnología :",
      cards: [
        {
          image: Servitec,
          link: "https://servitecperu.com/",
          title: "Servitec",
        },
        {
          image: StoreServitec,
          link: "https://tiendaservitec.com/",
          title: "Tienda Servitec",
        },
      ],
    },
    sectionServiceRel: {
      id: "ServicoReligioso",
      titleImage: TitleReli,
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
      images: [SaecoBautismo, MisaPadre],
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
    ],
  },
  footer: {},
};
