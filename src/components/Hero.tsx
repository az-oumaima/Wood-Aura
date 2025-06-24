import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToStore = () => {
    document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mt-0 mb-0">
      {/* Background with wood texture effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-amber-900/20 via-transparent to-emerald-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(47,79,79,0.08),transparent_50%)]"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-amber-200/30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-emerald-200/20 blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-0 mb-0">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-2 leading-tight">
          Wood Aura
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-10">
          <button 
            onClick={scrollToStore}
            className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-800 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('hero.explore')}
            <ArrowDown className="inline-block ml-2 w-5 h-5" />
          </button>
          
          <button 
            onClick={() => document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 hover:text-white transition-all duration-300"
          >
            {t('hero.order')}
          </button>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
            fill="rgba(255,255,255,0.8)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;