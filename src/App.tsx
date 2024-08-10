import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import HomePage from './pages/HomePage';
import BlogPost from './pages/ArticlePage';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';
import AboutUsPage from './pages/AboutUs';

const App: React.FC = () => {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
