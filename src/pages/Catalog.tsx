import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Catalog = () => {
    const [activeCategory, setActiveCategory] = React.useState('Todos');
    const categories = ['Todos', 'Camas', 'Sofás', 'Accesorios'];

    const filteredProducts = activeCategory === 'Todos'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-32 pb-20 bg-[#fcfaf7] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16" data-aos="fade-down">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tighter text-[#1a1a1a]">
                        Nuestro <span className="text-[#D4AF37] italic">Catálogo</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl font-light">
                        Explora nuestra colección completa de mobiliario premium diseñado exclusivamente para el bienestar de tu mascota.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16" data-aos="fade-up">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat
                                        ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30'
                                        : 'bg-white text-gray-400 hover:text-black border border-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Buscar producto..."
                                className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 pl-12 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                            />
                            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                        </div>
                        <button className="bg-white border border-gray-100 p-3 rounded-2xl text-gray-400 hover:text-black transition-all">
                            <FontAwesomeIcon icon={faSliders} className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} delay={i * 50} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-400">No se encontraron productos en esta categoría.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
