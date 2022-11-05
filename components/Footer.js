import { View, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

export default function Footer({ navigation }) {
  return <Image source={assets.footer} style={styles.footerImage} />;
}

// Styles
const styles = StyleSheet.create({
  footerImage: {
    position: "absolute",
    bottom: -32,
    right: 0,
    left: 0,

    width: "100%",
    zIndex: -1,
    elevation: -1,
  },
});
