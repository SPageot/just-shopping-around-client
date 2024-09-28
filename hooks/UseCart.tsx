import { createContext, useState } from "react";
import React from "react";
import {
  DataProps,
  ShoppingCartContextProps,
  ShoppingCartProps,
} from "@/types/types";

export const CartContext = createContext<ShoppingCartContextProps | undefined>(
  undefined
);

const CartProvider: React.FC<ShoppingCartProps> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<DataProps[] | []>([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
