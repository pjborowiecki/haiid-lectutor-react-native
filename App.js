import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

// Component imports
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

  const Stack = createStackNavigator()

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
