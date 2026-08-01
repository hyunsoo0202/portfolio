import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import type { MediaItem, ProblemSolving } from "@/types/portfolio";
import {
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  ChevronRight,
  FolderGit2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const GitHubIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Problem-Solution-Result-Why 본문. 회사 경력과 사이드 프로젝트가 같은 틀을 쓰되,
// 제목의 heading 레벨은 문맥마다 달라야 하므로 호출부에 남겨둔다.
const ProblemSolvingBody = ({ task }: { task: ProblemSolving }) => (
  <div className="space-y-8">
    <div className="space-y-2">
      <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Problem</span>
      <p className="text-lg text-neutral-700 leading-relaxed">{task.problem}</p>
    </div>
    <div className="space-y-2">
      <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Solution</span>
      <p className="text-lg text-neutral-700 leading-relaxed">{task.solution}</p>
    </div>
    <div className="space-y-2">
      <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Result</span>
      <p className="text-lg text-neutral-700 leading-relaxed font-medium">{task.result}</p>
    </div>
    {task.logic && (
      <div className="space-y-2 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
        <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Why?</span>
        <p className="text-base text-neutral-500 italic leading-relaxed">{task.logic}</p>
      </div>
    )}
  </div>
);

// 화면 증거용 미디어.
// video는 GIF 대체 용도라 muted + playsInline 이 있어야 모바일에서 자동재생되고,
// preload="none" + poster 로 스크롤이 닿기 전까지는 실제 파일을 받지 않는다.
const ProjectMedia = ({ item }: { item: MediaItem }) => (
  <figure className="space-y-3">
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
      {item.type === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          width={item.width}
          height={item.height}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-auto"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.caption ?? ""}
          width={item.width}
          height={item.height}
          loading="lazy"
          className="w-full h-auto"
        />
      )}
    </div>
    {item.caption && (
      <figcaption className="text-sm text-neutral-400">{item.caption}</figcaption>
    )}
  </figure>
);

