// src/types/portfolio.ts

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  about: {
    name: string;
    role: string;
    intro: string;
    description: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: {
    school: string;
    major: string;
    period: string;
    status: string;
  }[];
  contact: {
    email: string;
    github: string;
    blog?: string;
  };
}
