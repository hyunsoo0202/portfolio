import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";
import { hasProjectDetail } from "@/lib/project-detail";

// 심층 4개만 detail을 갖는다. 나머지는 상세 페이지 자체가 없다 —
// 카드에서 링크를 안 거는 것과 이 route가 404를 내는 것, 두 겹으로 막는다.
export function generateStaticParams() {
  return projects.filter((project) => project.detail).map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug && project.detail);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | 김현수 포트폴리오`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project || !hasProjectDetail(project)) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden />
        전체 프로젝트로
      </Link>

      <header className="mt-8">
        <p className="font-mono text-sm text-muted">
          {project.affiliation} · {project.period}
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h1>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-band px-2 py-1 font-mono text-[11px] leading-none text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-16">
        <ProjectDetailContent project={project} />
      </div>
    </main>
  );
}
