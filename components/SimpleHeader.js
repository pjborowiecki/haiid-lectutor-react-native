import { View, Image, StyleSheet } from "react-native";
import { assets } from "../constants";

// Header component
export default function SimpleHeader({ bottomMargin=0 }) {
  // Styles
const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",

    height: 180,
    top: 0,
    bottomMargin: bottomMargin,
    marginTop: -80
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },
});

  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image source={assets.simpleHeader} style={styles.headerImage} />
    </View>
  );
}
