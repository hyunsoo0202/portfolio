import type { ProjectSummary } from "@/types/portfolio";

// ProjectDetailContent의 경량판. 구조도·의사결정·회고 없이
// 경력기술서 원문(소제목+세부 불릿)을 그대로 보여준다. 별도 라우트는 없고 모달에서만 쓰인다.
export function ProjectSummaryContent({ summary }: { summary: ProjectSummary }) {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl leading-loose text-muted">{summary.overview}</p>
      <div className="space-y-6">
        {summary.groups.map((group) => (
          <div key={group.heading}>
            <h3 className="font-medium">{group.heading}</h3>
            <ul className="mt-2 list-disc space-y-1.5 max-w-3xl pl-4 text-sm leading-relaxed text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
