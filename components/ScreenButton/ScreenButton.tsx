import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScreenButtonProps } from "@/types/types";

const DisplayContainer = styled(Pressable)`
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

const ButtonContainer = styled(Pressable)`
  width: 80%;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: darkgreen;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const ScreenButton: React.FC<ScreenButtonProps> = ({
  isDisplayingItem,
  buttonText,
  onPress,
}) => {
  return isDisplayingItem ? (
    <DisplayContainer>
      <ButtonText>{buttonText}</ButtonText>
      <DeleteContainer onPress={onPress}>
        <AntDesign name='delete' size={24} color='red' />
      </DeleteContainer>
    </DisplayContainer>
  ) : (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ScreenButton;
