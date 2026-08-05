// src/types/portfolio.ts
//
// 축이 '회사 경력'에서 '프로젝트'로 바뀌었다.
// 소속(회사명 / 팀명 / 사이드 프로젝트)은 프로젝트의 메타데이터로 내려간다.
//
// 프로젝트 상세(모달) 구조는 아직 확정되지 않아 여기 없다.
// 확정되면 Project에 `detail?: ProjectDetail` 하나만 추가하면 되고,
// 옵셔널이라 기존 데이터는 손대지 않아도 된다.

/**
 * 화면 증거용 미디어.
 * width/height가 선택이 아니라 필수인 이유는, 로드 전에 자리를 잡아두지 않으면
 * 뒤늦게 밀려나며 CLS가 발생하기 때문이다.
 */
export interface MediaItem {
  type: "image" | "video";
  src: string; // public/ 기준 절대 경로
  poster?: string; // video 전용. 재생 전 정지 이미지
  caption?: string;
  width: number;
  height: number;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** 카드 하단 표기. 회사면 회사명, 팀이 있으면 팀명, 개인이면 "사이드 프로젝트" */
  affiliation: string;
  period: string;
  status?: string; // "진행 중" 등. 없으면 표기하지 않는다
  /** 카드 본문. 이력서의 프로젝트 한 줄 정의 */
  description: string;
  tags: string[];
  links?: ProjectLinks;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface WorkflowItem {
  title: string;
  description: string;
}

export interface CareerEntry {
  organization: string;
  team?: string;
  period: string;
  summary: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface Activity {
  title: string;
  organization?: string;
  period: string;
  points?: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  acquiredAt: string;
}

export interface Contact {
  email: string;
  github: string;
  blog?: string; // 빈 문자열이면 렌더하지 않는다
  site?: string;
}

export interface Profile {
  name: string;
  role: string;
  /** 히어로 인사말용 한글 직함. 없으면 role을 그대로 쓴다 */
  roleKo?: string;
  career: string; // "5년차" 같은 한 줄
  contact: Contact;
}

export interface PortfolioData {
  profile: Profile;
  intro: {
    headline: string;
    body: string;
  };
  careers: CareerEntry[];
  skills: SkillCategory[];
  workflow: {
    summary: string;
    items: WorkflowItem[];
  };
  activities: Activity[];
  certificates: Certificate[];
  education: Education[];
}
