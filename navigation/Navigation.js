// Component imports
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./HomeNavigation";
import QuizUpload from "../screens/QuizUpload";
import QuizCreator from "../screens/QuizCreator";

// Navigation component
export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen
        name="Homepage"
        component={HomeNavigation}
      />
      <Stack.Screen
        name="QuizUpload"
        component={QuizUpload}
      />
      <Stack.Screen
        name="QuizCreator"
        component={QuizCreator}
      />
    </Stack.Navigator>
  );
}
