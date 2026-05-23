import React from "react";
import { LucidePenLine, Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";

export default function Home() {
  return (
    <div className="flex flex-row items-start gap-50">
      <div>
        <div className="w-0.5 h-60 relative left-12 -top-18 bg-gray-300"></div>
        <div className="w-fit flex flex-col gap-8 px-8 relative -top-16">
          <NavLink to="https://github.com/AmosGloria">
            <Github size={34} />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/gloria-amos/">
            <Linkedin size={34} />
          </NavLink>
          <a href="mailto:yourname@email.com" className="hover:text-purple-600 transition-colors">
            <Mail size={34} />
          </a>
        </div>
      </div>
      <div>
        <div className="mx-auto flex flex-col justify-center items-center px-8 w-180 h-40 bg-transparent border border-purple-300">
          <div>
            <p>✓ Initializing portfolio...</p>
            <p>✓ Rendering interfaces...</p>
            <p className="dark:text-[#C778DD] text-[#6E11B0]">✓ Shipping experiences...</p>
            <div className="absolute -top-8 z-10 animate-writing-pen">
              <LucidePenLine size={20} className="text-purple-600 -rotate-45" />
            </div>
            <p className="overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-typewriter">
              Building the future, one interface at a time.
            </p>
          </div>
        </div>

        <h1 className="font-black text-[36px] text-center">
          <span>Gloria is a </span>
          <span className="text-purple-500">Software Engineer</span>
        </h1>

        <div className="mx-auto w-200 flex font-bold justify-center items-center">
          <p>
            Dedicated to building high-performance,
            web interfaces that align with organizational goals,
            amplify brand identity, and drive measurable user success.
            <span className="italic dark:text-[#C778DD] text-[#6E11B0] underline block">
              Transforming your ideas into digital reality.
            </span>
          </p>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap">
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
        <section>
  <Projects/>
  <Experience/>
  <Skills/>
  <About/>
  <Contact/>
</section>
      </div>
    </div>
  );
}