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

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <CardContainer />
      <AppContentContainer />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
