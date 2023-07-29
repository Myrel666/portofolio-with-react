import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';
import NotFound from './components/NotFound';


const MyPortofolio = () => {

  return (
      <Router>
        <div>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/experience" element={<Experience/>} />
          <Route exact path="/portofolio" element={<Portofolio/>} />
          <Route exact path="/*" element={<NotFound/>} />
        </Routes>
        </div>
      </Router>
  );
};

export default MyPortofolio;
