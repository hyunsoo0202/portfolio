import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  User,
  Globe,
} from "lucide-react";

const GitHubIcon = ({
  size = 18,
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
  const { about, skills, experiences, projects, education, contact } =
    portfolioData;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24 space-y-12 text-slate-200">
      {/* Hero / About Section */}
      <section className="glass-card rounded-3xl p-8 sm:p-12 mb-8 border-indigo-500/10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase border border-indigo-500/20">
              <User size={14} /> About Me
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              {about.name}
              <span className="block text-xl sm:text-2xl mt-4 font-medium text-slate-400 leading-normal">
                {about.role}
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-slate-300">
              {about.intro}
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl text-base sm:text-lg">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Skills & Info */}
        <aside className="md:col-span-4 space-y-12">
          {/* Skills Section */}
          <section className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-8 text-indigo-400 font-bold tracking-tight">
              <Code2 size={20} />
              <span className="text-sm uppercase tracking-widest">Skills</span>
            </div>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="mb-4 text-[14px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-[13px] font-bold text-slate-300 border border-white/5 shadow-sm transition-all hover:border-indigo-500/30 hover:bg-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-8 text-indigo-400">
              <GraduationCap size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Education
              </span>
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-4 border-l-2 border-indigo-500/20"
                >
                  <h3 className="text font-bold text-white leading-tight">
                    {edu.school}
                  </h3>
                  <p className="text-sm mt-1 text-slate-400">{edu.major}</p>
                  <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-indigo-400/70">
                    <span className="text-xstabular-nums">{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="text-xs ">{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-8 text-indigo-400">
              <Mail size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Connect
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-indigo-500/10 transition-colors group border border-transparent hover:border-indigo-500/20"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-semibold truncate text-slate-300">
                  {contact.email}
                </span>
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10"
              >
                <div className="p-2 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <GitHubIcon size={20} />
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  GitHub Profile
                </span>
              </a>
              {contact.blog && (
                <a
                  href={contact.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-emerald-500/10 transition-colors group border border-transparent hover:border-emerald-500/20"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">
                    Read Blog
                  </span>
                </a>
              )}
            </div>
          </section>
        </aside>

        {/* Right Column: Projects & Experience */}
        <div className="md:col-span-8 space-y-12">
          {/* Projects Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 mb-2 px-6 text-indigo-400">
              <Globe size={20} />
              <span className="text-sm font-extrabold uppercase tracking-[0.2em]">
                Featured Projects
              </span>
            </div>
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-[2rem] p-8 sm:p-10 hover:shadow-indigo-500/10 hover:shadow-2xl hover:border-indigo-500/20 group overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-black tabular-nums text-slate-400 bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/5">
                    {project.period}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  {project.achievements.map((achieve, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/30 text-sm sm:text-base text-slate-300 border border-white/5"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                      {achieve}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-indigo-400 transition-colors"
                    >
                      <GitHubIcon size={14} /> Codebase
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Experience Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 mb-2 px-6 text-indigo-400">
              <Briefcase size={20} />
              <span className="text-sm font-extrabold uppercase tracking-[0.2em]">
                Work Experience
              </span>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={`${exp.company}-${idx}`}
                  className="glass-card rounded-3xl p-8 sm:p-10 relative group border-indigo-500/5 hover:border-indigo-500/20 transition-all"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-[11px] font-black text-indigo-400/70 tabular-nums uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-indigo-300/60 uppercase tracking-wider mb-6">
                    {exp.role}
                  </p>
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400 leading-relaxed"
                      >
                        <div className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer Decoration */}
      <footer className="pt-24 pb-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">
        &copy; {new Date().getFullYear()} {about.name}. Built with Passion.
      </footer>
    </main>
  );
}
