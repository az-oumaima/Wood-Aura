import React, { useState } from 'react';
import { Heart, Share2, Star } from 'lucide-react';
import OrderModal from './OrderModal';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from '../types';

interface ProductShowcaseProps {
  product: Product;
  onPurchase?: () => void;
  className?: string;
  features?: string[];
  rating?: number;
}

export default function ProductShowcase({
  product,
  onPurchase,
  className = "",
  features = [],
  rating = 4.8
}: ProductShowcaseProps) {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { language, t } = useLanguage();

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const currentImg = images[carouselIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const discount = Math.round(
    ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
  );

  return (
    <div className={`bg-gradient-to-br from-amber-50 to-stone-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Image Section */}
            <div className="relative bg-gradient-to-br from-amber-50 to-stone-50 aspect-square w-full max-w-2xl mx-auto overflow-hidden flex flex-col items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-4 w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
                <div
                  className={`cursor-pointer transition-transform duration-700 ease-out ${
                    isImageZoomed ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                  onClick={handleImageClick}
                >
                  <img
                    src={currentImg}
                    alt={product.name[language]}
                    className="object-contain object-center rounded-2xl shadow-lg max-w-full max-h-[260px] sm:max-h-[320px] lg:max-h-[360px] w-auto h-auto mx-auto"
                  />
                </div>
                {isImageZoomed && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button
                      onClick={handleImageClick}
                      className="bg-white text-stone-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-stone-50 transition-colors"
                    >
                      Cliquez pour dézoomer
                    </button>
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex flex-row gap-3 mt-4 justify-center">
                  {images.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setCarouselIndex(idx)}
                      className={`border-2 rounded-lg p-0.5 transition-all duration-200 focus:outline-none ${
                        idx === carouselIndex
                          ? 'border-amber-600 shadow-lg'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      style={{ background: '#fff' }}
                      aria-label={`Voir l'image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-16 h-16 object-contain rounded-md"
                      />
                    </button>
                  ))}
                </div>
              )}
              {/* Floating Action Buttons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-3">
                <button
                  onClick={toggleWishlist}
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                    isWishlisted 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-stone-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 bg-white text-stone-600 rounded-full shadow-lg hover:bg-stone-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Fait Main
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-stone-600 ml-2">({rating})</span>
                  </div>
                </div>

                {/* Product Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                    {product.name[language]}
                  </h1>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-base text-stone-600 leading-relaxed">
                    {product.description[language]}
                  </p>
                  
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-stone-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-stone-900">{product.discountedPrice} MAD</span>
                    <span className="text-lg text-stone-500 line-through">{product.originalPrice} MAD</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      -{discount}%
                    </span>
                  </div>
                  <p className="text-sm text-stone-500">{t('store.free.delivery.full')}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6">
                  <button 
                    onClick={handlePurchase}
                    className="w-full bg-amber-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-amber-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    {language === 'ar' ? 'اطلب الآن' : 'Acheter Maintenant'}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-stone-100">
                  <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                    <div>
                      <p className="font-semibold text-stone-900">{t('store.free.delivery')}</p>
                      <p>{t('store.free.delivery.full')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{t('store.cash.delivery')}</p>
                      <p>{t('store.cash.delivery.full')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isModalOpen && product && (
            <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={product} />
          )}
        </div>
      </div>
    </div>
  );
} 