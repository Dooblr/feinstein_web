// src/data/projectsData.ts

export interface ProjectData {
  id: string;
  title: string;
  description?: string;
  images?: string[];
  features?: string[];
  technologies?: string[];
  link?: string;
}

// Import images using ES6 `import` syntax
import bahpImage1 from "../assets/images/bahp/1.png";
import bahpImage2 from "../assets/images/bahp/2.png";
import bahpImage3 from "../assets/images/bahp/3.png";

import ursabaseImage1 from "../assets/images/ursabase/1.png";
import ursabaseImage2 from "../assets/images/ursabase/2.png";

// src/data/projectsData.ts

const projectsData: ProjectData[] = [
  {
    id: "ursabase",
    title: "Ursabase",
    description:
      "Ursabase is a form management system that assists technicians with diagnosing landscaping equipment and providing ordering requirements to the parts manager.",
    images: [ursabaseImage1, ursabaseImage2],
    features: ["Authentication", "Complex forms", "Database storage"],
    technologies: ["React", "TypeScript", "Node.js", "Vite"],
  },
  {
    id: "bahp",
    title: "Bay Area Health Psychology",
    description:
      "The Bay Area Health Psychology Document Manager helps professionals manage client documents and files effectively.",
    images: [bahpImage1, bahpImage2, bahpImage3],
    features: [
      "Document management",
      "Client file organization",
      "Secure storage",
    ],
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    id: "babbageconnect",
    title: "Babbage Connect",
    description:
      "Babbage Connect is a platform that allows MetaNet investors and developers to connect and fund projects.",
    link: "https://babbageconnect.com",
  },
  {
    id: "rbgmowing",
    title: "RBG Mowing",
    description:
      "RBG Mowing is a landscaping company that provides mowing services to the Ramona area of San Diego.",
    link: "https://rbgmowing.com",
  },
  {
    id: "iconoblast",
    title: "Iconoblast",
    description:
      "Iconoblast is a cross-platform game made with React that won Honorable Mention at the 2024 React Game Jam.",
    link: "https://iconoblast.spring-2024.reactjam.com/",
  },
];

export default projectsData;
