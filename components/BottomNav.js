import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

export default function BottomNav({ 
  navigation, 
  tabActive, 
  setTabActive, 
  navbarIconColour, 
  bgColour, 
}) {

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

    backgroundColor: bgColour,

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
    backgroundColor: navbarIconColour,
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
          <Image 
            source={navbarIconColour === COLOURS.darkIconColour ? assets.chartHistogramIconDM : assets.chartHistogramIcon} 
            style={styles.icon}
          />
        </TouchableOpacity>
        

        {/* Home button */}
        <TouchableOpacity
          onPress={() => {
            setTabActive("Home");
            navigation.navigate("Home");
          }}
          style={
            tabActive === "Home"
              ? [styles.button, styles.shadow, styles.buttonActive]
              : styles.button
          }
        >
          <Image 
            source={navbarIconColour === COLOURS.darkIconColour ? assets.homeIconDM : assets.homeIcon} 
            style={styles.icon}
          />
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
          <Image 
            source={navbarIconColour === COLOURS.darkIconColour ? assets.settingsIconDM : assets.settingsIcon} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
