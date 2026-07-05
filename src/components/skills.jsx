import React from "react";

   const skills= ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "PostgreSQL", "Git", "Figma", "REST APIs"]

export default function Skills() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>Tech Stack
        </h2>
        <div className="mt-1 w-16 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span className="flex md:flex-row flex-col justify-center rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2 " key={index}>{skill}</span>
        ))
        }
      </div>

    </section>
  );
}
