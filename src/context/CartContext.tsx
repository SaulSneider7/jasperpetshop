import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';

interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, size?: string, price?: string) => void;
    removeFromCart: (productId: number, size?: string) => void;
    updateQuantity: (productId: number, quantity: number, size?: string) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('jasper_cart');
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (e) {
                    console.error("Failed to parse cart", e);
                }
            }
        }
        return [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem('jasper_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product, size?: string, price?: string) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.selectedSize === size) ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, price: price || product.price, selectedSize: size, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: number, size?: string) => {
        setCartItems(prev => prev.filter(item => !(item.id === productId && item.selectedSize === size)));
    };

    const updateQuantity = (productId: number, quantity: number, size?: string) => {
        if (quantity <= 0) {
            removeFromCart(productId, size);
            return;
        }
        setCartItems(prev => prev.map(item =>
            (item.id === productId && item.selectedSize === size) ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotal = cartItems.reduce((acc, item) => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        return acc + (priceNum * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
