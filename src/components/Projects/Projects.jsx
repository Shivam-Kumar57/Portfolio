import './Projects.css';

import crud from '../../assets/crud.jpeg';
import news from '../../assets/news.jpeg'
import shopify from '../../assets/shopify.jpeg'
import todo from '../../assets/todo.png'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FaArrowsToDot } from 'react-icons/fa6';

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
          title="Django Auth CRUD Manager"
          image={crud}
          viewLink="https://task3manager.pythonanywhere.com/"
          sourceLink="https://github.com/Shivam-Kahshyap/Crud-app/tree/master"
        />

        <ProjectCard
          title="Shopify"
          image={shopify}
          viewLink="https://abhishekkashyap2757.pythonanywhere.com/store"
          sourceLink="https://github.com/Shivam-Kumar57/E-Shop#"
        />

        <ProjectCard
        title = "Shopify"
        image = {news}
        viewLink="https://abhishekkashyap2757.pythonanywhere.com/store"
        sourceLink="https://github.com/Shivam-Kahshyap/NewsApp"/>
      </div>
    </div>
  );
}

export default Projects;
