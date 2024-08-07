import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import HomePage from './pages/home-page';
import PostDetailPage from './pages/post-detail-page';
import BlogPage from './pages/blog-page';
import Navbar from './components/navbar';

const App: React.FC = () => {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
