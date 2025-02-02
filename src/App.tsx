import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Highlight from './components/Highlight';
import AIMLSection from './components/AIMLSection';
import ClientsSection from './components/ClientsSection';
import WhyChooseUs from './components/WhyChooseUs';
import CoreServices from './components/CoreServices';
import AboutUs from './components/AboutUs';
import TeamSection from './components/TeamSection';
import Technologies from './components/Technologies';
import GetStarted from './components/GetStarted';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ServicesOverview />
              <Highlight />
              <AIMLSection />
              <ClientsSection />
              <WhyChooseUs />
              <CoreServices />
              <AboutUs />
              {/* <TeamSection /> */}
              <Technologies />
              <GetStarted />
              <ContactUs />
            </main>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/hire" element={<TeamSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<div className="pt-24">Blog Coming Soon</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;