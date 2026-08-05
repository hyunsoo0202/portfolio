// 시트(섹션) 목록. 페이지 본문과 우측 목차가 같은 배열을 공유한다 —
// 둘이 따로 관리되면 순서나 이름이 어긋나도 아무도 모른다.
//
// 한 장에 두 항목이 들어가는 시트가 있다(경력+기술 스택, 활동+교육).
// 목차 라벨은 시트 단위로 하나만 둔다 — 목차가 시트보다 잘게 쪼개지면
// 클릭했을 때 도착하는 곳이 항목이 아니라 시트라서 어긋난다.
export const SECTIONS = [
  { id: "top", label: "소개" },
  { id: "career", label: "경력 · 기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "workflow", label: "AI 워크플로우" },
  { id: "extra", label: "활동 · 교육" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
