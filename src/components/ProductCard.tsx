import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { Product, ProductVariant } from '../data/products';
import { useCart } from '../context/CartContext';
import { calculateDiscountedPrice } from '../utils/priceUtils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.variants?.[0]?.size || '');
  const [basePrice, setBasePrice] = useState(product.variants?.[0]?.price || product.price);
  const [discount, setDiscount] = useState(product.variants?.[0]?.discountPercentage || product.discountPercentage);
  const [currentImage, setCurrentImage] = useState(product.variants?.[0]?.image || product.image);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [product.variants]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSizeChange = (variant: ProductVariant) => {
    setSelectedSize(variant.size);
    setBasePrice(variant.price);
    setDiscount(variant.discountPercentage);
    if (variant.image) setCurrentImage(variant.image);
  };

  const discountedPrice = calculateDiscountedPrice(basePrice, discount);
  const hasDiscount = !!discount && discount > 0;
  const hasMultiplePrices = product.variants && product.variants.length > 1;

  // Mouse drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <div className="group bg-white p-3 md:p-5 rounded-[32px] md:rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative w-full pb-[125%] rounded-[24px] md:rounded-[40px] overflow-hidden mb-4 md:mb-8 bg-gray-50 flex-shrink-0">
        <Link to={`/producto/${product.id}`}>
          <img 
            src={currentImage} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {hasDiscount && (
          <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10">
            <div className="bg-[#B59410] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <span>-{discount}%</span>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 md:top-6 md:right-6">
          <button 
            onClick={() => addToCart(product, selectedSize, discountedPrice, basePrice, discount)}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] hover:bg-[#B59410] hover:text-white transition-all border border-white/50 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} className="text-xs md:text-base" />
          </button>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 md:translate-y-24 md:group-hover:translate-y-0 transition-transform duration-500">
          <Link 
            to={`/producto/${product.id}`}
            className="w-full bg-[#1a1a1a] text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#B59410] transition-colors shadow-lg"
          >
            <FontAwesomeIcon icon={faEye} className="text-[10px]" /> <span className="hidden xs:inline">Ver Detalle</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-1 md:px-2 pb-1 md:pb-2">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 md:mb-4 gap-1">
          <div className="max-w-full">
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#B59410] font-bold mb-0.5 md:mb-1.5">{product.category}</p>
            <Link to={`/producto/${product.id}`}>
              <h3 className="text-sm md:text-xl font-serif font-bold tracking-tight text-[#1a1a1a] leading-tight line-clamp-1 hover:text-[#B59410] transition-colors">{product.name}</h3>
            </Link>
          </div>
          <div className="text-right">
            {hasDiscount && (
              <p className="text-[10px] md:text-xs text-gray-400 line-through font-medium">{basePrice}</p>
            )}
            <div className="flex flex-col items-end">
              {hasMultiplePrices && !hasDiscount && (
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-[#B59410] font-bold">Desde</span>
              )}
              <p className="text-sm md:text-xl font-bold text-[#1a1a1a] whitespace-nowrap">{discountedPrice}</p>
            </div>
          </div>
        </div>
        
        {product.variants && (
          <div className="mt-auto relative">
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
              {product.variants.length > 4 ? 'Tallas disponibles' : 'Seleccionar Talla'}
            </p>
            
            <div className="relative group/scroll">
              {/* Left Arrow */}
              {showLeftArrow && (
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white/90 rounded-full shadow-md flex items-center justify-center text-[#B59410] hover:bg-[#B59410] hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-[8px]" />
                </button>
              )}

              {/* Right Arrow */}
              {showRightArrow && (
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white/90 rounded-full shadow-md flex items-center justify-center text-[#B59410] hover:bg-[#B59410] hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-[8px]" />
                </button>
              )}

              {/* Gradient Fades */}
              {showLeftArrow && <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />}
              {showRightArrow && <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />}

              <div 
                ref={scrollRef}
                onScroll={checkScroll}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar cursor-grab active:cursor-grabbing select-none`}
              >
                {product.variants.map((v) => (
                  <button
                    key={v.size}
                    onClick={() => handleSizeChange(v)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[7px] md:text-[9px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap flex-shrink-0 ${
                      selectedSize === v.size 
                        ? 'bg-[#B59410] text-white border-[#B59410] shadow-md' 
                        : 'bg-white text-[#1a1a1a] border-gray-100 hover:border-[#B59410] hover:bg-gray-50'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
