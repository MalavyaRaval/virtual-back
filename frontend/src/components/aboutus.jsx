import React from 'react';
import '../CSS/aboutus.css';
import devModiImage from '../images/dev-modi.jpg';
import malavyaRavalImage from '../images/malavya-raval.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Nav/Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="aboutus-container">
          <h1>About Us</h1>
          <div className="profile">
            <img src={devModiImage} alt="Dev Modi" className="profile-image" />
            <div className="profile-text">
              <h2>Dev Modi</h2>
              <p>
                Dev Modi is a passionate developer with a knack for solving complex problems. 
                With years of experience in full-stack development, Dev is committed to creating 
                efficient and innovative solutions that drive success.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/in/dev-modi-111557235/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a> <br />
                <a href="https://github.com/NightFury2415" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a> <br />
                <a href="mailto:devmodi2415@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile">
            <img src={malavyaRavalImage} alt="Malavya Raval" className="profile-image" />
            <div className="profile-text">
              <h2>Malavya Raval</h2>
              <p>
                Malavya Raval specializes in front-end development, bringing designs to life with 
                clean, responsive, and intuitive interfaces. Malavya's dedication to user experience 
                ensures that every project is both visually appealing and highly functional.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/malavya-raval/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a> <br />
                <a href="https://github.com/malavyaraval" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a> <br />
                <a href="mailto:malavyaraval@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
