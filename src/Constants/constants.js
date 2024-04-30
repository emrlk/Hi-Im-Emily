import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelope,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

import {
  CyberChunks,
  avatar,
  cssIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  psqlIcon,
  reactIcon,
  reasonED,
  snow,
  sql
} from "../assets";

library.add(faBars, faWindowRestore);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  avatar,
  snow,
  sql,
};

const icons = {
  faBars,
  faWindowRestore,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hi, I'm Emily! I am a senior computer science undergraduate at Old Dominion University pursuing software development and game design.",
    "I have over 5 years of academic programming experience as well as research and internship experience. I am most interested in software-based education tools, web development, game design, and information systems. This website is a collection of my projects, research, and internship reflections.",
    "I am currently trying to get my foot in the door via remote software development opportunities. Your visit is much appreciated! Thank you for reading. ",
  ],
};


const internships = [
  {
    name: "Innovate Cyber Spring 2024",
    description:
      "This was an experiential learning initiative where I was able to employ innovation, creativity, active learning, critical and thinking/analysis skills. As a member of the INNOVATE Cyber 2024 cohort, I worked to identify a challenge related to making cybersecurity more approachable and increasing people's cyber hygiene. Using a design thinking approach to problem-solving, I built User Experience skills by identifying the root cause, developing a solution to address the problem, and iterating to create a prototype to solve the challenge.",
    documentLink: "https://drive.google.com/file/d/1TMBM-F2o8eO0_ltogyo8B9CZUa4GwID1/preview",
  },
  {
    name: "ODU Game Studies ",
    description:
      "During this Summer 2023 internship, I contributed to the creation of a mobile game aimed at facilitating campus exploration for incoming students at Old Dominion University. As a first-time Unity user, I implemented inspect functionalities for 3D models, audio controls, and various UI elements within Unity. I collaborated with Sound, 3D Design, and UI teams to utilize their work and add functionalities to the game. I participated in story tracking and communicated my progress to Dr. Kevin Moberly of the ODU Game Studies program.",
    documentLink: "https://drive.google.com/file/d/1tWv6Kb__pqjluLDwMCdo3hakAoMYJ1V7/preview",
  },
  {
    name: "Capstone Research Project",
    description:
      "In this capstone course, I investigated the existence and prevalence of logical fallacies in online content, the quality of logical fallacy and critical reasoning education in the United States, and designed a software-based solution to help educators prioritize logical fallacy education in k-12 schools. I analyzed the feasibility of this solution and wrote a Software Requirements Specification for its prototype.",
    documentLink: "https://drive.google.com/file/d/14bSAjb65jP5QFcszJNNoEVE3WjsRm9MQ/preview",
  },
];





export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "internships",
    title: "Internships | Research",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const projects = [
  {
    name: "ReasonED (In Progress)",
    description:
      "A game-based learning website that cultivates logical fallacy identification skills for kids and adults of all ages. Implemented with Next.js and Godot. This capstone prototype is a project I've led to help address the lack of critical reasoning skills in today's online world, where flawed logic is shared rampantly and utilized by filter-bubble algorithms.",
    image: reasonED,
    source_code_link: "https://github.com/emrlk/ReasonED",
    demo_link: "https://reasoned.vercel.app/",
  },
  {
    name: "Cyber Chunks",
    description:
      "Solution pitch developed for my Innovate-Cyber research and internship initiative. Cyber Chunks are fun, educational monthly cyber hygiene booklets made especially for individuals who are not tech-savvy. ",
    image: CyberChunks,
    source_code_link: "",
    demo_link:
      "https://sites.google.com/view/cyber-chunks/home",
  },
  {
    name: "Snow",
    description:
      "A work-in-progress scene implemented with Three.js.",
    image: snow,
    source_code_link: "https://github.com/emrlk/ThreeSnow?tab=readme-ov-file",
    demo_link: "https://emrlk.github.io/ThreeSnow/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I understand HTML basics and can utilize it to organize pages",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I can utilize CSS to craft appealing layouts that enhance user experience",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I can use JavaScript to introduce interactivity and other functionality into webpages",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I can utilize React to creating reusable components and dynamic pages",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have academic experience utilizing Java for OOP and implementing data structures",
  },

  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for project collaboration, code sharing, and issue tracking",
  },
  {
    id: "SQL",
    title: "SQL",
    icon: sql,
    description:
      "I can utilize basic SQL syntax to create tables and query databases.",
  },

];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, internships, introduction, markerSvg, media, memoji, projects, skills };

