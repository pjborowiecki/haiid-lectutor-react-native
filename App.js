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
          initialRouteName={"onboarding"}
          screenOptions={{
            headerShown: false,
            headerBackVisible: false
          }}
          >
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="consent"
          component={Consent}
        />
        <Stack.Screen
          name="app"
          component={Navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
