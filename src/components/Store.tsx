import React, { useState } from 'react';
import { Clock, Table, Layers, Truck, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import { Product } from '../types';
import OrderModal from './OrderModal';
import { Link, useNavigate } from 'react-router-dom';

const Store = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: t('store.all'), icon: null },
    { id: 'clocks', label: t('store.clocks'), icon: Clock },
    { id: 'tables', label: t('store.tables'), icon: Table },
    { id: 'etageres', label: language === 'fr' ? 'Autres' : language === 'ar' ? 'أخرى' : t('store.etageres'), icon: Layers },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCardClick = (product: Product) => {
    if (product.qte > 0) {
      navigate(`/showcase/${product.id}`);
    }
  };

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            {t('store.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('store.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.icon && <category.icon className="w-5 h-5" />}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const isAvailable = product.qte > 0;
            const cardContent = (
              <div
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full min-h-[540px]"
                onClick={() => handleCardClick(product)}
                style={{ cursor: isAvailable ? 'pointer' : 'default' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className={`w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700${isAvailable ? ' cursor-pointer' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Delivery badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Truck className="w-3 h-3" />
                      <span>{t('store.free.delivery')}</span>
                    </div>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <CreditCard className="w-3 h-3" />
                      <span>{t('store.cash.delivery')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-xl font-serif font-bold text-gray-800 mb-2${isAvailable ? ' cursor-pointer hover:underline' : ''}`}> 
                    {product.name[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {product.description[language]}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-amber-600">
                        {product.discountedPrice} {t('store.mad')}
                      </span>
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {product.originalPrice} {t('store.mad')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleBuyClick(product); }}
                    disabled={product.qte === 0}
                    className={`w-full bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                      ${product.qte === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:from-amber-700 hover:to-emerald-700'}`}
                  >
                    {t('store.buy')}
                  </button>
                  {product.qte === 0 && (
                    <div className="mt-3 text-center text-red-600 font-bold text-lg">
                      {t('order.out_of_stock')}
                    </div>
                  )}
                </div>
              </div>
            );
            return (
              <div key={product.id} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default Store;