import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLOURS } from "../constants";

// Component imports
import Home from "../screens/home/Home";
import Stats from "../screens/home/Stats";
import Settings from "../screens/home/Settings";
import HelpAndSupport from "../screens/home/settings/HelpAndSupport";
import TermsAndConditions from "../screens/home/settings/TermsAndConditions";
import HowDoesItWork from "../screens/home/settings/HowDoesItWork";
import Feedback from "../screens/home/settings/Feedback";

// Navigation component
export default function HomeNavigation({
  statistics, 
  deleteQuiz, 
  quizzes, 
  streak,
  showFeedbackModal,
  setShowFeedbackModal,
  setNavbarIconColour,
  bgColour,
  setBgColour,
  setShowModal,
  setTabActive,
  isFiltering,
}) {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Stats screen */}
        <Stack.Screen
          name="Stats"
          children={() => <Stats statistics={statistics} streak={streak} />}
        />
        {/* Homepage screen */}
        <Stack.Screen
          name="Home"
          children={props => <>
            <Home 
                {...props}
                deleteQuiz={deleteQuiz} 
                quizzes={quizzes}
                streak={streak}
                setShowModal={setShowModal}
                isFiltering={isFiltering}
            />
            </>}
        />
        {/* Settings navigator */}
        <Stack.Screen
          name="Settings"
          children={props => <Settings 
            {...props}
            setNavbarIconColour={setNavbarIconColour}
            bgColour={bgColour}
            setBgColour={setBgColour}
        />}
        />

        <Stack.Screen name="HelpAndSupport">
        {(props) => (
          <HelpAndSupport
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="TermsAndConditions">
        {(props) => (
          <TermsAndConditions
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="HowDoesItWork">
        {(props) => (
          <HowDoesItWork
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Feedback">
        {(props) => (
          <Feedback
            {...props}
            showModal={showFeedbackModal}
            setShowModal={setShowFeedbackModal}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>
      </Stack.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 99,
    zIndex: 99,
    backgroundColor: COLOURS.white,
    borderRadius: 50,
    height: 61,
  },

  tabBarOption: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 50,
  },

  tabBarOptionIcon: {
    width: 24,
    height: 24,
    bottom: 1,
  },

  shadow: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});