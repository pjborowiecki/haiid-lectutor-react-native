import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

// Component imports
import Navigation from "./navigation/Navigation";

// Screen imports
import Onboarding from "./screens/Onboarding";
import Consent from "./screens/Consent";
import { COLOURS } from "./constants";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

// App
export default function App() {
  // Fonts import
  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf"),
    "OpenDyslexic": require("./assets/fonts/OpenDyslexic-Regular.otf"),
  });

  const [showRect, setShowRect] = useState(false);

  const Stack = createStackNavigator()

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style={{backgroundColor: COLOURS.yesGreen}}/>
      {showRect && <View style={styles.rectangle}></View>}
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
          children={props => 
            <Navigation {...props} setShowRect={setShowRect}/>
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: COLOURS.settingsGreen,
    position: "absolute",
    width: 900,
    height: 50,
    zIndex: 99,
  }
})
