// import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Component imorts
import Navigation from "./components/Navigation";

// Screen imports
import Onboarding from "./screens/Onboarding";
import Consent from "./screens/Consent";

// App
export default function App() {
  // Fonts import
  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar />

      {/* <Onboarding /> */}

      <Consent />

      {/* <Navigation /> */}

      {/* {onboardingDone ? <Navigation /> : <Onboarding />} */}
    </NavigationContainer>
  );
}
