import { createStackNavigator } from "@react-navigation/stack";

// Component imports
import HomeNavigation from "./HomeNavigation";
import QuizUpload from "../screens/quiz/QuizUpload";
import QuizCreator from "../screens/quiz/QuizCreator";
import QuizPlayer from "../screens/quiz/QuizPlayer";
import Rating from "../screens/quiz/Rating";
import { useState } from "react";
import { statistics } from "../constants";

// Navigation component
export default function Navigation() {
  const Stack = createStackNavigator();

  const [stats, setStats] = useState(statistics);

  const incrementStat = (index) => {
    const newStats = stats.map(stat => {
      if (stat.id === index+1) stat.count++;
      return stat;
    })
    setStats(newStats);
  }

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen
        name="Homepage"
      >
        {props => <HomeNavigation {...props} statistics={stats}/>}
      </Stack.Screen>
      
      <Stack.Screen
        name="QuizUpload"
        component={QuizUpload}
      />
      <Stack.Screen
        name="QuizCreate"
      >
        {props => <QuizCreator {...props} incrementStat={incrementStat}/>}
      </Stack.Screen>
      <Stack.Screen
        name="QuizPlay"
      >
        {props => <QuizPlayer {...props} incrementStat={incrementStat}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Rating"
      >
        {props => <Rating {...props} incrementStat={incrementStat}/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
