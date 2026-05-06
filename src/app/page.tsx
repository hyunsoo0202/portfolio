import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  ChevronRight,
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

export default function Home() {
  const { about, skills, experiences, education, contact } = portfolioData;

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
                          
                          <div className="space-y-8 pl-9">
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
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
