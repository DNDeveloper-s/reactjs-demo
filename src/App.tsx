import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import CardContainer from './components/CardContainer/CardContainer';
import AppContentSection from './components/AppContentSection/AppContentSection';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AppContentContainer from './components/AppContentContainer/AppContentContainer';
import BackEnd from './BackEnd/BackEnd';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navigation />
          <Hero />
          <CardContainer />
          <AppContentContainer />
          <CTA />
          <Footer />
        </>
        } 
      />
      <Route path="/create-user" element={<BackEnd />} />
    </Routes>
  );
}

export default App;
