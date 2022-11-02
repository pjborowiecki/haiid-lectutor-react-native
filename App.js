import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Component imorts
import Navigation from "./components/Navigation";

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
      <Navigation />
    </NavigationContainer>
  );
}
