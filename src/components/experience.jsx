import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    org: "Mently",
    period: "Oct 2025 - Present",
    type: "Junior Frontend Role",
    workDone: [
      "Developed the frontend architecture for email notification ecosystem using React Email and Tailwind CSS inside Next.js. Collaborated with backend engineers to deliver 70+ reusable, multi-tenant email templates.",
      "Built a responsive system-status fallback screen across primary application routes. Improved user experience during scheduled platform updates and server downtime.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    org: "Mently",
    period: "June - Sept 2025",
    type: "Internship",
    workDone: [
      "Replicated the Mently platform interface with responsive frontend layouts.",
      "Worked on reusable UI components and improved consistency across pages.",
      "Gained hands-on experience with frontend development workflows in a real product environment.",
    ],
  },
];

function TimelineItem({ exp }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-purple-400 dark:bg-[#C778DD] shrink-0 mt-1" />
      </div>

      <div className="flex flex-col gap-3 pb-10 w-full">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-[18px]">{exp.role}</h3>
            <p className="text-[13px] opacity-70">
              {exp.org} ·{" "}
              <span className="dark:text-[#C778DD] text-[#6E11B0] font-semibold">
                {exp.type}
              </span>
            </p>
          </div>

          <span className="text-[16px] font-mono border border-gray-300 dark:border-gray-600 px-2 py-0.5 opacity-70">
            {exp.period}
          </span>
        </div>

        <ul className="text-[16px] list-disc pl-5 space-y-2 leading-relaxed opacity-80 max-w-2xl">
          {exp.workDone.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>
          Experience
        </h2>
        <div className="mt-1 w-24 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>

      <div className="flex flex-col max-w-3xl">
        {experiences.map((exp) => (
          <TimelineItem key={`${exp.role}-${exp.org}`} exp={exp} />
        ))}
      </div>
    </section>
  );
}