// components/HomePage.js

import React from "react";
import Layout from './../components/Layouts/Layout';
import ContactSection from "../components/HomePage/ContactSection";
import { useAuth } from "../context/auth";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturesSection from "../components/HomePage/FeatureSection";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <div className="relative bg-gray-100">
        <HeroSection className="py-16" />
        <div className="bg-gradient-to-b from-gray-100 to-transparent h-16" />
        <FeaturesSection className="py-16"  />
        <div className="bg-gradient-to-b from-gray-100 to-transparent h-16" />
        <TestimonialsSection className="py-16" />
        <div className="bg-gradient-to-b from-gray-100 to-transparent h-16" />
        <ContactSection className="py-16" />
 
      </div>
    </Layout>
  );
};

export default HomePage;
