import React from "react";
import { NavLink } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";

const facts = [
  "I'm a Software Engineer with a passion for building clean, performant web interfaces.",
  "I completed the Women Techsters Fellowship by Tech4Dev, where I built a full capstone project with a cross-functional team.",
  "I've contributed to open-source projects and care deeply about documentation quality.",
  "I enjoy turning complex problems into simple, elegant solutions.",
  "When I'm not coding, I'm learning something new — always curious, always growing.",
];

export default function About() {
  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>about-me
        </h2>
        <div className="mt-1 w-20 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex flex-col gap-5 max-w-xl">
          <p className="text-[15px] leading-relaxed opacity-90">
            Hi! I'm <span className="font-bold dark:text-[#C778DD] text-[#6E11B0]">Gloria Amos</span> — a
            Software Engineer dedicated to crafting high-performance, accessible web
            experiences that align with organisational goals and amplify brand identity.
          </p>
          <p className="text-[15px] leading-relaxed opacity-80">
            I specialise in front-end engineering with React, and I'm comfortable across
            the full stack. I believe great software is not just functional — it's
            thoughtful, inclusive, and a pleasure to use.
          </p>
          <p className="text-[15px] leading-relaxed opacity-80">
            I'm always open to exciting opportunities, collaborations, or just a good
            conversation about tech.
          </p>
        </div>
        <div className="flex flex-col gap-3 border border-gray-300 dark:border-gray-600 p-6 max-w-md w-full">
          <h3 className="font-bold text-[13px] uppercase tracking-widest opacity-60 mb-1">
            A few things about me
          </h3>
          {facts.map((fact, i) => (
            <div key={i} className="flex gap-3 items-start text-[13px] leading-relaxed opacity-85">
              <span className="dark:text-[#C778DD] text-[#6E11B0] font-bold mt-0.5 shrink-0">▹</span>
              <p>{fact}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="border-l-2 border-purple-300 dark:border-[#C778DD] pl-5 italic text-[14px] opacity-70 max-w-lg">
        "The best way to predict the future is to build it." — Alan Kay
      </div>

    </section>
  );
}
