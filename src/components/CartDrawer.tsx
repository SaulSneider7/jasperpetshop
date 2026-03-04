import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus, faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
    const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, cartCount, clearCart } = useCart();

    React.useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#fcfaf7] p-2 rounded-xl">
                                    <FontAwesomeIcon icon={faBagShopping} className="text-[#D4AF37] text-lg" />
                                </div>
                                <h2 className="text-lg md:text-xl font-serif font-bold">Tu Carrito ({cartCount})</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-[#1a1a1a]"
                                aria-label="Cerrar carrito"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-[#fcfaf7] rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBagShopping} className="text-gray-300 text-3xl" />
                                    </div>
                                    <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs border-b border-[#D4AF37]"
                                    >
                                        Seguir comprando
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-sm leading-tight">{item.name}</h3>
                                                        {item.selectedSize && (
                                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Talla: {item.selectedSize}</p>
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                        className="text-gray-300 hover:text-red-500 transition-colors"
                                                    >
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </div>
                                                <p className="text-[#D4AF37] font-bold text-sm mt-1">{item.price}</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                                                        className="p-1.5 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} className="text-[10px]" />
                                                    </button>
                                                    <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                                                        className="p-1.5 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-[#fcfaf7]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-500 font-medium">Subtotal</span>
                                    <span className="text-2xl font-serif font-bold text-[#1a1a1a]">S/ {cartTotal.toLocaleString()}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        const phoneNumber = "51903433063";
                                        const message = `Hola JASPERPETSHOP! 👋 Me gustaría realizar el siguiente pedido:\n\n` +
                                            cartItems.map(item => `• ${item.name} ${item.selectedSize ? `(Talla: ${item.selectedSize})` : ''} (${item.quantity}x) - ${item.price}`).join('\n') +
                                            `\n\n*Total: S/ ${cartTotal.toLocaleString()}*\n\n¿Podrían confirmarme la disponibilidad y el costo de envío? Gracias! 🐾`;

                                        const encodedMessage = encodeURIComponent(message);
                                        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

                                        // Clear cart after checkout
                                        clearCart();
                                        setIsCartOpen(false);
                                    }}
                                    className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#25D366] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" /> Finalizar por WhatsApp
                                </button>
                                <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
                                    Envío calculado al finalizar la compra
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
