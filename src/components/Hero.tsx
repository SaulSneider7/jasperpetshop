import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    // Cambiamos min-h-[70vh] por min-h-screen o h-screen
    // Eliminamos pt-32 para que el centrado sea perfecto, o usamos flex-col si hay un navbar fijo
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background Accents - Ajustado para cubrir el 100% de la altura */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B59410]/5 -skew-x-12 translate-x-1/4"></div>

      {/* Eliminamos el pt-32 y ajustamos el grid para que ocupe el ancho completo */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        <div className="lg:col-span-7" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#B59410]/20 shadow-sm mb-8">
            <FontAwesomeIcon icon={faStar} className="text-[#B59410] text-[10px]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B59410]">Excelencia en el Descanso de tu Mascota</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 tracking-tighter text-[#1a1a1a]">
            Comodidad y estilo <br />
            para quienes más amas. <br />
            <span className="text-[#B59410] italic">
              Son familia
            </span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
            Creamos espacios de descanso y comodidad para quienes forman parte de tu familia. Descubre nuestras camas, sofás, escaleras y accesorios.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <button className="bg-[#1a1a1a] text-white px-10 py-5 rounded-xl flex items-center gap-3 hover:bg-[#B59410] transition-all group shadow-xl shadow-black/10">
              <span className="font-bold uppercase tracking-widest text-xs">Explorar Catálogo</span>
              <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 transition-transform text-xs" />
            </button>
            
            <div className="flex -space-x-2 items-center border-l border-gray-200 pl-8">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  alt="User"
                />
              ))}
              <div className="pl-4">
                <p className="text-[11px] font-bold text-[#1a1a1a]">+2k Clientes Felices</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <FontAwesomeIcon key={s} icon={faStar} className="text-[#B59410] text-[7px]" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen ajustada para que luzca mejor en pantalla completa */}
        <div className="lg:col-span-5 relative hidden lg:block" data-aos="fade-left" data-aos-delay="200">
          <div className="relative z-10 rounded-[50px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white">
            <img
              src="./logo_jasperpetshop.jpeg"
              alt="Luxury Pet Bed"
              className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </div>
          {/* Elemento decorativo extra para llenar el espacio vertical */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B59410] rounded-full -z-10 blur-2xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};