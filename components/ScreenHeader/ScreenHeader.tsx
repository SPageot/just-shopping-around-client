import { View, Text } from "react-native";
import React from "react";
import styled, { css } from "styled-components";
import {
  ScreenHeaderContainerProps,
  ScreenHeaderProps,
  ScreenHeaderTextProps,
} from "@/types/types";

const ScreenHeaderContainer = styled(View)<ScreenHeaderContainerProps>`
  ${(props) =>
    props.padding &&
    css`
      padding-top: 30px;
      padding-left: 10px;
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      width: 100%;
      align-items: center;
      background: rgba(0, 0, 0, 0.7);
    `}
`;

const ScreenHeaderText = styled(Text)<ScreenHeaderTextProps>`
  font-size: 40px;
  color: white;
  font-weight: bold;
  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 20px;
    `}

    ${(props) =>
    props.spaceTop &&
    css`
      margin-top: 20px;
    `}
`;

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  children,
  padding,
  backgroundColor,
  textCenter,
  small,
  spaceTop,
}) => {
  return (
    <ScreenHeaderContainer backgroundColor={backgroundColor} padding={padding}>
      <ScreenHeaderText
        spaceTop={spaceTop}
        small={small}
        textCenter={textCenter}
      >
        {children}
      </ScreenHeaderText>
    </ScreenHeaderContainer>
  );
};

export default ScreenHeader;
