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
  PublicidadServitec,
  FacturaServitec,
  TiendaVizzano,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
  faLink,
  faBuilding,
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
              descriptions: [
                "Servicios psicopedagógicos, especializados en problemas de lenguaje, aprendizaje y conducta, a través de tarifas especiales, mediante porcentaje de descuento, según grado de el BENEFICIARIO, así como costos diferenciados en las sedes de APEPLAC. SURCO y RÌMAC",
                "Direcciones y citas telefónicas",
                `Sede Surco Mariscal Castilla 1170 - Teléfonos <a href="tel:4356989" target="_blank" >4356989</a>  y <a href="tel:990436788" target="_blank" >990436788</a>.`,
                'Sede Rímac Calle Fray Ramón Rojas 191 – Teléfono: <a href="tel:990436788" target="_blank" >990436788</a>. ',
              ],
            },
            {
              title: "ALCANCE DEL CONVENIO: ",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
          ],
        },
        {
          image: ConvenioSalud2,
          title: "Biolinks",
          descriptionLarge: [
            {
              title: "BENEFICIOS : ",
              descriptions: [
                " a) Acceso a costo diferenciado de porcentaje de descuento sobre la tarifa regular, en todas sus sedes propias y sedes con colaboradores con alianzas estratégicas, de los exámenes de laboratorios que se indican:",
                "• Pruebas de Paternidad Parentesco.",
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
            },
            {
              title: "BENEFICIARIOS :",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar",
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
                    "https://drive.google.com/file/d/19cC4wjIEd7SI5ISCS87xyomg0nOaMxzY/view?usp=sharing",
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
          title: "Uchis Med",
        },
        {
          image: ConvenioSalud4,
          title: "Inppares",
          descriptionLarge: [
            {
              title: "BENEFICIARIOS :",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
            },
            {
              title: "BENEFICIO: ",
              descriptions: [
                "a) Descuento del 10% de sobre los costos de las tarifas regulares, EN CONSULTAS EN LAS DIFERENTES ESPECIALIDADES LA SEDE DE JESÚS MARÍA.",
                "b) Descuento entre el 5% y 10% sobre los costos de las tarifas regulares en, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, realizados en la sede de Jesús María.",
                "c) Descuento del 5% de sobre los costos de las tarifas regulares en sedes de LOS OLIVOS Y SAN JUAN DE LURIGANCHO, EN CONSULTAS, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, en las diferentes especialidades sede.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/12sqPYvBLOgP1_XeonoiGnCNeHMIJyEyY/view?usp=sharing",
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
              title: "BENEFICIOS :",
              descriptions: [
                "Implementará el acceso al beneficio a través del call center y presencial en las sedes de Miraflores, Jesús María, Los Olivos, San Borja, San juan de Lurigancho, San juan de Miraflores, san miguel y Cercado de Lima, en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.",
                "Otorgará el valor de $150 dólares americanos, de descuento sobre los costos de las tarifas regulares, en dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.",
                "Otorgará garantía por un año, recalibraciones, limpiezas y mantenimiento ilimitados, así como dotación de seis baterías, en los dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.",
                "Otorgará el 25% de descuento sobre los costos de las tarifas regulares, en baterías, pilas, accesorios de limpieza, en las diferentes sedes.",
                "Otorgará el valor de cien s/100 soles, en el costo por consulta especializada previa cita en la especialidad de otorrinolaringología.",
                "Otorgará acceso gratuito a los servicios de audiológicos (audiometría y otoscopía), previa cita.",
                "Otorgará a los BENEFICIARIOS de “EL EJÉRCITO” el valor de $150 ciento cincuenta dólares americanos de descuento sobre el costo tarifa regular de los DISPOSITIVOS VIBRADORES ÓSEOS.",
                "Otorgará el valor de $2000 dos mil dólares americanos de descuento sobre el costo tarifa regular del dispositivo medico a largo plazo, IMPLANTE COCLEAR, en lo correspondiente a la colocación quirúrgica (clínica, operación, anestesiólogo, equipo, post operatorio, cincuenta terapías de lenguaje y otros).",
                "Los beneficios antes indicados serán en todas las sedes de MEDIFON.",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
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
                    "https://drive.google.com/file/d/1TuvuRj3_e4N2eM1IhgMb7rowjYQxEg9x/view?usp=sharing",
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
              title: "BENEFICIOS :",
              descriptions: [
                "Acceso a los distintos servicios odontológicos ofrecidos, a través de costos diferenciados, mediante porcentaje de descuento sobre las tarifas regulares, de acuerdo a lo establecido.",
                "Implementará a través la programación a través del call center, y de forma presencial en todas sedes a nivel nacional, y en todos sus horarios.",
                "Servicios de emergencias dentales, las 24 horas del día, los 7 días de la semana en la sede de la Av. César Vallejo N° 1560 - Lince y en todas las sedes a nivel nacional en horario de atención.",
                "CONSULTA GRATUITA",
                "Examen odontológico de cortesía.",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1ESEdYrS0JqrWB2c-RDd_YbWBOJlGIRQG/view?usp=sharing",
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
              title: "BENEFICIOS :",
              descriptions: [
                "Consultas e informes a través del celular y WhatsApp: 980688232, así como correo electrónico comercial@grupoinfinitech.com y presencial en la Av. Canadá Nº 3630, consultorio 205 San Borja en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.",
                "Descuento del 30% en audífonos medicados programables que comercialice la empresa.",
                "Gratis Kit de limpieza por la compra de audífonos medicados.",
                "Descuento del 20% de en servicios de audiología, psicología nutrición.",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "Presentación del carnet de identificación personal militar o civil CIP",
                "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).",
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
              title: "BENEFICIOS :",
              descriptions: [
                "BENEFICIO",
                "a) Acceso al 40% de descuento sobre la tarifa regular, de los exámenes de laboratorio de rutina.",
                "b) Acceso a la tarifa hospitalaria en el Centro CIMEDIC en las pruebas de diagnóstico por imágenes (tomografía, resonancia magnética).",
                "c) Acceso al 10% de descuento sobre la tarifa base, de los denominados exámenes de Anatomía Patológica (citología y quirúrgicos, inmunohistoquímica – marcadores inmunohistoquímicos, biología molecular, citometría de flujo, genética) y pruebas especiales.",
                "d) Realización de citas mediante:",
                "• Forma PRESENCIAL",
                "• Vía CALL CENTER, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las ordenes médicas emitidas por el HMC o centros de salud privados.",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                "ALCANCE DEL CONVENIO:",
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
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
                    "https://drive.google.com/file/d/144YibViWp6vReO7y61RCcVrv9PL8AkK3/view?usp=sharing",
                },
              ],
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
              descriptions: [
                "a) Exclusivo para compras presenciales.",
                "b) No aplica compras por web, app, o Facebook.",
                "c) Descuento del 15% en marcas propias.",
                "d) Descuento del 10% en todas marcas diferentes.",
                "e) Tiendas ubicadas en todos los centros comerciales",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1RAtb1BTaEEwVh9xCId0Xm7QBtZaymmr4/view?usp=sharing",
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
          image: TiendaVizzano,
          title: "Calzado Vizzano",
          descriptionLarge: [
            {
              title: "BENEFICIOS : ",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres); debidamente acreditados.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).",
                "BENEFICIO",
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
        // {
        //   image: TiendaLogistas,
        //   title: "Logistas",
        //   descriptionLarge: [
        //     {
        //       title: "BENEFICIOS :",
        //       description:
        //         "SERVICIOS DE MANTENIMIENTO VEHICULAR CORRECTIVOS\n" +
        //         "COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
        //     },
        //     {
        //       title: "BENEFICIARIOS: ",
        //       description:
        //         "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES Y FAMILIARES DIRECTOS",
        //     },
        //   ],
        // },
        {
          image: TiendaRenzoCosta,
          title: "Renzo Costa",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "a) Exclusivo para compras presenciales.",
                "b) No aplica compras por web, app, o Facebook",
                "c) Descuento del 10% en todos los productos tiendas propias",
                "d) Descuento del 5% en todos los productos, toda la cadena de tiendas a nivel nacional (centros comerciales)",
              ],
            },
            {
              title: "BENEFICIARIOS: ",
              descriptions: [
                " Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).",
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1MIAudy4sU8wGOjzaqcvbtvG2CMTKod0n/view?usp=sharing",
                },
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.renzocosta.com",
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
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
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
          // link: "https://www.movilbus.pe/",
          title: "Movilbus",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
                "FORMA DE ACREDITACIÓN:",
                "a) Presentación del carnet de identificación personal militar o civil CIP",
                "b) Presentación del carnet de identificación familiar CIF (cónyuge, hijos, Padres).",
                "c) Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.",
                "d) Deberá de presentar copia de CIP al momento de la compra.",
                "BENEFICIO",
                "a) No aplica para compras por página web, call center",
                "b) Acceso los 364 días del año, de forma PRESENCIAL",
                "c) Acceso al 20% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (económico, premier, presidencial, ejecutivo, vip), hacia cualquiera de los destinos.",
                "d) Acceso al 30% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER, que inicien en provincias (hacia Lima) a excepción de Lima como origen.",
                "e) Acceso al 15% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER que inicien en Lima, hacia cualquiera de los destinos ofrecidos.",
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
          // link: "https://www.oltursa.pe",
          title: "Oltursa",
          descriptionLarge: [
            {
              title: "BENEFICIOS :",
              descriptions: [
                "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.",
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
                "3.1. Brindará a los BENEFICIARIOS, acceso a descuentos sobre la tarifa regular, de hasta 29%, en los alojamientos propios y asociados, ubicados a nivel nacional, vigentes al momento de la reserva, según relación actualizada, de forma trimestral.",
                "3.2. El acceso a los servicios hoteleros ofrecidos, a través de porcentaje de descuento sobre las tarifas regulares, otorgados EXCLUSIVAMENTE mediante la web que adjuntada , canales de atención a través de correo electrónico",
                `<a href="https://www.casa-andina.com/es/ofertas/ejercitoperu" target="_blank">https://www.casa-andina.com/es/ofertas/ejercitoperu</a>`,
                "Canales de atención a través de correo electrónico:",
                `<a href="mailto:centraldereservas@casa-andina.com" target="_blank">centraldereservas@casa-andina.com</a>`,
                "Y call center",
                `<a href="tel:013916500" target="_blank">(01) 3916500</a>`,
                "El código de acceso al descuento es EJERCITOPERU22.",
                "3.3 Beneficio previa presentación física del respectivo Carnet de Identidad Personal del titular (CIP), y familiares directos mediante presentación del Carnet de Identificación Familiar (CIF); al momento de ingreso al hotel.",
                "3.4 En caso el BENEFICIARIO, no pueda acreditar que es personal de “EL EJÉRCITO”, “CASA ANDINA” informará a dicho huésped, que no es acreedor al descuento por convenio y además se reserva el derecho de cobrar el monto vigente al momento del check – in.",
                "3.5 Las reservas realizadas son de tarifas NO REEMBOLSABLE.",
                "3.6 Al finalizar el pago, cabe mencionar que se aplicará el 10% a la tarifa inicial por el cargo correspondiente a servicios y el 18% de impuestos de ley vigentes; los mismos que podrán variar de acuerdo a las regulaciones gubernamentales.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.casa-andina.com/es/ofertas/ejercitoperu",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1c-r__vS6vfKcRTSOXe85pw2pHiR1OuRW/view?usp=sharing",
                },
              ],
            },
          ],
        },
        {
          image: Hotel2,
          title: "Hotel Costa del Sol",
          descriptionLarge: [
            {
              title: "BENEFICIOS : ",
              descriptions: [
                "Nuestras tarifas de alojamiento incluyen:",
                "Desayuno Buffet",
                "10% deDSCTO en Restaurante Paprika sobre precio de Carta. No aplica para menú.",
                "10% de DSCTO en Alimentos y Bebidas, aplica para bebidas alcohólicas",
                "10% de DSCTO en Lavandería.",
                "10% de DSCTO en SPA Sobre precios de masajes, para las sedes Piura, Trujillo Golf, Trujillo centro,\n" +
                  "Cajamarca, Aeropuerto, Salaverry.",
                "Una bebida de bienvenida a elección (welcome drink)",
                "Servicio de WI FI en todas nuestras instalaciones",
                "Business Center",
                "Uso del Gimnasio, piscina y sauna donde esté disponible. De acuerdo a las disposiciones del gobierno y Mincetur por la llegada del COVID-19.",
                "Servicio de recojo y traslado al aeropuerto para reservas individuales, previa reserva (no aplica grupos) en las ciudades de: Tumbes, Piura, Trujillo, Chiclayo, Pucallpa, Arequipa y Cajamarca.",
                "No aplica para los Hoteles de Lima y Cusco.",
                "El recojo y traslado al aeropuerto se brindará de acuerdo a las disposiciones del gobierno y Mincetur por la llegada del COVID-19 y bajo previa reserva en servicio compartido y sólo en los horarios establecidos por cada Hotel (cualquier retraso por parte del cliente será su responsabilidad). Este servicio no aplica para Grupos sólo para pasajeros Individuales.",
                "A continuación le brindamos mayor información al respecto:",
                "CDSW Lima Aeropuerto.- No es necesario trasladarse en auto ya que nuestro hotel se localiza a 25 metros de la puerta de Salidas Internacionales. Asimismo, contamos con acceso directo desde el segundo nivel del Aeropuerto al Hotel.",
                "CDSW Lima City.- El servicio de traslado Ida o Vuelta tiene un costo de S/ 70 neto (en efectivo) por unidad pagando directamente al conductor. Si desea cargar el servicio a la cuenta de la habitación, es posible pero tendría que adicionar el 18% IGV y el 10% servicios.",
              ],
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.costadelsolperu.com/hoteles/hotel-costa-del-sol-wyndham-lima-ciudad/",
                },
              ],
              detalles: [
                {
                  icon: faLink,
                  detalle:
                    "https://drive.google.com/file/d/1uq6ZomiXJkiQlECigzB9DL75uaJ5kmJu/view?usp=sharing",
                },
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
