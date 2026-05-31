import React, { useState } from "react";
import { ExternalLink, GitPullRequest, Tag, Star, Code2 } from "lucide-react";
import { projects, contributions } from "../data/projects";

function Pill({ label }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded border border-purple-400 dark:text-[#C778DD] text-[#6E11B0] font-mono">
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="relative flex flex-col gap-4 border border-gray-300 dark:border-gray-600 p-6 hover:border-purple-400 dark:hover:border-[#C778DD] transition-all duration-300 group">
      {project.highlight && (
        <span className="absolute top-3 right-3 flex items-center gap-1 text-[11px] text-amber-500 font-semibold">
          <Star size={12} fill="currentColor" /> Featured
        </span>
      )}

      <div className="flex items-center gap-2">
        <Code2 size={16} className="dark:text-[#C778DD] text-[#6E11B0] shrink-0" />
        <h3 className="font-bold text-[15px] group-hover:dark:text-[#C778DD] group-hover:text-[#6E11B0] transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-[13px] leading-relaxed opacity-80">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Pill key={t} label={t} />
        ))}
      </div>

      <div className="flex gap-3 mt-auto pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold border border-current dark:text-[#C778DD] text-[#6E11B0] px-3 py-1.5 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold border border-current px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors opacity-80 hover:opacity-100"
          >
            <Code2 size={13} /> Source
          </a>
        )}
      </div>
    </div>
  );
}

function ContributionCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 border border-gray-300 dark:border-gray-600 p-6 hover:border-purple-400 dark:hover:border-[#C778DD] transition-all duration-300 group">
      <div className="flex items-center gap-2">
        <GitPullRequest size={16} className="dark:text-[#C778DD] text-[#6E11B0] shrink-0" />
        <h3 className="font-bold text-[15px] group-hover:dark:text-[#C778DD] group-hover:text-[#6E11B0] transition-colors">
          {item.title}
        </h3>
      </div>

      <p className="text-[13px] leading-relaxed opacity-80">{item.description}</p>

      <button
        onClick={() => setOpen((p) => !p)}
        className="text-left text-[12px] font-semibold dark:text-[#C778DD] text-[#6E11B0] underline underline-offset-2 w-fit"
      >
        {open ? "Hide details ▲" : "View highlights ▼"}
      </button>

      {open && (
        <ul className="flex flex-col gap-1.5 pl-4 border-l-2 border-purple-300 dark:border-[#C778DD]">
          {item.highlights.map((h) => (
            <li key={h} className="text-[12px] opacity-80 list-disc list-inside">
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Pill key={t} label={t} />
        ))}
      </div>

      {item.prUrl && (
        <a
          href={item.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 w-fit text-[13px] font-semibold border border-current dark:text-[#C778DD] text-[#6E11B0] px-3 py-1.5 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
        >
          <GitPullRequest size={13} /> View Pull Request
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>projects
        </h2>
        <div className="mt-1 w-24 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[14px] uppercase tracking-widest opacity-60 mb-6 flex items-center gap-2">
          <GitPullRequest size={13} /> Open-Source Contributions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((c) => (
            <ContributionCard key={c.title} item={c} />
          ))}
        </div>
      </div>

    </section>
  );
}
