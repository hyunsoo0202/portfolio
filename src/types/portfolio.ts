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

// 화면 증거용 미디어. width/height는 선택이 아니라 필수 —
// 로드 전에 자리를 잡아두지 않으면 뒤늦게 밀려나며 CLS가 발생한다.
export interface MediaItem {
  type: "image" | "video";
  src: string;        // public/ 기준 절대 경로 (예: "/media/pilsa-upload.mp4")
  poster?: string;    // video 전용. 재생 전 보여줄 정지 이미지
  caption?: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  status?: string;    // "진행 중", "스토어 배포 준비 중" 등
  role?: string;
  link?: string;      // 배포된 서비스
  github?: string;
  media?: MediaItem[];
  challenges: ProblemSolving[]; // 일반 프로젝트도 동일한 구조 적용
}

// 회사 경력도 사이드 프로젝트도 아닌, '일하는 방식'을 담는 영역
export interface WorkflowItem {
  title: string;
  description: string;
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
  workflow: {
    summary: string;
    items: WorkflowItem[];
  };
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
