import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Search from './Search';


const RouterApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about/*" element={<About />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  </Router>
)

export default RouterApp;