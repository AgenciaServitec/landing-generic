import {
  ArgentinaBandera,
  BancoComercio,
  BancoContinental,
  BancoGng,
  BancoInterbank,
  BancoPichincha,
  BancoScotiabank,
  BannerEconomico,
  BannerSalud,
  BannerServices,
  BoliviaBandera,
  BrasilBandera,
  ChileBandera,
  CobieneLogoLarge,
  ColombianaBandera,
  ConvenioSalud1,
  ConvenioSalud10,
  ConvenioSalud11,
  ConvenioSalud12,
  ConvenioSalud13,
  ConvenioSalud14,
  ConvenioSalud15,
  ConvenioSalud2,
  ConvenioSalud3,
  ConvenioSalud4,
  ConvenioSalud5,
  ConvenioSalud6,
  ConvenioSalud7,
  ConvenioSalud8,
  ConvenioSalud9,
  CoreaBandera,
  EcuadorBandera,
  EspanaBandera,
  FacturaServitec,
  FinancieraEfectiva,
  FinancieraLarehabilitadora,
  FranciaBandera,
  Hotel3,
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
  MexicoBandera,
  MisaPadre,
  NoImagen,
  PublicidadServitec,
  SaecoBautismo,
  SaecoImgAbout,
  SaecoImgCarousel,
  Samsung,
  SeguroRimac,
  SeguroSaludPositiva,
  SeguroVehicularPositiva,
  Servitec,
  SmartFit,
  StoreServitec,
  TiendaFootloose,
  TiendaLazzos,
  TiendaVizzano,
  TitleAyudaEconomica,
  TitleConvenios,
  TitleReli,
  Transporte1,
  Transporte2,
  Transporte3,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
    link: "https://apoyosocial.cobiene.mil.pe",
    description: "Apoyo social",
    keywords: "salud,servicios,convenios",
  },
  header: {
    name: "Sección de Servicio Social",
    title: "Sección de Servicio Social",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "AyudaEconomicaSocial", name: "Ayuda Economica" },
      { id: "Convenios", name: "Convenios Multiservicios" },
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
        "El departamento de apoyo social como parte del comando de bienestar del ejército,ayudas económicas para casos excepcionales de salud, descuento por convenios multiservicios, apoyo de servicio religioso, asesoramiento de apoyo a la familia y apoyo al personal discapacitado, orientados a lograr beneficios para el personal militar, civil en actividad, retiro, cesantes y sus familiares directos.",
      ],
      images: [SaecoImgAbout],
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
          title: "Banco Gnb",
          description: "TEA hasta 16% por convenio",
        },
        {
          image: BancoPichincha,
          title: "Banco Pichincha",
          description: "TEA hasta 14% por convenio",
        },
        {
          image: BancoContinental,
          title: "Banco Continental",
          description: "TEA hasta 15.5% por convenio",
        },
        {
          image: BancoInterbank,
          link: "https://interbank.pe",
          title: "Banco Interbank",
          description: "TEA hasta 19.5% por convenio",
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
              title: "BENEFICIARIOS:",
              descriptions: [
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuges e hijos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge e hijos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS: ",
              descriptions: [
                "Servicios psicopedagógicos, especializados en problemas de lenguaje, aprendizaje y conducta, a través de tarifas especiales, mediante porcentaje de descuento, según grado de el BENEFICIARIO, así como costos diferenciados en las sedes de APEPLAC. SURCO y RÌMAC",
                "Direcciones y citas telefónicas",
                `Sede Surco Mariscal Castilla 1170 - Teléfonos <a href="tel:4356989" target="_blank" >4356989</a>  y <a href="tel:990436788" target="_blank" >990436788</a>.`,
                'Sede Rímac Calle Fray Ramón Rojas 191 – Teléfono: <a href="tel:990436788" target="_blank" >990436788</a>. ',
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1jlom4Wo99Bl46huoZT9x3KAmS6PVlkXh/view?usp=sharing",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud2,
          title: "Biolinks",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS :",
              descriptions: [
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuges, hijos y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar",
              ],
            },
            {
              title: "BENEFICIOS : ",
              descriptions: [
                " a) Acceso a costo diferenciado de porcentaje de descuento sobre la tarifa regular, en todas sus sedes propias y sedes con colaboradores con alianzas estratégicas, de los exámenes de laboratorios que se indican:",
                "• Descuento del 20% en prueba de ADN reconocimiento de paternidad.",
                "• Oncológicos aérea diagnostico",
                "• Áreas infecciosas",
                "b) Realización de citas mediante:",
                "• Forma PRESENCIAL, en las sedes siguientes:",
                "- Sede Lima Av. Javier Prado Oeste 844 Magdalena y Av. Carlos Izaguirre 736, Los Olivos.",
                "- Sede Trujillo, Av. Jesús de Nazareth 364 Urb. San Andrés.",
                "- Sede Huancayo, Jr. Parra delo Riego 375-399 El Tambo.",
                "- Sede Arequipa, Av. Zamacola 203, Yanahuara.",
                "- Sedes en otras provincias del Perú con colaboradores en convenio con Biolinks.",
                `• Informes a los teléfonos: <a href="tel:2614411" target="_blank">2614411</a> y <a href="tel:2614412" target="_blank">2614412</a>, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las órdenes médicas respectivas.`,
                `Correo electrónico <a href="mailto:adn@biolinksperù.com">adn@biolinksperù.com</a> – <a href="https://biolinksperu.com" target="_blank">www.biolinksperu.com</a>.`,
              ],
              sedes: [
                {
                  icon: faBuilding,
                  sede: "https://drive.google.com/file/d/1032hsI94wA332DYLBX_bDUvmNupGaG8r/view?usp=sharing",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1w10YrPqy46Qf3b6mcFLdfW2BDWW3UCf5/view?usp=drive_link",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://biolinksperu.com",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud3,
          title: "Uchi's Med",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y  padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, hermanos y padres).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar",
              ],
            },
            {
              title: "BENEFICIOS: ",
              descriptions: [
                "Acceso al 20% de descuento en los servicios ofrecidos al personal afiliado y no afiliado.",
                "CONSULTA ODONTOLÓGICA, LIMPIEZA COMPLETA CON ULTRASONIDO, FLUORIZACIÓN, SELLANTE DE FOSAS Y FISURAS, CURACIONES SIMPLES CON RESINA Y LUZ HALÓGENA, CURACIONES COMPUESTAS CON RESINA Y LUZ HALÓGENA, EXTRACCIONES SIMPLES, ENDODONCIA EN PIEZAS ANTERIORES, 02 RX PERIAPICALES.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1zIzNtkIsPTxFUqSOLJ_nD5zMVxMuxRya/view?usp=sharing",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud4,
          title: "Inppares",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar y civil en actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS: ",
              descriptions: [
                "a) Descuento del 10% de sobre los costos de las tarifas regulares, EN CONSULTAS EN LAS 27 ESPECIALIDADES MÉDICAS.",
                "b) Descuento entre el 5% y 10% sobre los costos de las tarifas regulares en, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, realizados en la sede de Jesús María.",
                "c) Descuento del 5% de sobre los costos de las tarifas regulares en sedes de LOS OLIVOS Y SAN JUAN DE LURIGANCHO, EN CONSULTAS, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, en las diferentes especialidades sede.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/19cAIqRNbvHeBmruHBRYdDluZvxIY9rsy/view?usp=drive_link",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://inppares.org/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud5,
          title: "Medifon",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuges e hijos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Implementará el acceso al beneficio a través del call center y presencial en las sedes de Miraflores, Jesús María, Los Olivos, San Borja, San juan de Lurigancho, San juan de Miraflores, san miguel y Cercado de Lima, en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.",
                "Otorgará el valor de $150.00 dólares americanos, de descuento sobre los costos de las tarifas regulares, en dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.",
                "Otorgará garantía por un año, recalibraciones, limpiezas y mantenimiento ilimitados, así como dotación de seis baterías, en los dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.",
                "Otorgará el 25% de descuento sobre los costos de las tarifas regulares, en baterías, pilas, accesorios de limpieza, en las diferentes sedes.",
                "Otorgará el valor de cien S/100.00 soles, en el costo por consulta especializada previa cita en la especialidad de otorrinolaringología.",
                "Otorgará acceso gratuito a los servicios de audiológicos (audiometría y otoscopía), previa cita.",
                "Otorgará a los BENEFICIARIOS de “EL EJÉRCITO” el valor de $150 ciento cincuenta dólares americanos de descuento sobre el costo tarifa regular de los DISPOSITIVOS VIBRADORES ÓSEOS.",
                "Otorgará el valor de $2000 dos mil dólares americanos de descuento sobre el costo tarifa regular del dispositivo medico a largo plazo, IMPLANTE COCLEAR, en lo correspondiente a la colocación quirúrgica (clínica, operación, anestesiólogo, equipo, post operatorio, cincuenta terapías de lenguaje y otros).",
                "Los beneficios antes indicados serán en todas las sedes de MEDIFON.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://medifonperu.pe/",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/13ZRqsN3mBARxug_4O55DAVk6RoUZatT2/view?usp=drive_link",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud6,
          title: "MultiDent",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos y padres); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos y padres).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Acceso a los distintos servicios odontológicos ofrecidos, a través de costos diferenciados, mediante porcentaje de descuento sobre las tarifas regulares, de acuerdo a lo establecido para personal afiliado.",
                "Implementará a través la programación a través del call center, y de forma presencial en todas sedes a nivel nacional, y en todos sus horarios.",
                "Servicios de emergencias dentales, las 24 horas del día, los 7 días de la semana en la sede de la Av. César Vallejo N° 1560 - Lince y en todas las sedes a nivel nacional en horario de atención.",
                "CONSULTA GRATUITA",
                "Examen odontológico de cortesía.",
              ],
              sedes: [
                {
                  icon: faBuilding,
                  sede: "https://drive.google.com/file/d/1ESEdYrS0JqrWB2c-RDd_YbWBOJlGIRQG/view?usp=sharing",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1Vvdazj1v7BynWtIN6ylDxmM1SPbDrm2n/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.multident.pe",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud7,
          title: "Tinnitus",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos y padres); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos y padres).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Descuento del 30% en audífonos medicados programables que comercialice la empresa.",
                "b) Descuento del 20% de en servicios de audiología y psicología nutrición.",
                "Consultas e informes a través del celular y WhatsApp: 980688232, así como correo electrónico comercial@grupoinfinitech.com y presencial en la Av. Canadá Nº 3630, consultorio 205 San Borja en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "http://tinnitusperu.com",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud8,
          title: "Unilabs",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuge e hijos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge e hijos).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Acceso al 40% de descuento sobre la tarifa regular, de los exámenes de laboratorio de rutina.",
                "b) Acceso a la tarifa hospitalaria en el Centro CIMEDIC en las pruebas de diagnóstico por imágenes (tomografía, resonancia magnética).",
                "c) Acceso al 10% de descuento sobre la tarifa base, de los denominados exámenes de Anatomía Patológica (citología y quirúrgicos, inmunohistoquímica – marcadores inmunohistoquímicos, biología molecular, citometría de flujo, genética) y pruebas especiales.",
                "d) Realización de citas mediante:",
                "• Forma PRESENCIAL",
                "• Vía CALL CENTER, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las ordenes médicas emitidas por el HMC o centros de salud privados.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://unilabs.pe",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/12e784IZpTKyEcfdtT2HWarKWk2e6ib7P/view?usp=drive_link",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud9,
          title: "Oftalmo Salud",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Acceso al 50% de descuento en consultas medicas.",
                "b) Acceso al 30% de descuento sobre la tarifa regular, en exámenes auxiliares sobre tarifario vigente de paciente particular.",
                "c) Acceso al 30% de descuento sobre la tarifa regular vigente del paciente particular sobre los procedimientos de cirugías oftálmicas.",
                "d) Pueden aplicarse restricciones por motivo de insumos o complejidad.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/12e784IZpTKyEcfdtT2HWarKWk2e6ib7P/view?usp=drive_link",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://oftalmosalud.pe/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud10,
          title: "Otik Lens",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
                "HORARIOS:",
                "Miércoles, jueves y viernes de 9 am a 3 pm.",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda servicio gratuito de medida de vista computarizada y despistaje de defecto de refracción, miopía ambliopía",
                "b) Acceso al 15% de descuento en servicio de lunas (blancas, blue antireflex, monofocales bifocales).",
                "c) Acceso al 25% de descuento en servicio de monturas económicas e intermedias y alta gama.",
              ],
              phones: [
                {
                  icon: faPhone,
                  url: "tel:968624571",
                  text: "968624571",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud11,
          title: "Global Laser",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Servicios especializados en  oftamalogica mediante\n" +
                  "\n" +
                  "un diagnostico, tratamiento y prevención de enfermedades oftamologicas contando con un soporte tecnológicos, profesional y administrativo odecuado, con equipos de última tecnologia y profesionales altamente capacitados contando con sedes en las provincias de lquitos Pucorpo y Puerto Maldonado.",
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:\n",
                "Presentación del carnet de identificación personal militar o civil CIP\n",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda descuentos especiales en consultas (agudeza visual, motilidadocular, presión intraocular, etc)",
                "b) Brinda tarifa regular en servicio quirúrgicos (cataratas, glaucoma, refractaria láser pterigion)",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1f_4bBVuRMRoE67i00NYsmnn9NmA_d8T4/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.globallaserperu.com/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud12,
          title: "Suiza Lab",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "servicios especializados en  oftamalogica mediante\n" +
                  "\n" +
                  "un diagnostico, tratamiento y prevención de enfermedades oftamologicas contando con un soporte tecnológicos, profesional y administrativo odecuado, con equipos de última tecnologia y profesionales altamente capacitados contando con sedes en las provincias de lquitos Pucorpo y Puerto Maldonado.",
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:\n",
                "Presentación del carnet de identificación personal militar o civil CIP\n",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda descuentos especiales en consultas (agudeza visual, motilidadocular, presión intraocular, etc)",
                "b) Brinda tarifa regular en servicio quirúrgicos (cataratas, glaucoma, refractaria láser pterigion)",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1f_4bBVuRMRoE67i00NYsmnn9NmA_d8T4/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.globallaserperu.com/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud13,
          title: "FeSalud",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y  padres); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:\n",
                "Presentación del carnet de identificación personal militar o civil CIP\n",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda tarifa plana sin anular sistema públicos de salud (ESSALUD y SIS). Incluye beneficio de sepelio completo en caso de fallecimiento a personal afiliado.",
                "b) Plan Emergencia: S/ 22.00",
                "c) Plan Integral: S/ 55.00",
                "d) Plan Integral Plus: S/ 78.00",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/18y0E7u3jukz9vJaG_e7mZdV9jKHmm8lQ/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://fesalud.com.pe/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud14,
          title: "Resocentro",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos,  padres y nietos); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:\n",
                "Presentación del carnet de identificación personal militar o civil CIP\n",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, hermanos,  padres y nietos).\n",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda tarifas preferenciales en resonancia magnética, tomografía, fibroscan, rayos x, ecografías y medicina nuclear.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1Jil2canGE6gr6z-q1Y5InoqU__S9g11J/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://resocentro.com/",
                },
              ],
            },
          ],
        },
        {
          image: ConvenioSalud15,
          title: "Auna",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:\n",
                "Dirigido al Personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos y padres); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:\n",
                "Presentación del carnet de identificación personal militar o civil CIP\n",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos y padres).\n",
              ],
            },
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Brinda servicios medicos y asistenciales medicas con costos diferenciados para personal afiliado",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1wc8-2qmUUjFYFSzizuz1fL9qKgy6r_ar/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.auna.org/pe/auna-salud",
                },
              ],
            },
          ],
        },
      ],
    },
    sectionDiversos: {
      title: "Convenios con Tiendas:",
      cards: [
        {
          image: TiendaFootloose,
          title: "Footloose",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al Personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos y padres); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos y padres).",
              ],
            },
            {
              title: "BENEFICIOS: ",
              descriptions: [
                "a) Acceso del 20% de descuento en calzado de marcas propias.",
                "b) Acceso del 10% de descuento en calzado nacional e importados inclusive zapatillas deportivas y de vestir de marca.",
                "c) Tiendas ubicadas en todos los centros comerciales",
              ],
              sedes: [
                {
                  icon: faBuilding,
                  sede: "https://drive.google.com/file/d/1RAtb1BTaEEwVh9xCId0Xm7QBtZaymmr4/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.footloose.pe",
                },
              ],
            },
          ],
        },
        {
          image: TiendaLazzos,
          title: "Lazzos",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al Personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos y padres); debidamente acreditados sin límite de edad.\n",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos y padres).",
              ],
            },
            {
              title: "BENEFICIOS :",
              description:
                "a) Acceso del 20% de descuento en productos de calzados y accesorios para damas y caballeros, sobre el precio de etiqueta, en todas las tiendas Mossa Shoes.",
              // link: "https://www.lazzos.com.pe",
            },
          ],
        },
        {
          image: TiendaVizzano,
          title: "Calzado Vizzano",
          descriptionLarge: [
            {
              title: "BENEFICIOS : ",
              descriptions: [
                "Dirigido al personal militar y civil en actividad, así como sus familiares directos (cónyuge, hijos, padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).",
              ],
            },
            {
              title: "BENEFICIOS:",
              descriptions: [
                "a) Compras presenciales, solo en tiendas propias.",
                "b) Aplica para compras en tienda virtual, mediante el uso del cupón al momento de hacer el pago",
                `<a href="https://www.mossashoes.com/">https://www.mossashoes.com/<a/>`,
                "Cupón MOSSAEJE20",
                "c) Descuento del 20% en marcas propias",
                "d) Descuento del 20% en todas marcas diferentes.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1T_a8CfUiAOElAIivhkejrIpFXFuWUwSL/view?usp=sharing",
                },
              ],
            },
          ],
        },
        {
          image: SmartFit,
          title: "SmartFit",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Acceso PLAN BLACK corporativo, con un costo de s/99.90, el cual otorga los siguientes beneficios:",
                "• Exoneración del pago único de “Matrícula”, mediante pago a cuenta de tarjeta crédito o débito.",
                "• Exoneración del pago anual de “Mantenimiento”.",
                "• Exoneración del pago de la penalidad por resolución anticipada contemplada en la cláusula “Cancelación y Expulsión”.",
                "• Entrenamiento en cualquier sede del Perú y Latinoamérica.",
                "• Invitación amigos y familiares hasta 5 veces al mes.",
                "• Acceso a sillones de masajes.",
                "• Acceso de manera ilimitada a la plataforma Virtual SMART FIT GO.",
                "• Libre de elección de fechas de entrenamiento, mínimo un mes.",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar y civil en actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1doEYxPYrX21ttcHH79tNk35SRY0dGddw/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.smartfit.com.pe",
                },
              ],
            },
          ],
        },
      ],
    },
    sectionFinancieras: {
      title: "Convenios con Financieras :",
      cards: [
        {
          image: FinancieraEfectiva,
          link: "https://www.efectiva.com.pe",
          title: "Financiera Efectiva",
          description: "TEA hasta 19% por convenio",
        },
        {
          image: FinancieraLarehabilitadora,
          link: "https://larehabilitadora.com",
          title: "Financiera La Rehabilitadora",
          description: "TEA hasta 18.5% por convenio",
        },
      ],
    },
    sectionSeguros: {
      title: "Convenios con Compañias de Seguros : ",
      cards: [
        {
          image: SeguroRimac,
          title: "Seguros Rimac",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como a sus familiares directos (cónyuge e hijos).",
                "BENEFICIO:",
                "-\tProtección familiar vida, desde S/ 33.00",
                "-\tProtección familiar sepelio, desde S/ 22.90",
                "-\tProtección familiar ahorro, desde S/ 23.90",
                "-\tProtección familiar accidental, desde S/ 21.00",
                "-\tSeguro domiciliario",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.rimac.com",
                },
              ],
            },
          ],
        },
        {
          image: SeguroSaludPositiva,
          title: "Seguro Salud Positiva",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante.",
                "BENEFICIO:",
                "Seguro empresa salud en coberturas básicas de acuerdo a red de clínicas, desde S/ 160.00",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.lapositiva.com.pe/wps/portal/landing/medisalud",
                },
              ],
            },
          ],
        },
        {
          image: SeguroSaludPositiva,
          title: "Seguro Vida Positiva",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante.",
                "BENEFICIO:",
                "Desde $ 15.94 en seguro vida individual positiva vida futuro vida entera. (con devolución)",
                "Suma asegurada según contrato.",
                "Fallecimiento",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.lapositiva.com.pe/wps/portal/landing/seguros-vida-individual",
                },
              ],
            },
          ],
        },
        {
          image: SeguroVehicularPositiva,
          title: "Seguro Vehicular Positiva",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como a sus familiares directos (cónyuge e hijos).",
                "BENEFICIO:",
                "Todo riesgo, desde $ 37",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.lapositiva.com.pe/wps/portal/corporativo/home/proteger/mi-vehiculo/seguro-vehicular",
                },
              ],
            },
          ],
        },
      ],
    },
    sectionTransporte: {
      title: "Convenios con Empresas de Transporte :",
      cards: [
        {
          image: Transporte1,
          title: "Movilbus",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Dirigido al personal militar y civil en actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, Padres).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
                "d) Deberá de presentar copia de CIP al momento de la compra.",
                "BENEFICIO",
                "a) No aplica para compras por página web, call center",
                "b) Acceso los 365 días del año, de forma PRESENCIAL",
                "c) Acceso al 20% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (económico, premier, presidencial, ejecutivo, vip), hacia cualquiera de los destinos.",
                "e) Acceso al 15% de descuento en servicio de transporte de correspondencia, paqueteria, encomiendas, carga ligera o mediana.",
                "f) Costos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de MOVILBUS.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.movilbus.pe/",
                },
              ],
            },
          ],
        },
        {
          image: Transporte2,
          title: "Oltursa",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Dirigido al personal militar y civil en actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
                "d) Deberá de presentar copia de CIP al momento de la compra.",
                "BENEFICIO",
                "a) No aplica para compras por página web, call center",
                "b) Acceso los 364 días del año, de forma PRESENCIAL",
                "c) Acceso al 15% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (bus cama 140,160,180), hacia cualquiera de los destinos.",
                "d) Acceso al 10% de descuento sobre la tarifa regular, en el servicio de envió a través de Servicio expreso y Servicio consolidado, en todos sus destinos.",
                "e) Costos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de OLTURSA.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1oSV8pJdnILl9eVi85lKyQ2dhwk6sSx3G/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.oltursa.pe",
                },
              ],
            },
          ],
        },
        {
          image: Transporte3,
          title: "Cruz del Sur",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "CRUZ DEL SUR, es una sociedad privada que tiene como actividad principal el transporte por vía terrestre y transporte de carga por carretera. Quien facilitará a través de un convenio con la institución, beneficios a la familia militar, mediante costos diferenciados.",
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y  padres), debidamente acreditados, los 365 días del año.",
                "Válido solo para compras mediante página web <a href='https://www.cruzdelsur.com.pe/'>https://www.cruzdelsur.com.pe/</a>, mediante la asignación de un código de descuento al titular, el cual debe de ser usado por los BENEFICIARIOS acreditados, al momento de la compra virtual de los boletos.",
                "FORMA DE ACREDITACIÓN:",
                "Mediante la presentación física del respectivo Carnet de Identidad Personal del titular (CIP), y familiares directos, mediante presentación del Carnet de Identificación Familiar (CIF).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el DNI.",
                "BENEFICIO:",
                "-\t10% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros, en temporada alta o baja, en el primer nivel de los servicios de cruzero suite, cruzero evolution,  cruzero plus, ica line expres, hacia cualquiera de los destinos ofrecidos.",
                "-\t10% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros, en temporada alta, en el segundo nivel de los servicios de cruzero suite, cruzero evolution, cruzero plus hacia cualquiera de los destinos ofrecidos.",
                "-\t15% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros, en temporada baja, en el segundo nivel de los servicios de cruzero suite, cruzero evolution, cruzero plus, hacia cualquiera de los destinos ofrecidos.",
                "-\t10% de descuento sobre la tarifa regular, en los servicios de correspondencia, encomiendas, paquetería y carga ligera o mediana.\n",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.cruzdelsur.com.pe/",
                },
              ],
            },
          ],
        },
      ],
    },
    sectionHoteles: {
      title: "Convenios con Hoteles :",
      cards: [
        {
          image: Hotel3,
          title: "Hotel Carrera",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS:",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y  padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
                "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
                "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad \tFamiliar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
              ],
            },
            {
              title: "BENEFICIOS:",
              descriptions: [
                "-\t35% de descuento sobre el valor total en los diferentes tipos de alojamiento (habitación simple, doble, matrimonial) incluye impuesto, servicios, internet wifi y desayuno. \n",
                "-\tOtorgará el 10% de descuento en los servicios de restaurantes LA ALAMEDA, en el consumo de alimentos y bebidas, no válido para servicio a la habitación.\n",
                "-\tOtorgará 10% de descuento en los servicios de bar LOS DESCALZOS, no válido para servicio a la habitación.\n",
                "-\tConsideraciones especiales para niños alojados en el hotel:\n",
                "  Niños de 0 a 05 años incluye el servicio de desayuno.\n",
                "  Niños de 06 a 11 años se cobrara el costo por desayuno según tarifa asignada.\n",
                "  Niños a partir de los 12 años se considera como adultos con cargo adicional, incluyendo el desayuno.\n",
                "-\tLas reservas deberán ser realizadas a través de central de reservas <a href='tel:016195200' target='_blank'>016195200</a> whatsapp <a href='https://wa.me/989468821' target='_blank'>989468821</a> y mediante correo electrónico <a href='mailto:reservasonline@hotelcarrera.com.pe' target='_blank'>reservasonline@hotelcarrera.com.pe</a>",
              ],
            },
          ],
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
        {
          image: Samsung,
          title: "Samsung",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS:",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigio al Personal militar en situación de actividad y retiro, personal civil en actividad o cesante así como a sus familiares directos (cónyuge, hijos, hermanos y padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
                "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, hermanos y padres).\n",
                "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad \tFamiliar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
              ],
            },
            {
              title: "BENEFICIOS:",
              descriptions: [
                "Acceso a los diversos productos y servicios de su marca a precios reducidos, a través de la tienda virtual de" +
                  "“SAMSUNG” <a href='https://shop.samsung.com/pe/multistore/beneficios_empleados/beneficios_empleados/login/'>https://shop.samsung.com/pe/multistore/beneficios_empleados/beneficios_empleados/login/</a>," +
                  "siendo válido para Lima y provincias.",
                "Descuentos sobre la tarifa regular, a costos especiales, en todas las líneas de smartphone, tablet, relojes inteligentes, dispositivos de audios, accesorios, televisores, audio, video, refrigeradoras, lavado, soluciones de aire, electrodomésticos de cocina, monitores, entre otros.",
              ],
            },
          ],
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
