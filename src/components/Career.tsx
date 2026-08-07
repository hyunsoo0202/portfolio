import { Section } from "./Section";
import type { CareerEntry } from "@/types/portfolio";

// 좌측에 기간, 우측에 소속 — 장부의 날짜/적요 배치.
//
// 연차(years)는 제목 옆 괄호로만 붙인다. 첫 장에 한 줄로 따로 떠 있을 때는
// 무엇에 대한 숫자인지 문맥이 없었는데, "경력" 바로 옆이면 라벨이 곧 설명이 된다.
export function Career({ careers, years }: { careers: CareerEntry[]; years?: string }) {
  if (careers.length === 0) return null;

  return (
    <Section
      label={
        <>
          경력
          {years && (
            <span className="ml-2 text-sm font-normal text-muted sm:text-base">({years})</span>
          )}
        </>
      }
    >
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
