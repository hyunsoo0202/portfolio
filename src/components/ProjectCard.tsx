import type { Project } from "@/types/portfolio";

// 카드는 제목 · 설명 · 사용 기술 · 소속 네 가지만 싣는다.
// 테두리를 두르지 않는다 — 흰 카드가 회색 바탕 위에 떠 있는 것만으로 경계가 생긴다.
// 소속은 mt-auto로 바닥에 고정해, 설명 길이가 달라도 카드마다 같은 줄에 정렬된다.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="lift flex h-full flex-col rounded-lg bg-surface p-5">
      <h3 className="text-base font-bold leading-snug tracking-tight">{project.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-band px-2 py-1 font-mono text-[11px] leading-none text-ink"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5 font-mono text-[11px] text-ink">{project.affiliation}</div>
    </article>
  );
}
