import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="row">
        <div className="main-content col-12 col-lg-6" data-aos="fade-in">
          <h4>Hi There!</h4>
          <h1>I'm <span>Lucas Franco</span></h1>
          <p>Diligent and adaptable software engineer specializing full-stack development with a keen interest in AI/ML, seeking to apply my expertise in a dynamic environment to advance project development.</p>
          <div className="main-btn">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="Lucas_Franco_resume.pdf" download="Lucas_Franco_resume.pdf" className="btn btn2">My Resume</a>
          </div>
        </div>
        <div className="profile-img col-12 col-lg-6" data-aos="zoom-in-down">
          <img src="img/profile.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}