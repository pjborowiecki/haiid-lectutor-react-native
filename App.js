import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import {useFonts} from "expo-font"

import Home from "./screens/Home"
import Settings from "./screens/Settings"

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}


const App = () => {
  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf")
  })

  if (!loaded) return null

  return <NavigationContainer theme={theme}>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App