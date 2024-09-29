import { Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";

import { ScreenButtonProps } from "@/types/types";

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

const ScreenButton: React.FC<ScreenButtonProps> = ({ buttonText, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ScreenButton;
