import {
  CobieneLogoLarge,
  Institute10,
  Institute11,
  Institute12,
  Institute13,
  Institute14,
  Institute35,
  Institute34,
  Institute16,
  Institute2,
  Institute32,
  Institute20,
  Institute21,
  Institute22,
  Institute23,
  Institute24,
  Institute25,
  Institute30,
  Institute26,
  Institute3,
  Institute5,
  Institute6,
  Institute7,
  Institute8,
  Institute33,
  Institute31,
  Institute9,
  SaedAboutUs,
  SaedBannePublic,
  SaedSlider1,
  UniversidadCatolicaSedeSapientiale,
  UniversidadCesarVallejo,
  UniversidadDelPacifico,
  UniversidadESAN,
  UniversidadChampagnat,
  UniversidadPrivadadelNorte,
  UniversidadRicardoPalma,
  UniversidadSanJuanBautista,
  UniversidadSanMarcos,
  UniversidadSanmartinPorres,
  UniversidadSeñorSipan,
  UniversidadSanIgnacioLoyola,
  UniversidadUnifeSagradoCorazon,
  UniversidadUtp,
  UniversidadCientifica,
  UniversidadNorbert,
  UniversidadJaimeBausate,
  UniversidadNacionalMusica,
  UniversidadFedericoVillareal,
  UniversidadUpc,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const saedConfig = {
  header: {
    name: "saed",
    title: "Sección Apoyo Estudios Superiores",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "convenios", name: "INFORMACIÓN" },
      { id: "contact", name: "CONTÁCTANOS" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "PREPARANDO PARA EL FUTURO.",
        image: SaedSlider1, //AQUI VA IMAGEN
        buttons: [
          // {
          //   type: "primary",
          //   id: "about-us",
          //   title: "Nosotros",
          // },
          // {
          //   type: "secondary",
          //   id: "convenios",
          //   title: "Información",
          // },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      descriptions: [
        "La Sección de Apoyo Educativo se encarga de  planear, coordinar, y ejecutar actividades en el ámbito de la Educación superior y Tecnológica, promoviendo de manera permanente la suscripción de convenios y otros procedimientos de ayuda, con las diferentes Universidades, Institutos, Academias preuniversitarias, escuelas de grado y postgrado y otras instituciones de este género, orientados a lograr beneficios para el personal militar.",
      ],
      buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
      images: [SaedAboutUs],
    },
    sectionConvenios: {
      id: "convenios",
      title: "Universidades :",
      cards: [
        // {
        //   image: UniversidadAgraria,
        //   title: "Agraria",
        //jace@mil.pe
        // },
        // {
        //   image: UniversidadCatolica,
        //   title: "Catolica del Perú",
        // },
        {
          image: UniversidadSanJuanBautista,
          title: "SAN JUAN BAUTISTA",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "25% de descuento en el pago ds las pensiones en todas las caneras profesionales",
            },
            {
              title: "PROGRAMA ESPECIAL PARA ADULTOS : ",
              description:
                "25% de descuento en el pago de las pensiones de canexas de contatilidad y administración",
            },
            {
              title: "POSGRADO: ",
              description:
                "25% de descuento en el pago de las pensiones en maestría en gestión pública, maestría en gestión estratégica, maestría en derecho civil y comercial",
            },
            {
              title: "CENTRO DE IDIOMAS - CURSOS DE EXTENCIÓN Y DIPLOMADOS: ",
              description:
                "50% de descuento en el pago de las pensiones de los diferentes cursos de idiomas",
            },
            {
              title: "CURSOS DE EXTENSIÓN : ",
              description:
                "50% de descuento en el pago de las pensiones en todos los cursos",
            },
          ],
        },
        {
          image: UniversidadChampagnat,
          title: "Marcelino CHAMPAGNAT",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "PREGRADO:\n" +
                "10 % de descuento en el pago de las pensiones en las carreras de\n" +
                "administración, psicología y contabilidad.",
            },
            {
              title: "POSGRADO : ",
              description:
                "10% de descuento en el pago de las pensiones en maestría y\n" +
                "doctorado.",
            },
          ],
        },
        {
          image: UniversidadCesarVallejo,
          title: "Cesar Vallejo",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Categoría 3 en pensiones para todas las carreras profesionales.",
            },
            {
              title: "POSGRADO : ",
              description:
                "Categoría 2 en pensiones para estudios de maestrías",
            },
            {
              title: "Programac Formación Adultos",
              description:
                "Categoría 2 en pensiones en todas las carreras profesionales 5% descuento por pago anticipado a estudiantes regulares",
            },
          ],
        },
        {
          image: UniversidadESAN,
          title: "ESAN",
          descriptionLarge: [
            {
              title: "CENTRO PRE UNIVERSITARIO :",
              description: "10 % de descuento en el pago de las pensiones",
            },
            {
              title: "PREGRADO : ",
              description: "10 % de descuento en el pago de las pensiones",
            },
          ],
        },
        {
          image: UniversidadCatolicaSedeSapientiale,
          title: "CATOLICA SEDE SAPIENTIALE",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Costos diferenciados en pensiones en las distintas carreras\n" +
                "profesionales",
            },
            {
              title: "POSGRADO : ",
              description:
                "Hasta el 20 % de descuento del costo total de los programas de\n" +
                "posgrado\n" +
                "\n" +
                "(maestrías y diplomados) a excepción del programa de\n" +
                "\n" +
                "doble grado.",
            },
          ],
        },
        {
          image: UniversidadUnifeSagradoCorazon,
          title: "UNIFE SAGRADO CORAZÓN",
          descriptionLarge: [
            {
              title: "CENTRO PRE UNIFÉ :",
              description: "20 % descuento en el ciclo completo",
            },
            {
              title: "PREGRADO : ",
              description:
                "Personal de oficiales Escala N° 28 en pensiones\n" +
                "Personal de Tcos y SSOO Escala N° 30 en pensiones",
            },
            {
              title: "PREGRADO SEGUNDA CARRERA : ",
              description:
                "Personal de oficiales Escala N° 28 en pensiones\n" +
                "Personal de Tcos y SSOO Escala N° 30 en pensiones",
            },
            {
              title: "POSGRADO : ",
              description:
                "Personal de oficiales 10% de descuento al cancelar ciclo completo (5 cuotas)" +
                "Personal de Tcos y SSOO 15% descuento al cancelar ciclo completo (5 cuotas)",
            },
            {
              title: "SEGUNDA ESPECIALIDAD : ",
              description:
                "Personal de oficiales 10% de descuento al cancelar ciclo completo (5 cuotas)" +
                "Personal de Tcos y SSOO 15% descuento al cancelar ciclo completo (5 cuotas)",
            },
            {
              title: "DIPLOMADOS Y/O SEMINARIOS : ",
              description:
                "Personal de oficiales Escala N° 28 en pensiones\n" +
                "Personal de Tcos y SSOO Escala N° 30 en pensiones",
            },
          ],
        },
        {
          image: UniversidadCientifica,
          title: "Cientifica del sur ",
          descriptionLarge: [
            {
              title: "CENTRO DE IDIOMAS(CIDIO) :",
              description:
                "15 % de descuento en el pago de las pensiones de ingles y portugués",
            },
            {
              title: "PREGRADO : ",
              description:
                "40% de descuento en pafo de las pensiones en carreras de enfermería, obstreticia y medicina humana, sobre la escala E" +
                "60% de descuento en pago de la pensiones en las otras carreras, sobre la escala E",
            },
            {
              title: "CARERAS PARA LAS PERSONAS QUE TRABAJAN (CPE)",
              description:
                "30% de descuento en el pago de las pensiones, Administracion de empresas, Ingenieria de sistemas, Derecho, Psicología, Comunicaion y publicidad, Nutrición y dietética",
            },
            {
              title: "POSGRADO : ",
              description: "10% de descuento en maestria y especializaciones",
            },
            {
              title: "FORMACION CONTINUA :",
              description:
                "30% de descuento en el pago de las pensiones de los cursos",
            },
          ],
        },
        // {
        //   image: UniversidadJaimeBausate,
        //   title: "Jaime Bausate Mesa",
        // },

        {
          image: UniversidadPrivadadelNorte,
          title: "UNIV.PRIVADA DEL NORTE",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "15% de descuento en el pago de las pensiones en todas las carreras profesionales",
            },
            {
              title: "PROGRAMA WORRINKG ADULTO : ",
              description: "15% de descuento en el pago de las pensiones",
            },
          ],
        },
        {
          image: UniversidadSanmartinPorres,
          title: "SAN MARTIN DE PORRES",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Costo diferenciado en el pago de las pensiones en las diferentes carreras profesionales",
            },
            {
              title: "PROGRAMA PARA ADULTOS QUE TRABAJAN (PAT) :",
              description:
                "15% de descuento en el pago de las pensiones dirigido a oficiales" +
                "20% de descuento en el pago de las pensiones dirigido a Técnicos, suboficiales y personal civil",
            },
            {
              title: "POSGRADO :",
              description:
                "25% de descuento en el pago de las diferentes carreras profesionales (maestria y doctorado)" +
                "25% de descuento en segundas especializaciones" +
                "25% de descuento en diplomados",
            },
          ],
        },
        {
          image: UniversidadNacionalMusica,
          title: "Universidad Nacional de Musica",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Entre el 20% y 25% en el pago de las pensiones en las carreras de Edcuación musical, dirección y artista profesional",
            },
            {
              title: "FORMACIÓN CONTINUA :",
              description:
                "Curso básico para adultos (02 años) descuento, del 25% en el paga de las pensiones" +
                "Curso básico para niños, descuento del 25% en el pago de las pensiones" +
                "Cursos libres, descuento del 20% en el pago de las pensiones" +
                "Cursos virtules, descuento del 20% en el pago de las pensiones",
            },
          ],
        },
        {
          image: UniversidadRicardoPalma,
          title: "RICARDO PALMA",
          descriptionLarge: [
            {
              title: "CENTRO PRE UNIVERSITARIO :",
              description: "10% de descuento sobre el ciclo",
            },
            {
              title: "PREGRADO :",
              description:
                "Carrera de arquitectura y urbanismo escala 14, en el pago de las\n" +
                "pensiones\n" +
                "Carrera de medicina humana escala 9, en el pago de las pensiones\n" +
                "Carrera de administración y gerencia, administración de negocios\n" +
                "globales, biología, contabilidad y finanzas, economía, hotelería y\n" +
                "turismo, ingeniería civil, electrónica, industrial, informática, psicología,\n" +
                "traducción e interpretación, escala 7\n" +
                "Oficiales del grado de coronel el descuento en el pago de pensiones\n" +
                "es (de 5 cuotas pagan 4)\n" +
                "Oficiales del grado de Teniente Coronel hasta Sub Oficiales de 3era,\n" +
                "personal civil e Hijos, el descuento en el pago de las pensiones será(de\n" +
                "5 cuotas pagan 3)",
            },
            {
              title: "POSGRADO",
              description:
                "Maestría, doctorado, segunda especialización, descuento en el pago\n" +
                "de las pensiones de 5 cuotas pagan\n" +
                "4",
            },
          ],
        },
        {
          image: UniversidadFedericoVillareal,
          title: "Universidad Nacional Federico Villarreal",
          descriptionLarge: [
            {
              title: "POSGRADO :",
              description:
                "25% de descuento en matriculas y pensiones en las diferentes maestrías y doctorados",
            },
          ],
        },
        {
          image: UniversidadNorbert,
          title: "NORBERT WIENER",
          descriptionLarge: [
            {
              title: "CENTRO PRE UNIVERSITARIO :",
              description: "costo diferenciado por convenio",
            },
            {
              title: "CENTRO DE IDIOMAS :",
              description: "costo diferenciado por convenio",
            },
            {
              title: "PREGRADO :",
              description:
                "10% de descuento en las carreras de obstreticia, enfermería, farmacia y bioquímica, odontología, tecnología médica en laboratorio clínico, anatomía patalógica y terapia física." +
                "15% de descuento en las carreras de administración y negocios internacionales, contabilidad y auditoria, derecho y ciencia política, ingeniería industrial y gestión empresarial, ingeniería de sistemas e informática",
            },
          ],
        },
        {
          image: UniversidadJaimeBausate,
          title: "Universidad Jaime Bausate y Meza",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "20 % de descuento sobre el costo de la pensión en las carreras de\n" +
                "periodismo, escuela profesional de comunicación audiovisual.",
            },
            {
              title: "POSGRADO :",
              description:
                "20 % de descuento sobre el costo de la pensión en enseñanza de\n" +
                "posgrado, diplomados y curso de proyección social.",
            },
          ],
        },
        {
          image: UniversidadSanIgnacioLoyola,
          title: "SAN IGNACIO DE LOYOLA",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description: "Escala mínima de pensiones - CATEGORIA A",
            },
          ],
        },
        {
          image: UniversidadDelPacifico,
          title: "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS UPC",
          descriptionLarge: [
            {
              title: "CENTRO DE IDIOMAS - CIDUP :",
              description:
                "20 % de descuento en el pago de las pensiones de los\n" +
                "programas de idiomas\n" +
                "20% de descuento en el pago de las pensiones de los\n" +
                "programas de idiomas para niños o adolescentes",
            },
          ],
        },
        {
          image: UniversidadSeñorSipan,
          title: "SEÑOR DE SIPAN",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Categoría(04), descuento en las pensiones en todas las\n" +
                "carreras (a excepción de medicina humana, estomatología y\n" +
                "enfermería)",
            },
            {
              title: "POSGRADO :",
              description: "20% de descuento en las pensiones",
            },
          ],
        },
        {
          image: UniversidadUtp,
          title: "UTP",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "25 % de descuento en todas las carreras, en todas las sedes a\n" +
                "nivel nacional.",
            },
          ],
        },
        {
          image: UniversidadUpc,
          title: "UPC ",
          descriptionLarge: [
            {
              title: "PREGRADO :",
              description:
                "Escala mínima de pensiones en diferentes carreras y\n" +
                "programa de estudios profesionales para ejecutivos (EPE).",
            },
          ],
        },
        {
          image: UniversidadSanMarcos,
          title: "SAN MARCOS FACULTAD CC. ECONOMICAS",
          descriptionLarge: [
            {
              title: "POSGRADO :",
              description:
                "20 % de descuento en el costo total de diplomados,\n" +
                "maestrías y doctorados",
            },
          ],
        },
      ],
    },
    sectionInstitutes: {
      title: "Institutos :",
      cards: [
        {
          image: Institute5,
          title: "CETPRO Benjamin Galecio Matos",
          descriptionLarge: [
            {
              title: "CURSOS DE CARRERAS TÉCNICAS Y TALLER : ",
              description:
                "25% descuento en el pago de los costos de programas\n" +
                "académicos",
            },
          ],
        },
        {
          image: Institute6,
          title: "CEVATUR PERÚ",
          descriptionLarge: [
            {
              title: "CARRERAS PROFESIONALES, TÉCNICAS Y DIPLOMADOS : ",
              description:
                "30% descuento en matrícula\n" +
                "20% descuento en el pago de pensiones en las (en las\n" +
                "distintas sedes)",
            },
          ],
        },
        {
          image: Institute7,
          title: "CORPORACION EDUCATIVA SAN VICENTE",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (INGLÉS, CARRERAS TÉCNICAS,\n" +
                "ESPECIALIDADES Y DIPLOMADOS) : ",
              description:
                "10% descuento en el pago de matrícula.\n" +
                "30% descuento en el pago de pensiones.",
            },
          ],
        },
        {
          image: Institute10,
          title: "INSTITUTO DESARROLLO PROFESIONAL Y TECNOLOGICO",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS,ESPECIALIDADES Y DIPLOMADOS) : ",
              description:
                "20% descuento en el pago de matrícula\n" +
                "20% descuento en el pago de las pensiones",
            },
          ],
        },
        {
          image: Institute11,
          title: "INSTITUTO DE DESARROLLO PROFESIONAL Y TÉCNICO",
          descriptionLarge: [
            {
              title:
                "CARRERAS TÉCNICAS, INGLÉS, ESPECIALIDADES Y\n" +
                "DIPLOMADOS : ",
              description:
                "20% descuento en el pago de matrícula\n" +
                "20% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute12,
          title: "ESCUELA INTERNACIONAL DE GERENCIA",
          descriptionLarge: [
            {
              title:
                "CARRERAS TÉCNICAS (COMPUTACIÓN E INFORMÁTICA, ADMINISTRACIÓN\n" +
                "COMERCIAL, MARKETING DIGITAL Y VENTAS):",
              description:
                "Costo diferenciado, en inscripción anual y cuota mensual",
            },
          ],
        },
        {
          image: Institute13,
          title: "AKRON",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, INGLÉS,\n" +
                "ESPECIALIDADES Y DIPLOMADOS):",
              description: "50% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute14,
          title: "EUROIDIOMAS",
          descriptionLarge: [
            {
              title: "IDIOMAS",
              description:
                "30% descuento en el pago de pensiones de los programas de Ingles\n" +
                "10% descuento en el pago de pensiones de los programas de portugués\n" +
                "10% descuento en el pago de pensiones de los programas de Alemán\n" +
                "20% descuento en el pago de pensiones de los programas de Ingles\n" +
                "para Niños y Juniors\n" +
                "10% descuento en el pago de pensiones de los programas de Inglés\n" +
                "Virtual, de manera general",
            },
          ],
        },
        {
          image: Institute23,
          title: "ICPNA",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA INGLÉS",
              description:
                "15% descuento sobre la base de las tarifas publicadas en su portal",
            },
          ],
        },
        {
          image: Institute24,
          title: "BRITANICO",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA INGLÉS",
              description:
                "12.5% descuento sobre la base de las tarifas en los programas\n" +
                "académicos de enseñanza del idioma (básico, intermedio o avanzado)",
            },
          ],
        },
        {
          image: Institute25,
          title: "INST.DEFORMACION EMPRESARIAL",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE FORMACIÓN:",
              description:
                "37.7% de descuento en pensiones en programas de\n" +
                "(Ofimática, Inglés, excel en la modalidad On Line)\n" +
                "59% de descuento en pensiones para el personal de tropa en\n" +
                "programas de (Ofimática, Ingles, excel en la modalidad On\n" +
                "Line)",
            },
          ],
        },
        {
          image: Institute26,
          title: "ESCUELA INTERNACIONAL DE GRADUADOS",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS\n" +
                "CORTOS Y SEMINARIOS:",
              description: "30% de descuento en las pensiones para estudios",
            },
          ],
        },
        {
          image: Institute30,
          title: "GUIDE",
          descriptionLarge: [
            {
              title: "CURSOS DE PREPARACIÓN:",
              description: "20% de descuento en los diferentes programas",
            },
          ],
        },
        {
          image: Institute31,
          title: "Von Braun",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE FORMACIÓN :",
              description:
                "30% descuento en el pago de matrícula y pensiones\n" +
                "mensuales",
            },
          ],
        },
        {
          image: Institute32,
          title: "ECAPREV",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS\n" +
                "CORTOS Y SEMINARIOS :",
              description:
                "Costo diferenciado por convenio, en el pago de las cuotas mensuales",
            },
          ],
        },
        {
          image: Institute33,
          title: "ISPACJ",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE ESPECIALIZACIÓN Y DIPLOMADOS :",
              description:
                "20% descuento en el costo de los diplomados (ingeniería, gestión\n" +
                "empresarial y administración)\n" +
                "30% descuento en el costo total del programa de capacitación de\n" +
                "ingles\n" +
                "35% descuento en el costo tal del programa de capacitación de\n" +
                "computación",
            },
          ],
        },
        {
          image: Institute20,
          title: "INIDHE",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE DIPLOMADOS Y ESPECIALIZACIONES :",
              description:
                "50% descuento en el costo de los diferentes programas académicos (cursos de especialización, diplomados, seminarios, talleres)",
            },
          ],
        },
        {
          image: Institute3,
          title: "CEPEBAN",
          descriptionLarge: [
            {
              title: "PROGRAMAS Y CURSOS :",
              description:
                "25\n" +
                "% descuento en el pago de pensiones en todas las sedes\n" +
                "excepto en el distrito de Los Olivos\n" +
                "(10\n" +
                "%\n" +
                ")\n" +
                "\n" +
                "10\n" +
                "% de descuento en las pensiones mensuales en el programa in\n" +
                "house (seminarios, fórum, talleres)",
            },
          ],
        },
        {
          image: Institute8,
          title: "D'Gallia",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS :",
              description: "25% descuento en el pago de pensiones",
            },
            {
              title: "CURSOS LIBRES :",
              description: "10% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute9,
          title: "Instituto Carrión",
          descriptionLarge: [
            {
              title: "CURSO DE EXTENSIÓN (01 AÑO) :",
              description:
                "50% descuento en el pago de pensiones y exoneración en derecho de inscripción y matrícula",
            },
            {
              title: "CARRERAS DE EXTENSIÓN PROFESIONAL :",
              description:
                "50% descuento en el pago de pensiones y\n" +
                "exoneración en derecho de inscripción y matrícula",
            },
          ],
        },
        {
          image: Institute16,
          title: "INTECI",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS :",
              description: "25% descuento en el pago de pensiones",
            },
            {
              title: "PROGRAMAS DE GASTRONOMÍA :",
              description: "20% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute21,
          title: "PRIVATEACHER",
          descriptionLarge: [
            {
              title: "IDIOMAS",
              description:
                "Costo diferenciado por convenio, en el pago de las cuotas\n" +
                "mensuales",
            },
          ],
        },
        {
          image: Institute22,
          title: "SAN IGNACIO DE LOYOLA ",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE EXTENSIÓN PROFESIONAL Y DE ISILTECH :",
              description: "20% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute2,
          title: "CEPEA",
          descriptionLarge: [
            {
              title:
                "CARRERAS DE GASTRONOMÍA Y ARTES CULINARIAS,\n" +
                "ADMINISTRACIÓN DE SERVICIOS DE HOTELERÍA Y GUIA\n" +
                "TURÍSMO :",
              description: "20% descuento en el pago de pensiones",
            },
            {
              title:
                "CARRERAS DE ADMINISTRACIÓN/CONTABILIDAD/DESARROLLO DE SISTEMAS Y ENFERMERÍA TÉCNICA:",
              description: "30% descuento en el pago de pensiones",
            },
          ],
        },
        {
          image: Institute34,
          title: "CIM",
          descriptionLarge: [
            {
              title: "CARRERAS PROFESIONALES TÉCNICAS : ",
              description:
                "15% descuento en el pago de pensiones de las tarifas\n" +
                "publicadas.",
            },
          ],
        },
        {
          image: Institute35,
          title: "ANDRE VESALIO",
          descriptionLarge: [
            {
              title: "PROGRAMAS TÉCNICOS : ",
              description: "50% descuento en el pago de matrícula y pensiones",
            },
            {
              title: "FORMACIÓN CONTINUA : ",
              description: "50% descuento en el pago de pensiones",
            },
            {
              title: "PROGRAMA DE ESPECIALIZACÍON : ",
              description: "50% descuento en el pago de pensiones",
            },
          ],
        },

        // {
        //   image: Institute4,
        //   title: "CESCA",
        // },
        // {
        //   image: Institute5,
        //   title: "CETRO GAMOR",
        // },
        //
        // {
        //   image: Institute15,
        //   title: "HEADWAY COLLEGE",
        // },
        // {
        //   image: Institute17,
        //   title: "LECTURA VELOZ(ILVEM)",
        // },
        // {
        //   image: Institute18,
        //   title: "LATINO",
        // },
        // {
        //   image: Institute19,
        //   title: "LIBERTADOR",
        // },
        // {
        //   image: Institute27,
        //   title: "ALIANZA FRANCESA",
        // },
      ],
    },
  },
  contentImages: {
    title: "",
    images: [SaedBannePublic],
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
