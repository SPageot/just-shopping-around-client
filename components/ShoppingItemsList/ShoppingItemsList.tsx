import _ from "lodash";
import {
  FlatList,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useContext } from "react";
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
  const renderItem = useCallback(
    ({ item }: { item: any }) => {
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
            onPress={() => context.onItemPress(item)}
          >
            <ItemImageContainer source={item.image} resizeMode="cover">
              <ScreenHeader backgroundColor>{item.item}</ScreenHeader>
            </ItemImageContainer>
          </ItemDetailsContainer>
          <Pressable onPress={() => context.onRemovePress(item)}>
            <Ionicons name="bag-remove-sharp" size={24} color="red" />
          </Pressable>
          <ScreenHeader>{findItemById(item.id)}</ScreenHeader>
          {findItemById(item.id) > 0 && (
            <Pressable onPress={() => context.onItemPress(item)}>
              <FontAwesome6 name="add" size={24} color="blue" />
            </Pressable>
          )}
        </SelectionContainer>
      );
    },
    [context.shoppingCart]
  );

  return (
    <ItemsContainer
      data={data}
      keyExtractor={(item: any) => item.id} //#TODO: remove any
      renderItem={renderItem}
    />
  );
};

export default ShoppingItemsList;
