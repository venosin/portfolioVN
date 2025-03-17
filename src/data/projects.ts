import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: 'foodies.webp',
    tags: ['React', 'TailwindCSS', 'Node.js'],
    demoLink: 'https://foodiescd1.vercel.app/',
    githubLink: 'https://github.com/venosin/foodiescd'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: 'https://via.placeholder.com/800x400',
    tags: ['Vue.js', 'Firebase', 'TypeScript'],
    demoLink: 'https://proyecto2.demo',
    githubLink: 'https://github.com/usuario/proyecto2'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    image: 'https://via.placeholder.com/800x400',
    tags: ['Next.js', 'MongoDB', 'AWS'],
    demoLink: 'https://proyecto3.demo',
    githubLink: 'https://github.com/usuario/proyecto3'
  }
];
