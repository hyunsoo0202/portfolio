import { Section } from "./Section";
import type { Education as EducationType } from "@/types/portfolio";

export function Education({ education }: { education: EducationType[] }) {
  if (education.length === 0) return null;

  return (
    <Section label="교육">
      <dl className="space-y-4">
        {education.map((item) => (
          <div
            key={item.school}
            className="grid gap-1 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted tabular-nums">{item.period}</dt>
            <dd className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-medium">{item.school}</span>
              <span className="text-sm text-muted">{item.major}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
