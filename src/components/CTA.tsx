import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CTA = () => {
    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[60px] overflow-hidden bg-[#D4AF37] p-12 md:p-24 text-white text-center" data-aos="zoom-in">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Lo mejor para tu mascota, en un solo lugar. <br /> Diseñado para su bienestar diario, donde el descanso cobra valor.
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
                            Únete a nuestra comunidad de amantes de las mascotas y recibe un 5% de descuento en tu primera compra.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://wa.me/51903433063?text=Hola%20JasperPetShop!,%20vengo%20a%20consentir%20a%20alguien%20especial...%20¿Me%20ayudas?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl"
                            >
                                Comprar por WhatsApp <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                            <Link to="/catalogo" className="bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white/30 transition-all">
                                Ver Catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
