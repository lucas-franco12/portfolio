import React from 'react';
import projects from '../data/portfolioData';

export default function Portfolio() {
  const portfolio = projects.map((project, index) => (
    <div key={index} className="col-md-6 mb-5 mt-5">
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <div className="project-card">
          <img src={project.src} alt={`Project ${index + 1}`} />
          <div className="main-row">
            <div className="header-row">
              <div className="row-text">
                <h5>{project.title}</h5>
              </div>
              <div className="row-icon">
                <a href={project.git} target="_blank" className="nav-link">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
            <p>{project.demo}</p>
            <p>{project.desc}</p>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <section className="portfolio" id="projects">
      <div className="center-text" data-aos="fade-down">
        <h2>My <span>Portfolio</span></h2>
      </div>
      <div className="portfolio-content" data-aos="zoom-in-up">
        <div className="row">
          {portfolio}
        </div>
      </div>
    </section>
  );
}