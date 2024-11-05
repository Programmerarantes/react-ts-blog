import React from 'react';
import HomeHeroSection  from '../components/HomeHeroSection';
import BlogSection from '../components/BlogHomeSection';
import AboutSection from '../components/AboutUsHomeSection';
import AuthorsSection  from '../components/AuthorsSection';


const HomePage: React.FC = () => {
  return (
    <div>
      <AboutSection />
      <HomeHeroSection />
      <BlogSection />
      <AuthorsSection />
    </div>
    
  );
};

export default HomePage
