import { ScrollView } from "react-native";
import React, { useMemo } from "react";
import styled from "styled-components";
import { SectionContainerProps } from "@/types/types";

const Container = styled(ScrollView)`
  flex: 1;
  width: 100%;
  margin-top: 30px;
`;

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  center,
}) => {
  return (
    <Container
      contentContainerStyle={
        center
          ? {
              flexGrow: 1,
              alignItems: "center",
              gap: 20,
              justifyContent: "center",
            }
          : {
              flexGrow: 1,
              alignItems: "center",
              gap: 20,
            }
      }
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
