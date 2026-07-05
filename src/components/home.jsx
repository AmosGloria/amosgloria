import React from "react";
import { LucidePenLine, Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";

export default function Home() {
  const skillCards = [
    {
      label: "UI",
      text: "Sharp layouts",
    },
    {
      label: "UX",
      text: "Smooth states",
    },
    {
      label: "Code",
      text: "Reusable UI",
    },
  ];

  return (
    <main className="max-w-300 w-full mx-auto px-6">
      <section className="w-full pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-[56px_minmax(0,1fr)] lg:grid-cols-[56px_minmax(0,1fr)_160px] gap-8 items-start">
          <aside className="hidden md:flex flex-col gap-8 items-center pt-12">
            <a
              href="https://github.com/AmosGloria"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition-colors"
            >
              <Github size={34} />
            </a>

            <a
              href="https://www.linkedin.com/in/gloria-amos/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition-colors"
            >
              <Linkedin size={34} />
            </a>

            <a
              href="mailto:yourname@email.com"
              className="hover:text-purple-600 transition-colors"
            >
              <Mail size={34} />
            </a>
          </aside>

          <div className="min-w-0">
            <div className="relative max-w-100 w-full mx-auto mb-6 flex justify-center items-center px-8 py-8 min-h-40 bg-transparent border border-purple-300">
              <div className="text-center md:text-[18px] text-[14px]">
                <p>✓ Initializing portfolio...</p>
                <p>✓ Rendering interfaces...</p>
                <p className="dark:text-[#C778DD] text-[#6E11B0]">
                  ✓ Shipping experiences...
                </p>

                <p className="mt-3 overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-typewriter">
                  Building clean, useful interfaces.
                </p>
              </div>
            </div>

            <h1 className="font-black lg:text-[36px] text-[26px] text-center">
              <span>Gloria is a </span>
              <span className="text-purple-500">Software Developer</span>
            </h1>

            <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
              <section>
                <div className="mx-auto max-w-2xl w-full flex flex-col gap-8 items-start">
                  <div className="w-full font-bold">
                    <p className="text-center lg:text-left">
                      specilizing in frontend, dedicated to building high-performance web interfaces that
                      align with organizational goals, amplify brand identity,
                      and drive measurable user success.
                    </p>

                    <span className="italic dark:text-[#C778DD] text-[#6E11B0] underline block mt-3 text-center lg:text-left">
                      Transforming your ideas into digital reality.
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
                  <NavLink
                    to="/projects"
                    className="flex items-center gap-2 px-5 py-2.5 border border-purple-400 dark:border-[#C778DD] dark:text-[#C778DD] text-[#6E11B0] font-semibold text-[13px] hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    Explore Projects
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="flex items-center gap-2 px-5 py-2.5 border border-gray-400 dark:border-gray-500 font-semibold text-[13px] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors opacity-80 hover:opacity-100"
                  >
                    Contact Me
                  </NavLink>
                </div>
              </section>

              <div className="flex flex-col gap-2">
                <p className="font-bold">Background</p>

                <div className="flex justify-start gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2 py-2">
                  <img
                    src="/icons/degree.svg"
                    alt="Degree icon"
                    className="dark:invert"
                  />
                  <div>
                    <p>Business Administration</p>
                    <p>Niger Delta University</p>
                  </div>
                </div>

                <div className="flex justify-start gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2 py-2">
                  <img
                    src="/icons/software.svg"
                    alt="Software icon"
                    className="dark:invert"
                  />
                  <div>
                    <p>Software Development</p>
                    <p>Power Learn Academy</p>
                  </div>
                </div>

                <div className="flex justify-start gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2 py-2">
                  <img
                    src="/icons/design.svg"
                    alt="Design icon"
                    className="dark:invert"
                  />
                  <div>
                    <p>
                      Frontend Development <span>2025 - 2026</span>
                    </p>
                    <p>Women Techster Fellowship by Tech4Dev</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="hidden lg:flex flex-col items-end gap-3 pt-12">
            {skillCards.map((card, index) => (
              <div
                key={card.label}
                style={{
                  animation: "cardFloat 5s ease-in-out infinite",
                  animationDelay: `${index * 0.8}s`,
                }}
                className="w-31.5 rounded-xl border border-purple-400/30 bg-white/70 dark:bg-slate-950/70 px-3 py-2 backdrop-blur-md shadow-[0_0_22px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)] transition-shadow"
              >
                <p className="text-[9px] uppercase tracking-[0.25em] text-purple-500 font-bold">
                  {card.label}
                </p>
                <p className="mt-1 text-[12px] font-black text-slate-900 dark:text-white">
                  {card.text}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section>
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </section>
    </main>
  );
}
