import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLOURS } from "../constants";

// Component imports
import Home from "../screens/home/Home";
import Stats from "../screens/home/Stats";
import SettingsNavigation from "./SettingsNavigation";

// Navigation component
export default function HomeNavigation({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, styles.shadow],
      }}
    >
      {/* Stats screen */}
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
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
        }}
      />
      {/* Homepage screen */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
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
        }}
      />
      {/* Settings navigator */}
      <Tab.Screen
        name="SettingsNavigation"
        component={SettingsNavigation}
        options={{
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
        }}
      />
    </Tab.Navigator>
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
