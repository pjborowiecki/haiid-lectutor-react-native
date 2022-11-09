import { View, Image, StyleSheet } from "react-native";
import { assets } from "../constants";

// Header component
export default function SimpleHeader({ navigation }) {
  return (
    // headerWrapper
    <View style={styles.headerWrapper}>
      {/* Header image */}
      <Image source={assets.simpleHeader} style={styles.headerImage} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",

    height: 180,
    top: 0,

    // position: "absolute",
    // top: -30,
    // right: 0,
    // left: 0,

    // borderColor: "red",
    // borderWidth: 1,
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },
});
