import { View, Text, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

// Header component
export default function HeaderNew({ streak, showFire = false, marginBottom=0, marginTop=-50 }) {

  // Styles
const styles = StyleSheet.create({
  headerWrapper: {
    height: 220,
    marginBottom: marginBottom,
    marginTop: marginTop,
  },

  headerImage: {
    width: "100%",
  },

  fireButton: {
    position: "absolute",
    top: 35,
    right: 0,
    width: 110,
    height: 110,
    borderRadius: 100,
    transform: [{ translateX: 50 }, { translateY: -50 }],
    backgroundColor: "#39B979",
  },

  fireIcon: {
    top: 68,
    right: -15,
    width: 24,
    height: 24,
    zIndex: 3,
  },

  streakText: {
    top: 42,
    right: -38,
    width: 36,
    height: 36,
    zIndex: 3,
    fontFamily: "HammersmithOne",
    fontSize: 24
  },

  shadowDark: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
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


