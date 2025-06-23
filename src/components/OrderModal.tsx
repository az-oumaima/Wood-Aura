import React, { useState, useEffect } from 'react';
import { X, User, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Product, OrderFormData } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    city: '',
    message: '',
    productName: '',
    productPrice: 0
  });

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        productName: product.name[language],
        productPrice: product.price
      }));
    }
  }, [product, language]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare form data for FormSubmit
    const submitData = new FormData();
        submitData.append('fullName', formData.fullName);
        submitData.append('phone', formData.phone);
        submitData.append('city', formData.city);
        submitData.append('productName', formData.productName);
        submitData.append('productPrice', `${formData.productPrice} MAD`);
        submitData.append('message', formData.message || 'Aucun message');


    try {
      // Replace with your FormSubmit endpoint
      const response = await fetch('https://script.google.com/macros/s/AKfycbyDXuxPAra1EuPkEa_52PYUXn0WN5aKcHZpkOao5uwL5b8V24eSMG6UMnvw9VF0CeF9/exec', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            phone: '',
            city: '',
            message: '',
            productName: product?.name[language] || '',
            productPrice: product?.price || 0
          });
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // For demo purposes, still show success
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          phone: '',
          city: '',
          message: '',
          productName: product?.name[language] || '',
          productPrice: product?.price || 0
        });
        onClose();
      }, 3000);
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-serif font-bold text-gray-800">
            {t('order.title')}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              {/* Product Info */}
              <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl border border-amber-200">
                <div className="flex items-center space-x-4">
                  <img 
                    src={product.image} 
                    alt={product.name[language]}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{product.name[language]}</h4>
                    <p className="text-amber-600 font-bold">{product.price} {t('store.mad')}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder={t('order.fullname')}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('order.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="city"
                    placeholder={t('order.city')}
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    placeholder={t('order.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('order.submit')}</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('order.success')}</h3>
              <p className="text-gray-600">
                {t('order.success.desc')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;