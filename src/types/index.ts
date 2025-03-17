export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export interface TechnologyItem {
  name: string;
  icon: string;
  url: string;
}

export interface TechnologyCategory {
  category: string;
  items: TechnologyItem[];
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}
