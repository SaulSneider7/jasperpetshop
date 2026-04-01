import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-white pt-32 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-[#D4AF37] p-1.5 rounded-lg">
                <FontAwesomeIcon icon={faPaw} className="text-white text-xl" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight">
                JASPER<span className="text-[#D4AF37]">PETSHOP</span>
              </span>
            </div>
            <p className="text-lg text-gray-400 max-w-sm mb-10 leading-relaxed">
              Redefiniendo el descanso animal con piezas de diseño atemporales y materiales de la más alta calidad.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/jasperpetshop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#fcfaf7] flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100076152527984" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#fcfaf7] flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a 
                href="https://www.tiktok.com/@jasperpetshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#fcfaf7] flex items-center justify-center text-gray-400 hover:bg-[#000000] hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-xl" />
              </a>
              <a 
                href="https://wa.me/51903433063" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#fcfaf7] flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#D4AF37] mb-8">Compañía</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href="#nosotros" className="hover:text-black transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Sostenibilidad</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Prensa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#D4AF37] mb-8">Soporte</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href="https://wa.me/51903433063" className="hover:text-black transition-colors">Envíos</a></li>
                <li><a href="https://wa.me/51903433063" className="hover:text-black transition-colors">Devoluciones</a></li>
                <li><a href="https://wa.me/51903433063" className="hover:text-black transition-colors">Contacto WhatsApp</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#D4AF37] mb-8">Ubicación</h4>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Tienda Virtual con envíos a todo el Perú. <br />
                Lima, Perú.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                  Diseñado por <br />
                  <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-black transition-colors">tu-sitioweb.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">© 2024 JASPERPET. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
