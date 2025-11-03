
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, image, viewLink, sourceLink }) {
  return (
    <div className="Projectcard">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="Projectcard-buttons">
        <a href={viewLink} target="_blank" rel="noopener noreferrer">View</a>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">Source</a>
      </div>

    </div>
  );
}

export default ProjectCard;
