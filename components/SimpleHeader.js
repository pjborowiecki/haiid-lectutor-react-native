import { View, Image, StyleSheet } from "react-native";
import { assets } from "../constants";

// Header component
export default function SimpleHeader({ navigation }) {
  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image
        source={assets.simpleHeader}
        style={styles.simpleHeaderImage}
        resizeMode="contain"
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  headerWrapper: {
    height: 367,
    width: "100%",
    position: "absolute",
    top: -40,
    right: 0,
    left: 0,
  },

  simpleHeaderImage: {
    width: "100%",
    height: "100%",
  },
});
