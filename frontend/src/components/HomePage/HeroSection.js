// components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-yellow-400 text-green-900 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Advancing Education with AI
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Harnessing the power of artificial intelligence to uplift underprivileged students and address academic challenges.
        </p>
        <button className="bg-green-700 text-yellow-400 py-2 px-6 rounded-full font-bold hover:bg-green-600">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
