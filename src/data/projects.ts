// src/data/projects.ts
//
// 출처: docs/김현수_이력서.md
// description은 이력서의 프로젝트 한 줄 정의를 그대로 쓴다.
// 배열 순서가 곧 캐러셀 노출 순서다. 최신순이 아니라 비중순으로 둔다.
//
// 상세(모달) 내용은 아직 구조가 확정되지 않아 여기 없다.
// 확정되면 각 항목에 detail 필드를 붙인다.

import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "japan-crm",
    title: "일본 매장 방문 고객 관리 서비스",
    affiliation: "(주) PPB STUDIOS",
    period: "2025.05 - 2025.09",
    description:
      "수기로 관리되고 있던 방문 고객과 구매 이력을 디지털 데이터로 전환 및 관리하는 서비스",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    slug: "backoffice",
    title: "점주 전용 백오피스 시스템",
    affiliation: "(주) PPB STUDIOS",
    period: "2025.02 - 2025.09",
    description:
      "점주가 방문 고객의 검안·구매 이력과 멤버십 포인트, 발주 및 픽업 주문까지 한 곳에서 관리할 수 있는 매장 운영 백오피스",
    tags: ["React", "TypeScript", "Tailwind", "Zustand", "AWS"],
  },
  {
    slug: "dicom",
    title: "DICOM 파일 일괄 Import",
    affiliation: "(주) 아이알엠",
    period: "2022.10 - 2023.05",
    description: "CD·로컬 폴더의 DICOM 파일을 환자에게 일괄 등록하는 공용 모듈",
    tags: ["React", "TypeScript", "Express"],
  },
  {
    slug: "bible",
    title: "성경 필사 기록 및 습관 관리 서비스",
    affiliation: "Reverse 팀",
    period: "2026.06 - 현재",
    status: "진행 중",
    description:
      "필사 기록을 이미지로 남기고 연속 기록으로 습관을 유지하도록 돕는 서비스",
    tags: ["React", "TypeScript", "NestJS", "Supabase"],
  },
  {
    slug: "pacs",
    title: "클라우드 PACS 운영 및 Next.js 전환",
    affiliation: "(주) 아이알엠",
    period: "2021.12 - 2024.05",
    description: "클라우드 기반 의료영상 플랫폼의 환자·검사 데이터 관리 웹 서비스",
    tags: [
      "JavaScript",
      "jQuery",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "ag-Grid",
    ],
  },
  {
    slug: "capture",
    title: "의료 데이터 모바일 촬영·업로드 (Capture)",
    affiliation: "(주) 아이알엠",
    period: "2022.05 - 2022.10",
    description:
      "데스크톱에서 지정한 환자·검사 컨텍스트를 QR로 넘겨 스마트폰에서 바로 촬영·업로드하는 서비스",
    tags: ["JavaScript", "jQuery"],
  },
  {
    slug: "shop",
    title: "자체 쇼핑몰 서비스 운영 및 유지보수",
    affiliation: "(주) PPB STUDIOS",
    period: "2024.06 - 2025.02",
    description:
      "사용자들이 상품을 보고 픽업 혹은 바로드림 주문을 할 수 있는 쇼핑몰 서비스",
    tags: ["Vue", "TypeScript"],
  },
  {
    slug: "shop-admin",
    title: "쇼핑몰 백오피스 마이그레이션",
    affiliation: "(주) PPB STUDIOS",
    period: "2024.09 - 2025.02",
    description: "본사 관리팀에서 사용하던 백오피스",
    tags: ["Vue3", "Nuxt", "Pinia"],
  },
  {
    slug: "habit",
    title: "주간 습관 관리 모바일 앱",
    affiliation: "사이드 프로젝트",
    period: "2026.07 - 현재",
    status: "진행 중",
    description: "요일별로 반복할 습관을 등록하고 일일 퀘스트 형태로 수행하는 앱",
    tags: ["React Native (Expo)", "TypeScript"],
  },
];
