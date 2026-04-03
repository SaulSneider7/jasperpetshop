import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet,
  faRightLeft,
  faMoneyBillWave,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

const categories = ['Todos', 'Camas', 'Sofás', 'Colchones', 'Colchonetas', 'Escaleras', 'Accesorios', 'Juguetes'];

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tighter text-[#1a1a1a]">
            Nuestro <span className="text-[#B59410] italic">Catálogo</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Explora nuestra colección completa de mobiliario premium diseñado exclusivamente para el bienestar de tu mascota.
          </p>
          <p className="mt-4 text-sm font-bold text-[#B59410] uppercase tracking-widest">
            Mostrando {filteredProducts.length} productos
          </p>
        </div>

        {/* Payment Info Section */}
        <div className="mb-16 bg-[#1a1a1a] text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B59410] opacity-10 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B59410] opacity-10 blur-[100px] -ml-32 -mb-32" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Medios de <span className="text-[#B59410] italic">Pago Aceptados</span>
              </h2>
              <p className="text-gray-400 text-lg font-light mb-8">
                Ofrecemos diversas opciones para que tu compra sea rápida y segura. Elige la que mejor se adapte a ti.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Yape / Plim */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                  <FontAwesomeIcon icon={faWallet} className="text-[#B59410]" />
                  <span className="font-medium">Yape / Plim</span>
                </div>

                {/* Transferencia */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                  <FontAwesomeIcon icon={faRightLeft} className="text-[#B59410]" />
                  <span className="font-medium">Transferencia</span>
                </div>

                {/* Efectivo */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#B59410]" />
                  <span className="font-medium">Efectivo</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B59410]/20 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faCreditCard} className="text-[#B59410] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pagos con Tarjeta</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Aceptamos todas las tarjetas de <span className="text-white font-medium">Débito y Crédito</span>.
                    <br />
                    <span className="text-[#B59410] font-bold mt-2 inline-block">
                      * Aplica un recargo del 5% sobre el valor del producto.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-[#1a1a1a] text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};
