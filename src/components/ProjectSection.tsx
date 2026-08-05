import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types/portfolio";

// 한 행에 4개. 좁아지면 2개, 더 좁아지면 1개.
// items-stretch가 기본이라 같은 행의 카드는 높이가 맞춰지고,
// 카드 안의 소속 표기가 mt-auto로 바닥에 붙어 행마다 한 줄로 정렬된다.
export function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <Section label="프로젝트" bare>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
