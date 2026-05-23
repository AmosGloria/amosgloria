import React from "react";

/**
 * Add / remove skills here — categories and items will render automatically.
 */
const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Rust (learning)"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "React Router", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git & GitHub", "Figma", "VS Code", "Postman", "Render", "Vercel"],
  },
  {
    category: "Back-end & Databases",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    category: "Practices",
    skills: [
      "Responsive Design",
      "Accessibility (a11y)",
      "Component-Driven Development",
      "Open-Source Contribution",
      "Agile / Scrum",
    ],
  },
];

function SkillPill({ name }) {
  return (
    <span className="text-[12px] px-3 py-1.5 border border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-[#C778DD] hover:dark:text-[#C778DD] hover:text-[#6E11B0] transition-colors duration-200 cursor-default font-mono">
      {name}
    </span>
  );
}

function CategoryBlock({ category, skills }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2">
        <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillPill key={s} name={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">

      {/* section header */}
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>skills
        </h2>
        <div className="mt-1 w-16 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>

      <p className="text-[14px] opacity-75 max-w-xl">
        Technologies and tools I work with regularly. I'm always learning and adding
        new skills to this list.
      </p>

      {/* skill grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {skillCategories.map((cat) => (
          <CategoryBlock key={cat.category} category={cat.category} skills={cat.skills} />
        ))}
      </div>

    </section>
  );
}
