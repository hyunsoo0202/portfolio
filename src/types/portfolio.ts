// src/types/portfolio.ts

export interface ProblemSolving {
  title: string;      // 무엇을 했는가 (Level 1)
  problem: string;    // 어떤 문제가 있었는가 (Level 1-4)
  solution: string;   // 어떻게 해결했는가 (Level 1-4)
  result: string;     // 어떤 성과를 냈는가 (Level 2: 수치 포함)
  logic?: string;     // 왜 이 방식을 선택했는가 (Level 4: 트레이드오프)
  images?: string[];  // 포트폴리오용 이미지 상세
}

export interface ExperienceProject {
  title: string;      // 프로젝트명
  period?: string;    // 기간
  description: string; // 프로젝트 한 줄 요약
  tasks: ProblemSolving[]; // 상세 문제 해결 사례들
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  images?: string[];
  challenges: ProblemSolving[]; // 일반 프로젝트도 동일한 구조 적용
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
