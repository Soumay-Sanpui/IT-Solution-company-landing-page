import BlogSection from './components/section/BlogSection';
import TestimonialSection from './components/section/TestimonialSection';
import TeamSection from './components/section/TeamSection';
import PortfolioSection from './components/section/PortfolioSection';
import AboutSection from './components/section/AboutSection';
import ClientSection from './components/section/ClientSection';
import MileStoneSection from './components/section/MileStoneSection';
import ServiceSection from './components/section/ServiceSection';
import CTASection from './components/section/CTASection';
import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/section/HeroSection';
import Footer from "./components/Footer"

function App() {
  return (
      <main className='font-raleway text-[1.2vw] transition-all duration-300 ease-in-out'>
        <Navbar />
        <HeroSection />
        <ClientSection />
        <AboutSection />
        <ServiceSection />
        <CTASection />
        <PortfolioSection />
        <MileStoneSection />
        <TeamSection />
        <TestimonialSection />
        <BlogSection />
        <Footer />
      </main>
  );
}

export default App;
