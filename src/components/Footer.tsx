import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.webp'; // Import the logo

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-start">
              <img
                src={logo}
                alt="Wood Aura Logo"
                className="h-20 mb-4 w-auto "
              />
            <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-amber-400 mt-2">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-sm">{t('footer.made.morocco')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a
                  href="tel:+212664234292"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  +212 664234292
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a
                  href="mailto:woodaura0@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  woodaura0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Morocco</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('footer.follow')}</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/woodaura0?igsh=ZnNqMXNrdW52ZjB2&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@woodaura</span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('footer.follow.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-amber-400 transition-colors duration-300"
              >
                {t('footer.order.now')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C150,0 350,120 600,60 C850,0 1050,120 1200,60 L1200,0 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;