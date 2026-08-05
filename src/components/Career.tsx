import { Section } from "./Section";
import type { CareerEntry } from "@/types/portfolio";

// 좌측에 기간, 우측에 소속 — 장부의 날짜/적요 배치.
export function Career({ careers }: { careers: CareerEntry[] }) {
  if (careers.length === 0) return null;

  return (
    <Section label="경력">
      <dl className="space-y-7">
        {careers.map((career) => (
          <div
            key={career.organization}
            className="grid gap-1 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted tabular-nums">{career.period}</dt>
            <dd className="min-w-0">
              <p className="font-medium">
                {career.organization}
                {career.team && (
                  <span className="ml-2 text-sm font-normal text-muted">{career.team}</span>
                )}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{career.summary}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
