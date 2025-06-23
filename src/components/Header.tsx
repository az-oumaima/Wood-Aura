import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.webp'; // Import the logo

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-[#e7c9a9]/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo} // Use the imported logo
              alt="Wood Aura Logo"
              className="h-20 w-30 mr-3 object-contain"
            />

          </div>

          <div className="flex-1 flex justify-center">
            <span className="text-lg font-semibold text-amber-900 text-center">
              {t('header.delivery')}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-600" />
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'fr'
                    ? 'bg-white text-amber-700 shadow-sm'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'ar'
                    ? 'bg-white text-amber-700 shadow-sm'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;