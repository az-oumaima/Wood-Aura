import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductShowcase from './ProductShowcase';
import { useLanguage } from '../contexts/LanguageContext';

const ProductShowcasePage: React.FC = () => {
  const { productId } = useParams();
  const { language } = useLanguage();
  const product = products.find(p => p.id === productId);

  if (!product) return <div className="text-center py-20 text-xl">Product not found.</div>;

  const discount = Math.round(
    ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
  );

  return (
    <ProductShowcase product={product} />
  );
};

export default ProductShowcasePage; 