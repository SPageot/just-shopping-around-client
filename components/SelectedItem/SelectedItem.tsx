import { Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SelectedItemProps } from "@/types/types";

const SelectedItemContainer = styled(Pressable)`
  padding: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;

const DeleteContainer = styled(Pressable)`
  width: 10%;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: darkgreen;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const SelectedItem: React.FC<SelectedItemProps> = ({
  selectedItemText,
  onPress,
}) => {
  return (
    <SelectedItemContainer>
      <ButtonText>{selectedItemText}</ButtonText>
      <DeleteContainer onPress={onPress}>
        <AntDesign name="delete" size={24} color="red" />
      </DeleteContainer>
    </SelectedItemContainer>
  );
};

export default SelectedItem;
