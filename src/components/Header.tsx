import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.webp'; // Import the logo
import { Link } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  // Center header content for Arabic
  const containerClass =
    language === 'ar'
      ? 'flex flex-col md:flex-row md:items-center md:justify-center'
      : 'flex flex-col md:flex-row md:items-center md:justify-between';

  return (
    <header className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className={containerClass}>
          {/* Mobile: Delivery text on top, Desktop: centered */}
          <div className="block md:hidden w-full flex justify-center mb-2">
            <span className="text-lg font-semibold text-gray-200 text-center">
              {t('header.delivery')}
            </span>
          </div>
          {/* Mobile: logo + language switcher in a row, Desktop: original layout */}
          <div className={`flex flex-row items-center w-full md:w-auto md:justify-between md:flex-1 md:items-center ${language === 'ar' ? 'justify-center' : 'justify-between'}`}>
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo} // Use the imported logo
                  alt="Wood Aura Logo"
                  className="h-12 w-20 mr-3 object-contain cursor-pointer"
                />
              </Link>
            </div>
            {/* Desktop: Delivery text centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <span className="text-lg font-semibold text-gray-200 text-center">
                {t('header.delivery')}
              </span>
            </div>
            {/* Language Switcher */}
            <div className={`flex items-center space-x-2 ${language === 'ar' ? '' : 'ml-auto'}`}>
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
      </div>
    </header>
  );
};

export default Header;