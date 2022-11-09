import { View, Text, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

// Header component
export default function HeaderNew({ streak, showFire = false }) {

  // Styles
const styles = StyleSheet.create({
  headerWrapper: {
    height: 220,
  },

  headerImage: {
    width: "100%",
  },

  fireButton: {
    position: "absolute",
    top: -5,
    right: -10,
    width: 136,
    height: 136,
    borderRadius: 100,
    transform: [{ translateX: 50 }, { translateY: -50 }],
    backgroundColor: COLOURS.primary,
  },

  fireIcon: {
    top: 68,
    right: -10,
    width: 36,
    height: 36,
    zIndex: 3,
  },

  streakText: {
    top: 30,
    right: -45,
    width: 36,
    height: 36,
    zIndex: 3,
    fontFamily: "HammersmithOne",
    fontSize: 36
  },

  shadowDark: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});

  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image source={assets.header} style={styles.headerImage} />

      {/* Fire button */}
      {showFire && (
        <View
          style={{
            ...styles.fireButton,
            ...styles.shadowDark,
          }}
        >
          <Image source={assets.fireIcon} style={styles.fireIcon} />
          <Text style={styles.streakText}>{streak}</Text>
        </View>
      )}
    </View>
  );
}


