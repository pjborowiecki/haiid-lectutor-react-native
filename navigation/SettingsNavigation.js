import { createStackNavigator } from "@react-navigation/stack";

// Component imports
import Feedback from "../screens/home/settings/Feedback";
import HelpAndSupport from "../screens/home/settings/HelpAndSupport";
import HowDoesItWork from "../screens/home/settings/HowDoesItWork";
import TermsAndConditions from "../screens/home/settings/TermsAndConditions";
import Settings from "../screens/home/Settings";

// Settings navigation component
export default function SettingsNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
      />
      <Stack.Screen
        name="HowDoesItWork"
        component={HowDoesItWork}
      />
    </Stack.Navigator>
  );
}
