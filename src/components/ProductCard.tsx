import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { calculateDiscountedPrice } from '../utils/priceUtils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = React.useState(product.variants?.[0]?.size || '');
  const [basePrice, setBasePrice] = React.useState(product.variants?.[0]?.price || product.price);
  const [discount, setDiscount] = React.useState(product.variants?.[0]?.discountPercentage || product.discountPercentage);

  const handleSizeChange = (size: string, price: string, discountPercentage?: number) => {
    setSelectedSize(size);
    setBasePrice(price);
    setDiscount(discountPercentage);
  };

  const discountedPrice = calculateDiscountedPrice(basePrice, discount);
  const hasDiscount = !!discount && discount > 0;

  return (
    <div className="group bg-white p-3 md:p-5 rounded-[32px] md:rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative w-full pb-[125%] rounded-[24px] md:rounded-[40px] overflow-hidden mb-4 md:mb-8 bg-gray-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {hasDiscount && (
          <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10">
            <div className="bg-[#D4AF37] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <span>-{discount}%</span>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 md:top-6 md:right-6">
          <button 
            onClick={() => addToCart(product, selectedSize, discountedPrice, basePrice, discount)}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] hover:bg-[#D4AF37] hover:text-white transition-all border border-white/50 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} className="text-xs md:text-base" />
          </button>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 md:translate-y-24 md:group-hover:translate-y-0 transition-transform duration-500">
          <button 
            onClick={() => addToCart(product, selectedSize, discountedPrice, basePrice, discount)}
            className="w-full bg-[#1a1a1a] text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors shadow-lg"
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-[10px]" /> <span className="hidden xs:inline">Añadir</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-1 md:px-2 pb-1 md:pb-2">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 md:mb-4 gap-1">
          <div className="max-w-full">
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-0.5 md:mb-1.5">{product.category}</p>
            <h3 className="text-sm md:text-xl font-serif font-bold tracking-tight text-[#1a1a1a] leading-tight line-clamp-1">{product.name}</h3>
          </div>
          <div className="text-right">
            {hasDiscount && (
              <p className="text-[10px] md:text-xs text-gray-400 line-through font-medium">{basePrice}</p>
            )}
            <p className="text-sm md:text-xl font-bold text-[#1a1a1a] whitespace-nowrap">{discountedPrice}</p>
          </div>
        </div>
        
        {product.variants && (
          <div className="flex flex-wrap gap-1 md:gap-2.5 mt-auto">
            {product.variants.map((v) => (
              <button
                key={v.size}
                onClick={() => handleSizeChange(v.size, v.price, v.discountPercentage)}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl text-[7px] md:text-[9px] font-bold uppercase tracking-widest transition-all border ${
                  selectedSize === v.size 
                    ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md' 
                    : 'bg-white text-[#1a1a1a] border-gray-200 hover:border-[#D4AF37] hover:bg-gray-50'
                }`}
              >
                {v.size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
