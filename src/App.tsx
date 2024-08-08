import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
