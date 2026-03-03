import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShieldHalved, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const features = [
    { icon: faTruck, title: "Envío Express", desc: "Delivery seguro a todo el país." },
    { icon: faShieldHalved, title: "Premium", desc: "Materiales de alta durabilidad." },
    { icon: faHeart, title: "Ergonómico", desc: "Cuidado de sus articulaciones." },
    { icon: faComment, title: "Soporte 24/7", desc: "Atención personalizada." }
];

export const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#fcfaf7] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500 transform group-hover:-rotate-6">
                                <FontAwesomeIcon icon={f.icon} className="text-[#D4AF37] group-hover:text-white transition-colors text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 tracking-tight">{f.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
