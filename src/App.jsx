import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/page';
import { Moon, Sun } from "lucide-react";
import Logo from "/src/assets/Icons/logo.svg";
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';

export default function App() {
  const [theme, setTheme] = useState("light")
  const [isHovered, setIsHovered] = useState(false)
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === "dark")
  }
  return (
    <BrowserRouter>
      <div className="h-auto bg-[#ABB2BF] dark:bg-[#282C33] dark:text-[#ABB2BF] text-[#282C33] transition-colors duration-300">
        <div className='flex justify-between px-26 items-center font-bold'>
          <div className='flex gap-3 justify-center items-center'>
            <img src={Logo}
              alt='logo'
              className='dark:invert-0 invert transition-all' />
            <h2>Gloria</h2>
          </div>
          <div className='w-full h-16 relative justify-end items-center gap-10 px-10 bg-transparent flex'>
            <Navbar />
            <button
              onClick={toggleTheme}
              className='rounded-full p-2 shadow-md dark:shadow-amber-400 shadow-purple-400 cursor-pointer text-gray-600 hover:text-purple-400 transition-all ease-in-out'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>
            {isHovered && <div className='absolute top-full dark:text-[#282C33] rounded-4 text-[14px] w-20 h-5 bg-purple-100'>{theme === "light" ? "Dark Mode" : "Light Mode"}</div>}
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}