import React from "react";
import { useAuth } from "../context/auth";
import Layout from './../components/Layouts/Layout';
import YtVideos from '../components/Layouts/YtVideos'
import Footer from "../components/Layouts/Footer";
import ContactSection from "../components/HomePage/ContactSection";
import TestimonialSectio from "../components/HomePage/TestimonialsSection";
import FeatureSection from "../components/HomePage/FeatureSection";
import HeroSection from "../components/HomePage/HeroSection";


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <div>
      <HeroSection
        title="Welcome to Our Website"
        subtitle="Discover the best features we offer"
      />
      <FeatureSection
        features={[
          { title: 'Responsive Design', description: 'Works on all devices' },
          { title: 'Fast Loading', description: 'Optimized for speed' },
          { title: 'Easy to Use', description: 'Intuitive user experience' },
        ]}
      />
      <TestimonialSectio
        testimonials={[
          { name: 'John Doe', quote: 'Amazing experience with this website!' },
          { name: 'Jane Smith', quote: 'Great features and excellent support' },
        ]}
      />
      <ContactSection />
      <Footer />
    </div>
    </Layout>
  );
};

export default HomePage;