import React from 'react';
import PostList from '../components/PostList';

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <PostList />
    </div>
  );
};

export default BlogPage;
