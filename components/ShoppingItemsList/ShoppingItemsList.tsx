import _ from "lodash";
import {
  FlatList,
  Pressable,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DataProps,
  ItemsDetailContainerProps,
  SelectionContainerProps,
  ShoppingItemProps,
} from "@/types/types";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import { CartContext } from "@/context/CartContext";
import ScreenButton from "../ScreenButton/ScreenButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SelectedItem from "../SelectedItem/SelectedItem";

const SelectionContainer = styled(Pressable)<SelectionContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.selected &&
    css`
      justify-content: space-between;
      padding-right: 30px;
    `}
`;

const ItemsContainer = styled(FlatList)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const ItemImageContainer = styled(ImageBackground)`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ItemDetailsContainer = styled(
  TouchableOpacity
)<ItemsDetailContainerProps>`
  width: 100%;
  margin: 24px 0;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.space &&
    css`
      margin: 10px 0;
    `}

  ${(props) =>
    props.selected &&
    css`
      width: 70%;
    `}
`;

const ShoppingItemsList: React.FC<ShoppingItemProps> = ({
  data,
  shoppingList,
}) => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Error getting data from context");
  }

  const findItemById = (id: string) => {
    return context.shoppingCart.find((item) => item.id === id)?.quantity || 0;
  };

  //#TODO: remove any
  const onItemPress = (item: any) => {
    const itemInCart = context.shoppingCart.filter(
      (cartItem: DataProps) => cartItem.id === item.id
    );
    if (itemInCart.length == 0) {
      context.setShoppingCart([
        ...context.shoppingCart,
        { ...item, quantity: 1 },
      ]);
    } else {
      context.setShoppingCart((prevItem) =>
        prevItem.map((updateItem) =>
          updateItem.id === item.id
            ? { ...updateItem, quantity: updateItem.quantity + 1 }
            : updateItem
        )
      );
    }
  };

  const onRemovePress = (item: DataProps) => {
    context.setShoppingCart((prevItem) =>
      prevItem.map((updateItem) =>
        updateItem.id === item.id
          ? { ...updateItem, quantity: updateItem.quantity - 1 }
          : updateItem
      )
    );
  };
  //#TODO: remove any
  const renderItem = ({ item }: { item: any }) => {
    return shoppingList ? (
      <ItemDetailsContainer space>
        <SelectedItem
          selectedItemText={`${findItemById(item.id)} ${item.item} `}
          onPress={() =>
            context.setShoppingCart(
              context.shoppingCart.filter(
                (cartItem: DataProps) => cartItem.id != item.id
              )
            )
          }
        />
      </ItemDetailsContainer>
    ) : (
      <SelectionContainer selected={findItemById(item.id) > 0}>
        <ItemDetailsContainer
          selected={findItemById(item.id) > 0}
          onPress={() => onItemPress(item)}
        >
          <ItemImageContainer source={item.image} resizeMode="cover">
            <ScreenHeader backgroundColor>{item.item}</ScreenHeader>
          </ItemImageContainer>
        </ItemDetailsContainer>
        <Pressable onPress={() => onRemovePress(item)}>
          <Ionicons name="bag-remove-sharp" size={24} color="red" />
        </Pressable>
        <ScreenHeader>{findItemById(item.id)}</ScreenHeader>
        {findItemById(item.id) > 0 && (
          <Pressable onPress={() => onItemPress(item)}>
            <FontAwesome6 name="add" size={24} color="blue" />
          </Pressable>
        )}
      </SelectionContainer>
    );
  };

  return (
    <ItemsContainer
      data={data}
      keyExtractor={(item: any) => item.id}
      renderItem={renderItem}
    />
  );
};

export default ShoppingItemsList;
