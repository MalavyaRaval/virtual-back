import React from 'react';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Dev Modi & Malavya Raval. All rights reserved.
        </p>
        <p>
          <span className="trademark ">™</span> Dev and Malavya Projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;
