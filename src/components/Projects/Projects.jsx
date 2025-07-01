
import React from 'react';
import './Projects.css';

import crud from '../../assets/crud.jpeg';
import news from '../../assets/news.jpeg'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ProjectCard from '../ProjectCard/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from('#para', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '#para',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%',
      },
    });

    gsap.from('.slider', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.slider',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%',
      },
    });
  });

  return (
    
    <div id="projects">
      <h1 id="para">MY PROJECTS</h1>
      <div className="slider">
        <ProjectCard
          title="Auth CRUD Manager"
          image={crud}
          viewLink="https://shivamkashyap.pythonanywhere.com/"
          sourceLink="https://github.com/Shivam-Kahshyap/Crud-app/tree/master"
        />
        <ProjectCard
        title = "NewsApp"
        image = {news}
        viewLink="https://shivam-kahshyap.github.io/NewsApp/"
        sourceLink="https://github.com/Shivam-Kahshyap/NewsApp"/>
      </div>
    </div>
  );
}

export default Projects;
