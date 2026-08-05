import { Section } from "./Section";
import type { SkillCategory } from "@/types/portfolio";

// 기술 스택이 곧 층 스택이다. 카테고리 순서가 깊이 순서이고,
// 깊어질수록 막대가 어두워진다. 페이지에서 층 어휘가 드러나는 유일한 자리라
// 여기서만 명도 대비를 쓴다.
const DEPTH = ["bg-depth-1", "bg-depth-2", "bg-depth-3"];

export function TechStack({ skills }: { skills: SkillCategory[] }) {
  return (
    <Section label="기술 스택">
      <ul className="divide-y divide-rule">
        {skills.map((group, i) => (
          <li
            key={group.category}
            className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
          >
            {/* 막대를 flex 아이템이 아니라 텍스트 흐름 안의 inline-block으로 둔다.
                flex 컨테이너의 베이스라인은 첫 아이템에서 잡히는데, 글자 없는
                막대가 첫 아이템이면 오른쪽 열과 줄이 어긋난다. */}
            <p className="font-mono text-[11px] lowercase">
              <span
                aria-hidden
                className={`mr-2 inline-block h-1.5 w-10 align-middle ${DEPTH[i] ?? "bg-band"}`}
              />
              {group.category.toLowerCase()}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
