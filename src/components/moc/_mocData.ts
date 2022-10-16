import testProject from "../../assets/images/pngs/testProject.png";
type Contributors = {
  name: string;
  portfolioWebsite: string;
};

export enum ProjectStatus {
  completed = "completed",
  suspended = "suspended",
  inProgress = "inProgress",
}

export type projectData = {
  imageUrl: string;
  name: string;
  description: string;
  writtenIn: Array<string>;
  projectStatus: ProjectStatus;
  owner: string;
  role: string;
  contributors: Array<Contributors>;
};

const Projects: Array<projectData> = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-dcaba.appspot.com/o/capabilitiesImgs%2Fimage10.jpeg?alt=media&token=8532abb1-a986-4074-b21e-e5a0bdca1fbf",
    name: "Bole",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Cross Platform",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,

    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Backend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },

  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Backend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },

  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Full Stack",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl: "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.suspended,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Frontend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.inProgress,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Frontend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.inProgress,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Backend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.suspended,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Backend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.suspended,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Backend Only",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Cross Platform",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
  {
    imageUrl:
      "https://businessfirstfamily.com/wp-content/uploads/2016/07/free-app-development-software-best-options.jpg",
    name: "Zaire",
    owner: "Personal",
    projectStatus: ProjectStatus.completed,
    description:
      "this project is a divice project written in C++, c#  and React js," +
      " created to  help   the divercity of workers in  Zaire organization",
    writtenIn: ["c++", "react"],
    role: "Full Stacky",
    contributors: [
      { name: "Emmanuel kofi Danquah", portfolioWebsite: "www.google.com" },
      { name: "Warren ownernah", portfolioWebsite: "www.google.com" },
      { name: "Joseph ellie Cooper", portfolioWebsite: "www.google.com" },
    ],
  },
];

export default Projects;
