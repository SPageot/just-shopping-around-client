import { View } from "react-native";
import React from "react";
import styled from "styled-components";
import { SectionContainerProps } from "@/types/types";

const Container = styled(View)`
  border-radius: 10px;
  height: 70%;
  width: 100%;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
`;

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
