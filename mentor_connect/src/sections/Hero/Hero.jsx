// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; // Importing styles for the Hero section

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-subtitle">
          We help you achieve your dreams with our amazing solutions.
        </p>
        <a href="#learn-more" className="hero-btn">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
