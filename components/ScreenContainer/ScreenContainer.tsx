import { SafeAreaView } from "react-native";
import React from "react";
import styled, { css } from "styled-components";
import { ContainerProps, ScreenContainerProps } from "@/types/types";

const Container = styled(SafeAreaView)<ContainerProps>`
  background-color: green;
  flex: 1;

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      gap: 30px;
      align-items: center;
    `}

  ${(props) =>
    props.topCenter &&
    css`
      align-items: center;
      gap: 30px;
    `}
`;

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  center,
  topCenter,
}) => {
  return (
    <Container topCenter={topCenter} center={center}>
      {children}
    </Container>
  );
};

export default ScreenContainer;
