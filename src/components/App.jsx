import React from 'react';
import AboutUs from '../components/Aboutus/AboutUs';
import Chefs from './Chefs/Chefs';
import FindUs from './Findus/FindUs';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Laurels from './Laurels/Laurels';
import SpecialMenu from '../components/Menu/SpecialMenu';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
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

export default App;