export default function Home() {
  const { about, skills, projects, workflow, experiences, education, contact } =
    portfolioData;

  return (
    <main className="mx-auto max-w-6xl px-8 py-20 sm:py-32 space-y-24">
      {/* Hero Section (Full Width) */}
      <section className="space-y-8 pb-16 border-b border-neutral-100">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900">
          {about.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-neutral-500 font-medium">{about.role}</p>
        <div className="max-w-4xl space-y-8 text-neutral-600 leading-relaxed text-lg sm:text-xl">
          <p className="text-neutral-900 font-semibold text-2xl sm:text-3xl leading-tight">{about.intro}</p>
          <p>{about.description}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Sidebar (Skills, Education, Contact) */}
        <aside className="lg:col-span-4 space-y-20">
          {/* Skills */}
          <section className="space-y-10">
            <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold">
              <Code2 size={18} /> Tech Stack
            </div>
            <div className="space-y-10">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-5">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-10">
            <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold">
              <GraduationCap size={18} /> Education
            </div>
            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-800">{edu.school}</h3>
                  <p className="text-base text-neutral-500">{edu.major}</p>
                  <p className="text-xs text-neutral-400 uppercase font-bold tracking-widest">
                    {edu.period} · {edu.status}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-10">
            <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold">
              <Mail size={18} /> Contact
            </div>
            <div className="flex flex-col gap-5">
              <a href={`mailto:${contact.email}`} className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-3">
                <Mail size={20} className="text-neutral-400" /> {contact.email}
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-3">
                <GitHubIcon size={20} className="text-neutral-400" /> GitHub Profile
              </a>
            </div>
          </section>
        </aside>

        {/* Right Column: Experience (Main Content) */}
        <div className="lg:col-span-8 space-y-24">
          <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold mb-10">
            <Briefcase size={18} /> Work Experience
          </div>

          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="space-y-12">
              {/* Company Header */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4">
                  <h3 className="text-4xl font-black text-neutral-900 leading-tight whitespace-pre-line">{exp.company}</h3>
                  <span className="text-sm font-mono text-neutral-400 font-bold tracking-tighter">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xl text-neutral-500 font-semibold">{exp.role}</p>
              </div>

              {/* Projects */}
              <div className="space-y-24">
                {exp.projects.map((project, projIdx) => (
                  <div key={projIdx} className="space-y-10">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-neutral-800 flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-neutral-300" />
                        {project.title}
                      </h4>
                      <p className="text-lg text-neutral-500 leading-relaxed pl-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Tasks (Vertical Flow) */}
                    <div className="space-y-16 pl-6 border-l-2 border-neutral-100">
                      {project.tasks.map((task, taskIdx) => (
                        <div key={taskIdx} className="space-y-8">
                          <h5 className="text-xl font-bold text-neutral-800 flex items-start gap-3">
                            <ChevronRight size={24} className="text-neutral-300 mt-1 shrink-0" />
                            {task.title}
                          </h5>
                          
                          <div className="pl-9">
                            <ProblemSolvingBody task={task} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Side Projects */}
          {projects.length > 0 && (
            <section className="space-y-16 pt-16 border-t border-neutral-100">
              <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold">
                <FolderGit2 size={18} /> Side Projects
              </div>

              {projects.map((project, idx) => (
                <div key={idx} className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-baseline gap-3">
                      <h3 className="text-2xl font-bold text-neutral-800 flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-neutral-300" />
                        {project.title}
                      </h3>
                      <span className="text-sm font-mono text-neutral-400 font-bold tracking-tighter">
                        {project.period}
                        {project.status && ` · ${project.status}`}
                      </span>
                    </div>
                    <div className="pl-6 space-y-4">
                      {project.role && (
                        <p className="text-base text-neutral-400">{project.role}</p>
                      )}
                      <p className="text-lg text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(project.github || project.link) && (
                        <div className="flex flex-wrap gap-5 pt-1">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                            >
                              <GitHubIcon size={16} className="text-neutral-400" />
                              Source
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                            >
                              <ExternalLink size={16} className="text-neutral-400" />
                              Live
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {project.media && project.media.length > 0 && (
                    <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {project.media.map((item, mediaIdx) => (
                        <ProjectMedia key={mediaIdx} item={item} />
                      ))}
                    </div>
                  )}

                  {project.challenges.length > 0 && (
                    <div className="space-y-16 pl-6 border-l-2 border-neutral-100">
                      {project.challenges.map((task, taskIdx) => (
                        <div key={taskIdx} className="space-y-8">
                          <h4 className="text-xl font-bold text-neutral-800 flex items-start gap-3">
                            <ChevronRight size={24} className="text-neutral-300 mt-1 shrink-0" />
                            {task.title}
                          </h4>
                          <div className="pl-9">
                            <ProblemSolvingBody task={task} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* AI Workflow */}
          {workflow.items.length > 0 && (
            <section className="space-y-12 pt-16 border-t border-neutral-100">
              <div className="flex items-center gap-3 text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold">
                <Sparkles size={18} /> AI Workflow
              </div>

              <p className="text-lg text-neutral-600 leading-relaxed">
                {workflow.summary}
              </p>

              <div className="space-y-10 pl-6 border-l-2 border-neutral-100">
                {workflow.items.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-neutral-800 flex items-start gap-3">
                      <ChevronRight size={22} className="text-neutral-300 mt-0.5 shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-base text-neutral-500 leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-32 pb-16 border-t border-neutral-100 flex justify-between items-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
          &copy; {new Date().getFullYear()} {about.name}.
        </p>
        <div className="flex gap-6">
          <a href={contact.github} className="text-neutral-300 hover:text-neutral-900 transition-colors">
            <GitHubIcon size={24} />
          </a>
          <a href={`mailto:${contact.email}`} className="text-neutral-300 hover:text-neutral-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </main>
  );
}
