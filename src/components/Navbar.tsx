import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars, faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const location = useLocation();
    const { cartCount, setIsCartOpen } = useCart();

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalogo' },
        { name: 'Nosotros', path: '/#nosotros' },
        { name: 'Contacto', path: '/#contacto' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-[#D4AF37] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                        <FontAwesomeIcon icon={faPaw} className="text-white text-xl" />
                    </div>
                    <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">
                        JASPER<span className="text-[#D4AF37]">PETSHOP</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold">
                    {navItems.map((item) => {
                        const isActive = location.pathname + location.hash === item.path ||
                            (item.path === '/' && location.pathname === '/' && !location.hash);
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`transition-colors relative group ${isActive ? 'text-[#D4AF37]' : 'text-[#1a1a1a] hover:text-[#D4AF37]'}`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        );
                    })}

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 text-[#1a1a1a] hover:text-[#D4AF37] transition-colors"
                    >
                        <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <Link to="/catalogo" className="bg-[#1a1a1a] text-white px-7 py-2.5 rounded-full hover:bg-[#D4AF37] transition-all transform hover:scale-105 active:scale-95">
                        TIENDA
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 text-[#1a1a1a]"
                    >
                        <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-0 -right-0 bg-[#D4AF37] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button className="text-[#1a1a1a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                <div className="flex flex-col p-8 gap-6 text-center font-bold uppercase tracking-widest text-sm">
                    {navItems.map((item) => (
                        <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                    ))}
                    <Link to="/catalogo" onClick={() => setIsMenuOpen(false)} className="bg-[#D4AF37] text-white py-4 rounded-xl">Ir a la Tienda</Link>
                </div>
            </div>
        </nav>
    );
};
