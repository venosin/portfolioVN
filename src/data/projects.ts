import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Foodies, mi primer proyecto de desarrollo web profesional, basado solamente en Frontend',
    image: 'foodies.webp',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
    demoLink: 'https://foodiescd1.vercel.app/',
    githubLink: 'https://github.com/venosin/foodiescd'
  },
  {
    title: 'WorkBuddy',
    description: 'Tienda en linea de inmuebles, proyecto de desarrollo web profesional en proceso',
    image: 'https://via.placeholder.com/800x400',
    tags: ['React', 'TailwindCSS', 'MongoDB', 'Node.js'],
    demoLink: 'https://proyecto2.demo',
    githubLink: 'https://github.com/venosin/workbuddy-frontend'
  },
  {
    title: 'WorkBuddy Backend',
    description: 'Backend de WorkBuddy, proyecto de desarrollo web profesional en proceso',
    image: 'https://via.placeholder.com/800x400',
    tags: ['Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://proyecto3.demo',
    githubLink: 'https://github.com/venosin/workbuddy-backend'
  }
];
