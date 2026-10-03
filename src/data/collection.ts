import webDeveloper from "@assets/web-developer.png";
import tech from "@assets/tech.png";
import developer from "@assets/developer.png";
import red from "@assets/red.png";
import person from "@assets/person.png";
import devs from "@assets/devs.png";
import cat from "@assets/cat.png";
import linux from "@assets/linux.png";
import web from "@assets/web.png";

export interface CollectionProps {
  labelledby: string;
  title: string;
  description: string;
  image: {
    url: ImageMetadata;
    alt: string;
    hideMobile?: boolean;
    figCaption?: string;
  }[];
  panelText?: string;
  panelLink?: {
    url: string;
    label: string;
  }[];
}

export const create: CollectionProps = {
  labelledby: "create",
  title:
    "Construimos con HTML5, CSS3 y JavaScript, las tecnologías fundamentales de la web moderna. Desde la estructura semántica hasta los diseños fluidos y las experiencias interactivas, cada línea de código está creada con un propósito.",
  description:
    "El desarrollo frontend ha recorrido un largo camino desde los primeros días de las páginas estáticas. Hoy en día, es el arte de dar vida a los diseños, utilizado por una comunidad global de desarrolladores, diseñadores y creadores que impulsan los límites de lo que la web puede hacer.",
  image: [
    {
      url: webDeveloper,
      alt: "Desarrollador web trabajando",
    },
    {
      url: tech,
      alt: "Espacio de trabajo tecnológico moderno",
      hideMobile: true,
    },
  ],
};

export const cleanCode: CollectionProps = {
  labelledby: "clean-code",
  title:
    "Escribir código limpio y mantenible no es fácil. Requiere tiempo, esfuerzo y práctica constante. Pero cuando todo encaja en su lugar —cuando la maquetación se ajusta, la animación fluye y la puntuación de Lighthouse se marca en verde— es increíblemente gratificante.",
  description:
    "Sentimos lo mismo al construir para la web. Nuestra motivación proviene de la pasión por este oficio y por las personas que usan lo que creamos. Ya sea dominando un nuevo framework, optimizando las Core Web Vitals o perfeccionando un diseño adaptativo, estamos comprometidos con el crecimiento.",
  image: [
    {
      url: developer,
      alt: "Desarrollador frontend",
      figCaption: "¿Por qué Frontend? - El viaje de un desarrollador",
    },
  ],
};

export const team: CollectionProps = {
  labelledby: "team",
  title:
    "Somos una comunidad global de desarrolladores, diseñadores y creativos de diversos orígenes, unidos por nuestra pasión por crear excelentes experiencias web.",
  description:
    "La mayoría de nosotros comenzó como autodidactas: construyendo pequeños proyectos, cometiendo errores y asumiendo gradualmente retos más grandes. Algunos tienen títulos en ciencias de la computación, otros provienen del diseño, la música o campos completamente diferentes. Lo que nos une es la convicción compartida de que cada desarrollador tiene algo único que aportar al futuro de la web.",
  image: [
    {
      url: red,
      alt: "Desarrollo moderno",
    },
    {
      url: person,
      alt: "Ingeniero de software",
      hideMobile: true,
    },
  ],
};

export const creativity: CollectionProps = {
  labelledby: "creativity",
  title:
    "Creemos que crear experiencias web verdaderamente excepcionales requiere dedicación. Nos enfocamos en los fundamentos —rendimiento, accesibilidad y usabilidad— y nos esforzamos por alcanzar la excelencia en cada proyecto.",
  description:
    "En lugar de perseguir cada nuevo framework o tendencia, nos enfocamos en lo que realmente importa: escribir código mantenible, diseñar interfaces inclusivas y construir productos que perduren en el tiempo. Valoramos las diversas perspectivas y fomentamos el debate abierto para encontrar las mejores soluciones.",
  image: [
    {
      url: devs,
      alt: "Equipo de desarrolladores",
    },
  ],
};

export const pasion: CollectionProps = {
  labelledby: "pasion",
  title:
    "Nos apasiona lo que hacemos, pero también convertirnos en mejores versiones de nosotros mismos cada día.",
  description:
    "Trabajamos arduamente para fomentar un entorno donde las personas puedan crecer tanto personal como profesionalmente. Creemos en aprender unos de otros y compartir conocimientos libremente. Desde talleres internos y revisiones de código hasta charlas en conferencias y contribuciones al código abierto, brindamos oportunidades para explorar nuevas tecnologías, perfeccionar las mejores prácticas y superar los límites de lo posible en la web.",
  image: [
    {
      url: cat,
      alt: "Logo de un gato gamer",
    },
    {
      url: linux,
      alt: "Terminal de Linux",
      hideMobile: true,
    },
  ],
};

export const panel: CollectionProps = {
  labelledby: "panel",
  title:
    "Queremos que a nuestro equipo le encante trabajar aquí. Siempre estamos buscando desarrolladores talentosos que compartan nuestra pasión por la web y el oficio del desarrollo frontend.",
  description:
    "Si te unes a nosotros, trabajarás en proyectos del mundo real que te desafiarán e inspirarán. Ofrecemos horarios flexibles, políticas de trabajo remoto y un entorno colaborativo donde tu opinión cuenta. También ofrecemos presupuestos para aprendizaje, entradas a conferencias y mentorías para ayudarte a crecer, ya sea dominando un nuevo framework, contribuyendo al código abierto o profundizando en la accesibilidad web.",
  image: [
    {
      url: web,
      alt: "Programación acogedora",
    },
  ],
  panelText:
    "Estamos orgullosos de lo que hemos construido hasta ahora, pero aún queda mucho por hacer. Si quieres ser parte de nuestro viaje, nos encantaría saber de ti.",
  panelLink: [
    {
      url: "#",
      label: "Ver vacantes disponibles >",
    },
  ],
};
