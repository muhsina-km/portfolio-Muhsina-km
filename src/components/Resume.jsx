import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page" style={{ marginTop: '50px' }}> 
    <center>
      <h1 className="resume-title">My Journey So Far</h1>
      </center>

      <section className="career-objective">
        <h3>Career Objective</h3>
        <p>
          As a passionate and detail-oriented software developer, I aim to leverage my expertise in modern technologies
          like the MERN stack, Java, and SQL to create innovative and user-centric solutions. With a commitment to continuous
          learning and problem-solving, I aspire to contribute to impactful projects that drive organizational success while growing
          as a versatile professional.
        </p>
      </section>

      <section className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Bachelor of Computer Application - </strong><br />
            Nirmala College of Arts and Science, Chalakudy (Calicut University)<br />
            2021 – 2024 (81%)
          </li>
          <li>
            <strong>Intermediate (Higher Secondary) - </strong><br />
            GVHSS Valapad, Thrissur<br />
            2019 – 2021 (90%)
          </li>
          <li>
            <strong>SSLC - </strong><br />
            HS Anthikad, Thrissur<br />
            2019 (94%)
          </li>
        </ul>
      </section>

      <section className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>6 months of training on Java Full Stack Developement - Jspiders Kochi</li>
          <li>Web Application Development using Bootstrap - Logix space Technologies Pvt Ltd</li>
          <li>Front-end Application Development with React JS - ICT Academy</li>
          <li>Networking & Cyber Security</li>
        </ul>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>E-commerce Website for Flowering Plants</strong>
            <p>
              Developed a MERN stack application with features like secure login, dynamic product catalog, advanced search, 
              and a seamless shopping experience.
            </p>
          </li>
          <li>
            <strong>Hospital Management System</strong>
            <p>
              Created a Java-based application for managing hospital workflows, integrating Spring Framework and Hibernate 
              for backend processes.
            </p>
          </li>
        </ul>
      </section>

      <section className="technical-proficiency">
        <h3>Technical Proficiency</h3>
        <div className="skills-list">
          <div className="skills-category"> 
            <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Bootstrap
          </div>
          <div className="skills-category">
            <strong>Backend:</strong> Java (Spring Framework, Hibernate), Node.js
          </div>
          <div className="skills-category">
            <strong>Database:</strong> MySQL, MongoDB, PostgreSQL
          </div>
          <div className="skills-category">
            <strong>Tools:</strong> Git, Eclipse, VS Code
          </div>
        </div>
      </section>

      <section className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Time Management</li>
        </ul>
      </section>

      <section className="strengths">
        <h3>Strengths</h3>
        <p>
          Quick learner and highly motivated to explore new technologies.<br />
          Strong analytical and problem-solving skills.
        </p>
      </section>
    </div>
  );
};

export default Resume;
