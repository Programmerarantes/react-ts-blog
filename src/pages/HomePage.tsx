import React from 'react';
import { HomeHeroSection } from '../components/HomeHeroSection';
import BlogSection from '../components/BlogHomeSection';
import AboutSection from '../components/AboutUsHomeSection';


const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeroSection />
      <BlogSection />
      <AboutSection />
    </div>
    
  );
};

export default HomePage
