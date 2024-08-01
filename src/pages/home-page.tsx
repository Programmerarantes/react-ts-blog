// pages/HomePage.tsx
import React from 'react';
import PostList from '../components/post-list';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <PostList />
    </div>
  );
};

export default HomePage;
