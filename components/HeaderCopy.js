import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SHADOWS, COLOURS, assets } from "../constants";

// Header component
export default function Header({ navigation }) {
  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header logo and wavy background */}
      <Image
        source={assets.header}
        resizeMode="cover"
        style={styles.headerImage}
      />

      {/* Top right corner fire button */}
      <TouchableOpacity style={[styles.fireButton, styles.shadow]}>
        <Image
          source={require("../assets/icons/fire-icon.png")}
          resizeMode="contain"
          style={styles.fireIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  headerWrapper: {
    height: 220,
  },

  headerImage: {
    width: "100%",
  },

  fireButton: {
    backgroundColor: "#34B772",
    position: "absolute",
    top: 0,
    right: 0,
    width: 136,
    height: 136,
    borderRadius: 100,
    transform: [{ translateX: 50 }, { translateY: -50 }],
  },

  fireIcon: {
    top: 72,
    right: -30,
    width: 40,
    height: 40,
    zIndex: 3,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.5,
    elevation: 15,
  },
});
