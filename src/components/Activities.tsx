import { Section } from "./Section";
import type { Activity, Certificate } from "@/types/portfolio";

// 대외활동과 자격증은 성격이 다르지만 둘 다 '언제 무엇을' 형태라
// 같은 괘선 위에 올린다. 어느 한쪽이 비면 그쪽 목록만 사라진다.
export function Activities({
  activities,
  certificates,
}: {
  activities: Activity[];
  certificates: Certificate[];
}) {
  if (activities.length === 0 && certificates.length === 0) return null;

  return (
    <Section label="대외활동 · 자격증">
      <dl className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="grid gap-2 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted tabular-nums">{activity.period}</dt>
            <dd className="min-w-0">
              <p className="font-medium">
                {activity.title}
                {activity.organization && (
                  <span className="ml-2 text-sm font-normal text-muted">
                    {activity.organization}
                  </span>
                )}
              </p>
              {activity.points && (
                <ul className="mt-2 space-y-1.5">
                  {activity.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}

        {certificates.map((certificate) => (
          <div
            key={certificate.name}
            className="grid gap-2 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted tabular-nums">
              {certificate.acquiredAt}
            </dt>
            <dd>
              <p className="font-medium">
                {certificate.name}
                <span className="ml-2 text-sm font-normal text-muted">
                  {certificate.issuer}
                </span>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
