import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Store from './components/Store';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Store />
                <About />
              </>
            } />
          </Routes>
          <div className="relative">
            <Footer />
          </div>
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/212664234292"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;