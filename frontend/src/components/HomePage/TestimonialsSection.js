// components/TestimonialsSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TechGen Innovations' AI-powered solution transformed my educational journey. It provided personalized insights and guidance, helping me overcome academic challenges.",
      name: "John Doe",
    },
    {
      quote: "I'm grateful for the support from TechGen Innovations. The tailored guidance and recommendation system made a significant impact on my learning experience.",
      name: "Jane Smith",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-8">
              <p className="text-lg">{testimonial.quote}</p>
              <p className="text-gray-400 mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsSection;
