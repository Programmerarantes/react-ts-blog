import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import BlogPage from './pages/BlogPage';
import MenuBar from './components/MenuBar';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:articleId" element={<ArticlePage />} />
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    <Footer />  
    </BrowserRouter>
  );
};

export default App;
