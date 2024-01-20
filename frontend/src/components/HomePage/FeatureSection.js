// components/FeaturesSection.js

import React from 'react';

const FeaturesSection = ({ features }) => {
  return (
    <section className="py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
