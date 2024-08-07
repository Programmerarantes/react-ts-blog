// pages/HomePage.tsx
import React from 'react';
import PostList from '../components/post-list';
import Navbar from '../components/navbar';


const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
};

export default HomePage;
