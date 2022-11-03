// import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Component imorts
import Navigation from "./components/Navigation";

// Screen imports
import Onboarding from "./screens/Onboarding";
import Consent from "./screens/Consent";
import { useState } from "react";

// App
export default function App() {
  // Fonts import
  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  const [isOnboarding, setIsOnboarding] = useState(true)
  const [hasConsented, setHasConsented] = useState(false)

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar />

      {/* Mutually exclusive to consent */}
      {isOnboarding && <Onboarding onDone={setIsOnboarding}/>}

      {/* Once onboarding is done and the user has not yet consented */}
      {!hasConsented && !isOnboarding && <Consent onConsented={setHasConsented}/>}

      {/* Not onboarding and consented implies that the user can see the app */}
      {!isOnboarding && hasConsented && <Navigation />}

    </NavigationContainer>
  );
}
