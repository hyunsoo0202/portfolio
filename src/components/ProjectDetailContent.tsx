import type { Project, ProjectDetail } from "@/types/portfolio";
import { getDiagramComponent, DiagramPlaceholder } from "@/components/diagrams/registry";

// 상세 페이지(/projects/[slug])와 모달(ProjectDetailModal)이 이 마크업을 공유한다.
// 직접 URL 접근 · 검색엔진 색인은 여전히 실제 라우트가 담당하고,
// 카드 클릭으로 들어오는 앱 내 탐색은 모달이 담당한다 — 둘 다 이 콘텐츠를 그대로 쓴다.
export function ProjectDetailContent({ project }: { project: Project & { detail: ProjectDetail } }) {
  const { detail } = project;

  return (
    <div className="space-y-16">
      <DetailSection label="개요">
        <p className="max-w-3xl leading-loose text-muted">{detail.overview}</p>
      </DetailSection>

      <DetailSection label="역할과 범위">
        <dl className="space-y-6">
          <Row term="팀 구성">{detail.role.team}</Row>
          <Row term="내가 맡은 것">
            <BulletList items={detail.role.responsibilities} />
          </Row>
          {detail.role.outOfScope && detail.role.outOfScope.length > 0 && (
            <Row term="안 맡은 것">
              <BulletList items={detail.role.outOfScope} />
            </Row>
          )}
        </dl>
      </DetailSection>

      {detail.diagrams.length > 0 && (
        <DetailSection label="구조도">
          <div className="space-y-10">
            {detail.diagrams.map((diagram) => {
              const Diagram = getDiagramComponent(diagram.id);
              return (
                <figure key={diagram.id}>
                  <figcaption className="mb-3 font-medium">{diagram.title}</figcaption>
                  {Diagram ? <Diagram /> : <DiagramPlaceholder title={diagram.title} />}
                  {diagram.caption && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{diagram.caption}</p>
                  )}
                </figure>
              );
            })}
          </div>
        </DetailSection>
      )}

      <DetailSection label="문제와 접근">
        <p className="max-w-3xl leading-loose text-muted">{detail.problem}</p>
      </DetailSection>

      <DetailSection label="왜 이 방법이었나">
        <dl className="space-y-8">
          {detail.decisions.map((qa) => (
            <div key={qa.question}>
              <dt className="font-medium">{qa.question}</dt>
              <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{qa.answer}</dd>
            </div>
          ))}
        </dl>
      </DetailSection>

      <DetailSection label="결과">
        <p className="max-w-3xl leading-loose text-muted">{detail.outcome}</p>
      </DetailSection>

      <DetailSection label="아쉬운 점 / 지금이라면">
        <p className="max-w-3xl leading-loose text-muted">{detail.retrospective}</p>
      </DetailSection>
    </div>
  );
}

function DetailSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-6 text-lg font-bold tracking-tight sm:text-xl">{label}</h2>
      {children}
    </section>
  );
}

function Row({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
      <dt className="font-mono text-sm text-muted">{term}</dt>
      <dd className="text-sm leading-relaxed">{children}</dd>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-4">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
