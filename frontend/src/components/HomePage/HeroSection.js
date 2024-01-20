// components/HeroSection.js

import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{subtitle}</p>
    </section>
  );
}

export default HeroSection;
