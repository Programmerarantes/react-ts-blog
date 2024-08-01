import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home-page';
import PostDetailPage from './pages/post-detail-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
