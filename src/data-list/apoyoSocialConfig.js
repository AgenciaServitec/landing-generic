import {
  ArgentinaBandera,
  Azaleia,
  BancoComercio,
  BancoContinental,
  BancoGng,
  BancoBCP,
  BancoInterbank,
  BancoScotiabank,
  BannerEconomico,
  BannerSalud,
  BannerServices,
  BoliviaBandera,
  BrasilBandera,
  ChileBandera,
  ClinicaDelInca,
  CobieneLogoLarge,
  ColombianaBandera,
  ConvenioSalud1,
  ConvenioSalud12,
  ConvenioSalud14,
  ConvenioSalud15,
  ConvenioSalud2,
  ConvenioSalud3,
  ConvenioSalud4,
  ConvenioSalud5,
  ConvenioSalud6,
  ConvenioSalud7,
  CoreaBandera,
  CruzDelSur,
  Decameron,
  Domireps,
  DpromartPeru,
  EcuadorBandera,
  ElCentro,
  Enazul,
  EspanaBandera,
  FacturaServitec,
  FinancieraAutoplan,
  FinancieraEfectiva,
  FinancieraLarehabilitadora,
  FranciaBandera,
  HolidayInn,
  HolidayInnExpress,
  HotelCarrera,
  ImgBthHotelRebelTacna,
  ImgCentroOpticoJesusEirl,
  ImgChifaRestauranteWongsen,
  ImgDireccionRegionalEducacionTacna,
  ImgDmHotel,
  ImgDonLimon,
  ImgDPaletas,
  ImgEgatur,
  ImgHotelLaSiesta,
  ImgHotelMaximo,
  ImgIepDayperPeruIerl,
  ImgMayuComidaSalon,
  ImgMbRehabFisioterapiaRehabilitacionSalud,
  ImgMirandaEscobarPeruTravels,
  ImgPacificSuitesHotel,
  ImgRestauranteFuegosPeruanos,
  ImgRestaurantePastaEirl,
  ImgRestauranteTradicionesPeruanas,
  ImgSaintRose,
  ImgUap,
  ImgUpt,
  Lg,
  MexicoBandera,
  MisaPadre,
  Movilbus,
  MultiserviciosTuringCusco,
  Niuovida,
  NoImagen,
  Oltursa,
  PublicidadServitec,
  SaecoBautismo,
  SaecoImgAbout,
  SaecoImgCarousel,
  Samsung,
  SeguroRimac,
  SeguroSaludPositiva,
  SeguroVehicularPositiva,
  Servitec,
  SkyAirline,
  SmartFit,
  StarPeru,
  StoreServitec,
  TiendaFootloose,
  TiendaLazzos,
  TitleAyudaEconomica,
  TitleConvenios,
  TitleReli,
  SMC,
  Palomino,
  Vega,
  cayetano,
  botiperu,
  ChichaKio,
  latranquera,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { cencosud, infocencosud } from "../images";
import { qhalikay, qhalikayinfo } from "../images";
import {
  faBuilding,
  faEnvelope,
  faGlobe,
  faLink,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const apoyoSocialConfig = {
  helmet: {
    title: "Sección de Servicio Social",
    link: "https://apoyosocial.jbiene.com",
    description: "Apoyo social",
    keywords: "salud,servicios,convenios",
  },
  header: {
    name: "Sección de Servicio Social",
    title: "Sección de Servicio Social",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "Convenios", name: "Convenios Multiservicios" },
        { id: "AyudaEconomicaSocial", name: "Ayuda Economica" },
        { id: "ServicoReligioso", name: "Servicio Religioso" },
      { id: "contact", name: "Contacto" },
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
        "El departamento de apoyo social como parte de la Jefatura de bienestar del ejército,ayudas económicas para casos excepcionales de salud, descuento por convenios multiservicios, apoyo de servicio religioso, asesoramiento de apoyo a la familia y apoyo al personal discapacitado, orientados a lograr beneficios para el personal militar, civil en actividad, retiro, cesantes y sus familiares directos.",
      ],
      images: [SaecoImgAbout],
    },

    sectionBancos: {
      id: "Convenios",
      titleImage: TitleConvenios,
      title: "Convenios con Bancos :",
    },
    sectionSalud: {
      title: "Convenios de Servicios de Salud : ",
    },
    sectionDiversos: {
      title: "Convenios con Tiendas:",
    },
    sectionSeguros: {
      title: "Convenios con Compañias de Seguros : ",
    },
    sectionTransporte: {
      title: "Convenios con Empresas de Transporte :",
    },
    sectionFinancieras: {
      title: "Convenios con Financieras :",
    },
    // sectionLegalAdvice: {
    //   title: "Convenios de Asesoría Legal",
    //   cards: [
    //   ],
    // },
    sectionHoteles: {
      title: "Convenios con Hoteles :",
    },
    // sectionEvents: {
    //   title: "Convenios con eventos :",
    //   cards: [
    //
    //   ],
    // },
    sectionTecnologia: {
      title: "Tecnología :",
      cards: [
        {
          image: Servitec,
          link: "https://servitecperu.com/",
          title: "Servitec",
          description: "Presentando su CIP 10% descuento en Paginas web.",
        },
        {
          image: StoreServitec,
          link: "https://tiendaservitec.com/",
          title: "Tienda Servitec",
        },
        {
          image: FacturaServitec,
          link: "https://factura.servitec.site/",
          title: "Facturación Electronica",
          description: "Presentando su CIP 10% descuento.",
        },
        {
          image: PublicidadServitec,
          link: "https://publicidadgoogle.site/",
          title: "Marketing Digital / Publicidad digital en Google",
          description: "Presentando su CIP 10% descuento.",
        },
        {
          image: Servitec,
          link: "https://reparacion-proyectores.com/",
          title: "Servitec Proyectores",
        },


      ],
    },
    sectionProvincial: {
      title: "Convenios Provinciales Piura -Sullana:",
      cards: [
        {
          image: ImgHotelLaSiesta,
          title: 'HOTEL "LA SIESTA"',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- 10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP.",
                "- SOLO EN ALOJAMIENTO (HABITACIONES).",
                "- METODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR.",
                "- PRESENTACIÓN DE CIP/CIF EN ACTIVIDAD Y/O RETIRO",
              ],
            },
          ],
        },
        {
          image: ImgDPaletas,
          title: "D' PALETAS",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "CONSUMOS MINIMOS DE S/. 25 EN TODAS NUESTRA CARTAS.",
                "EL DESCUENTO SE APLICA DE LUNES A VIERNES.",
                "NO SE APLICA NI LOS DIAS SÁBADOS, DOMINGOS Y FERIADOS.",
                "MÉTODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIA.",
                "PRESENTACIÓN DE CIP/CIF EN ACTIVIDAD Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
            {
              title: "ALCANCE:",
              description: [],
            },
          ],
        },
        {
          image: ImgDonLimon,
          title: "DON LIMÓN",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "SOLO EN COMIDA POR EL CONSUMO MÍNIMO POR EL COMSUMO MÍNIMO DE S/. 100.00.",
                "MÉTODOS DE PAGO: EFECTIVO, YAPE, PLIM, O TRANSFERENCIAS.",
                "PRESENTACIÓN DE CIP/CIF EN ACTIVIDAD Y/O RETIRO",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "SAINT ROSE",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "SOLO EN COMIDA POR EL CONSUMO MÍNIMO POR EL COMSUMO MÍNIMO DE S/. 100.00.",
                "MÉTODOS DE PAGO: EFECTIVO, YAPE, PLIM, O TRANSFERENCIAS.",
                "PRESENTACIÓN DE CIP/CIF EN ACTIVIDAD Y/O RETIRO",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: ImgChifaRestauranteWongsen,
          title: 'CHIFA RESTAURANTE "WONG SEN"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "5% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "DESCUENTO EN CONSUMO DE COMIDA Y TODO TIPO DE BEBIDAS, POR EL CONSUMO MINIMO DE S/. 50.00.",
                "MÉTODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS.",
                "PRESENTACIÓN DE CIP/CIF EN ACTIVIDADES Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: ImgSaintRose,
          title: "CHIFA SAN ZI",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "ALCANCE:",
                "SE ENCUENTRA UBICADA EN MZ P1 LOTE 19 URBANIZACION JARDÍN 1RA ETAPA",
                "REQUISITOS",
                "PERSONAL MILITAR, SERVIDORES PÚBLICOS  DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "RESTAURANT EL LEÑADOR Y ALGO MAS",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "ALCANCE:",
                "SE ENCUENTRA UBICADA EN LA CALLE SANTA CLARA N°340 URB SANTA ROSA",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PÚBLICOS  DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: ImgMayuComidaSalon,
          title: "MAYU COMIDA Y SALÓN",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "ALCANCE:",
                "SE ENCUENTRA UBICADA EN LA CALLE SAN JUAN BOSCO N° 380",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PÚBLICOS  DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial2: {
      title: "Convenios Provinciales Tacna:",
      cards: [
        {
          image: ImgHotelMaximo,
          title: "EL HOTEL MAXIMO'S",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- 20% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "- BRINDARA HOSPEDAJE, DE LA LISTA DE PRECIOS VIGENTES A LA FECHA, EN QUE SEAN SOLICITADOS LOS SERVICIOS, INCLUYE DESAYUNO BUFFET DE CORTESÍA.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO, ASI COMO PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS",
              ],
            },
          ],
        },
        {
          image: ImgDmHotel,
          title: "DM HOTEL",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- TARIFAS PREFERENCIALES",
                "- BRINDARA DESCUENTOS EN TODAS SUS HABITACIONES, INCLUYE DESAYUNO BUFFET:",
                "- HABITACION ESTÁNDAR INDIVIDUAL $ 55.00",
                "- HABITACIÓN ESTÁNDAR MATRIMONIAL $65.00",
                "- HABITACIÓN ESTÁNDAR DOBLE $ 75.OO",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO, ASI COMO PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: 'PARQUE GASTRONOMICO "DON MAXIMO"',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- 10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP.",
                "- BRINDARA ATENCIÓN CON UNA VARIADA GASTRONOMÍA Y DE CALIDAD EN LA PREPARACIÓN DE SUS ALIMENTOS Y BEBIDAS, EN TODO SU STAND.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO, ASI COMO PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS",
              ],
            },
          ],
        },
        {
          image: ImgMbRehabFisioterapiaRehabilitacionSalud,
          title: "MB REHAB FISOTERAPIA REHABILITACIÓN Y SALUD S.A.C.",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- TARIFAS PREFERENCIAL EN EVALUACION FISIOTETERAPÉUTICA Y REHABILITACIÓN",
                "- REALIZA SERVICIOS EN FISIOTERAPIA Y REHABILITACIÓN FISICA, BRINDANDO TRATAMIENTOS CONTRA DIVERSOS TIPOS DE DOLORES, DISFUNCIONES, LESIONES TRAUMATOLÓGICAS, NEUROLÓGICAS, DEPORTIVA Y OTRAS , DE ACUERDO A UNA TARIFA PREFERENCIAL, OTORGANDO DESCUENTOS DEL 20% Y 30%",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL DE OFICIALES, TÉCNICOS, SUBOFICIALES, CLASES, SOLDADOS, PERSONAL CIVIL Y FAMILIARES DIRECTOS",
              ],
            },
          ],
        },
        {
          image: ImgEgatur,
          title: "ESCUELA DE GASTRONOMIA, ADMINISTRACIÓN Y TURISMO (EGATUR)",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- BRINDA EL 50% DE DESCUENTO EN LAS CARRERAS QUE OFRECEN.",
                "- OTORGA TRES (03) BECAS INTEGRALES.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN ACTIVIDAD Y SITUACIÓN DE RETIRO, ASÍ COMO PARA SUS FAMILIARES DIRECTOS.",
              ],
            },
          ],
        },
        {
          image: ImgIepDayperPeruIerl,
          title: 'I.E.P "DAYPER PERÚ" E.I.R.L.',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- BRINDA EL 60% DE DESCUENTO DE MATRÍCULA Y PENSIÓN EN TODAS LAS CARRERAS TÉCNICAS QUE OFRECE.",
                "- OTORGA 50 (CINCUENTA) BECAS SEMI-INTEGRALES DE ESTUDIO (BSIE) CADA SEMESTRE.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN ACTIVIDAD Y SITUACIÓN DE RETIRO, ASÍ COMO PARA SUS FAMILIARES DIRECTOS.",
              ],
            },
          ],
        },
        {
          image: ImgDireccionRegionalEducacionTacna,
          title: "DRE TACNA Y LA UGEL DE TACNA",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                '- EL PRESENTE CONVENIO TIENE POR OBJETO ESTABLECER LOS LINEAMIENTOS ESPECÍFICOS DE MUTUA COOPERACIÓN QUE PERMITAN GENERAR OPORTUNIDADES y RESULTADOS EDUCATIVOS DE CALIDAD AL PERSONAL DE TROPA QUE ESTUDIA EN EL CEBA "JOSÉ JOAQUÍN INCLÁN" EN EDUCACIÓN BÁSICA ALTERNATIVA. SE HA SUSCRITO UNA ADENDA PARA PROLONGAR UN AÑO MÁS EL CONVENIO.',
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                '- PERSONAL DE TROPA SERVICIO MILITAR VOLUNTARIO DE LA 3RA BRIGADA DE CABALLERÍA "TACNA".',
              ],
            },
          ],
        },
        {
          image: ImgUap,
          title: 'UNIVERSIDAD "ALAS PERUANAS" - FILIAL TACNA',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- ESTABLECE ACUERDOS PARA DESARROLLAR ACTIVIDADES DE FORMACIÓN DE PREGRADO (ESTOMATOLOGÍA, SICOLOGÍA Y MEDICINA FÍSICA), CON LA FINALIDAD DE MEJORAR LA CALIDAD DE VIDA Y EL NIVEL DE LA SALUD DEL PERSONAL, MEDIANTE UN PROGRAMA DE PRÁCTICAS  PROFESIONALES PARA LOS ALUMNOS DE LA UAP, EN LOS CUARTELES DE TARAPACÁ, ALBARRACÍN, PALCA Y MICULLA DE LA 3A BRIGADA DE CABALLERÍA, LUGARES DONDE LA UAP-TACNA, PARTICIPARÁ CON SUS RESPECTIVAS CARRERAS PROFESIONALES DE SALUD; LAS CUALES TAMBIÉN SERVIRÁN COMO SEDE DE DOCENCIA ASISTENCIAL, DENTRO DEL MARCO NORMATIVO VIGENTE.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL DE OFICIALES, SUPERVISORES, TÉCNICOS, SUB OFICIALES Y PERSONAL DE TROPA SMV.",
              ],
            },
          ],
        },
        {
          image: ImgUpt,
          title: "UNIVERSIDAD PRIVADA DE TACNA",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- COORDINAR, CONCERTAR Y EJECUTAR PROGRAMAS DE APOYO RECÍPROCO ENTRE AMBAS INSTITUCIONES EN LAS ÁREAS ACADÉMICAS, DOCENCIA, ASISTENCIAL Y OTROS DE INTERÉS COMÚN.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                '- PERSONAL DE LA 3A BRIGADA DE CABALLERÍA "TACNA".',
              ],
            },
          ],
        },
        {
          image: ImgRestauranteTradicionesPeruanas,
          title: 'RESTAURANTE "TRADICIONES PERUANAS" S.R.L.',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- SE OTORGARÁ EL DESCUENTO DEL 10% PARA PEDIDOS A LA CARTA DE COMIDA CRIOLLA, PARRILLAS Y COCKTAILS. EL PAGO SERÁ EN EFECTIVO.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO, ASÍ COMO PARA SUS FAMILIARES DIRECTOS, DEBIDAMENTE IDENTIFICADOS CON SU CARNET DE IDENTIDAD.",
              ],
            },
          ],
        },
        {
          image: ImgPacificSuitesHotel,
          title: "PACIFIC SUITES HOTEL",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "BRINDARÁ EL SERVICIO DE HOSPEDAJE, CON UN DESCUENTO DEL:",
                "- 20% DE LA LISTA DE PRECIOS VIGENTES A LA FECHA, PARA PAGO EN EFECTIVO.",
                "- 15% DE DESCUENTO PARA PAGO CON TARJETA DE CRÉDITO. INCLUYE DESAYUNO BUFFET DE CORTESÍA",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS PROTOCOLARES Y PERSONALES.",
              ],
            },
          ],
        },
        {
          image: ImgBthHotelRebelTacna,
          title: "BTH HOTEL REBEL TACNA",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "TARIFAS INCLUYEN IMPUESTOS (10% SERVICIOS / 18% IGV).",
                "- TARIFA INCLUYE DESAYUNO DE 7:00 AM. A 10:00 AM.",
                "- CHECK IN 15:00 HRS / CHECK OUT: 12:00 HRS.",
                "- ESTACIONAMIENTOS SUJETOS A DISPONIBILIDAD.",
                "- TARIFAS EXCLUSIVAS SOLO PARA PERSONAL DE LA FFAA:",
                "• 20% DE DESCUENTO EN NOMAD Y MADBAR. ",
                "• EARLY CHECK IN Y LATE CHECK OUT FREE (SUJETO A DISPONIBILIDAD DEL HOTEL) ",
                "• 30% DE DESCUENTO EN ALQUILER DE SALONES DE EVENTOS Y SALA DE CINE",
                "• 1 SALÓN DE CORTESÍA UNA VEZ AL MES GRATIS (SOLICITADO POR ALGÚN ALTO MANDO).",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS PROTOCOLARES Y PERSONALES.",
              ],
            },
          ],
        },
        {
          image: ImgRestaurantePastaEirl,
          title: "RESTAURANTE DA PASTA E.I.R.L.",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- SERVICIO DE ATENCIÓN LOS DÍAS LUNES, MARTES, MIÉRCOLES Y JUEVES DE TODO EL AÑO CON UN 10% DE DESCUENTO EN TODA LA CARTA DE COMIDA.  (GASTRONOMÍA DE COMIDA ITALIANA, COMIDA CRIOLLA, COMIDA CHINA,  ASÍ COMO COMIDA CON PRODUCTOS HIDROBIOLÓGICOS, ETC.).",
                "- DESCORCHO LIBRE AL MES PARA QUE DISFRUTAR DEL VINO QUE  SE PREFIERA Y  EN EL DÍA DEL CUMPLEAÑOS DEL BENEFICIARIO LE OTORGARÁ UN POSTRE LIBRE A ELEGIR.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO, ASÍ COMO PARA SUS FAMILIARES DIRECTOS, DEBIDAMENTE IDENTIFICADOS CON SU CARNET DE IDENTIDAD.",
                "- PERSONAL MILITAR DEL PAÍS DE CHILE, QUE VISITAN LA CIUDAD DE TACNA, EN VISITAS PROTOCOLARES Y PERSONALES, DEBIDAMENTE ACREDITADOS.",
              ],
            },
          ],
        },
        {
          image: ImgMirandaEscobarPeruTravels,
          title: "AGENCIA DE VIAJES MIRANDA Y ESCOBAR PERÚ TRAVELS S.A.C.",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- PAGO DEL SERVICIO EN DOS (02) PARTES, EL 50% DEL TOTAL DEBERÁ SER CANCELADO AL MOMENTO DE LA EMISIÓN DEL SERVICIO Y EL 50% RESTANTE EN UN PLAZO DE TREINTA (30) DÍAS, EN LOS SERVICIOS QUE SE INDICA:",
                "A.	EMISIÓN DE BOLETOS TERRESTRES.",
                "B.	EMISIÓN DE BOLETOS AÉREOS.",
                "C. EMISIÓN DE PROGRAMAS TURÍSTICOS LOCALES, NACIONALES E INTERNACIONES.",
                "- EN EL CASO DE PROGRAMAS LOCALES, NACIONALES E INTERNACIONALES, TENDRÁN LA MISMA FACILIDAD DE PAGO PERO DEBERÁN SOLICITAR DICHOS SERVICIOS COMO MÍNIMO 2 MESES DE ANTICIPACIÓN Y DEBERÁ SER PAGADO EN SU TOTALIDAD ANTES DE LA FECHA DE INICIO DEL VIAJE.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL DE OFICIALES, SUPERVISORES, TÉCNICOS, SUB OFICIALES, PERSONAL DE TROPA SERVICIO MILITAR OBLIGATORIO Y PERSONAL CIVIL, EN ACTIVIDAD Y EN RETIRO ASÍ COMO PARA SUS FAMILIARES DIRECTOS.",
              ],
            },
          ],
        },
        {
          image: ImgRestauranteFuegosPeruanos,
          title: "RESTAURANTE FUEGOS PERUANOS",
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "- SERVICIO DE ATENCIÓN CON UNA VARIADA GASTRONOMÍA, CON UN DESCUENTO DEL 30%, EN TODO CONSUMO.",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR EN SITUACIÓN DE ACTIVIDAD O RETIRO, AL PERSONAL CIVIL ASÍ COMO A SUS FAMILIARES; ASIMISMO, AL PERSONAL MILITAR DEL EJÉRCITO DE CHILE, DEBIDAMENTE ACREDITADOS.",
              ],
            },
          ],
        },
        {
          image: ImgCentroOpticoJesusEirl,
          title: 'CENTRO ÓPTICO "JESÚS" E.I.R.L.',
          descriptionLarge: [
            {
              title: "BENEFICIOS:",
              descriptions: [
                "SERVICIO DE ATENCIÓN CON LOS DESCUENTOS DIFERENCIALES QUE A CONTINUACIÓN SE INDICAN:",
                "PRODUCTO	PRECIO CON DESCUENTO = DESDE S/",
                "LENTES ANTIREFLEJO FILTRO UV = 49.90",
                "LENTES ANTIREFLEJO FILTRO AZUL Y FILTRO UV = 69.90",
                "LENTES FOTOCROMÁTICO FILTRO UV = 89.90",
                "GAFAS DE SOL OPTICO = 59.90",
                "BIFOCALES BLANCO UV = 89.90",
                "BIFOCALES ANTIREFLEJO FILTRO UV = 99.90",
                "BIFOCALES FOTOCROMÁTICO FILTRO UV = 149.90",
                "MULTIFOCAL BLANCO FILTRO UV = 139.90",
                "MULTIFOCAL ANTIREFLEJO FILTRO UV = 150.00",
                "SEGUNDO PAR DE LENTE = 50% DE DESCUENTO",
              ],
            },
            {
              title: "ALCANCE:",
              description: [
                "- PERSONAL MILITAR EN SITUACIÓN DE ACTIVIDAD O RETIRO, AL PERSONAL CIVIL ASÍ COMO A SUS FAMILIARES; ASIMISMO, AL PERSONAL MILITAR DEL EJÉRCITO DE CHILE, DEBIDAMENTE ACREDITADOS.",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial3: {
      title: "Convenios Provinciales Puno:",
      cards: [
        {
          image: NoImagen,
          title: 'CLINICA "SAUCES MEDICAL CENTER"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANDE:",
                "COSTOS DIFERENCIADOS",
                "REQUISITOS\n",
                " PERSONAL MILITAR (INCLUYE PERSONAL DE TROPA), SERVIDORES PÚBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: 'CLINICA "SAUCES MEDICAL CENTER"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANDE:",
                "COSTOS DIFERENCIADOS",
                "REQUISITOS\n",
                " PERSONAL MILITAR (INCLUYE PERSONAL DE TROPA), SERVIDORES PÚBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial4: {
      title: "Convenios Provinciales Arequipa",
      cards: [
        {
          image: NoImagen,
          title: "PASTELERIA MOCCA",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "15% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "DESCUENTOS EN LA ADQUISICION DE PRODUCTOS DE PASTELERIA.",
                "REQUISITOS",
                "PERSONAL MILITAR Y CIVIL EN SITUACION DE ACTIVIDAD Y RETIRO Y FAMILIARES DIRECTOS",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "ASOCIACION PSICOLOGICA UMANOS",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "50% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "DESCUENTO EN CONSULTAS PSICOLÓGICAS Y TERAPIAS.",
                "REQUISITOS",
                "PERSONAL MILITAR Y CIVIL EN SITUACION DE ACTIVIDAD Y RETIRO Y FAMILIARES DIRECTOS",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "CENTRO PSICOLÓGICO PSICOUNE",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "50% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "DESCUENTO EN CONSULTAS PSICOLÓGICAS Y 40 % DE DESCUENTOS EN TERAPIAS.",
                "REQUISITOS",
                "PERSONAL MILITAR Y CIVIL EN SITUACION DE ACTIVIDAD Y RETIRO Y FAMILIARES DIRECTOS",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial5: {
      title: "Convenios Provinciales Ayacucho",
      cards: [
        {
          image: NoImagen,
          title: "HOTEL ALTIPACHA",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "60% DE DESCUENTO CON LA PRESENTACIÓN DE SU CIP",
                "ALCANCE:",
                "SOLO EN ALOJAMIENTO (HABITACIONES).",
                "REQUISITOS",
                "PERSONAL MILITAR Y FAMILIARES DIRECTOS",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial6: {
      title: "Convenios Provinciales Chiclayo",
      cards: [
        {
          image: NoImagen,
          title: "EMPRESA AGROINDUSTRIAL HFE. BERRIES PERÚ",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "DESARROLLAR TALLERES DE EMPLEABILIDAD QUE LOGREN LA INSERCIÓN LABORAL DEL PERSONAL DE TROPA PRÓXIMO A LICENCIARSE.",
                "OBTENIENDO DE ESTA MANERA QUE NUESTRO PERSONAL ADQUIERA COMPETENCIAS ACORDE AL PERFIL DEL MERCADO LABORAL (DE FORMA GRATUITO)",
                "REQUISITOS",
                "PERSONAL DE TROPA SMV",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: 'HOTEL & CASINO" WIN MEIER"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "45%",
                "DESCUENTO EN TARIFAS DE HABITACIÓN EN TODAS LAS TARIFAS INCLUYEN TRASLADO AEROPUERTO-HOTEL, DESAYUNO EN EL RESTAURANTE DEL HOTEL, INTERNET INALÁMBRICO, ESTACIONAMIENTO GRATUITO, ACCESO LIBRE AL BUSINESS CENTER, USO DE PISCINA, ROOM SERVICE (10:30am - 11:00 pm), LAVANDERÍA Y PLANCHADO PREVIA SOLICITUD",
                "REQUISITOS",
                "OFICIALES, TECNICOS Y SUBOFICIALES, EMPLEADOS CIVILES",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "ASOCIADOS EN SALUD S.A.C.",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "20% DE DESCUENTO EN CONSULTA MÉDICA.BRINDAR SERVICIOS DE CONSULTA MÉDICA EN LAS ESPECIALIDADES DE CIRUGÍA GENERAL EN LAS ESPECIALIDADES DE CIRUGÍA GENERAL, CARDIOVASCULAR, GINECOLOGÍA, MEDICINA GENERAL, MEDICINA INTERNA, MEDICINA ESTÉTICA, NEUROLOGÍA, NEUROPEDIATRIA, NEUROCIRUGIA, OFTALMOLOGIA, OTORRINOLOGÍA, ODONTOLOGÍA, PEDIATRÍA, PSICOLOGÍA, REUMATOLOGÍA, TRAUMATOLOGÍA,TERAPIA FISICA Y REHABILITACIÓN\n",
                "20% DE DESCUENTOS EN TARIFAS VIGENTES DE ANATOMÍA PATOLÓGICA, CÁMARA HIPERBÁRICA, DENSITOMETRÍA ÓSEA, ECOGRAFÍA, LABORATORIO CLÍNICO, RAYOS X, TOMOGRAFÍA, TERAPIA FÍSICA Y REHABILITACIÓN.",
                "REQUISITOS",
                "PERSONAL MILITAR Y CIVIL EN SITUACIÓN DE ACTIVIDAD Y RETIRO",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "HOSPITAL BELÉN",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "DESCUENTOS PREFERENCIALES",
                "ALCANCE",
                "40% DE DESCUENTO PARA EL PERSONAL DE OFICIALES.\n",
                "50% DE DESCUENTO PARA EL PERSONAL DE TECNICOS Y SUBOFICIALES Y SUS FAMILIARES, EMPLEADOS CIVILES,FAMIIARES Y PERSONAL MILITAR EN SITUACION DE RETIRO.\n",
                "FACILIDADES DE PAGO EN FARMACIA EN INTERVENCIONES QUIRURGICAS DE EMERGENCIA.\n",
                "EXONERACION DE PAGOS EN INTERVENCIONES QUIRÚRGICAS DE EMERGENCIA AL PERSONAL DE TROPA SERVICIO MILITAR\n",
                "35% EN ANALISIS DE LABORATORIO.\n",
                "ATENCIÓN DE PACIENTES EN TRABAJOS DE PARTOS DISTÓCICOS.\n",
                "ATENCIÓN PEDIATRICA A LOS HIJOS DE PERSONAL MILITAR Y CIVIL",
                "REQUISITOS:",
                "PERSONAL DE OFICIALES, TECNICOS Y SUB OFICIALES, PERSONAL DE TROPA SMV, PERSONAL CIVIL Y FAMILIARES DIRECTOS DEBIDAMENTE IDENTIFICADOS CON SU CARNET DE IDENTIDAD",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial7: {
      title: "Convenios Provinciales Huancayo",
      cards: [
        {
          image: NoImagen,
          title: 'CENTRO DE TERAPIA "INFFEL"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "ALCANCE:",
                "SE LE OTORGARA UN DESCUENTO EN CUALQUIERA DE LAS TERAPIAS.",
                "REQUISITOS",
                "PERSONAL MILITAR, CIVIL Y FAMILIARES ",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial8: {
      title: "Convenios Provinciales Trujillo",
      cards: [
        {
          image: NoImagen,
          title: 'HOTEL "COLONIAL"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "28%",
                "ALCANCE:",
                "DESCUENTO SOLO EN ALOJAMIENTO (HABITACIONES)",
                "METODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS",
                "PRESENTAR CIP/CIF EN ACTIVIDAD Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: 'HOTEL "EL BRUJO"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10%",
                "ALCANCE:",
                "DESCUENTO SOLO EN ALOJAMIENTO (HABITACIONES)",
                "METODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS",
                "PRESENTAR CIP/CIF EN ACTIVIDAD Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: 'HOTEL "RADO"',
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10%",
                "ALCANCE:",
                "DESCUENTO SOLO EN ALOJAMIENTO (HABITACIONES)",
                "METODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS",
                "PRESENTAR CIP/CIF EN ACTIVIDAD Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "DANIELITA CEVICHERÍA RESTAURANTE",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "15%",
                "ALCANCE:",
                "DESCUENTO EN TODA NUESTRA CARTA",
                "DESCUENTO SE APLICA TODOS LOS DIAS.",
                "METODOS DE PAGO: EFECTIVO, YAPE, PLIM O TRANSFERENCIAS.",
                "PRESENTAR CIP/CIF EN ACTIVIDAD Y/O RETIRO.",
                "REQUISITOS:",
                "PERSONAL MILITAR, SERVIDORES PUBLICOS DEL EJÉRCITO Y FAMILIA MILITAR",
              ],
            },
          ],
        },
      ],
    },
    sectionProvincial9: {
      title: "Convenios Provinciales Tumbes",
      cards: [
        {
          image: NoImagen,
          title: "HOTEL RESTAURANTE LAS CABAÑAS DE ZORRITOS",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10%",
                "ALCANCE:",
                "DESCUENTO EN PLATOS  A LA CARTA",
                "DESCUENTO EN HABITACIONES.",
                "SE ENCUENTRA UBICADO EN LA AV PANAMERICANA NORTE KM 214.50 BOCAPAN CONTRAALMIRANTE VILLAR ZORRITOS TUMBES",
                "REQUISITOS:",
                "PERSONAL MILITAR EN ACTIVIDAD O RETIRO, PERSONAL CIVIL EN ACTIVIDAD O CESANTE, FAMILIARES DIRECTOS, ESPOSA, HIJOS Y PADRES",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "EL HUERTO DEL SABER",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "10%",
                "ALCANCE:",
                "*DESCUENTO EN PLATOS  A LA CARTA PESCADOS, CARNES Y MARISCOS.",
                "SE ENCUENTRA UBICADO EN SAN JUAN DE LA VIRGEN- TUMBES",
                "REQUISITOS:",
                "PERSONAL MILITAR EN ACTIVIDAD O RETIRO, PERSONAL CIVIL EN ACTIVIDAD O CESANTE, FAMILIARES DIRECTOS, ESPOSA, HIJOS Y PADRES",
              ],
            },
          ],
        },
        {
          image: NoImagen,
          title: "LA COLMENA TOURS",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                'EMPRESA DE TRANSPORTE TURISTICO "LA COLMENA TOURS" EIRL',
                "20%",
                "ALCANCE:",
                "DESCUENTOS EN TODOS SUS SERVICIOS",
                "REQUISITOS:",
                "PERSONAL MILITAR EN ACTIVIDAD O RETIRO, EMPLEADOS CIVILES Y FAMILIARES DIRECTOS (PADRES DEL TITULAR, ESPOSA E HIJOS)",
              ],
            },
          ],
        },
      ],
    },
    sectionInternacionales: {
      title: "Convenios Internacionales :",
      cards: [
        {
          image: ArgentinaBandera,
          title: "Argentina",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Cuenta con alojamiento en hoteles administrados por el Círculo Militar y el uso de sus respectivas instalaciones, brindado a todo el personal militar en actividad y/o retiro, previa coordinación mediante el Agregado Militar.",
                `Teléfono cel (ws): <a href="tel:51949430983" target="_blank">51949430983</a>`,
                `Teléfono cel (ws): <a href="tel:5491139299794" target="_blank">5491139299794</a>`,
              ],
            },
          ],
        },
        {
          image: BoliviaBandera,
          title: "Bolivia",
          description: "Próximamente...",
        },
        {
          image: BrasilBandera,
          title: "Brasil",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Beneficios: Cuenta con club militar y hoteles del Ejército de Brasil dirigido a todo el personal militar, previa coordinación con el Agregado Militar.",
                `Teléfono cel (ws): <a href="tel:966005004" target="_blank">966005004</a>`,
                `Teléfono fijo: <a href="tel:00556132445534" target="_blank">00556132445534</a>`,
              ],
            },
          ],
        },
        {
          image: ChileBandera,
          title: "Chile",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Beneficios: Cuenta con todos los centros del sistema de bienestar, Círculos militares con hospedaje tarifas preferenciales, es necesario comunicar con la debida anticipación a fin de realizar coordinaciones y reservas, este beneficio está dirigido a todo el personal militar en situación de actividad y/o retiro y familiares.",
                `Teléfono cel (ws): <a href="tel:56985002700" target="_blank">56985002700</a>`,
                `Teléfono fijo: <a href="tel:0056323695567" target="_blank">0056323695567</a>`,
              ],
            },
          ],
        },
        {
          image: ColombianaBandera,
          title: "Colombia",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Convenio suscrito con el círculo militar de las fuerzas militares de Colombia para el acceso a las instalaciones accediendo a tarifas preferenciales, este beneficio es para el personal militar en actividad y/o retiro y familiares, previa coordinación con la agregaduría militar.",
                `Teléfono cel (ws): <a href="tel: 999950784" target="_blank"> 999950784</a>`,
              ],
            },
          ],
        },
        {
          image: CoreaBandera,
          title: "Corea",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Dispone de hoteles, que brindan facilidades al personal militar en actividad de países extranjeros, que se encuentran de visita, previa coordinación con el Agregado Militar.",
                `Teléfono cel (ws): <a href="tel: 821056508802" target="_blank"> 821056508802</a>`,
                `Teléfono fijo: <a href="tel: 008207074531947" target="_blank"> 008207074531947</a>`,
              ],
            },
          ],
        },
        {
          image: EcuadorBandera,
          title: "Ecuador",
          description: "Próximamente...",
        },
        {
          image: EspanaBandera,
          title: "España",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Se cuenta con diferentes Residencias Militares de Descanso (RMD), las cuales pueden ser utilizadas por todo el personal militar y familia, previo trámite y gestión de solicitud, en coordinación con el Agregado Militar.",
                `Teléfono cel (ws): <a href="tel: 34629228505" target="_blank"> 34629228505</a>`,
              ],
            },
          ],
        },
        {
          image: FranciaBandera,
          title: "Francia",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Cuenta con hotel, alojamientos y/o similares, dirigido a todo el personal militar en actividad, retiro y familiares directos, coordinaciones de información y reserva se pueden realizar de manera directa en la página web www.igesa.fr.",
                `Teléfono cel (ws): <a href="tel: 336244727455" target="_blank"> 33624472745</a>`,
              ],
            },
          ],
        },
        {
          image: MexicoBandera,
          title: "Mexico",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Alojamiento en el “Hotel Bicentenario” en beneficio para el personal de Oficiales, Supervisores, Técnicos, Sub Oficiales y familiares extranjeros, previa comunicación y con la debida anticipación para realizar la reserva correspondiente.",
                `Teléfono cel (ws): <a href="tel: 553733958" target="_blank"> 553733958</a>`,
              ],
            },
          ],
        },
      ],
    },
        sectionCollages: {
          collages: [
              {
                  id: "AyudaEconomicaSocial",
                  titleImage: TitleAyudaEconomica,
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
        href: "https://www.facebook.com/profile.php?id=61555409192993&mibextid=sCpJLy",
        icon: faFacebook,
        name: "Facebook",
      },
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
