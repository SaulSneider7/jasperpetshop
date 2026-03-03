import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
    delay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = React.useState(product.variants?.[0]?.size || '');
    const [currentPrice, setCurrentPrice] = React.useState(product.variants?.[0]?.price || product.price);

    const handleSizeChange = (size: string, price: string) => {
        setSelectedSize(size);
        setCurrentPrice(price);
    };

    return (
        <div className="group" data-aos="fade-up" data-aos-delay={delay}>
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 bg-white shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                    <button
                        onClick={() => addToCart(product, selectedSize, currentPrice)}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#D4AF37] transition-all border border-white/30"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                {/* Mobile: Always visible or partially visible button */}
                <div className="absolute bottom-6 left-6 right-6 md:translate-y-24 md:group-hover:translate-y-0 transition-transform duration-500">
                    <button
                        onClick={() => addToCart(product, selectedSize, currentPrice)}
                        className="w-full bg-[#1a1a1a] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors shadow-lg"
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="text-xs" /> Añadir al Carrito
                    </button>
                </div>
            </div>
            <div className="flex flex-col px-2">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">{product.category}</p>
                        <h3 className="text-lg font-serif font-bold tracking-tight text-[#1a1a1a]">{product.name}</h3>
                    </div>
                    <p className="text-lg font-bold text-[#1a1a1a]">{currentPrice}</p>
                </div>

                {product.variants && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {product.variants.map((v) => (
                            <button
                                key={v.size}
                                onClick={() => handleSizeChange(v.size, v.price)}
                                className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all border ${selectedSize === v.size
                                        ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                                        : 'bg-white text-[#1a1a1a] border-gray-200 hover:border-[#D4AF37]'
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
