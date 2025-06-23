import React from 'react';
import { Heart, Leaf, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import salon from '../assets/salon.png'; // Assuming you have a salon image in your assets

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 rounded-full mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('about.handcrafted')}</h3>
                <p className="text-sm text-gray-600">{t('about.handcrafted.desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('about.sustainable')}</h3>
                <p className="text-sm text-gray-600">{t('about.sustainable.desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('about.excellence')}</h3>
                <p className="text-sm text-gray-600">{t('about.excellence.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img 
                src={salon} 
                alt="Handcrafted wood and epoxy table in a cozy interior"
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                style={{ aspectRatio: "1/1" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200/60 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200/40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;