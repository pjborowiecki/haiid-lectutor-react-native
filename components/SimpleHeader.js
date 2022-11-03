import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SHADOWS, COLOURS, assets } from "../constants";

// Header component
export default function SimpleHeader({ navigation }) {
  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image source={assets.header} style={styles.headerImage} />
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

  shadow: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.5,
    elevation: 15,
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
