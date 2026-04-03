import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const customers = [
  {
    id: 1,
    name: "Hablando Huebadas",
    image: "/hh.jpeg",
    videoUrl: "https://vt.tiktok.com/ZSHk5krkJ/",
    testimonial: "¡Amamos nuestra nueva cama! La calidad es increíble."
  },
  {
    id: 2,
    name: "Maribel Aguero",
    image: "/maribel_aguero.jpeg",
    videoUrl: "https://vt.tiktok.com/ZSHkm18tb/",
    testimonial: "El sofá más cómodo que Max ha tenido jamás."
  },
  {
    id: 3,
    name: "Marisol Aguirre",
    image: "/marisol_aguirre.jpeg",
    videoUrl: "https://vt.tiktok.com/ZSHk53sqG/",
    testimonial: "Jasper Pet Shop superó nuestras expectativas."
  },
  {
    id: 4,
    name: "Nelly Rosinelli",
    image: "/nelly_rosinelli.jpeg",
    videoUrl: "https://vt.tiktok.com/ZSHkUHfGw/",
    testimonial: "Atención personalizada y productos de lujo."
  },
  {
    id: 5,
    name: "Ursula Boza",
    image: "/ursula_boza.jpeg",
    videoUrl: "https://vt.tiktok.com/ZSHkmrHuy/",
    testimonial: "El envío a provincia fue súper rápido y seguro."
  }
];

export const SatisfiedCustomers = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tighter text-[#1a1a1a]">
            Clientes <span className="text-[#B59410] italic">Satisfechos</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Historias reales de mascotas felices disfrutando de la experiencia Jasper.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <motion.a
              key={customer.id}
              href={customer.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-4">
                  {/* 2. Uso del componente FontAwesomeIcon */}
                  <div className="w-12 h-12 rounded-full bg-[#B59410] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <FontAwesomeIcon icon={faPlay} className="text-lg ml-1" /> 
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{customer.name}</h3>
                    <p className="text-white/80 text-sm italic">Ver video</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm line-clamp-2 font-light">
                  "{customer.testimonial}"
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B59410]/30 rounded-3xl transition-colors duration-500" />
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">¿Quieres aparecer aquí? Etiquétanos en tus historias</p>
          <a 
            href="https://instagram.com/jasperpetshop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B59410] font-bold hover:underline"
          >
            {/* También puedes usarlo aquí si quieres el icono de Instagram de FA */}
            @jasperpetshop
          </a>
        </div>
      </div>
    </section>
  );
};
