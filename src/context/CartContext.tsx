import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface ToastState {
  id: number;
  message: string;
  sub?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  isFreeShipping: boolean;
  freeShippingRemaining: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  detailProduct: Product | null;
  setDetailProduct: (product: Product | null) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;

  isStoryOpen: boolean;
  setIsStoryOpen: (open: boolean) => void;

  isGuideOpen: boolean;
  setIsGuideOpen: (open: boolean) => void;

  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;

  toast: ToastState | null;
  showToast: (message: string, sub?: string) => void;

  buyNow: (product: Product, size?: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 2000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('verona27_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('verona27_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('verona27_cart', JSON.stringify(cart));
    } catch {
      // storage error fallback
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('verona27_wishlist', JSON.stringify(wishlist));
    } catch {
      // storage error fallback
    }
  }, [wishlist]);

  const showToast = (message: string, sub?: string) => {
    const id = Date.now();
    setToast({ id, message, sub });
    setTimeout(() => {
      setToast((curr) => (curr?.id === id ? null : curr));
    }, 3200);
  };

  const addToCart = (product: Product, size = '100 ml', quantity = 1) => {
    const sizeOption = product.availableSizes.find((s) => s.size === size);
    const unitPrice = sizeOption ? sizeOption.price : product.price;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, size, price: unitPrice, quantity }];
    });

    showToast(`Added to Bag`, `${product.name} (${size})`);
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const buyNow = (product: Product, size = '100 ml') => {
    addToCart(product, size, 1);
    setDetailProduct(null);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        isFreeShipping,
        freeShippingRemaining,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        detailProduct,
        setDetailProduct,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isStoryOpen,
        setIsStoryOpen,
        isGuideOpen,
        setIsGuideOpen,
        isAccountOpen,
        setIsAccountOpen,
        toast,
        showToast,
        buyNow
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
