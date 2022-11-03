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
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App
export default function App() {
  // Fonts import
  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  const Stack = createNativeStackNavigator()

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator 
          initialRouteName={"Onboarding"}
          screenOptions={{
            headerShown: false,
            headerBackVisible: false
          }}
          >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Consent"
          component={Consent}
        />
        <Stack.Screen
          name="App"
          component={Navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
