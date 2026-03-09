import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const categories = ['Todos'];

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 bg-[#fcfaf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tighter text-[#1a1a1a]">
            Nuestro <span className="text-[#D4AF37] italic">Catálogo</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Explora nuestra colección completa de mobiliario premium diseñado exclusivamente para el bienestar de tu mascota.
          </p>
          <p className="mt-4 text-sm font-bold text-[#D4AF37] uppercase tracking-widest">
            Mostrando {filteredProducts.length} productos
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
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
