// components/FeaturesSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Utilize AI and machine learning algorithms to analyze historical academic data and identify potential hurdles.'
    },
    {
      title: 'Personalized Insights',
      description: 'Provide personalized insights for underprivileged students and dropouts, highlighting specific academic challenges.'
    },
    {
      title: 'Recommendation System',
      description: 'Incorporate a recommendation system that suggests additional educational resources to address identified challenges.'
    },
    {
      title: 'Tailored Guidance',
      description: 'Offer tailored guidance to at-risk students, assisting them in overcoming academic difficulties and achieving success.'
    },
    {
      title: 'User-Friendly Interface',
      description: 'Create a user-friendly interface for students, ensuring easy navigation and access to personalized recommendations.'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed to 5 seconds (5000 milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 text-center bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Key Features</h2>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
