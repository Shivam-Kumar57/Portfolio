// Skills.jsx
import React from 'react'
import './Skills.css'

// Add your own image imports here
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import django from '../../assets/django.png'
import mysql from '../../assets/mysql.png'
import git from '../../assets/git.png'


import gsap from 'gsap';
export default function Skills() {

  gsap.from(".skill-item", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".skills-techstack",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  }
})

  return (
    <div className="skills-techstack">
      <h1>Skills & Tech Stack</h1>
      <p>Here are the technologies I work with to build modern and scalable applications.</p>

      <div className="skills-grid">
        <div className="skill-item">
          <img src={html} alt="HTML5" />
          <span>HTML5</span>
        </div>

        <div className="skill-item">
          <img src={css} alt="CSS3" />
          <span>CSS3</span>
        </div>

        <div className="skill-item">
          <img src={js} alt="JavaScript" />
          <span>JavaScript</span>
        </div>

        <div className="skill-item">
          <img src={react} alt="React.js" />
          <span>React.js</span>
        </div>

        <div className="skill-item">
          <img src={django} alt="Django" />
          <span>Django</span>
        </div>

        <div className="skill-item">
          <img src={mysql} alt="MySQL" />
          <span>MySQL</span>
        </div>
        
        <div className="skill-item">
          <img src={git} alt="Git" />
          <span>Git</span>
        </div>
      </div>
    </div>
  )
}
