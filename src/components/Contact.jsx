import React from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <ul className="contact-list">
        <li>
          <MailOutlined className="contact-icon" />
          <a href="mailto:muhsm421@gmail.com" className="contact-link">muhsim421@gmail.com</a>
        </li>
        <li>
          <PhoneOutlined className="contact-icon" />
          <a href="tel:8113080981" className="contact-link">8113080981</a>
        </li>
        <li>
          <EnvironmentOutlined className="contact-icon" />
          <span className="contact-text">Thrissur, Kerala</span>
        </li>
        <li>
          <LinkedinOutlined className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/muhsina-km-7866062a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <GithubOutlined className="contact-icon" />
          <a
            href="https://github.com/muhsina-km"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
