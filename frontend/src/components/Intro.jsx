import React, { useState, useEffect } from 'react';
import symbol from '../images/symbol.jpg';
import '../CSS/intro.css';
import Navbar from './Nav/Navbar';
import Footer from './Footer';

const Intro = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  const handleImageClick = () => {
    setEasterEgg(true);
  };

  useEffect(() => {
    if (easterEgg) {
      const timer = setTimeout(() => {
        setEasterEgg(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [easterEgg]);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="intro-container">
          <h1>Welcome to Virtual Events</h1>
          <p>
            Virtual Events is your go-to platform for creating, managing, and attending online events. Whether you're hosting a conference, a workshop, or a casual meetup, our platform provides all the tools you need to make your event a success.
          </p>
          <p>
            On this website, you can expect to find:
            <ul>
              <li>Easy event creation and management tools</li>
              <li>Interactive features for attendees</li>
              <li>Comprehensive analytics for event hosts</li>
              <li>Secure and reliable platform for all your virtual events</li>
            </ul>
          </p>
          <p>
            Virtual Events was created in 2024 with the idea of bringing people together, no matter where they are in the world. Our mission is to make virtual events as engaging and impactful as in-person gatherings.
          </p>
          <div className="image-container" onClick={handleImageClick}>
            <img src={symbol} alt="Website Symbol" className="website-symbol" />
          </div>
          {easterEgg && (
            <div className="easter-egg">
              <p>🎉 Surprise! You've found the Easter egg! 🎉</p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Intro;
