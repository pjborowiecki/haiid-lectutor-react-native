// Component imports
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./HomeNavigation";
import QuizUpload from "../screens/QuizUpload";
import QuizCreator from "../screens/QuizCreator";
import QuizPlayer from "../screens/QuizPlayer";
import Rating from "../screens/Rating";
import LoadingScreen from "../screens/LoadingScreen";

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
        name="QuizCreate"
        component={QuizCreator}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
      />
      <Stack.Screen
        name="QuizPlay"
        component={QuizPlayer}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
      />
    </Stack.Navigator>
  );
}
