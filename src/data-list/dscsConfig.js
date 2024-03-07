import { CobieneLogoLarge, JaceAbout2, JaceSlider1 } from "../images";

export const dscsConfig = {
  helment: {
    title: "Departamento de Supervisión de Calidad del Servicio",
    link: "https://dscs.cobiene.mil.pe",
    description: "Garantizando calidad en servicios clave del Ejército para personal militar y sus familias.",
    keywords: "",
  },
  header: {
    name: "dscs",
    title: "Departamento de Supervisión de Calidad del Servicio",
    logoImg: CobieneLogoLarge,
    menuList: [
      { id: "about-us", name: "Nosotros" },
      { id: "requisitos", name: "Requisitos" },
      { id: "contact", name: "Contáctanos" },
    ],
  },
  main: {
    sectionCarousel: [
        {
            title: "Supervisión de calidad",
            image: JaceSlider1,
            buttons: [],
        }
    ],
    sectionAbout: {
        title: "Función",
        descriptions: [
            "El departamento de supervisión de la calidad de servicios es responsable de asesorar, supervisar, Evaluar el rendimiento del sistema de gestión de la calidad que presta el Ejército al personal militar y familiares directos en educación, vivienda de servicio, programas de vivienda (FOVIME) y las prestaciones de servicio establecidas mediante convenios firmados con la Asociación de Circulo Militar del Perú (ACMP) y Circulo Militar de Supervisores, Técnicos y Sub Oficiales (AC-STS), Bazar Central del Ejército (BCE) y el Fondo Solidario de Sepelio del Ejército (FOSSEP)."
        ],
        buttons: [{ type: "secondary", id: "contact", title: "CONTÁCTANOS" }],
        images: [JaceAbout2]
    },

  }
};
