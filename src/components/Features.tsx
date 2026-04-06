import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruck,
    faShieldHalved,
    faHeart,
    faComment
} from '@fortawesome/free-solid-svg-icons';

const features = [
    { icon: faTruck, title: "Envío Express", desc: "Delivery seguro a todo el país." },
    { icon: faShieldHalved, title: "Premium", desc: "Materiales de alta durabilidad." },
    { icon: faHeart, title: "Ergonómico", desc: "Cuidado de sus articulaciones." },
    { icon: faComment, title: "Atención 24/7", desc: "Atención personalizada." }
];

export const Features = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-[#f3eee7] bg-[#fffdfb] p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#fcfaf7] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500 transform group-hover:-rotate-6">
                                <FontAwesomeIcon
                                    icon={f.icon}
                                    className="text-[#D4AF37] group-hover:text-white transition-colors text-lg sm:text-2xl"
                                />
                            </div>

                            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 tracking-tight text-[#1f1f1f] leading-snug">
                                {f.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};