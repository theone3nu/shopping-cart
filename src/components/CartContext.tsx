import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
} from "react";
import { CartItem } from "../interfaces";

interface CartContextType {
  cart: CartItem[];
  addToCart: (id: number, title: string) => void;
  removeFromCart: (id: number) => void;
  setCart:(cart:CartItem[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    (id: number, title: string) => {
      const itemIndex = cart.findIndex((c: CartItem) => c.id === id);

      const updatedCart = [...cart];

      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart.push({ title: title, quantity: 1, id });
      }

      setCart(updatedCart);
    },
    [cart]
  );

  const removeFromCart = (id: number) => {
    const itemIndex = cart.findIndex((c) => c.id === id);
    const updatedCart = [...cart];
    if (itemIndex !== -1 && cart[itemIndex].quantity > 0) {
      updatedCart[itemIndex].quantity -= 1;
    }
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const useCartSelector = () => {
  const { cart } = useCart();
  return useMemo(() => ({ cart }), [cart]);
};

export const useCartActions = () => {
  const { addToCart, removeFromCart } = useCart();
  return {
    addToCart,
    removeFromCart,
  };
};
