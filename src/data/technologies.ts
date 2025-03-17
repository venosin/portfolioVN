import type { TechnologyCategory } from '../types';

export const technologies: TechnologyCategory[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        url: "https://reactjs.org"
      },
      {
        name: "Vue.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        url: "https://vuejs.org"
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        url: "https://www.typescriptlang.org"
      },
      {
        name: "TailwindCSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
        url: "https://tailwindcss.com"
      }
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org"
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        url: "https://www.python.org"
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        url: "https://expressjs.com"
      }
    ]
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        url: "https://www.mongodb.com"
      },
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        url: "https://www.postgresql.org"
      }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        url: "https://git-scm.com"
      },
      {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        url: "https://www.docker.com"
      },
      {
        name: "VS Code",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        url: "https://code.visualstudio.com"
      }
    ]
  }
];
