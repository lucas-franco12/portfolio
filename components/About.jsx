import React from 'react';
import Image from 'next/image';
import carouselImages from '../data/carouselImages';

export default function About() {
  const carouselIndicators = carouselImages.map((image, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index}
      className={index === 0 ? 'active' : ''}
      aria-current={index === 0 ? 'true' : ''}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ));

  const carouselElements = carouselImages.map((image, index) => (
    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}  
        height={600}  
        className="d-block w-100"
      />
    </div>
  ));

  return (
    <section className="about" id="about">
      <div className="row">
        <div
          id="carouselExampleIndicators"
          className="carousel slide about-img col-12 col-lg-6"
          data-aos="zoom-in-down"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">{carouselIndicators}</div>
          <div className="carousel-inner">{carouselElements}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="about-text col-12 col-lg-6" data-aos="zoom-in-up">
        <h4>👋 <strong>Hello!</strong></h4>
          <p>
            I am a passionate Full Stack Web Developer and Software Engineer who
            is dedicated to empowering businesses both big and small with
            well-crafted, professional websites and applications. I&apos;m
            devoted to combining intuitive design and creative problem solving
            to craft transformative digital solutions.
          </p>
          <h4>🎓 <strong>Educational Background:</strong></h4>
          <p>
            I am currently a senior studying Computer Science at the University
            of South Florida. At USF, I&apos;ve had the privilege of immersing
            myself in a community of like-minded engineers, enriching my
            knowledge through classes, peers, and coding workshops. I am now
            specializing in AI/ML concepts, aiming to integrate the latest
            advancements into my work.
          </p>
          <h4>🚀 <strong>Outside the Coding World:</strong></h4>
          <p>
            When not immersed in code or hitting the books, I am embracing the
            outdoors! From surfing and kayaking to fishing and camping, I enjoy
            exploring new places and meeting diverse people. These adventures
            enrich my perspective and provide me with fresh ideas and a renewed
            sense of creativity.
          </p>
          <a href="#projects" className="btn">View My Projects</a>
        </div>
      </div>
    </section>
  );
}
