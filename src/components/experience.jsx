import React, { useState } from "react";

const experiences = [
  {
role: "Frontend Developer",
org: "Mently",
period: "Oct 2025 - present",
type: "Junior Frontend Role",
description: "Fallback Screen and React Email Implementation",
highlights: [
  "Developing the frontend architecture for the Mently notification ecosystem utilizing React Email and Tailwind CSS inside Next.js; collaborating with backend engineers to deliver a library of 15+ reusable, multi-tenant templates to accelerate communications deployment cycles by 40%.",
"Designed and implemented responsive system-status fallback screens across primary application routes; safeguarded user retention for 2k+ active users by reducing unhandled blank-screen bounce rates by 90% during scheduled platform updates and server downtime. "
]
  },
  {
    role: "Frontend Developer Intern",
    org: "Mently",
    period: "June - Sept, 2025",
    type: "Internship",
    description: "Replicated the mently platform"
  },
  {
    role: "Women Techsters Fellow",
    org: "Tech4Dev",
    period: "2025",
    type: "Fellowship",
    description:
      "Learning software engineering on frontend track as a fellow focused on building production-ready web applications. Collaboration in a cross-functional team to ship GreenSight — an environmental awareness platform — as the programme capstone.",
    highlights: [
      "Built and deployed a full-stack capstone project with a team",
      "Practised Agile/Scrum ceremonies across the fellowship",
      "Strengthened React, API integration, and responsive-design skills",
    ],
  },
  {
    role: "Open-Source Contributor",
    org: "Memory-Map (GitHub)",
    period: "2025",
    type: "Open Source",
    description:
      "Contributed documentation improvements to Memory-Map, a Rust-powered location-aware media archive. Focused on README accuracy, clarity, and contributor-friendliness.",
    highlights: [
      "Reviewed and corrected technical inaccuracies in existing docs",
      "Restructured README for new-contributor onboarding",
      "Navigated a full open-source PR review workflow",
    ],
  },
];

function TimelineItem({ exp, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-purple-400 dark:bg-[#C778DD] shrink-0 mt-1" />
        {!isLast && <div className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-600 mt-1" />}
      </div>
      <div className="flex flex-col gap-2 pb-10 w-full">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-[16px]">{exp.role}</h3>
            <p className="text-[13px] opacity-70">
              {exp.org} · <span className="dark:text-[#C778DD] text-[#6E11B0] font-semibold">{exp.type}</span>
            </p>
          </div>
          <span className="text-[12px] font-mono border border-gray-300 dark:border-gray-600 px-2 py-0.5 opacity-70">
            {exp.period}
          </span>
        </div>

        <p className="text-[13px] leading-relaxed opacity-80 max-w-2xl">{exp.description}</p>

        <button
          onClick={() => setOpen((p) => !p)}
          className="text-left text-[12px] font-semibold dark:text-[#C778DD] text-[#6E11B0] underline underline-offset-2 w-fit"
        >
          {open ? "Hide highlights ▲" : "Show highlights ▼"}
        </button>

        {open && (
          <ul className="flex flex-col gap-1.5 pl-4 border-l-2 border-purple-300 dark:border-[#C778DD] mt-1">
            {exp.highlights.map((h) => (
              <li key={h} className="text-[12px] opacity-80 list-disc list-inside">
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>experience
        </h2>
        <div className="mt-1 w-24 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>
      <div className="flex flex-col max-w-3xl">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.role} exp={exp} isLast={i === experiences.length - 1} />
        ))}
      </div>

    </section>
  );
}
