import {
    cayetano,
    CobieneLogoLarge, FORCE,
    InstituteAllianceFrancaise,
    InstituteAndresVesalio,
    InstituteAvia,
    InstituteBritanico,
    InstituteCamaraLima,
    InstituteCarrion,
    InstituteCegicap,
    InstituteCepea,
    InstituteCepeban,
    InstituteCeuce,
    InstituteCibertec,
    InstituteCivime,
    InstituteCorazonDeJesus,
    InstituteDesarrolloGerencial,
    InstituteEcaprev,
    InstituteEiger,
    InstituteEigra,
    InstituteEsinfron,
    InstituteGamor,
    InstituteIcpna,
    InstituteIdept,
    InstituteIfeep,
    InstituteInidhe,
    InstituteInteci,
    InstituteInternationalBilingualCertification,
    InstituteIsil,
    InstituteIspacj,
    InstituteLimaInstituteTechnicalStudies,
    InstituteMilitaresDelPeru,
    InstitutePrivateacher,
    InstituteSanJudas,
    InstituteSenati,
    InstituteToulouseLautrec,
    IntituteColumbia, NEWMAN,
    SaedAboutUs,
    SaedBannePublic,
    SaedBannerMiCarrera,
    SaedSlider1, UNIR,
    UniversidadAutonoma,
    UniversidadCertus,
    UniversidadCesarVallejo,
    UniversidadChampagnat,
    UniversidadCientifica,
    UniversidadESAN,
    UniversidadFedericoVillareal,
    UniversidadJaimeBausate,
    UniversidadNorbert,
    UniversidadPrivadadelNorte,
    UniversidadRicardoPalma,
    UniversidadSanIgnacioLoyola,
    UniversidadSanJuanBautista,
    UniversidadSanmartinPorres,
    UniversidadUcal,
    UniversidadUnifeSagradoCorazon,
    UniversidadUpal,
    UniversidadUpc,
    UniversidadUtp,
    UnviersidadAnahuac,
    UnviersidadAutonomaDeIca,
    UnviersidadContinental,
    UnviersidadSanMarcosCienciasEconomicas,
} from "../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const saedConfig = {
  helmet: {
    title: "Sección Apoyo Estudios Superiores",
    link: "https://saed.cobiene.mil.pe",
    description: "Sección Apoyo Estudios Superiores",
    keywords: "beneficios,futuro,jovenes",
  },
  header: {
    name: "saed",
    title: "Sección Apoyo Estudios Superiores",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "NOSOTROS" },
      { id: "convenios", name: "CONVENIOS" },
      { id: "contact", name: "Contacto" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "PREPARANDO PARA EL FUTURO",
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
        "La Sección de Apoyo Educativo se encarga de planear, coordinar, y ejecutar actividades en el ámbito de la Educación superior y Tecnológica, promoviendo de manera permanente la suscripción de convenios y otros procedimientos de ayuda, con las diferentes Universidades, Institutos, Academias preuniversitarias, escuelas de grado y postgrado y otras instituciones de este género, orientados a lograr beneficios para el personal militar.",
      ],
      buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
      images: [SaedAboutUs],
    },
    sectionBanner: {
      image: SaedBannerMiCarrera,
    },
    sectionConvenios: {
      id: "convenios",
      title: "Universidades :",
      cards: [
        {
          image: UniversidadAutonoma,
          title: "UNIVERSIDAD AUTÓNOMA DEL PERÚ",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ciencias de Gestión y Comunicaciones",
                "Facultad de Ciencias Humanas y de la Salud",
                "Facultad de Ingeniería y Arquitectura",
              ],
            },
            {
              title: "PREGRADO REGULAR: ",
              description:
                "Tarifas aplicables a la escala “D” en el pago de las pensiones en todas las carreras profesionales.",
            },
            {
              title: "POSGRADO: ",
              description:
                "Tarifas aplicables a la escala “B” en el pago de las pensiones de posgrado",
            },
            {
              title: "CARRERAS PARA PERSONAS QUE TRABAJAN (CPT): ",
              description:
                "Tarifas aplicables a la escala “C” en el pago de las pensiones pregrado, posgrado y educación continua.",
            },
            {
              title: "EDUCACIÓN CONTINUA: ",
              descriptions: [
                "10% dscto. (1 a 2 beneficiarios) de acuerdo a los matriculados.",
                "15% dscto. (3 a más beneficiarios) de acuerdo a los matriculados.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuges e hijos); tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.autonoma.pe/" }],
            },
          ],
        },
        {
          image: UnviersidadAutonomaDeIca,
          title: "UNIVERSIDAD AUTÓNOMA DE ICA",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Administración y Finanzas",
                "Derecho",
                "Ingeniería Industrial",
                "Ingeniería de Sistemas",
                "Psicología",
                "Enfermería",
                "Obstetricia",
              ],
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "Exoneración del pago del 100 % del costo de la matrícula.",
                "40 % de descuento en pensiones en todas las carreras de pregrado; considerando las diferentes sedes e incluso si existiera a nivel nacional.",
              ],
            },
            {
              title: "POSGRADO Y 2DA ESPECIALIZACIÓN: ",
              description:
                "10 % de descuento, sobre el valor comercial del programa. Considerando las diferentes sedes e incluso si existiera a nivel nacional.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuge e hijos). tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://autonomadeica.com/" }],
            },
          ],
        },
        {
          image: UniversidadSanJuanBautista,
          title: "UNIVERSIDAD SAN JUAN BAUTISTA",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ingenierías",
                "Facultad de Ingenierías",
                "Facultad de Comunicación",
                "Facultad de Ciencias Administrativas",
                "Facultad de Derecho",
                "Facultad de Ciencias de la Salud",
              ],
            },
            {
              title: "Pregrado: ",
              description: [
                "Escala “C”: 25% de descuento en el pago de las pensiones en todas las carreras profesionales.",
                "En la modalidad semipresencial: 15%.",
              ]
            },
            {
              title: "Posgrado: ",
              description:
                "Escala “C”: 25% de descuento en el pago de las pensiones.",
            },
            {
              title: "Programa de estudio segunda especialidad en enfermería y estomatología:",
              description:
                "15% de descuento.",
            },
            {
              title:
                "Centro preuniversitario:",
              description:
                "20% de descuento.",
            },
            {
              title: "Centro de idiomas – cursos de capacitación, diplomados, simposios, programas de perfeccionamiento y complementación académica profesional, cultural:",
              description:
                "Escala “C”: 25%.",
            },            {
              title: "Cursos de extensión:",
              description:
                "25% de descuento.",
            },            {
              title: "Derecho de admisión:",
              description:
                "Descuento del 100%, siempre que este se realice en las instalaciones del Ejército con un número mínimo de 40 postulantes.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, Personal civil en actividad o cesante así como a familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados",
              links: [{ icon: faGlobe, link: "https://www.upsjb.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadChampagnat,
          title: "UNIVERSIDAD MARCELINO CHAMPAGNAT",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Educación y Psicología",
                "Facultad de Administración y Contabilidad",
              ],
            },
            {
              title: "PREGRADO:",
              description:
                "20 % de descuento en el pago de las pensiones en las carreras de educación, psicología, administración y contabilidad. Asimismo en diplomados y cursos de especialización.",
            },
            {
              title: "POSGRADO: ",
              description:
                "10% de descuento en el pago de las pensiones en maestría y doctorado",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://umch.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadCesarVallejo,
          title: "UNIVERSIDAD CÉSAR VALLEJO",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS:",
              descriptions: [
                "Facultad de Ciencias de la Salud",
                "Facultad de Ciencias Empresariales",
                "Facultad de Derecho y Humanidades",
                "Facultad de Ingeniería y Arquitectura",
              ],
            },
            {
              title: "PREGRADO:",
              descriptions: [
                "Categoría B: en pensiones para los ingresantes de pregrado regular en todas las carreras profesionales.",
                "Otorgar el 5% de descuento adicional del costo total de la pensión del semestre al momento de la matrícula, a los beneficiarios del presente convenio que se matriculen en todas las materias establecidas.",
              ],
            },
            {
              title: "POSGRADO: ",
              descriptions: [
                "Categoría B: para los ingresantes de posgrado y para estudios de maestrías.",
                "Categoría C: en pensiones para los que ocupen el primer puesto del cuadro de méritos semestral.",
              ],
            },
            {
              title: "PROGRAMA FORMACIÓN ADULTOS:",
              descriptions: [
                "Categoría B en pensiones para el programa de formación de adultos.",
                "Categoría C: en el programa de formación para adultos que habiendo culminado en semestre académico anterior se ubique en el primer puesto del cómputo general",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en situación de actividad y retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge , hijos, padres y hermanos en caso de ser trabajadores solteros) tropa servicio militar en actividad, licenciados Deberá mantenerse el promedio mínimo aprobatorio catorce.",
              links: [{ icon: faGlobe, link: "https://www.ucv.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadESAN,
          title: "UNIVERSIDAD ESAN",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ciencias Económicas y Administrativas",
                "Facultad de Ingeniería",
                "Facultad de Derecho",
                "Facultad de Psicología",
              ],
            },
            {
              title: "CENTRO PRE UNIVERSITARIO: ",
              description: "10 % de descuento en el pago de las pensiones.",
            },
            {
              title: "PREGRADO: ",
              description: "10 % de descuento en el pago de las pensiones.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, así como sus familiares directos (cónyuge e hijos)",
              links: [{ icon: faGlobe, link: "https://www.ue.edu.pe/" }],
            },
          ],
        },
        // {
        // 	image: UniversidadCatolicaSedeSapientiale,
        // 	title: 'CATOLICA SEDE SAPIENTIALE',
        // 	descriptionLarge: [
        // 		{
        // 			title: 'PREGRADO :',
        // 			description:
        // 				'Costos diferenciados en pensiones en las distintas carreras\n' +
        // 				'profesionales',
        // 		},
        // 		{
        // 			title: 'POSGRADO : ',
        // 			description:
        // 				'Hasta el 20 % de descuento del costo total de los programas de\n' +
        // 				'posgrado\n' +
        // 				'\n' +
        // 				'(maestrías y diplomados) a excepción del programa de\n' +
        // 				'\n' +
        // 				'doble grado.',
        // 		},
        // 		{
        // 			title: 'ALCANCE: ',
        // 			description:
        // 				'Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)',
        // 			links: [{icon: faGlobe, link: 'https://www.ucss.edu.pe/'}],
        // 		},
        // 	],
        // },
        {
          image: UniversidadUnifeSagradoCorazon,
          title: "UNIVERSIDAD FEMENINA DEL SAGRADO CORAZÓN",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Arquitectura",
                "Facultad de Derecho",
                "Facultad de Ciencias de la Educación",
                "Facultad de Gestión Empresarial",
                "Facultad de Nutrición y Alimentación",
                "Facultad de Psicología y Humanidades",
                "Facultad de Traducción, Interpretación y Ciencias de la Comunicación",
              ],
            },
            {
              title: "CENTRO PRE UNIFÉ: ",
              description: "20 % descuento en el ciclo completo.",
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "Personal de oficiales, actividad, retiro y familiares directos Escala N° 28 en pensiones.",
                "Personal de Tcos, SSOO actividad, retiro, familiares directos y Civiles en actividad Escala N° 30 en pensiones.",
              ],
            },
            {
              title: "PREGRADO SEGUNDA CARRERA: ",
              descriptions: [
                "Personal de oficiales y familiares directos, descuento del 10% en pensiones.",
                "Personal de Tcos y SSOO actividad, retiro, familiares directos y Civiles en actividad, descuento del 15% en pensiones.",
              ],
            },
            {
              title: "POSGRADO: ",
              descriptions: [
                "Personal de oficiales 10% de descuento al cancelar ciclo completo (5 cuotas)",
                "Personal de Tcos y SSOO 15% descuento al cancelar ciclo completo (5 cuotas)",
              ],
            },
            {
              title: "SEGUNDA ESPECIALIDAD: ",
              descriptions: [
                "Personal de oficiales 10% de descuento al cancelar ciclo completo (5 cuotas)",
                "Personal de Tcos y SSOO 15% descuento al cancelar ciclo completo (5 cuotas)",
              ],
            },
            {
              title: "DIPLOMADOS Y/O SEMINARIOS: ",
              descriptions: [
                "Personal de oficiales Escala N° 28 en el pago de las pensiones.",
                "Personal de Tcos y SSOO Escala N° 30 en el pago de las pensiones",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad, así como sus familiares directos (cónyuge e hijos).",
              links: [{ icon: faGlobe, link: "https://www.unife.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadCientifica,
          title: "UNIVERSIDAD CIENTÍFICA DEL SUR",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ciencias Empresariales",
                "Facultad de Ciencias Ambientales",
                "Facultad de Ciencias Humanas",
                "Facultad de Ciencias Veterinarias y Biológicas",
                "Facultad de Ciencias de la Salud",
              ],
            },
            {
              title: "CENTRO DE IDIOMAS (CIDIO): ",
              description:
                "15 % de descuento en el pago de las pensiones de inglés y portugués.",
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "40 % de descuento en pago de las pensiones en carreras de enfermería, obstetricia y medicina humana, sobre la escala E.",
                "60% de descuento en pago de la pensiones en las otras carreras, sobre la escala E.",
              ],
            },
            {
              title: "CARRERAS PARA LAS PERSONAS QUE TRABAJAN (CPE): ",
              description:
                "30% de descuento en el pago de las pensiones, Administración de empresas, Ingeniería de sistemas, Derecho, Psicología, Comunicación y publicidad, Nutrición y dietética",
            },
            {
              title: "POSGRADO: ",
              description: "10 % de descuento en maestría y especializaciones.",
            },
            {
              title: "FORMACION CONTINUA: ",
              description:
                "30% descuento en el pago de las pensiones de los cursos.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [
                {
                  icon: faGlobe,
                  link: "https://evaluaciongeneral.cientifica.edu.pe/?utm_source=google&utm_medium=cpc&utm_campaign=UCS_AON_pregrado_performance_marca_2021_08_null_null_null_conversiones_subasta_null_audiencias_null_audiencias_null_null_null_CPC_todos_pregrado-marca-brand-universidad-cientifica-del-sur_null&utm_content=texto_universidad-cientifica-del-sur_null_nullseg_null_null_textad&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKIRA5KerQ-zzdbaP1bHeP8s7bTF5nPfscMW8xAw6U8KKPVE8A70saEaAlxbEALw_wcB",
                },
              ],
            },
          ],
        },

        {
          image: UniversidadPrivadadelNorte,
          title: "UNIVERSIDAD PRIVADA DEL NORTE",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Administración / Contabilidad",
                "Economía / Gastronomía",
                "Facultad de Ingeniería",
                "Facultad de Arquitectura y Diseño",
                "Facultad de Derecho",
                "Facultad de Ciencias de la Salud",
                "Facultad de Comunicaciones",
              ],
            }, {
              title: "PREGRADO UG Y WA: ",
              descriptions: [
                "30% de descuento en Prematricula. Colaboradores y familiares directos 15%",
                "30% de descuento confirmación de matrícula, colaboradores y familiares directos 15%.",
                "30% de descuento por ciclo académico, colaboradores y familiares directos 15%.",
              ],
            }, {
              title: "CARRERAS PREGRADO WA ONLINE: (CARRERAS A DISTANCIA)",
              descriptions: [
                "30% de descuento prematricula colaboradores y 15% familiares directos",
                "30% de descuento de matricula colaboradores y 15% familiares directos",
                "30% de descuento Cuotas por ciclo académico y 15% familiares directos",
              ],
            },{
              title: "EPEC ESCUELA DE POSGRADO, MBA, DIPLOMADOS, ESPECIALIZACIONES Y CURSOS: ",
              descriptions: [
                "30% de descuento en las pensiones de enseñanza y 15% familiares directos.",

              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.upn.edu.pe/" }],
            },
          ],
        },
        {
          image: UnviersidadContinental,
          title: "UNIVERSIDAD CONTINENTAL",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ingeniería",
                "Facultad de Ciencias de la Empresa",
                "Facultad de Ciencias de la Salud",
                "Facultad de Humanidades",
                "Facultad de Derecho",
              ],
            },
            {
              title: "MATRÍCULA: ",
              description:
                "100 % de beneficio, sobre los costos por concepto de examen de admisión y matrícula, en todas las carreras de pregrado, en sus diferentes modalidades y en todas sus sedes a nivel nacional.",
            },
            {
              title: "PREGRADO: ",
              description:
                "10% de descuento sobre el costo de la pensión, en todas las carreras de pregrado, en sus diferentes modalidades de estudio y en todas sus sedes a nivel nacional.",
            },
            {
              title: "POSGRADO: ",
              description:
                "10% de descuento sobre el costo de la pensión, en todos los programas de posgrado (formación continua, maestría), en cualquiera de sus modalidades de estudio y en todas sus sedes a nivel nacional.",
            },
            {
              title: "ESTUDIO IN HOUSE: ",
              description:
                "10% de descuento en denominado programa IN HOUSE, que contempla capacitaciones, dirigidas a un grupo de personas que soliciten un tema determinado de estudio.",
            },
            {
              title: "CENTRO DE IDIOMAS: ",
              description:
                "17% de descuento sobre el costo de la pensión, en el Centro de Idiomas en las diferentes modalidades y sedes a nivel nacional.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://ucontinental.edu.pe/" }],
            },
          ],
        },

        {
          image: UnviersidadAnahuac,
          title: "UNIVERSIDAD ANÁHUAC MÉXICO",
          descriptionLarge: [
            {
              title:
                "50% de descuento sobre el valor por derecho de Proceso de Admisión.",
            },
            {
              title: "PREGRADO: ",
              description:
                "50% de descuento sobre el pagó inicial a los alumnos de nuevo ingreso para licenciatura de su elección",
            },
            {
              title:
                "50% en el pagó inicial para el ingreso de Enero asta el treinta de octubre del año en curso, así como para el ingreso de agosto asta el treinta de mayo del año en curso.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Para estudiantes de educación básica regular (nivel secundaria) de las instituciones educativas del ejército.",

              links: [
                { icon: faGlobe, link: "https://www.anahuac.mx/mexico/" },
              ],
            },
          ],
        },

        {
          image: UniversidadSanmartinPorres,
          title: "SAN MARTIN DE PORRES",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Administración",
                "Administración de Negocios Internacionales Arquitectura",
                "Ciencias Aeronáuticas",
                "Ciencias de la Comunicación",
                "Contabilidad y Finanzas Derecho",
                "Economía",
                "Educación",
                "Dirección e Interpretación Musical",
                "Enfermería",
                "Gestión de Recursos Humanos",
                "Ingeniería Civil",
                "Ingeniería de Computación y Sistemas",
                "Ingeniería Industrial",
                "Marketing",
                "Medicina Humana",
                "Obstetricia",
                "Odontología",
                "Psicología",
                "Turismo y Hotelería",
              ],
            },
            {
              title: "PREGRADO: ",
              description:
                "Costo diferenciado en el pago de las pensiones en las diferentes carreras profesionales",
            },
            {
              title: "PROGRAMA PARA ADULTOS QUE TRABAJAN (PAT): ",
              descriptions: [
                "15% de descuento en el pago de las pensiones dirigido a oficiales",
                "20% de descuento en el pago de las pensiones dirigido a Técnicos, suboficiales y personal civil",
              ],
            },
            {
              title: "POSGRADO: ",
              descriptions: [
                "25% de descuento en el pago de las diferentes carreras profesionales (maestría y doctorado)",
                "25% de descuento en segundas especializaciones",
                "25% de descuento en diplomados",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuge e hijos).",
              links: [{ icon: faGlobe, link: "https://www.usmp.edu.pe/" }],
            },
          ],
        },
        // {
        // 	image: UniversidadNacionalMusica,
        // 	title: 'Universidad Nacional de Musica',
        // 	descriptionLarge: [
        // 		{
        // 			title: 'PREGRADO :',
        // 			description:
        // 				'Entre el 20% y 25% en el pago de las pensiones en las carreras de Edcuación musical, dirección y artista profesional',
        // 		},
        // 		{
        // 			title: 'FORMACIÓN CONTINUA :',
        // 			description:
        // 				'Curso básico para adultos (02 años) descuento, del 25% en el paga de las pensiones' +
        // 				'Curso básico para niños, descuento del 25% en el pago de las pensiones' +
        // 				'Cursos libres, descuento del 20% en el pago de las pensiones' +
        // 				'Cursos virtules, descuento del 20% en el pago de las pensiones',
        // 		},
        // 		{
        // 			title: 'ALCANCE: ',
        // 			description:
        // 				'Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)',
        // 			link: 'https://www.unm.edu.pe/',
        // 		},
        // 	],
        // },
        {
          image: UniversidadRicardoPalma,
          title: "UNIVERSIDAD RICARDO PALMA",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Arquitectura y Urbanismo",
                "Facultad de Ingeniería",
                "Facultad de Medicina Humana",
                "Facultad de Ciencias Económicas y Empresariales",
                "Facultad de Humanidades y Lenguas Modernas",
                "Facultad de Ciencias Biológicas",
                "Facultad de Derecho y Ciencias Políticas",
                "Facultad de Psicología",
              ],
            },
            {
              title: "CENTRO PRE UNIVERSITARIO: ",
              description: "10% de descuento sobre el ciclo",
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "Carrera de arquitectura y urbanismo escala 14, en el pago de las pensiones.",
                "Carrera de medicina humana escala 9, en el pago de las pensiones.",
                "Carrera de administración y gerencia, administración de negocios globales, biología, contabilidad y finanzas, economía, hotelería y turismo, ingeniería civil, electrónica, industrial, informática, psicología, traducción e interpretación, escala 7.",
                "Oficiales del grado de coronel el descuento en el pago de pensiones es (de 5 cuotas pagan 4).",
                "Oficiales del grado de Teniente Coronel hasta Sub Oficiales de 3era, personal civil e Hijos, el descuento en el pago de las pensiones será(de 5cuotas pagan 3).",
              ],
            },
            {
              title: "POSGRADO: ",
              description:
                "Maestría, doctorado, segunda especialización, descuento en el pago de las pensiones de 5 cuotas pagan 4",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad, así como sus familiares directos (cónyuge e hijos menores de 28 años)",
              links: [{ icon: faGlobe, link: "https://urp.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadFedericoVillareal,
          title: "Universidad Nacional Federico Villarreal",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Ciencias de la Salud",
                "Ingeniería",
                "Ciencias Básicas",
                "Facultad de Humanidades",
                "Facultad de Ciencias Sociales",
                "Facultad de Derecho y Ciencia Política",
                "Facultad de Arquitectura y Urbanismo",
              ],
            },
            {
              title: "POSGRADO: ",
              description:
                "25 % de descuento en matrícula y pensiones en los diferentes maestrías y doctorados",
            },
            {
              title: "ALCANCE: ",
              description: "Personal militar en actividad.",
              links: [{ icon: faGlobe, link: "https://www.unfv.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadNorbert,
          title: "UNIVERSIDAD NORBERT WIENER",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Ciencias de la Salud",
                "Facultad de Ingeniería y Negocios",
                "Facultad de Derecho y Ciencias Políticas",
                "Facultad de Farmacia y Bioquímica",
              ],
            },
            {
              title: "CENTRO PRE UNIVERSITARIO: ",
              description: "40% descuento por convenio",
            },
            {
              title: "CENTRO DE IDIOMAS: ",
              description: "40% descuento por convenio",
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "10% de descuento en las carreras de obstetricia, enfermería, farmacia y bioquímica, odontología, tecnología médica en laboratorio clínico, anatomía patológica y terapia física",
                "15% de descuento en las carreras de administración y negocios internacionales, contabilidad y auditoria, derecho y ciencia política, ingeniería industrial y gestión empresarial, ingeniería de sistemas e informática.",
              ],
            },
            {
              title: "BACHILLERATO: ",
              descriptions: ["33% descuento por convenio"],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.uwiener.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadJaimeBausate,
          title: "Universidad Jaime Bausate y Meza",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Comunicación Audiovisual",
                "Facultad de Administración",
                "Facultad de Periodismo",
              ],
            },
            {
              title: "PREGRADO: ",
              description:
                "20 % de descuento sobre el costo de la pensión en las carreras de periodismo, escuela profesional de comunicación audiovisual, en cualquiera de sus modalidades.",
            },
            {
              title: "POSGRADO: ",
              description:
                "20 % de descuento sobre el costo de la pensión en enseñanza de posgrado, diplomados y curso de extensión educativa y proyección social, en cualquiera de sus modalidades",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.bausate.edu.pe/" }],
            },
          ],
        },
        {
          image: UniversidadSanIgnacioLoyola,
          title: "UNIVERSIDAD SAN IGNACIO DE LOYOLA",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Administración Hotelera, Turismo y Gastronomía",
                "Facultad de Ciencias Empresariales",
                "Facultad de Ingeniería",
                "Facultad de Arquitectura",
                "Facultad de Comunicación",
                "Facultad de Artes y Humanidades",
                "Facultad de Derecho",
              ],
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "Escala mínima de pensiones – CATEGORIA A, por única vez y si se conservará en los periodos académicos, en la medida que el rendimiento académico sea aprobatorio",
                "10% y 13% de descuento en los diferentes programas académicos.",
                "Otorgará el descuento del 5% en cursos de duración de un mes, el 8% en cursos de duración de dos a tres meses y el 10% en cursos de duración de cuatro meses a más, sobre los precios de lista, ofrecidos en las instituciones educativas en cualquiera de sus modalidades.",
              ],
            },
            {
              title: "POSGRADO: ",
              description:
                "15% de descuento, sobre los precios de lista, en los diferentes Programas Académicos ofrecidos en la EPG (maestría, doctorado, especializaciones, diplomados y formación continua), en cualquiera de sus modalidades en la Sede La Molina – Campus 2.",
            },
            {
              title: "PROGRAMA ONLINE: ",
              description:
                "15% de descuento, sobre los precios de lista, en los diferentes Programas Académicos ofrecidos en USIL ONLIFE, en la Sede La Molina – Campus 2.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, Personal civil en actividad o cesante así como a familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.usil.edu.pe/" }],
            },
          ],
        },
        // {
        // 	image: UniversidadDelPacifico,
        // 	title: 'UNIVERSIDAD DEL PACIFICO - CENTRO DE IDIOMAS',
        // 	descriptionLarge: [
        // 		{
        // 			title: 'CENTRO DE IDIOMAS - CIDUP :',
        // 			description:
        // 				'20 % de descuento en el pago de las pensiones de los\n' +
        // 				'programas de idiomas\n' +
        // 				'20% de descuento en el pago de las pensiones de los\n' +
        // 				'programas de idiomas para niños o adolescentes',
        // 		},
        // 		{
        // 			title: 'ALCANCE: ',
        // 			description:
        // 				'Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos s/n)',
        // 			links: [{icon: faGlobe, link: 'https://www.up.edu.pe/'}],
        // 		},
        // 	],
        // },

          {
          image: UniversidadUtp,
          title: "Universidad Tecnológica del Perú",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Ingeniería",
                "Comunicaciones",
                "Negocios",
                "Derechos",
                "Arquitectura",
                "Psicología",
              ],
            },
            {
              title: "PREGRADO: ",
              descriptions: [
                "25 % de descuento en todas las carreras, en todas las sedes a nivel nacional.",
                "15% de descuento sobre el costo de pensiones en todas las carreras de pregrado, modalidad carreras para gente que trabaja, en todas las sedes a nivel nacional.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.utp.edu.pe/" }],
            },
          ],
        },
          {
          image: UniversidadUpc,
          title: "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Adm. en Hoteleria y Turismo",
                "Facultad de Arquitectura",
                "Facultad de Artes Contemporáneas",
                "Facultad de Ciencias de la Salud",
                "Facultad de Ciencias Humanas / Psicología",
                "Facultad de Comunicaciones",
                "Facultad de Derecho / Facultad de Diseño",
                "Facultad de Economía / Facultad de Educación",
                "Facultad de Ingeniería / Facultad de Negocios",
              ],
            },            {
              title: "PREGRADO: ",
              descriptions: [
                "50% de descuento en matrícula – alumnos nuevos.",
                "25% en la primera cuota – alumnos nuevos.",
                "20% de descuento en las cuotas por ciclo académico (aplica a las 5 boletas).",
              ],
            },            {
              title: "EPE Online:",
              descriptions: [
                "20% de descuento en matrícula – alumnos nuevos.",
                "25% en la primera cuota – alumnos nuevos.",
                "20% de descuento en las 4 cuotas por ciclo académico (aplica desde la 2.ª cuota hasta la 5.ª, sin retroactividad).",
              ],
            },            {
              title: "EPG Escuela de Posgrado:",
              descriptions: [
                "20% de descuento en las pensiones de enseñanza.",
                "Wetalk (programa de ingles) modalidad virtual regular intensiva.",
                "Descuento en las pensione de enseñanza.",
              ],
            },

            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos)",
              links: [{ icon: faGlobe, link: "https://www.upc.edu.pe/" }],
            },

          ],
        },
          {
          image: UnviersidadSanMarcosCienciasEconomicas,
          title: "UNMSM FACULTAD DE CIENCIAS ECONÓMICAS",
          descriptionLarge: [
            {
              title: "POSGRADO: ",
              description:
                "20% de descuento en el costo total de diplomados, maestrías y doctorados a excepción del programa doble grado (sujeto a condiciones de universidades extranjeras.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [
                { icon: faGlobe, link: "https://economia.unmsm.edu.pe/" },
              ],
            },
          ],
        },
          {
              image: UniversidadUpal,
              title: "UNIVERSIDAD PRIVADA PERUANO ALEMANA",
              descriptionLarge: [
                  {
                      title: "FACULTADES AFECTADAS: ",
                      descriptions: [
                          "Facultad de Administración y Tecnología",
                          "Facultad de Administración y Negocios Internacionales",
                          "Facultad de Ingeniería Industrial",
                          "Facultad de Ingeniería de Sistemas y Software",
                          "Facultad de Ingeniería de Ciberseguridad",
                          "Facultad Ciencia de Datos",
                          "Facultad de Comunicaciones",
                      ],
                  },
                  {
                      title: "PREGRADO: ",
                      description:
                          "Exoneración de matrícula. 25 % de descuento en pensiones en todas las carreras de pregrado; considerando las diferentes sedes e incluso si existiera a nivel nacional.",
                  },
                  {
                      title: "POSGRADO: ",
                      description:
                          "40 % de descuento en programas de: formación continua y especializaciones, sobre el valor comercial del programa, considerando las diferentes sedes e incluso si existiera a nivel nacional.",
                  },
                  {
                      title: "ALCANCE:",
                      description:
                          "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
                      links: [{ icon: faGlobe, link: "https://upal.edu.pe/" }],
                  },
              ],
          },          {
              image: cayetano,
              title: "UNIVERSIDAD PERUANA CAYETANO HEREDIA",
              descriptionLarge: [
                  {
                      title: "BENEFICIOS: ",
                      descriptions: [
                          "10% de descuento en las carreras de Medicina y Estomatología.",
                          "15% de descuento en las carreras de Farmacia y Bioquímica, Nutrición, Medicina Veterinaria y Zootecnia.",
                          "20% de descuento en la carrera de Biología.",
                          "25% de descuento en las carreras de Ingeniería Ambiental, Ingeniería Informática, Administración, Educación y Psicología.",
                          "15% de descuento en Educación Continua, Maestrías y Doctorados.",
                          "20% de descuento en Idiomas: inglés y portugués.",
                      ],
                  },
                  {
                      title: "ALCANCE:",
                      description:
                          "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
                      links: [{ icon: faGlobe, link: "https://cayetano.edu.pe/" }],
                  },
              ],
          },
          {
              image: UNIR,
              title: "UNIVERSIDAD INTERNACIONAL DE LA RIOJA",
              descriptionLarge: [
                  {
                      title: "BENEFICIOS: ",
                      descriptions: [
                          "5% sobre los descuentos oficiales que tenga en ese momento, a los beneficiarios de “el ejército” interesados en cursar maestrías oficiales online de “unir”, el descuento se aplicará sobre las tarifas vigentes para Perú.",
                          "Sobre la tarifa que tiene cada uno de las maestrías se aplicará el descuento comercial que exista en el momento de la reserva y se añadirá el descuento adicional por ser beneficiario del convenio. Ejemplo si un máster de “UNIR” el descuento comercial es de un 45% al postulante se le aplicara un descuento total del 50% y 45% de descuento comercial más + 5% de descuento por convenio). El descuento total puede alcanzar hasta el 60% dependiendo de la titulación y casa de estudio.",
                      ],
                  },

                  {
                      title: "ALCANCE:",
                      description:
                          "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
                  },
              ],
          },
          {
          image: UniversidadUcal,
          title: "UNIVERSIDAD DE CIENCIAS Y ARTES DE AMÉRICA LATINA",
          descriptionLarge: [
            {
              title: "FACULTADES AFECTADAS: ",
              descriptions: [
                "Facultad de Arquitectura",
                "Facultad de Comunicaciones",
                "Facultad de Diseño Grafico",
              ],
            },
            {
              title: "PREGRADO: ",
              description:
                "15% de descuento, sobre los costos por concepto de pensiones, para estudios de, en todas las carreras",
            },
            {
              title: "POSGRADO: ",
              description:
                "15% de descuento, sobre los costos por concepto de pensiones, para estudios de MAESTRÍA en cualquiera de sus modalidades.",
            },
            {
              title: "DIPLOMA Y CURSOS ESPECIALIZADOS: ",
              description:
                "15% de descuento, sobre los costos por concepto de pensiones.",
            },
            {
              title: "ALCANCE:",
              description:
                "Personal militar en situación de actividad y retiro, personal civil en actividad o cesante, así como sus familiares directos (cónyuge, hijos); tropa servicio militar en actividad, licenciados.",
            },
          ],
        },
      ],
    },
    sectionInstitutes: {
      title: "Institutos :",
      cards: [
        {
          image: InstituteEsinfron,
          title: "Esinfron",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA FRANCES: ",
              description:
                "50% de descuento en costo de enseñanza (mensualidades) en inglés, considerando la modalidad sincrónica (on-line) y asincrónica (grabaciones).",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [{ icon: faGlobe, link: "https://esinfron.com/" }],
            },
          ],
        },
        {
          image: InstituteAllianceFrancaise,
          title: "Alliance Francaise",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA FRANCES: ",
              description:
                "15 % descuento en el pago de las pensiones en francés para niños, jóvenes y adultos en todos los horarios diarios y sabatinos, en costo de enseñanza (mensualidades)",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [
                { icon: faGlobe, link: "https://alianzafrancesa.org.pe/" },
              ],
            },
          ],
        },
        {
          image: InstituteInternationalBilingualCertification,
          title: "International Bilingual Certification",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, INGLÉS, ESPECIALIDADES Y DIPLOMADOS): ",
              description: "50% descuento en el pago de pensiones",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [{ icon: faGlobe, link: "https://lits.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteLimaInstituteTechnicalStudies,
          title: "Lima Institute of Technical Studies",
          descriptionLarge: [
            {
              title: "IDIOMAS: ",
              descriptions: [
                "30% descuento en el pago de pensiones de los programas de Ingles, para jóvenes y adultos.",
                "10% descuento en el pago de pensiones de los programas de portugués, alemán e ingles virtual de manera general.",
                "10% descuento en el pago de pensiones de los programas de Alemán.",
                "20% descuento en el pago de pensiones de los programas de Ingles para Niños y Juniors.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [{ icon: faGlobe, link: "https://lits.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteCivime,
          title: "Civime Centro de Idiomas",
          descriptionLarge: [
            {
              title: "IDIOMAS: ",
              description:
                "Tarifas preferenciales en las mensualidades al personal Militar Titular - Familiar en los diferentes idiomas, cursos y programas de las clases presenciales, Online y virtuales.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.civime.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteGamor,
          title: "CETPRO Benjamin Galecio Matos",
          descriptionLarge: [
            {
              title: "CURSOS DE CARRERAS TÉCNICAS Y TALLER: ",
              description:
                "25% descuento en el pago de los costos de programas académicos en módulos.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.gamor.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteSenati,
          title: "Senati",
          descriptionLarge: [
            {
              title:
                "CARRERAS DE: NIVEL TÉCNICO OPERATIVO, NIVEL PROFESIONAL TÉCNICO: ",
              description:
                "10% de descuento en el pago anticipado (pronto pago), hasta un día antes de la fecha de vencimiento, sobre las mensualidades de costo de enseñanza en todos los programas de formación",
            },
            {
              title:
                "15%, de descuento en costo de enseñanza (mensualidades) en los diferentes programas de verano para escolares; a nivel nacional. en etapa escolar entre 07 y 17 años.",
            },
            {
              title:
                "15%, de descuento en costo de enseñanza (mensualidades) en los diferentes programas modulares para adultos, en Tecnologías de la Información, entre otros que se definan en conjunto con 'EL EJÉRCITO'.",
            },
            {
              title:
                "15% de descuento en costo de enseñanza (mensualidades) en todos los diplomados, cursos y especializaciones.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.senati.edu.pe/" }],
            },
          ],
        },
          {
              image: NEWMAN,
              title: "ESCUELA DE POSGRADO NEWMAN",
              descriptionLarge: [
                  {
                      title: "BENEFICIOS: ",
                      descriptions: [
                          "5% de descuento sobre los descuentos interesados en cursar Maestrías Oficiales online de “NEWMAN”, El descuento se aplicará sobre las tarifas vigentes para Perú.",
                          "Sobre la tarifa que tiene cada uno de las maestrías se aplicará el descuento comercial que exista en el momento de la reserva y se añadirá el descuento adicional por ser beneficiario del convenio. Ejemplo si un máster de “NEWMAN” el descuento comercial es de un 45% al postulante se le aplicara un descuento total del 50% (45% de descuento comercial más + 5% de descuento por convenio). El descuento total puede alcanzar hasta el 60% dependiendo de la titulación y casa de estudio.",
                      ],
                  },

                  {
                      title: "ALCANCE:",
                      description:
                          "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como a familiares directos (cónyuge, hijos y hermanos) tropa servicio militar en actividad, licenciados.",
                  },
              ],
          },
        // {
        //   image: Institute6,
        //   title: "CEVATUR PERÚ",
        //   descriptionLarge: [
        //     {
        //       title: "CARRERAS PROFESIONALES, TÉCNICAS Y DIPLOMADOS : ",
        //       description:
        //         "30% descuento en matrícula\n" +
        //         "20% descuento en el pago de pensiones en las (en las\n" +
        //         "distintas sedes)",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://www.cevaturperu.edu.pe/",
        //     },
        //   ],
        // },
        /*{
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
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              link: "https://es-la.facebook.com/ceesanvicente/",
            },
          ],
        },*/
        {
          image: InstituteDesarrolloGerencial,
          title: "INSTITUTO DESARROLLO GERENCIAL",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, ESPECIALIDADES Y DIPLOMADOS): ",
              description:
                "20% descuento en los costos de los programas académicos en especializaciones, cursos y diplomados.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://idg.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteMilitaresDelPeru,
          title: "INSTITUTO MILITARES DEL PERÚ",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, ESPECIALIDADES Y DIPLOMADOS): ",
              descriptions: [
                "30% de descuento en matricula y costos de enseñanza en (matricula y mensualidades), en todos sus programas de capacitación a oficina es de las FFAA y PNP, que tengan proyección de postular a los centros de formación castrense, cursos de especialización profesional e ingles profesional, en las diferentes modalidades, sedes o locales, incluso si existiera a nivel nacional.",
                "30% de descuento en matricula y costos de enseñanza en (matricula y mensualidades), en el programa academia a pre universitaria, pre militar e ingles en las diferentes modalidades, sedes o locales, incluso si existiera a nivel nacional.",
                "03 Becas integrales y 03 medias becas en todos los cursos",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal tropa servicio militar en actividad, licenciados",
            },
          ],
        },
        {
          image: InstituteIdept,
          title: "INSTITUTO DE DESARROLLO PROFESIONAL Y TÉCNICO",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS, INGLÉS, ESPECIALIDADES Y DIPLOMADOS: ",
              description:
                "20% descuento en el pago en los costos de los programas académicos.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [{ icon: faGlobe, link: "https://educacionidept.com/" }],
            },
          ],
        },
        {
          image: InstituteEiger,
          title: "ESCUELA INTERNACIONAL DE GERENCIA",
          descriptionLarge: [
            {
              title:
                "CARRERAS TÉCNICAS (COMPUTACIÓN E INFORMÁTICA, ADMINISTRACIÓN COMERCIAL, MARKETING DIGITAL Y VENTAS):",
              description:
                "Inscripción anual (S/. 100) y cuota mensual (S/. 70)",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://eiger.edu.pe/" }],
            },
          ],
        },
        // {
        //   image: Institute13,
        //   title: "AKRON",
        //   descriptionLarge: [
        //     {
        //       title:
        //         "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, INGLÉS,\n" +
        //         "ESPECIALIDADES Y DIPLOMADOS):",
        //       description: "50% descuento en el pago de pensiones",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://akronenglish1.com/",
        //     },
        //   ],
        // },
        // {
        //   image: Institute14,
        //   title: "EUROIDIOMAS",
        //   descriptionLarge: [
        //     {
        //       title: "IDIOMAS",
        //       description:
        //         "30% descuento en el pago de pensiones de los programas de Ingles\n" +
        //         "10% descuento en el pago de pensiones de los programas de portugués\n" +
        //         "10% descuento en el pago de pensiones de los programas de Alemán\n" +
        //         "20% descuento en el pago de pensiones de los programas de Ingles\n" +
        //         "para Niños y Juniors\n" +
        //         "10% descuento en el pago de pensiones de los programas de Inglés\n" +
        //         "Virtual, de manera general",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://euroidiomas.edu.pe/",
        //     },
        //   ],
        // },
        {
          image: InstituteIcpna,
          title: "ICPNA",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA INGLÉS: ",
              descriptions: [
                "15% descuento sobre la base de las tarifas publicadas en su portal",
                "15% descuento en las tarifas de paquetes",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [{ icon: faGlobe, link: "https://www.icpna.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteBritanico,
          title: "BRITÁNICO",
          descriptionLarge: [
            {
              title: "ESTUDIOS EN EL IDIOMA INGLÉS: ",
              description:
                "12% de los costos de los programas académicos, en el idioma de inglés (kids, junior, básico, intermedio y avanzado) de los programas de británico online.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [{ icon: faGlobe, link: "https://britanico.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteIfeep,
          title: "INSTITUTO FORMACIÓN EMPRESARIAL Y EXTENSIÓN PROFESIONAL",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE FORMACIÓN: ",
              descriptions: [
                "37.7% de descuento en pensiones en programas de (Ofimática, Inglés, excel en la modalidad On Line).",
                "59% de descuento en pensiones para el personal de tropa en programas de (Ofimática, Ingles, excel en la modalidad On Line).",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [{ icon: faGlobe, link: "https://ifeep.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteEigra,
          title: "ESCUELA INTERNACIONAL DE GRADUADOS",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS CORTOS Y SEMINARIOS: ",
              description: "30% de descuento en las pensiones para estudios.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.eigra.edu.pe/" }],
            },
          ],
        },
        // {
        //   image: Institute30,
        //   title: "GUIDE",
        //   descriptionLarge: [
        //     {
        //       title: "CURSOS DE PREPARACIÓN:",
        //       description: "20% de descuento en los diferentes programas",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://guideasesores.com/cursosmilitares/",
        //     },
        //   ],
        // },
        // {
        //   image: Institute31,
        //   title: "Von Braun",
        //   descriptionLarge: [
        //     {
        //       title: "PROGRAMAS DE FORMACIÓN :",
        //       description:
        //         "30% descuento en el pago de matrícula y pensiones\n" +
        //         "mensuales",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://www.istvonbraun.edu.pe/",
        //     },
        //   ],
        // },
        {
          image: InstituteEcaprev,
          title: "ECAPREV",
          descriptionLarge: [
            {
              title:
                "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS CORTOS Y SEMINARIOS: ",
              description:
                "Costo diferenciado por convenio, en el pago de las cuotas mensuales.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://ecaprev.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteIspacj,
          title: "ISPACJ",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE ESPECIALIZACIÓN Y DIPLOMADOS :",
              descriptions: [
                "20% descuento en el costo de los diplomados (ingeniería, gestión, administración, derecho, educación, ciencias de la salud, ciencias políticas).",
                "30% descuento en el costo total del programa de capacitación de ingles.",
                "35% descuento en el costo tal del programa de capacitación de computación.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [{ icon: faGlobe, link: "https://ispacj.com/" }],
            },
          ],
        },
        {
          image: InstituteInidhe,
          title: "INIDHE",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE DIPLOMADOS Y ESPECIALIZACIONES: ",
              description:
                "50% descuento en el costo de los diferentes programas académicos (cursos de especialización, diplomados, seminarios, talleres).",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [
                {
                  icon: faGlobe,
                  link: "https://www.facebook.com/Inidheoficial/?locale=es_LA",
                },
              ],
            },
          ],
        },
        {
          image: InstituteCepeban,
          title: "INSTITUTO CEPEBAN",
          descriptionLarge: [
            {
              title: "PROGRAMAS Y CURSOS: ",
              descriptions: [
                "25% descuento en el pago de pensiones en todas las sedes excepto en el distrito de Los Olivos (10%).",
                "10% de descuento en las pensiones mensuales en el programa in house (seminarios, fórum, talleres).",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.cepeban.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteCarrion,
          title: "Instituto Carrión",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS PROFESIONALES 03 AÑOS DEDURACIÓN: ",
              descriptions: [
                "30% descuento en el pago de matricula.",
                "25% de descuento en el pago de mensualidades en enfermería, farmacia, laboratorio clínico y prótesis dental.",
              ],
            },
            {
              title: "CURSOS DE EXTENCIÓN DE 01 AÑO DE DURACIÓN: ",
              descriptions: [
                "Exoneración por derecho de inscripción y matricula.",
                "50% de descuento en pensiones mensuales, en las carreras de técnico de enfermería, técnico de fisioterapia y rehabilitación.",
              ],
            },
            {
              title:
                "CARRERAS DE EXTENCIÓN PROFESIONAL DE 0 A 3 A 0 4 MESES DE 3 DURACIÓN: ",
              descriptions: [
                "Exoneración por derecho de inscripción y matricula",
                "50% de pensiones mensuales, en las siguientes carreras, cuidado del adulto mayor, (geriatría), cuidados del niño(nurseria), técnico auxiliar de emergencia, control de calidad de alimentos, técnico auxiliar inyectable, técnico auxiliar de control de calidad de productos farmacéuticos y afines, técnico de Auxiliar de Podología.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              link: "https://www.acarrion.edu.pe/",
            },
          ],
        },
        {
          image: InstituteInteci,
          title: "INSTITUTO DE GASTRONOMÍA Y GESTIÓN CULINARIA",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS EN GASTRONOMÍA Y ALTA GESTIÓN: ",
              description: "15% descuento en el pago de pensiones",
            },
            {
              title:
                "PROGRAMAS DE ESPECIALIZACIÓN / CURSOS CORTOS Y TALLERES LIBRES: ",
              description: "10% descuento en el pago de pensiones",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.inteci.edu.pe/" }],
            },
          ],
        },
        {
          image: InstitutePrivateacher,
          title: "Privateacher International",
          descriptionLarge: [
            {
              title: "IDIOMAS: ",
              description:
                "Costo diferenciado por convenio, en el pago de las cuotas mensuales.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados. (Hermanos solteros solo para Alianza Francesa)",
              links: [
                { icon: faGlobe, link: "https://englishonline.pe/inicio" },
              ],
            },
          ],
        },
        {
          image: InstituteIsil,
          title: "INSTITUTO SAN IGNACIO DE LOYOLA ",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE EXTENSIÓN PROFESIONAL: ",
              descriptions: [
                "20% descuento en el pago de pensiones en los programas tales como Diplomados y cursos mensuales, entre otros.",
                "20% en los programas de SISCO gestión de tecnología de la información PECI – programa de computación e informática.",
                "25% de descuento en pensiones en todas las carreras.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://isil.pe/" }],
            },
          ],
        },
        {
          image: InstituteCepea,
          title: "INSTITUTO CEPEA",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE FORMACIÓN: ",
              descriptions: [
                "30% de descuento en los programas de CARRERAS TÉCNICAS de administración de empresas, contabilidad, desarrollo de sistemas de información y enfermería técnica.",
                "20% de descuento en los programas de carreras técnicas de gastronomía y arte culinario, guía oficial de turismo y administración de servicios de hostelería.",
                "20% en costo de descuento en pensiones en todos los cursos cortos, seminarios y talleres.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [{ icon: faGlobe, link: "https://cepea.edu.pe/" }],
            },
          ],
        },
        // {
        //   image: Institute34,
        //   title: "CIM",
        //   descriptionLarge: [
        //     {
        //       title: "CARRERAS PROFESIONALES TÉCNICAS : ",
        //       description:
        //         "15% descuento en el pago de pensiones de las tarifas\n" +
        //         "publicadas.",
        //     },
        //     {
        //       title: "ALCANCE: ",
        //       description:
        //         "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
        //       link: "https://www.icim.edu.pe/",
        //     },
        //   ],
        // },
        {
          image: InstituteAndresVesalio,
          title: "I.E.S.T.P. ANDRE VESALIO",
          descriptionLarge: [
            {
              title: "PROGRAMAS DE CARRERAS TÉCNICAS: ",
              description: "50% descuento en el pago de matrícula y pensiones.",
            },
            {
              title: "FORMACIÓN CONTINUA: ",
              description: "50% descuento en el pago de pensiones",
            },
            {
              title: "PROGRAMA DE ESPECIALIZACÍON: ",
              description: "50% descuento en el pago de pensiones",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad y cesante, así como sus familiares directos (cónyuge, hijos y hermanos)",
              links: [
                { icon: faGlobe, link: "https://institutovesalio.edu.pe/" },
              ],
            },
          ],
        },
        {
          image: UniversidadCertus,
          title: "ESCUELA CERTUS",
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS: ",
              description:
                "20% de descuento en costo de enseñanza (mensualidades) en todos los programas.",
            },
            {
              title: "CARRERAS PARA GENTE QUE TRABAJA: ",
              description:
                "20% de descuento en costo de enseñanza (mensualidades).",
            },
            {
              title: "CURSOS LIBRES: ",
              description:
                "20% de descuento en costo de enseñanza (mensualidades).",
            },
            {
              title: "ALCANCE:",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.certus.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteCibertec,
          title: "INSTITUTO CIBERTEC",
          descriptionLarge: [
            {
              title: "PROGRAMAS TÉCNICOS: ",
              descriptions: [
                "Brindara costo diferenciado en programas de carreras técnicas en la modalidad de presencia otorgando el 50% de descuento sobre el costo de inscripción en cualquiera de sus modalidades y cedes.",
                "25 % de descuento sobre el costo de enseñanza, en la primera mensualidad, en cualquiera de sus modalidades y sedes. A partir de la segunda mensualidad para el costo de la enseñanza se aplicará el 8% de descuento sobre las mensualidades.",
              ],
            },
            {
              title: "FORMACIÓN CONTINUA: ",
              descriptions: [
                "15 % de descuento sobre las mensualidades, en cualquiera de sus sedes en programas de formación continua, en la modalidad presencial.",
                "20 % de descuento sobre las mensualidades, en cualquiera de sus sedes, en programas de formación continua, en la modalidad virtual.",
                "20 % de descuento sobre las mensualidades en programas de formación continua en aquellos cursos solicitados a un grupo y con tema específico.",
                "15% de descuento sobre programas académicos específicos a los docentes de la comunidad educativa EP.",
                "15% de descuento sobre programas virtuales de verano de máximo de 24 horas, a los estudiantes entre 7 y 17 años.",
                "Brindara costo diferenciado en programas de formación continua en la modalidad virtual, otorgando el 25% de descuento sobre las mensualidades, a partir de 03 alumnos matriculados",
              ],
            },
            {
              title: "ALCANCE:",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.cibertec.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteCorazonDeJesus,
          title: "I.E.S. CORAZÓN DE JESÚS",
          descriptionLarge: [
            {
              title: "CARRERAS PROFESIONALES TÉCNICAS: ",
              description:
                "15% descuento en el pago de pensiones de las tarifas publicadas, en las carreras profesionales técnica de marketing, publicidad, mercadotecnia, cursos, diplomados, seminarios, simposios y talleres.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
            },
          ],
        },
        {
          image: InstituteToulouseLautrec,
          title: "ESCUELA TOULOUSE LAUTREC",
          descriptionLarge: [
            {
              title: "CARRERAS DE BACHILLER (04) AÑOS: ",
              description:
                "15% de descuento en costo de enseñanza (mensualidades) en todos los programas",
            },
            {
              title: "CARRERAS TÉCNICAS DE (03) AÑOS:",
              description:
                "15% de descuento en costo de enseñanza (mensualidades)",
            },
            {
              title: "DIPLOMADOS : ",
              description:
                "15% de descuento en costo de enseñanza (mensualidades)",
            },
            {
              title: "CURSOS: ",
              description:
                "15% de descuento en costo de enseñanza (mensualidades)",
            },
            {
              title: "FORMACIÓN EXPRESS: ",
              description:
                "15% de descuento en costo de enseñanza (mensualidades) ",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados",
              links: [
                { icon: faGlobe, link: "https://www.toulouselautrec.edu.pe/" },
              ],
            },
          ],
        },
        {
          image: IntituteColumbia,
          title: "INSTITUTO COLUMBIA",
          descriptionLarge: [
            {
              title: "CARRERAS DE ALTA COCINA: ",
              description:
                "25 medias becas, (50%) de descuento en el costo de enseñanza en la carrera de alta cocina, considerando los turnos tarde y noche.",
            },
            {
              title:
                "CARRERAS TÉCNICAS DE ADMINISTRACIÓN DE SERVICIOS DE HOSTELERIA Y RESTAURANTE CON MENCIÓN EN GERENCIA DE LA HOSPITALIDAD INTERNACIONAL (TURNOS TARDE Y NOCHE): ",
              description:
                "25 medias becas, (50%) de descuento en el costo de enseñanza (mensualidades)",
            },
            {
              title:
                "100% DE DESCUENTO EN COSTO POR DERECHO DE ADMISIÓN, en las carreras, en toda las modalidades y sedes (si existiera a nivel nacional).",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.columbia.edu.pe/" }],
            },
          ],
        },
        {
          title: "CÁMARA DE COMERCIO LIMA",
          image: InstituteCamaraLima,
          descriptionLarge: [
            {
              title: "BENEFICIOS QUE OFRECE: ",
              descriptions: [
                "20% de descuento en costo de enseñanza (mensualidades) en todos los programas de CARRERAS TÉCNICAS.",
                "20% de descuento en costo de enseñanza (mensualidades) en todas las CARRERAS PARA GENTE QUE TRABAJA.",
                "20% de descuento en costo de enseñanza (mensualidades) en CURSOS LIBRES.",
              ],
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [
                { icon: faGlobe, link: "https://www.camaralima.org.pe/" },
              ],
            },
          ],
        },
        {
          title: "AVIA",
          image: InstituteAvia,
          descriptionLarge: [
            {
              title: "CARRERAS TÉCNICAS: ",
              description:
                "20% de descuento en costo de enseñanza (mensualidades) en todos los programas y carreras técnicas para estudios de aviación comercial, programa caunter profesional, programa de especialización como tripulante de cabina.",
            },
            {
              title: "CURSOS O PROGRAMAS DE ESPECIALIZACIÓN: ",
              description:
                "20% de descuento en costo de enseñanza (mensualidades).",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://avia.edu.pe/" }],
            },
          ],
        },
        {
          image: InstituteSanJudas,
          title: "Corporación Educativa PEAH San Judas E.I.R.L.",
          descriptionLarge: [
            {
              title: "CURSOS DE ESPECIALIZACIÓN PROFESIONAL: ",
              description:
                "25% descuento en el pago de matrícula y pensiones, en todos sus cursos de especialización profesional considerando las diferentes modalidades",
            },
            {
              title: "ALCANCE",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.peahsanjudas.com/" }],
            },
          ],
        },
        {
          title: "CEGICAP",
          image: InstituteCegicap,
          descriptionLarge: [
            {
              title: "BENEFICIOS: ",
              description:
                "25% de descuento en matricula y costos de enseñanza en (mensualidades), en todos sus cursos de especialización profesional, considerando las diferentes modalidades, sedes o locales, incluso si existiera a nivel nacional.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.cegicap.edu.pe/" }],
            },
          ],
        },
        {
          title: "CEUCE",
          image: InstituteCeuce,
          descriptionLarge: [
            {
              title: "BENEFICIOS: ",
              description:
                "25% en descuento en matrícula y el 25% de descuentos en costos de enseñanza en mensualidades; en posgrado, cursos de capacitación, talleres y de especialización profesional, considerando en las diferentes especialidades.",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
              links: [{ icon: faGlobe, link: "https://www.ceuce.edu.pe/" }],
            },
          ],
        },        {
          title: "FORCE PERÚ",
          image: FORCE,
          descriptionLarge: [
            {
              title: "BENEFICIOS: ",
              description:
                "Incorporar en la tarifa referencial el porcentaje de descuento (52%) .",
            },
            {
              title: "ALCANCE: ",
              description:
                "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge e hijos) tropa servicio militar en actividad, licenciados.",
            },
          ],
        },
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
        href: "https://www.facebook.com/profile.php?id=61555409192993&mibextid=sCpJLy",
        icon: faFacebook,
        name: "Facebook",
      },
      { href: "tel:013171700", icon: faMobile, name: "Anexo 3924" },
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
