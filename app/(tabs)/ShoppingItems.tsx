import React from "react";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer";
import ScreenHeader from "@/components/ScreenHeader/ScreenHeader";
import ShoppingItemList from "@/components/ShoppingItemsList/ShoppingItemsList";
import { shoppingListData } from "@/constants/Data";

const ShoppingItems = () => {
  return (
    <ScreenContainer>
      <ScreenHeader padding>Shopping Items</ScreenHeader>
      <ShoppingItemList data={shoppingListData} />
    </ScreenContainer>
  );
};

export default ShoppingItems;
