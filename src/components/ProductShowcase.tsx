import React, { useState } from 'react';
import { Heart, Share2, Star } from 'lucide-react';

interface ProductShowcaseProps {
  productImage?: string;
  productName?: string;
  productDescription?: string;
  originalPrice?: number;
  currentPrice?: number;
  discount?: number;
  rating?: number;
  features?: string[];
  onPurchase?: () => void;
  className?: string;
}

export default function ProductShowcase({
  productImage = "/photo1.jpg",
  productName = "Horloge Murale en Résine Époxy",
  productDescription = "Magnifique horloge murale artisanale en résine époxy de 40cm de diamètre. Chaque pièce est unique avec ses motifs naturels et ses nuances organiques qui apportent une touche d'élégance à votre intérieur.",
  originalPrice = 700,
  currentPrice = 499,
  discount = 29,
  rating = 4.8,
  features = [
    "Diamètre : 40cm",
    "Matériau : Résine Époxy Premium", 
    "Mécanisme Silencieux",
    "Chiffres Romains Dorés"
  ],
  onPurchase,
  className = ""
}: ProductShowcaseProps) {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleImageClick = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase();
    }
  };

  return (
    <div className={`bg-gradient-to-br from-amber-50 to-stone-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Image Section */}
            <div className="relative bg-gradient-to-br from-amber-50 to-stone-50 aspect-square lg:aspect-[4/3] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-6 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div 
                  className={`w-full h-full cursor-pointer transition-transform duration-700 ease-out flex items-center justify-center p-4 ${
                    isImageZoomed ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                  onClick={handleImageClick}
                >
                  <img
                    src={productImage}
                    alt={productName}
                    className="max-w-[80%] max-h-[80%] object-contain object-center rounded-lg shadow-sm"
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
              
              {/* Floating Action Buttons */}
              <div className="absolute top-8 right-8 flex flex-col space-y-3">
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
                    {productName}
                  </h1>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-base text-stone-600 leading-relaxed">
                    {productDescription}
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
                    <span className="text-3xl font-bold text-stone-900">{currentPrice} MAD</span>
                    <span className="text-lg text-stone-500 line-through">{originalPrice} MAD</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      -{discount}%
                    </span>
                  </div>
                  <p className="text-sm text-stone-500">Livraison gratuite dans tout le Maroc</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6">
                  <button 
                    onClick={handlePurchase}
                    className="w-full bg-amber-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-amber-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Acheter Maintenant
                  </button>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-stone-100">
                  <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                    <div>
                      <p className="font-semibold text-stone-900">Livraison Gratuite</p>
                      <p>Partout au Maroc</p>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">Paiement</p>
                      <p>À la livraison</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}