import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../container/Login-Singup/Register/Register';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import AboutUs from '../components/Aboutus/AboutUs';
import SpecialMenu from '../components/Menu/SpecialMenu';
import Chefs from './Chefs/Chefs';
import Intro from './Intro/Intro';
import Laurels from './Laurels/Laurels';
import Gallery from './Gallery/Gallery';
import FindUs from './Findus/FindUs';
import Footer from './Footer/Footer';
import Login from '../container/Login-Singup/Login/Login.jsx';
import './App.css';

function MainContent() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chefs />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter basename='/React-Food-App'>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
