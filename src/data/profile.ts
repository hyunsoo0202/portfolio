// src/data/profile.ts
//
// 출처: docs/김현수_이력서.md
// 프로젝트를 제외한 나머지 — 프로필 / 소개 / 경력 / 스택 / 워크플로우 / 대외활동 / 자격증 / 교육
//
// AI 워크플로우는 이력서에 없는 항목이다. 기존 사이트에 있던 내용을 유지한다.

import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  profile: {
    name: "김현수",
    role: "Frontend Developer",
    roleKo: "프론트엔드 개발자",
    career: "5년차",
    contact: {
      email: "jing07161@gmail.com",
      github: "https://github.com/hyunsoo0202",
      blog: "https://velog.io/@jing07161/posts",
      site: "https://www.sooman.dev/",
    },
  },

  intro: {
    headline: "운영되던 시스템을 넘겨받아 다시 세우고, 흩어진 업무를 하나로 합쳐온 개발자",
    body: "외주로 운영되던 백오피스를 인계받아 재구축하고, 두 시스템으로 나뉘어 있던 점주 업무를 하나로 통합했습니다. 요청받은 기능을 그대로 만들기보다 실제 사용 현장을 확인하고 흐름 자체를 다시 설계하는 방식으로 일합니다. 최근에는 프론트엔드에서 시작해 API·DB·인프라까지 서비스 전체를 직접 구성하는 범위로 확장하고 있습니다.",
  },

  careers: [
    {
      organization: "(주) PPB STUDIOS",
      team: "플랫폼팀",
      period: "2024.06 - 2025.10",
      summary:
        "일본 신규 서비스 단독 구축(프론트·백엔드·인프라), 점주 백오피스 외주 인계 후 React 재구축, 자체 쇼핑몰 운영 및 백오피스 Vue3 마이그레이션.",
    },
    {
      organization: "(주) 아이알엠",
      team: "데이터 플랫폼팀",
      period: "2021.12 - 2024.05",
      summary:
        "클라우드 의료영상 플랫폼 웹 프론트엔드. jQuery·React 두 제품 유지보수, 의료 데이터 등록 기능(Capture, Import DICOM) 단독 개발, 이후 두 서비스를 단일 Next.js 서비스로 통합.",
    },
    {
      organization: "(주) 프롭웨이브",
      team: "프론트팀",
      period: "2021.04 - 2021.11",
      summary:
        "미국 부동산 중개 서비스 MVP 프론트엔드. Google Maps API 기반 매물 지도 시각화, 로그인·회원가입 등 초기 핵심 기능 구현.",
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Vue3",
        "TypeScript",
        "Zustand",
        "Pinia",
        "TanStack Query",
        "Tailwind",
      ],
    },
    {
      category: "Backend",
      skills: ["Express", "NestJS", "Prisma", "PostgreSQL"],
    },
    {
      category: "Infra",
      skills: ["Docker", "GitHub Actions", "AWS (ALB, EC2, ECR, RDS, S3)"],
    },
  ],

  workflow: {
    summary:
      "AI 페어 프로그래밍 기반으로 팀 프로젝트를 수행하며, 코드를 '작성하는' 시간이 '검증하는' 시간으로 이동하는 변화를 겪었습니다. 도구를 도입하는 데서 그치지 않고, 그 변화에 맞춰 팀의 문서 체계와 코드 구조 기준을 다시 설계했습니다.",
    items: [
      {
        title: "정보의 수명에 따른 문서 분리",
        description:
          "AI와 협업할 때 발생하는 컨텍스트 유실과 토큰 비용 문제를 해결하기 위해 문서를 성격별로 나눴습니다. 진행 상황만 담는 문서를 따로 두어, 세션을 새로 시작해도 그 문서 하나만 읽으면 이어서 작업할 수 있도록 했습니다. 완료된 기록은 주기적으로 삭제해 낡은 정보가 다음 판단을 흐리지 않게 유지합니다. 반대로 문제 해결 과정의 판단과 결정처럼 수명이 긴 정보는 아키텍처 문서로 분리해 보관합니다.",
      },
      {
        title: "문서를 저장소 안에 두기",
        description:
          "문서를 코드와 같은 저장소에 포함시켜 팀원이 동일한 컨텍스트를 공유하도록 하고, 문서의 변경 이력이 코드 변경과 함께 남도록 구성했습니다.",
      },
      {
        title: "AI 협업을 고려한 파일 분리 기준",
        description:
          "AI와 함께 개발할 때 한 파일이 비대해지는 경향을 인지하고 분리 기준을 다시 검토했습니다. 수정 범위가 국소적으로 유지되면 읽어들이는 컨텍스트가 줄어 비용이 절감될 뿐 아니라, 모델이 추적해야 할 범위가 좁아져 수정 정확도도 함께 올라간다는 점을 고려했습니다.",
      },
      {
        title: "역할별 서브에이전트 작업 환경 설계",
        description:
          "설계·리뷰 등 역할별 서브에이전트를 정의하고, 매번 명시적으로 지정하지 않아도 작업 성격에 따라 자동으로 위임되도록 트리거 조건을 설계했습니다.",
      },
    ],
  },

  activities: [
    {
      title: "개발 동아리 Growth-Log",
      period: "2026.03 - 진행 중",
      points: [
        "한국방송통신대학교 컴퓨터과학과 소속 개발 동아리, 2주 간격 정기 모임 참여",
        "방학 중 동아리 팀으로 2026 한마당대회 및 총장배 소프트웨어경진대회 참가 (팀 Reverse)",
      ],
    },
  ],

  certificates: [
    {
      name: "SQLD",
      issuer: "한국데이터산업진흥원",
      acquiredAt: "2026.03",
    },
  ],

  education: [
    {
      school: "방송통신대학교",
      major: "컴퓨터과학과 (3학년 편입)",
      period: "2026.03 - 현재",
    },
    {
      school: "코드스테이츠",
      major: "자바스크립트 기반 풀스택 교육",
      period: "2020.10 - 2021.03",
    },
    {
      school: "그린 컴퓨터 아카데미",
      major: "자바 백엔드 개발자 과정",
      period: "2020.01 - 2020.06",
    },
    {
      school: "한국해양대학교",
      major: "경제학과 (학사)",
      period: "2011.03 - 2020.02",
    },
  ],
};
