import React from 'react';
import { Image } from 'antd';
import './Home.css'; 
import profile from './image/profilepic.jpg'; 


const App = () => (
  <div className="app-container">

    <div className="center-content" style={{ marginTop: '50px' }}>
      {/* Profile Image */}
      <Image
        width={200}
        className="profile-image"
        src={profile}
        alt='muhsina km'
      />

      {/* Introduction Text */}
      <p className="intro-text">Hi there!</p>
      <p className="name-text">I am Muhsina K M</p>
      <p className="description-text">
      a passionate software developer from Thrissur, Kerala, with a Bachelor's in Computer Applications and a strong 
      foundation in modern development frameworks and tools. Skilled in the MERN stack, Java, and SQL, I specialize in 
      building user-friendly applications that solve real-world challenges. My coding journey began with curiosity and 
      evolved into a mission to create impactful software solutions. I have honed my expertise in frontend technologies like 
      HTML, CSS, JavaScript, and React, complemented by backend tools such as Java, Spring, and Hibernate. 
      Completing Java Full Stack Development Training at Qspiders, Kochi, equipped me with industry-relevant skills and hands-on 
      experience in developing end-to-end applications. Let’s collaborate and create something extraordinary together!
      </p>
    </div>
  </div>
);

export default App;
