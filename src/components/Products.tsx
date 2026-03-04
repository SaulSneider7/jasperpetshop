import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';

export const Products = () => {
  // Show only first 4 products on home page
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="productos" className="py-32 bg-[#1a1a1a] text-white rounded-[60px] mx-4 my-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Colección <br /> <span className="text-[#D4AF37]">Exclusiva</span></h2>
            <p className="text-gray-400 max-w-md">Piezas limitadas diseñadas para los gustos más exigentes.</p>
          </div>
          <div className="flex gap-4" data-aos="fade-left">
            <Link to="/catalogo" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">Ver Todo el Catálogo</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
