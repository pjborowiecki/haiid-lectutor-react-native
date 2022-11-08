import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

export default function BottomNav({ navigation, tabActive, setTabActive }) {
  return (
    <View style={styles.bottomNavWrapper}>
      {/* Navbar Pill */}
      <View style={styles.pill}>
        {/* Stats button */}
        <TouchableOpacity
          onPress={() => {
            setTabActive("Stats");
            navigation.navigate("Stats");
          }}
          style={
            tabActive === "Stats"
              ? [styles.button, styles.shadow, styles.buttonActive]
              : styles.button
          }
        >
          <Image source={assets.chartHistogramIcon} style={styles.icon} />
        </TouchableOpacity>

        {/* Home button */}
        <TouchableOpacity
          onPress={() => {
            setTabActive("Home");
            navigation.navigate("Homepage");
          }}
          style={
            tabActive === "Home"
              ? [styles.button, styles.shadow, styles.buttonActive]
              : styles.button
          }
        >
          <Image source={assets.homeIcon} style={styles.icon} />
        </TouchableOpacity>

        {/* Settings button */}
        <TouchableOpacity
          onPress={() => {
            setTabActive("Settings");
            navigation.navigate("Settings");
          }}
          style={
            tabActive === "Settings"
              ? [styles.button, styles.shadow, styles.buttonActive]
              : styles.button
          }
        >
          <Image source={assets.settingsIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  bottomNavWrapper: {
    width: "90%",
    marginHorizontal: "14%",
  },

  pill: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 70,

    height: 60,

    paddingHorizontal: 24,
    // width: 292,

    backgroundColor: COLOURS.white,

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  button: {
    padding: 12,
    borderRadius: 70,
  },

  buttonActive: {
    backgroundColor: COLOURS.homeIconBg,
  },

  icon: {
    width: 24,
    height: 24,
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
