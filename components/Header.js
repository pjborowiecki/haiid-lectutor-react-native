import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

// Header component
export default function HeaderNew({ streak }) {
  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image source={assets.header} style={styles.headerImage} />

      {/* Fire button */}
      <TouchableOpacity
        style={{
          ...styles.fireButton,
          ...styles.shadowDark,
        }}
      >
        <Image source={assets.fireIcon} style={styles.fireIcon} />
        
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  headerWrapper: {
    height: 220,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
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
    top: 76,
    right: -28,
    width: 36,
    height: 36,
    zIndex: 3,
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
