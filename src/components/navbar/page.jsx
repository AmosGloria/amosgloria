import React from 'react';
import Home from '/src/assets/images/home.svg';
import About from '/src/assets/images/about.svg';
import Skills from '/src/assets/images/skills.svg';
import Project from '/src/assets/images/project.svg';
import Experience from '/src/assets/images/experience.svg';
import Contact from '/src/assets/images/contact.svg';

export default function Navbar() {
  return (
    <nav className="">
        <section>
            <div className='flex text-[14px] gap-8 text-white font'>
                <div className='flex gap-2'>
                    <img src={Home}/>
                    <p>Home</p>
                </div>
               <div className='flex gap-2'>
                <img src={About}/>
                <p>About</p>
               </div>
                <div className='flex gap-2'>
                    <img src={Skills}/>
                    <p>Skills</p>
                </div>
                <div className='flex gap-2'>
                    <img src={Project}/>
                    <p>Projects</p>
                </div>
                <div className='flex gap-2'>
                    <img src={Experience}/>
                    <p>Experience</p>
                </div>
                <div className='flex gap-2'>
                    <img src={Contact}/>
                    <p>Contact</p>
                </div>
            </div>
        
        </section>
    </nav>
  )
}
