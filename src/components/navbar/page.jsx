import React from 'react';
import Home from '/src/assets/images/home.svg';
import About from '/src/assets/images/about.svg';
import Skills from '/src/assets/images/skills.svg';
import Project from '/src/assets/images/project.svg';
import Experience from '/src/assets/images/experience.svg';
import Contact from '/src/assets/images/contact.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="">
      <section>
        <div className='flex text-[14px] gap-8 font'>
          <NavLink to="/" className='flex gap-2'>
            <img src={Home}
              alt='home'
              className='dark:invert-0 invert transition-all' />
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className='flex gap-2'>
            <img src={About}
              alt='about'
              className='dark:invert-0 invert transition-all' />
            <p>About</p>
          </NavLink>
          <NavLink to="/skills" className='flex gap-2'>
            <img src={Skills}
              alt='skills'
              className='dark:invert-0 invert transition-all' />
            <p>Skills</p>
          </NavLink>
          <NavLink to="/projects" className='flex gap-2'>
            <img src={Project}
              alt='project'
              className='dark:invert-0 invert transition-all' />
            <p>Projects</p>
          </NavLink>
          <NavLink to="/experience" className='flex gap-2'>
            <img src={Experience}
              alt='experience'
              className='dark:invert-0 invert transition-all' />
            <p>Experience</p>
          </NavLink>
          <NavLink to="/contact" className='flex gap-2'>
            <img src={Contact}
              alt='contact'
              className='dark:invert-0 invert transition-all' />
            <p>Contact</p>
          </NavLink>
        </div>

      </section>
    </nav>
  )
}
