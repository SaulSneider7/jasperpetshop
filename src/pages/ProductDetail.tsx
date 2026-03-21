import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import type { ProductVariant } from '../data/products';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faClock,
  faCircleCheck,
  faCircleInfo,
  faWeightHanging,
  faRulerCombined,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.variants ? product.variants[0] : null
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="pt-48 pb-20 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-[#B59410] font-bold uppercase tracking-widest  border-b border-[#B59410]">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentImage = selectedVariant?.image || product.image;
  const currentDescription = selectedVariant?.description || product.description;
  const currentDimensions = selectedVariant?.dimensions;
  const currentWeight = selectedVariant?.weight;
  const discount = selectedVariant?.discountPercentage || product.discountPercentage;

  const handleAddToCart = () => {
    const basePrice = selectedVariant?.oldPrice || (discount ? product.price : undefined);
    addToCart(product, selectedVariant?.size, currentPrice, basePrice, discount);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Link to="/catalogo" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#B59410] transition-colors mb-12 group">
          <FontAwesomeIcon icon={faChevronLeft} className=" group-hover:-translate-x-1 transition-transform" />
          <span className=" uppercase tracking-[0.2em] font-bold">Volver al Catálogo</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Product Image */}
          <div className="relative" data-aos="fade-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white"
              >
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <img
                    src={currentImage}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {discount && (
              <div className="absolute top-8 left-8 bg-[#B59410] text-white px-4 py-2 rounded-full font-bold  uppercase tracking-widest shadow-lg">
                -{discount}% OFF
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col" data-aos="fade-left">
            <div className="mb-8">
              <span className="text-[#B59410] font-bold uppercase tracking-[0.3em]  mb-4 block">{product.category}</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1a1a1a] leading-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-3xl font-bold text-[#1a1a1a]">{currentPrice}</p>
                {discount && (
                  <p className="text-lg text-gray-300 line-through font-medium">
                    {selectedVariant?.oldPrice || product.price}
                  </p>
                )}
              </div>
              <div className="space-y-4 text-lg text-gray-500 leading-relaxed font-light">
                {currentDescription.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Variants / Sizes */}
            {product.variants && (
              <div className="mb-10">
                <h3 className=" uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Seleccionar Talla</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-3 rounded-2xl  font-bold uppercase tracking-widest transition-all border-2 ${selectedVariant?.size === v.size
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-xl scale-105'
                        : 'bg-white text-[#1a1a1a] border-gray-100 hover:border-[#B59410]'
                        }`}
                    >
                      {v.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specs (Dynamic based on variant) */}
            {(currentDimensions || currentWeight) && (
              <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-white rounded-3xl border border-gray-50 shadow-sm">
                {currentDimensions && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fcfaf7] flex items-center justify-center text-[#B59410]">
                      <FontAwesomeIcon icon={faRulerCombined} />
                    </div>
                    <div>
                      <p className=" uppercase tracking-widest text-gray-400 font-bold">Medidas</p>
                      <p className="font-bold text-[#1a1a1a]">{currentDimensions}</p>
                    </div>
                  </div>
                )}
                {currentWeight && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fcfaf7] flex items-center justify-center text-[#B59410]">
                      <FontAwesomeIcon icon={faWeightHanging} />
                    </div>
                    <div>
                      <p className=" uppercase tracking-widest text-gray-400 font-bold">Peso Recomendado</p>
                      <p className=" font-bold text-[#1a1a1a]">{currentWeight}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1a1a1a] text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em]  flex items-center justify-center gap-4 hover:bg-[#B59410] transition-all shadow-2xl shadow-black/10 active:scale-[0.98] mb-12"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Añadir al Carrito
            </button>

            {/* Production Time */}
            {product.productionTime && (
              <div className="flex items-start gap-4 p-6 bg-[#B59410]/5 rounded-3xl border border-[#B59410]/10 mb-12">
                <div className="w-10 h-10 rounded-full bg-[#B59410] flex items-center justify-center text-white shrink-0 mt-1">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="space-y-2">
                  <p className=" uppercase tracking-widest font-bold text-[#B59410] mb-1">Tiempo de Producción</p>
                  <p className=" font-medium text-[#1a1a1a]">{product.productionTime} </p>
                  {product.deliveryInfo && (
                    <p className=" font-medium text-[#1a1a1a]">{product.deliveryInfo}</p>
                  )}
                  {product.shippingInfo && (
                    <p className=" font-medium text-[#1a1a1a]"> {product.shippingInfo}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Details Tabs/Sections */}
        <div className="space-y-10">
          {/* Characteristics */}
          {product.characteristics && (
            <div>
              <h3 className=" uppercase tracking-[0.2em] font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-[#B59410]" />
                Características
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.characteristics.map((char, i) => (
                  <li key={i} className="flex items-center gap-3  text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B59410]" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Important */}
          {product.important && (
            <div>
              <h3 className=" uppercase tracking-[0.2em] font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleInfo} className="text-[#B59410]" />
                Importante
              </h3>
              <div className="space-y-3">
                {product.important.map((imp, i) => (
                  <p key={i} className=" text-gray-500 leading-relaxed pl-6 relative">
                    <span className="absolute left-0 top-2.5 w-4 h-[1px] bg-gray-200" />
                    {imp}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
