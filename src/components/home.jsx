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
    <main className="max-w-[1200px] w-full mx-auto">
    <div className="w-full mx-auto p-6">
      <div className="hidden md:block">
        <div className="w-fit flex flex-col gap-8 px-8 relative top-16">
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
      <div className="md:-mt-32 mt-0">
        <div className="max-w-[400px] w-full mx-auto mb-4 flex flex-1 flex-col justify-center items-center px-8 h-40 bg-transparent border border-purple-300">
          <div className="text-center md:text-[18px] text-[14px]">
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

        <h1 className="font-black lg:text-[36px] text-[26px] text-center">
          <span>Gloria is a </span>
          <span className="text-purple-500">Software Engineer</span>
        </h1>

<section className="flex md:flex-row flex-col">
          <div className="mx-auto max-w-2xl w-full flex font-bold justify-center items-center">
          <p>
            Dedicated to building high-performance,
            web interfaces that align with organizational goals,
            amplify brand identity, and drive measurable user success.
            <span className="italic dark:text-[#C778DD] text-[#6E11B0] underline block">
              Transforming your ideas into digital reality.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Background</p>
            <div className="flex justify-left gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2">
              <img src="/icons/degree.svg" className="dark:invert"/>
                <div>
                     <p>Business Administration</p>
                    <p>Niger Delta University</p>
                </div>
              </div>
              <div className="flex justify-left gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2">
                <img src="/icons/software.svg" className="dark:invert"/>
             <div>
               <p>Software Development</p>
              <p>Power Learn Academy</p>
             </div>
              </div>
            <div className="flex justify-left gap-4 rounded-sm items-center border border-gray-400 dark:border-gray-500 px-2">
               <img src="/icons/design.svg" className="dark:invert"/>
                <div>
                  <p>Frontend Development <span>2025 - 2026</span></p>
                  <p>Women Techster Fellowship by Tech4Dev</p>
                  </div>
              </div>
        </div>
</section>
 
      </div>
    </div>
  <section>
  <Experience/>
  <Skills/>
  <Projects/>
  <About/>
  <Contact/>
</section>
    </main>
  );
}