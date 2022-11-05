import { createStackNavigator } from "@react-navigation/stack";

// Component imports
import HomeNavigation from "./HomeNavigation";
import QuizUpload from "../screens/quiz/QuizUpload";
import QuizCreator from "../screens/quiz/QuizCreator";
import QuizPlayer from "../screens/quiz/QuizPlayer";
import Rating from "../screens/quiz/Rating";

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
