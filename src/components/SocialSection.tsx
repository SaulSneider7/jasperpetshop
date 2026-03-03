import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const SocialSection = () => {
    const socialPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
            link: "https://www.instagram.com/invites/contact/?i=1vlgoav5whto1&utm_content=myftgi8"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400",
            link: "https://www.instagram.com/invites/contact/?i=1vlgoav5whto1&utm_content=myftgi8"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=400",
            link: "https://www.instagram.com/invites/contact/?i=1vlgoav5whto1&utm_content=myftgi8"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&q=80&w=400",
            link: "https://www.instagram.com/invites/contact/?i=1vlgoav5whto1&utm_content=myftgi8"
        }
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Comunidad Jasper</span>
                    <h2 className="text-5xl font-serif font-bold mb-6">Síguenos en Redes</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Únete a nuestra comunidad en Instagram y Facebook para ver a nuestros clientes felices y enterarte de las últimas novedades.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-16 flex justify-center gap-8" data-aos="fade-up">
                    <a
                        href="https://www.facebook.com/share/1Ab4s8pTZ7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-lg" /> @jasperpetshop
                    </a>
                    <a
                        href="https://www.instagram.com/invites/contact/?i=1vlgoav5whto1&utm_content=myftgi8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-lg" /> @jasperpetshop
                    </a>
                </div>
            </div>
        </section>
    );
};
