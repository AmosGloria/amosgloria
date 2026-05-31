import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/page';
import MobileNavbar from './components/navbar/mobile-navbar';
import { Moon, Sun } from "lucide-react";
import Logo from "/src/assets/Icons/logo.svg";
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === "dark");
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#ABB2BF] dark:bg-[#282C33] dark:text-[#ABB2BF] text-[#282C33] transition-colors duration-300">
        <div className="flex md:justify-between md:gap-2 gap-8 md:px-26 px-6 items-center font-bold">
          <div className="flex md:gap-3 gap-5 items-center">
            <img
              src={Logo}
              alt="logo"
              className="dark:invert-0 invert transition-all"
            />
            <h2>Gloria</h2>
          </div>

          <div className="w-full h-16 relative md:justify-end justify-between items-center gap-10 md:px-10 bg-transparent flex">
            <div className="md:block hidden">
              <Navbar />
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-full p-2 shadow-md dark:shadow-amber-400 shadow-purple-400 cursor-pointer text-gray-600 hover:text-purple-400 transition-all ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            {isHovered && (
              <div className="absolute top-full dark:text-[#282C33] rounded-4 text-[14px] w-20 h-5 bg-purple-100">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </div>
            )}
          </div>

          <div className="md:hidden block">
            <MobileNavbar
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>

        {!isMobileMenuOpen && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}