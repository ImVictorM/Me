import {
  blogsApi,
  donaBirita,
  glowStation,
  recipesApp,
  solarSystem,
  tfc,
  trivia,
  tryunfo,
} from "@/assets/images";

type NavLink = {
  name: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  pageUrl?: string;
  img: string;
  mainTechs: string[];
};

export default {
  about: `
  My interest in development started back in 2020, influenced by a friend, I started studying web development by myself. The first programming language I had contact was JavaScript.\n
  Nowadays, I am focused on earning my place and creating a thriving and healthy career as a developer.\n
  Beyond coding, you can find me playing games, lifting weights or just enjoying the pleasure of standing on the ground just breathing and listening to a podcast.
  `,

  hero: `I am a developer based in Brazil. With a passion for crafting digital experiences, I specialize in bringing creative ideas to life on the web.`,
  social: {
    email: "victorutdsim7@gmail.com",
    github: "https://github.com/ImVictorM",
    linkedin: "https://www.linkedin.com/in/victor-figueiredo-mendes/",
  },
  navigationLinks: [
    {
      name: "HOME",
      url: "/#home",
    },
    {
      name: "ABOUT",
      url: "/#about",
    },
    {
      name: "PROJECTS",
      url: "/#projects",
    },
    {
      name: "CONTACT",
      url: "/#contact",
    },
  ] as NavLink[],

  projects: [
    {
      title: "Dona Birita",
      description:
        "Beverage delivery platform for the fictitious distributor Dona Birita.",
      githubUrl: "https://github.com/ImVictorM/Dona-Birita",
      img: donaBirita,
      mainTechs: ["React", "Express", "Sequelize"],
    },
    {
      title: "Trybe Footbal Club (TFC)",
      description:
        "Informative website about football matches and classifications.",
      githubUrl: "https://github.com/ImVictorM/Trybe-Football-Club",
      img: tfc,
      mainTechs: ["TypeScript", "Express", "Sequelize"],
    },
    {
      title: "Blogs API",
      description:
        "RESTful API for a blog system where you may sign in to make a post.",
      githubUrl: "https://github.com/ImVictorM/Blog-API",
      img: blogsApi,
      mainTechs: ["JavaScript", "Express", "Sequelize"],
    },
    {
      title: "Recipes App",
      description:
        "A recipes app where you can search, filter, favorite, and follow instructions to make a delicious meal/drink.",
      githubUrl: "https://github.com/ImVictorM/Recipes-App",
      img: recipesApp,
      mainTechs: ["React", "Bootstrap"],
    },
    {
      title: "Trivia Game",
      description: "Quiz game based on the trivia game style.",
      githubUrl: "https://github.com/ImVictorM/Trivia-Game",
      img: trivia,
      mainTechs: ["React", "CSS"],
    },
    {
      title: "Glow Station",
      description: "A music app where you can play songs using the iTunes API.",
      githubUrl: "https://github.com/ImVictorM/Glow-Station",
      pageUrl: "https://imvictorm.github.io/Glow-Station",
      img: glowStation,
      mainTechs: ["React", "CSS"],
    },
    {
      title: "Tryunfo",
      description:
        "A top-trumps-like game where you can create a deck of custom cards.",
      githubUrl: "https://github.com/ImVictorM/Tryunfo",
      pageUrl: "https://imvictorm.github.io/Tryunfo/",
      img: tryunfo,
      mainTechs: ["React", "CSS"],
    },
    {
      title: "Solar System",
      description:
        "Solar system model where you can visualize all the planets of it.",
      githubUrl: "https://github.com/ImVictorM/Solar-System",
      pageUrl: "https://imvictorm.github.io/Solar-System/",
      img: solarSystem,
      mainTechs: ["React", "CSS"],
    },
  ] as Project[],
};
