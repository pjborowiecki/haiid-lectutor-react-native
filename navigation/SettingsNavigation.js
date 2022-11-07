import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

// Component imports
import Feedback from "../screens/home/settings/Feedback";
import HelpAndSupport from "../screens/home/settings/HelpAndSupport";
import HowDoesItWork from "../screens/home/settings/HowDoesItWork";
import TermsAndConditions from "../screens/home/settings/TermsAndConditions";
import Settings from "../screens/home/Settings";

// Settings navigation component
export default function SettingsNavigation() {
  const Stack = createStackNavigator();

  
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

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
      >
        {props => <Feedback 
                    {...props} 
                    showModal={showFeedbackModal}
                    setShowModal={setShowFeedbackModal}
                  />}
      </Stack.Screen>
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
