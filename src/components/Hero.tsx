import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#fcfaf7]">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 -skew-x-12 translate-x-1/4"></div>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7" data-aos="fade-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/20 shadow-sm mb-8">
                        <FontAwesomeIcon icon={faStar} className="text-[#D4AF37] text-[10px]" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">Excelencia en Descanso Animal</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 tracking-tighter">
                        Confort <br />
                        <span className="text-[#D4AF37] italic">Real</span> para <br />
                        tu Mascota.
                    </h1>

                    <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed font-light">
                        Elevamos el bienestar de tus compañeros con mobiliario de lujo diseñado para integrarse perfectamente en tu hogar moderno.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-[#D4AF37] transition-all group shadow-xl shadow-black/10">
                            <span className="font-bold uppercase tracking-widest text-xs">Explorar Catálogo</span>
                            <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 transition-transform text-xs" />
                        </button>
                        <div className="flex -space-x-2 items-center">
                            {[1, 2, 3].map((i) => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    alt="User"
                                />
                            ))}
                            <div className="pl-4">
                                <p className="text-[10px] font-bold">+2k Clientes Felices</p>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => <FontAwesomeIcon key={s} icon={faStar} className="text-[#D4AF37] text-[6px]" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="200">
                    <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[8px] border-white">
                        <img
                            src="./logo_jasperpetshop.jpeg"
                            alt="Luxury Pet Bed"
                            className="w-full aspect-[4/5] object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
