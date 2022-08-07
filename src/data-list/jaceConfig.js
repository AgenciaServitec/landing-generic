import {
  CobieneLogoLarge,
  JaceAbout,
  JaceMap,
  JaceMap2,
  JaceServices,
  SaedSlider1,
} from "../images";

export const jaceConfig = {
  header: {
    name: "jace",
    title: "Jefatura de Administración de Casas del Ejercito",
    logoImg: CobieneLogoLarge,
    menuHeader: [
      { id: "", name: "Inicio" },
      { id: "", name: "Nosotros" },
      { id: "", name: "Requisitos" },
      { id: "", name: "Tramites" },
    ],
  },
  main: {
    sectionCarousel: [
      {
        title: "JEFATURA DE ADMINISTRACION DE CASAS DEL EJÉRCITO.",
        imgBackground: SaedSlider1,
        buttons: [
          {
            title: "Nosotros",
          },
          {
            title: "Requisitos",
          },
        ],
      },
    ],
    sectionAbout: {
      title: "Nosotros",
      description:
        "La JACE asesorar al Comando de Bienestar del Ejército en los aspectos inherentes de la administración de casas de servicios del Ejército. Asimismo, planificara, ejecutara y supervisara los trabajos de conservación, mejoramiento y rehabilitación de la infraestructura, inmobiliaria de las casas de servicio de la guarnición de Lima, a fin de contribuir a la consecución de los objetivos de Bienestar del Ejército.",
      img: JaceAbout,
    },
    /*   sectionServices: [
      {
        img: "",
        title: "LABOR CONSTANTE",
      },
      {
        img: "",
        title: "JACE",
      },
      {
        img: "",
        title:
          "ESTA JEFATURA DE ADMINISTRACIÓN DE CASAS DEL EJERCITO SIGUE TRABAJANDO PARA EL BIENESTAR DE NUESTRA FAMILIA MILITAR",
      },
    ],*/
    sectionServices: {
      card: [
        {
          img: JaceServices,
        },
      ],
    },
    sectionRequirements: [
      {
        img: "",
        title: "Paso 1",
        description: [
          "Deberá encontrarse en situación militar de actividad con no más de 25 años para Oficiales y 28 años para Tcos y Sub Oficiales.",
        ],
      },
      {
        img: "",
        title: "Paso 2",
        description: [
          "Deberá ser casado y tener hijos con su conyugue, mantener una relación estable y vivir con su conyugue en la guarnición donde solicita la casa.",
        ],
      },
      {
        img: "",
        title: "Paso 3",
        description: [
          "Deberá tener como mínimo 4 años de servicio cumplido como Oficial o Sub Oficial, con el grado mínimo de Teniente o Sub Oficial 2o.",
        ],
      },
      {
        img: "",
        title: "Paso 4",
        description: [
          "El personal militar que proviene de la reserva puede solicitar asignación de casa de servicio a partir de la fecha que pasen a la efectividad",
        ],
      },
      {
        img: "",
        title: "Paso 5",
        description: [
          "No deben haber sido favorecidos con un préstamo de Ores –Fovime.",
        ],
      },
      {
        img: "",
        title: "Paso 6",
        description: [
          "No debe haber ocupado casa de servicio en los 3 últimos años en la guarnición donde solicita.",
        ],
      },
      {
        img: "",
        title: "Paso 7",
        description: [
          "El personal militar que proviene de la reserva puede solicitar asignación de casa de servicio a partir de la fecha que pasen a la efectividad.",
        ],
      },
      {
        img: "",
        title: "Paso 8",
        description: [
          "El personal militar candidato a usuario no debe haber sido obligado a desocupar la casa de servicio en cualquiera de las guarniciones de Ejercito donde existan casas de servicio.",
        ],
      },
      {
        img: "",
        title: "Paso 9",
        description: [
          "El personal militar candidato a “usuario” que solicite asignación especial o excepcional deberá contar con:",
          "a.Los documentos que acrediten la situación de especialidad o excepcionalidad.",
          "b.El dictamen legal favorable.",
          "c.La opinión del Crl Ing Jefe de la DACE.",
          "d.La aprobación del General de Brigada Comandante General del COBIENE, para la guarnición de Lima",
        ],
      },
    ],
    sectionConceptualMap: {
      title:
        "FLUJOGRAMA PARA LA ASIGNACION DE CASA DE SERVICIO EN LA JEFATURA DE ADMINISTRACION DE CASAS DEL EJERCITO (JACE)",
      img: JaceMap,
      imgTwo: JaceMap2,
    },
  },
  footer: "",
};
