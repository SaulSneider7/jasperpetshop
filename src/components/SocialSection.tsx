import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const SocialSection = () => {
  const socialPosts = [
    {
      id: 1,
      image: "/foto_facebook.jpeg",
      link: "https://www.facebook.com/profile.php?id=100076152527984",
      icon: faFacebook
    },
    {
      id: 2,
      image: "/foto_instagram.jpeg",
      link: "https://www.instagram.com/jasperpetshop/",
      icon: faInstagram
    },
    {
      id: 3,
      image: "/foto_tiktok.jpeg",
      link: "https://www.tiktok.com/@jasperpetshop",
      icon: faTiktok
    }
  ];

  return (
    <section id="redes" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Comunidad Jasper</span>
          <h2 className="text-5xl font-serif font-bold mb-6">Síguenos en Redes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Únete a nuestra comunidad en Instagram, Facebook y TikTok para ver a nuestros clientes felices y enterarte de las últimas novedades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {socialPosts.map((post, i) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative aspect-square rounded-[32px] overflow-hidden group shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img 
                src={post.image} 
                alt={`Social post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FontAwesomeIcon icon={post.icon} className="text-white text-3xl" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12" data-aos="fade-up">
          <a 
            href="https://www.facebook.com/profile.php?id=100076152527984" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-lg" /> Facebook
          </a>
          <a 
            href="https://www.instagram.com/jasperpetshop/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" /> Instagram
          </a>
          <a 
            href="https://www.tiktok.com/@jasperpetshop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="text-lg" /> TikTok
          </a>
        </div>
      </div>
    </section>
  );
};
