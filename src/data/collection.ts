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
  className: string;
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
    "We build with HTML5, CSS3, and JavaScript — the core technologies of the modern web. From semantic structure to fluid layouts and interactive experiences, every line of code is crafted with purpose.",
  description:
    "Frontend development has come a long way since the early days of static pages. Today, it's the art of bringing designs to life — used by a global community of developers, designers, and creators who push the boundaries of what the web can do.",
  className: "twoImage",
  image: [
    {
      url: webDeveloper,
      alt: "Web developer working",
    },
    {
      url: tech,
      alt: "Modern tech workspace",
      hideMobile: true,
    },
  ],
};

export const cleanCode: CollectionProps = {
  labelledby: "clean-code",
  title:
    "Writing clean, maintainable code isn't easy. It takes time, effort, and constant practice. But when everything clicks into place — when the layout snaps, the animation flows, and the Lighthouse score hits green — it's incredibly rewarding.",
  description:
    "We feel the same way about building for the web. Our drive comes from a passion for the craft and for the people who use what we build. Whether mastering a new framework, optimizing Core Web Vitals, or perfecting a responsive layout, we're committed to growth.",
  className: "oneImage",
  image: [
    {
      url: developer,
      alt: "Frontend developer",
      figCaption: "Why Frontend? - A Developer's Journey",
    },
  ],
};

export const team: CollectionProps = {
  labelledby: "team",
  title:
    "We're a global community of developers, designers, and creatives from diverse backgrounds, united by our passion for building great web experiences.",
  description:
    "Most of us started as self-taught learners — building small projects, breaking things, and gradually taking on bigger challenges. Some have computer science degrees, others come from design, music, or completely different fields. What unites us is the shared belief that every developer has something unique to contribute to the future of the web.",
  className: "thereImage",
  image: [
    {
      url: red,
      alt: "Modern development",
    },
    {
      url: person,
      alt: "Software engineer",
      hideMobile: true,
    },
  ],
};

export const creativity: CollectionProps = {
  labelledby: "creativity",
  title:
    " We believe that creating truly exceptional web experiences requires dedication. We focus on the fundamentals — performance, accessibility, and usability — and strive for excellence in every project.",
  description:
    "Instead of chasing every new framework or trend, we focus on what truly matters: writing maintainable code, designing inclusive interfaces, and building products that stand the test of time. We value diverse perspectives and encourage open discussion to find the best solutions.",
  className: "oneImage",
  image: [
    {
      url: devs,
      alt: "Team of developers",
    },
  ],
};

export const pasion: CollectionProps = {
  labelledby: "pasion",
  title:
    "We're passionate about what we do, but also about becoming better versions of ourselves every day.",
  description:
    "We work hard to foster an environment where people can grow both personally and professionally. We believe in learning from each other and sharing knowledge freely. From internal workshops and code reviews to conference talks and open source contributions, we provide opportunities to explore new technologies, refine best practices, and push the boundaries of what's possible on the web.",
  className: "twoImage",
  image: [
    {
      url: cat,
      alt: "Cozy coding",
    },
    {
      url: linux,
      alt: "Linux terminal",
      hideMobile: true,
    },
  ],
};

export const panel: CollectionProps = {
  labelledby: "panel",
  title:
    "We want our team to love working here. We're always looking for talented developers who share our passion for the web and the craft of frontend development.",
  description:
    "If you join us, you'll work on real-world projects that challenge and inspire you. We offer flexible hours, remote-friendly policies, and a collaborative environment where your voice matters. We also provide learning budgets, conference tickets, and mentorship to help you grow — whether you're mastering a new framework, contributing to open source, or diving into web accessibility.",
  className: "oneImage",
  image: [
    {
      url: web,
      alt: "Cozy coding",
    },
  ],
  panelText:
    "We're proud of what we've built so far, but there's still so much more to do. If you want to be part of our journey, we'd love to hear from you.",
  panelLink: [
    {
      url: "#",
      label: "See open position >",
    },
  ],
};
