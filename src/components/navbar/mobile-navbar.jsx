import React from 'react';
import Home from '/src/assets/images/home.svg';
import Hamburger from '/src/assets/icons/hamburger.svg';
import About from '/src/assets/images/about.svg';
import Skills from '/src/assets/images/skills.svg';
import Project from '/src/assets/images/project.svg';
import Experience from '/src/assets/images/experience.svg';
import Contact from '/src/assets/images/contact.svg';
import { NavLink } from 'react-router-dom';

export default function MobileNavbar({ isOpen, setIsOpen }) {
    const toggleMenu = ()=>{
        setIsOpen(prev => !prev)
    }
  return (
    <nav>
      <section>
        <div>
            <button
            onClick={toggleMenu}
            className='max-w-80 w-full h-10'>
            <img src={Hamburger} alt='mobile-menu'
            fill
            className="dark:invert-0 invert transition-all cursor-pointer"/>
            </button>
        </div>
        {isOpen && (
        <div className='w-full h-screen fixed right-0 flex flex-col text-[14px] gap-4 font bg-[#ABB2BF] dark:bg-[#282C33] border-b border-gray-300 dark:border-gray-700'>
          <NavLink to="/" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={Home}
              alt='home'
              className='dark:invert-0 invert transition-all' />
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={About}
              alt='about'
              className='dark:invert-0 invert transition-all' />
            <p>About</p>
          </NavLink>
          <NavLink to="/skills" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={Skills}
              alt='skills'
              className='dark:invert-0 invert transition-all' />
            <p>Skills</p>
          </NavLink>
          <NavLink to="/projects" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={Project}
              alt='project'
              className='dark:invert-0 invert transition-all' />
            <p>Projects</p>
          </NavLink>
          <NavLink to="/experience" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={Experience}
              alt='experience'
              className='dark:invert-0 invert transition-all' />
            <p>Experience</p>
          </NavLink>
          <NavLink to="/contact" className='flex gap-2' onClick={() => setIsOpen(false)}>
            <img src={Contact}
              alt='contact'
              className='dark:invert-0 invert transition-all' />
            <p>Contact</p>
          </NavLink>
        </div>
    )}
      </section>
    </nav>
  )
}
