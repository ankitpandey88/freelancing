



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
// import Header from './components/Header';
// import Hero from './components/Hero';
// import ServicesOverview from './components/ServicesOverview';
// import Highlight from './components/Highlight';
// import AIMLSection from './components/AIMLSection';
// import ClientsSection from './components/ClientsSection';
// import WhyChooseUs from './components/WhyChooseUs';
// import CoreServices from './components/CoreServices';
// import AboutUs from './components/AboutUs';
// import TeamSection from './components/TeamSection';
// import Technologies from './components/Technologies';
// import GetStarted from './components/GetStarted';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import ServiceDetail from './pages/ServiceDetail';

// function App() {
//   const phoneNumber = '8858484220'; // Your WhatsApp number

//   return (
//     <Router>
//       <div className="min-h-screen bg-white relative">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <main>
//                 <Hero />
//                 <ServicesOverview />
//                 <Highlight />
//                 <AIMLSection />
//                 <ClientsSection />
//                 <WhyChooseUs />
//                 <CoreServices />
//                 <AboutUs />
//                 {/* <TeamSection /> */}
//                 <Technologies />
//                 <GetStarted />
//                 <ContactUs />
//               </main>
//             }
//           />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/services" element={<ServicesOverview />} />
//           <Route path="/service/:id" element={<ServiceDetail />} />
//           <Route path="/hire" element={<TeamSection />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//         <Footer />

//         {/* WhatsApp Floating Button */}
//         <a
//           href={`https://wa.me/${phoneNumber}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
//           aria-label="Chat with us on WhatsApp"
//         >
//           <FaWhatsapp className="text-3xl" />
//         </a>
//       </div>
//     </Router>
//   );
// }

// export default App;

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
  const phoneNumber = '8858484220'; // Your WhatsApp number

  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/hire" element={<TeamSection />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
           href="https://wa.me/918858484220?text=Are%20you%20interested%20in%20Software%20Development%20Service%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-3 shadow-lg flex items-center justify-center font-semibold text-lg"
          aria-label="Chat with us on WhatsApp"
        >
          Chat Us
        </a>
      </div>
    </Router>
  );
}

export default App;
