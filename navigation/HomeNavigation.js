import { SafeAreaView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLOURS } from "../constants";

// Component imports
import Home from "../screens/home/Home";
import Stats from "../screens/home/Stats";
import SettingsNavigation from "./SettingsNavigation";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

// Navigation component
export default function HomeNavigation({ 
  navigation,
  statistics, 
  deleteQuiz, 
  quizzes, 
  streak,
}) {
  const Stack = createStackNavigator();

  useEffect(() => {
    navigation.navigate("Home");
  }, [])

  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [styles.tabBar, styles.shadow],
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
          children={props => <Home 
                            {...props}
                            deleteQuiz={deleteQuiz} 
                            quizzes={quizzes}
                            streak={streak}
                          />}
        />
        {/* Settings navigator */}
        <Stack.Screen
          name="SettingsNavigation"
          component={SettingsNavigation}
          
        />
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

// STATS
/*options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.tabBarOption,
                backgroundColor: focused ? COLOURS.homeIconBg : "none",
              }}
            >
              <Image
                source={require("../assets/icons/chart-histogram-icon.png")}
                resizeMode="contain"
                style={{
                  ...styles.tabBarOptionIcon,
                  tintColor: focused ? COLOURS.black : COLOURS.gray,
                }}
              />
            </View>
          ),
        }}*/

  // SETTINGS
  /*options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.tabBarOption,
                backgroundColor: focused ? COLOURS.homeIconBg : "none",
              }}
            >
              <Image
                source={require("../assets/icons/settings-icon.png")}
                resizeMode="contain"
                style={{
                  ...styles.tabBarOptionIcon,
                  tintColor: focused ? COLOURS.black : COLOURS.gray,
                }}
              />
            </View>
          ),
        }}*/

  // HOME
  /*options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.tabBarOption,
                backgroundColor: focused ? COLOURS.homeIconBg : "none",
              }}
            >
              <Image
                source={require("../assets/icons/home-icon.png")}
                resizeMode="contain"
                style={{
                  ...styles.tabBarOptionIcon,
                  tintColor: focused ? COLOURS.black : COLOURS.gray,
                }}
              />
            </View>
          ),
        }}*/
