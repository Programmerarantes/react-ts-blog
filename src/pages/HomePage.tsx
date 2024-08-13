import React from 'react';
import { HomeHeroSection } from '../components/HomeHeroSection';
import BlogSection from '../components/BlogHomeSection';
import AboutSection from '../components/AboutUsHomeSection';
import { AuthorsHome } from '../components/AuthorsSection';


const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeroSection />
      <BlogSection />
      <AboutSection />
      <AuthorsHome />
    </div>
    
  );
};

export default HomePage
