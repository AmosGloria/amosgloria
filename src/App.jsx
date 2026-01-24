import React, { createContext, useContext, useEffect, useState } from 'react';
import Navbar from './components/navbar/page';
import {Moon, Sun} from "lucide-react"

export default function App() {
  const [theme, setTheme] = useState("light")
  const [isHovered, setIsHovered] = useState(false)
  const toggleTheme = () => {
    const newTheme = theme === "light"? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === "dark")
  }
  return (   
       <div className="h-full bg-[#ABB2BF] dark:bg-[#282C33] dark:text-white transition-colors duration-300">
         <div className='w-full h-16 relative justify-end items-center gap-10 px-10 bg-transparent flex'>
           <Navbar/>
          <button 
          onClick={toggleTheme}
            className='rounded-full p-2 shadow-md dark:shadow-amber-400 shadow-purple-400 cursor-pointer text-gray-600 hover:text-purple-400 transition-all ease-in-out'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {theme === "light"? <Moon/> : <Sun/>}
          </button>
          {isHovered && <div className='absolute top-full dark:text-[#282C33] rounded-4 text-[14px] w-20 h-5 bg-purple-100'>{theme === "light"? "Dark Mode" : "Light Mode"}</div>}
         </div>
       </div>
  );
}