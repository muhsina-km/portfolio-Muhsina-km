import React from 'react';
import { Image } from 'antd';
import './Home.css'; 

const App = () => (
  <div className="app-container">

    <div className="center-content">
      {/* Profile Image */}
      <Image
        width={200}
        className="profile-image"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />

      {/* Introduction Text */}
      <p className="intro-text">Hi there!</p>
      <p className="name-text">I am Muhsina K M</p>
      <p className="description-text">
        a passionate software developer skilled in the MERN stack, Java, and SQL. Welcome to my portfolio! 
        I specialize in building user-friendly applications to solve real-world challenges. 
        Let's create something extraordinary together!
      </p>
    </div>
  </div>
);

export default App;
