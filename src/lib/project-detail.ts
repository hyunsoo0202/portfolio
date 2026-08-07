import type { Project, ProjectDetail, ProjectSummary } from "@/types/portfolio";

// project.detail?를 그냥 프로퍼티로 좁히면(narrowing) 그 자리에서의 접근만 좁혀질 뿐,
// project 객체 전체를 detail이 확정된 타입으로 넘기지는 못한다.
// 타입 프레디킷으로 만들어야 project 변수 자체의 타입이 바뀐다.
export function hasProjectDetail(
  project: Project,
): project is Project & { detail: ProjectDetail } {
  return project.detail !== undefined;
}

export function hasProjectSummary(
  project: Project,
): project is Project & { summary: ProjectSummary } {
  return project.summary !== undefined;
}
