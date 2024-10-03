import { Linking, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components";
import { ScreenCardProps } from "@/types/types";

const CardContainer = styled(TouchableOpacity)`
  height: 150px;
  width: 95%;
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-left;
  align-items: center;
  border-radius: 10px;
`;

const CardImage = styled(Image)`
  height: 100%;
  width: 30%;
  border-radius: 10px;
`;

const CardDescription = styled(Text)`
  font-size: 13px;
  padding: 10px;
  text-align: left;
  color: #000000;
  height: 100%;
  width: 70%;
`;

const ScreenCard: React.FC<ScreenCardProps> = ({
  cardImageSrc,
  description,
  urlToArticle,
}) => {
  return (
    <CardContainer onPress={async () => await Linking.canOpenURL(urlToArticle)}>
      <CardImage source={{ uri: cardImageSrc }} />
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default ScreenCard;
