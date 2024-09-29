import ScreenContainer from "@/components/ScreenContainer/ScreenContainer";
import ScreenHeader from "@/components/ScreenHeader/ScreenHeader";
import ShoppingItemsList from "@/components/ShoppingItemsList/ShoppingItemsList";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Error getting data from context");
  }
  return (
    <ScreenContainer>
      <ScreenHeader padding>Shopping List</ScreenHeader>
      {context.shoppingCart.length == 0 ? (
        <ScreenHeader spaceTop small textCenter>
          No Items
        </ScreenHeader>
      ) : (
        <ShoppingItemsList shoppingList={true} data={context.shoppingCart} />
      )}
    </ScreenContainer>
  );
}
