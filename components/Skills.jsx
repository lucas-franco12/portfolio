import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import { SiTypescript, SiAmazon, SiPostgresql, SiTailwindcss, SiMongodb, SiOpenai} from "react-icons/si";

const skills = [
  { tooltip: 'React', icon: <FaReact /> },
  { tooltip: 'Node.js', icon: <FaNodeJs /> },
  { tooltip: 'TypeScript', icon: <SiTypescript /> },
  { tooltip: 'Python', icon: <FaPython /> },
  { tooltip: 'PostgreSQL', icon: <SiPostgresql /> },
  { tooltip: 'MongoDB', icon: <SiMongodb /> },
  { tooltip: 'TailwindCSS', icon: <SiTailwindcss /> },
  { tooltip: 'OpenAI API', icon: <SiOpenai /> },
  { tooltip: 'Git', icon: <FaGit /> },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container" data-aos="fade-down">
        <h2 id="skills-title">Skills</h2>
        <div className="row skills-grid">
          {skills.map((skill, index) => (
            <div
            key={index}
            className="skill-icon col-md-4"
            data-tooltip={skill.tooltip}
          >
            {skill.icon}
            <span className="tooltip-text">{skill.tooltip}</span>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}