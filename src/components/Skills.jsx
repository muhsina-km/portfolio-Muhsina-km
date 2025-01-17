import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-title">My Technical Arsenal</h1>

      <div className="skills-container">
        <div className="skill-set">
          <h2 className="skill-category">Frontend</h2>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>UI Design</li>
          </ul>
        </div>

        <div className="skill-set">
          <h2 className="skill-category">Backend</h2>
          <ul className="skill-list">
            <li>Java (Spring MVC, Hibernate)</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-set">
          <h2 className="skill-category">Database</h2>
          <ul className="skill-list">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-set">
          <h2 className="skill-category">Other Skills</h2>
          <ul className="skill-list">
            <li>Git</li>
            <li>Object-Oriented Programming</li>
            <li>Software Engineering</li>
            <li>Networking</li>
          </ul>
        </div>

        <div className="skill-set">
          <h2 className="skill-category">Soft Skills</h2>
          <ul className="skill-list">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
