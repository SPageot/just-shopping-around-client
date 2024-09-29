import { createContext, useEffect, useState } from "react";
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

  const onRemovePress = (item: DataProps) => {
    setShoppingCart((prevItem) =>
      prevItem
        .map((updateItem) =>
          updateItem.id === item.id
            ? { ...updateItem, quantity: updateItem.quantity - 1 }
            : updateItem
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const onItemPress = (item: DataProps) => {
    const itemInCart = shoppingCart.filter(
      (cartItem: DataProps) => cartItem.id === item.id
    );
    if (itemInCart.length == 0) {
      setShoppingCart([...shoppingCart, { ...item, quantity: 1 }]);
    } else {
      setShoppingCart((prevItem) =>
        prevItem.map((updateItem) =>
          updateItem.id === item.id
            ? { ...updateItem, quantity: updateItem.quantity + 1 }
            : updateItem
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ shoppingCart, setShoppingCart, onRemovePress, onItemPress }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
