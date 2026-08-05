import { Section } from "./Section";
import type { PortfolioData } from "@/types/portfolio";

export function Workflow({ workflow }: { workflow: PortfolioData["workflow"] }) {
  if (workflow.items.length === 0) return null;

  return (
    <Section label="AI 워크플로우">
      <p className="max-w-3xl leading-loose text-muted">{workflow.summary}</p>

      <dl className="mt-10 space-y-6">
        {workflow.items.map((item) => (
          <div
            key={item.title}
            className="grid gap-2 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-8"
          >
            <dt className="font-medium">{item.title}</dt>
            <dd className="text-sm leading-relaxed text-muted">{item.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
