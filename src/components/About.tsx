import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
    return (
        <section id="nosotros" className="py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative" data-aos="fade-right">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 pt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
                                    className="rounded-[40px] shadow-2xl"
                                    alt="Cat"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="bg-[#D4AF37] p-8 rounded-[40px] text-white">
                                    <p className="text-4xl font-serif font-bold mb-2">100%</p>
                                    <p className="text-xs uppercase tracking-widest font-bold opacity-80">Calidad Artesanal</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-black p-8 rounded-[40px] text-white">
                                    <p className="text-4xl font-serif font-bold mb-2">+5k</p>
                                    <p className="text-xs uppercase tracking-widest font-bold opacity-80">Mascotas Felices</p>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=400"
                                    className="rounded-[40px] shadow-2xl"
                                    alt="Dog"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Nuestra Esencia</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Pequeños detalles, <br />
                            <span className="text-[#D4AF37] italic">grandes momentos.</span>
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            En JASPERPETSHOP, nos mueve el amor por las mascotas y los pequeños detalles que hacen grande su felicidad. Creemos que debemos consentirlos, cuidarlos y darles lo mejor cada día, porque forman parte de nuestra historia, de nuestro hogar y de nuestro corazón.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Materiales Hipoalergénicos",
                                "Estructuras de Madera Sólida",
                                "Telas Anti-Rasguños",
                                "Diseños Personalizables"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#D4AF37]" />
                                    <span className="font-bold text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contacto"
                            className="mt-12 border-b-2 border-[#D4AF37] pb-2 text-[#D4AF37] font-bold uppercase tracking-widest text-xs hover:text-black hover:border-black transition-all inline-block"
                        >
                            Conoce más sobre nosotros
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
