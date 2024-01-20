// components/TestimonialsSection.js

import React from 'react';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-8">
            <p className="text-lg">{testimonial.quote}</p>
            <p className="text-gray-400 mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
