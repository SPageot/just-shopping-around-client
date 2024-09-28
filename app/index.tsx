import React from "react";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer";
import ScreenHeader from "@/components/ScreenHeader/ScreenHeader";
import ScreenButton from "@/components/ScreenButton/ScreenButton";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  return (
    <ScreenContainer center>
      <ScreenHeader textCenter>Just Shopping Around</ScreenHeader>
      <ScreenButton
        buttonText='Get Started'
        onPress={() => router.push("/Home")}
      />
    </ScreenContainer>
  );
};

export default App;
