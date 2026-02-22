// src/data/portfolio.ts
import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  about: {
    name: "김현수",
    role: "Frontend Developer",
    intro:
      "화면 너머의 데이터 흐름까지 설계하며, 기술의 경계를 허물어가는 4년 차 개발자입니다.",
    description:
      "4년 간의 프론트엔드 실무 경험을 통해 탄탄한 사용자 인터페이스를 구축해 왔습니다. 현재는 단순히 보이는 화면을 넘어, 서버와 데이터베이스의 유기적인 연결을 깊이 이해하기 위해 NestJS와 PostgreSQL을 활용한 실제 프로젝트를 진행하고 있습니다. 방송통신대학교에서 CS 지식을 체계적으로 다지며, 문제 해결을 위해 최적의 기술 스택을 고민하고 적용하는 엔지니어로 성장하고 있습니다.",
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Flutter",
        "Tailwind CSS",
        "Styled-components",
      ],
    },
    {
      category: "Backend & DB",
      skills: ["NestJS", "Prisma", "MySQL", "PostgreSQL"],
    },
  ],
  projects: [
    {
      title: "Clepsydra (클렙시드라)",
      period: "2024.01 - Present",
      description: "효율적인 시간 관리를 위한 타이머 앱",
      tags: ["Flutter", "NestJS", "PostgreSQL", "Prisma"],
      github: "https://github.com/hyunsoo0202/clepsydra",
      achievements: [
        "Flutter를 이용한 크로스 플랫폼 UI 구축",
        "NestJS 기반의 확장 가능한 백엔드 아키텍처 설계",
        "타이머 데이터 동기화 로직 구현",
      ],
    },
  ],
  experiences: [
    {
      company: "(주) 피피비 스튜디오스 (PPB Studios)",
      role: "Frontend / Full Stack Developer",
      period: "2024.06 - 2025.10",
      description: [
        "자체 서비스 프론트엔드 개발 및 운영 담당",
        "매장 점주 전용 백오피스 시스템 프론트엔드/백엔드 전담 개발 (Full Stack)",
        "일본 오프라인 매장 디지털 전환(DX) 프로젝트: 기존 수기 방식의 고객 구매 이력 관리를 바코드 스캔 기반 전산 시스템으로 구축하여 운영 효율성 혁신",
      ],
    },
    {
      company: "(주) 아이알엠",
      role: "프론트엔드 개발자",
      period: "2021.12 - 2024.05",
      description: [
        "의료 데이터 조회 및 관리 서비스 개발과 유지 보수, React와 NodeJS를 사용한 대용량 이미지 업로드 기능 구현",
        "코딩 컨벤션 정립 및 프로젝트 구조 설정, Git Flow 기반 맞춤형 전략 도입으로 팀의 협업 효율성 강화",
        "자체 서비스의 프론트엔드 개발 담당, JQuery 및 JavaScript 기반 제품을 NextJS로 마이그레이션을 통해 사용자 경험 개선 및 유지 보수 시간 감소",
      ],
    },
    {
      company: "(주) 프롭웨이브",
      role: "프론트엔드 개발자",
      period: "2021.04 - 2021.11",
      description: [
        "Terrak와 협업하여 진행한 프로젝트 (MVP 개발)",
        "미국 부동산 중개 서비스의 전반적인 프론트엔드 개발과 관리, 로그인/회원가입 기능, 매물 리스트, 구글 지도 API 통합 및 서비스 배포 담당.",
      ],
    },
  ],
  education: [
    {
      school: "한국방송통신대학교",
      major: "컴퓨터과학과 (편입)",
      period: "2026.03 - Present",
      status: "재학 중",
    },
    {
      school: "코드스테이츠",
      major: "풀스택 과정",
      period: "2020.10 - 2021.03",
      status: "수료",
    },
    {
      school: "그린 컴퓨터 아카데미",
      major: "자바 백엔드 개발자 과정",
      period: "2020.01 - 2020.06",
      status: "수료",
    },
    {
      school: "한국해양대학교",
      major: "경제학과",
      period: "2011.03 - 2020.02",
      status: "졸업",
    },
  ],
  contact: {
    email: "jing07161@google.com",
    github: "https://github.com/hyunsoo0202",
    blog: "",
  },
};
