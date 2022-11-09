import { View, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

export default function Footer({ navigation }) {
  return <Image source={assets.footer} style={styles.footerImage} />;
}

// Styles
const styles = StyleSheet.create({
  footerImage: {
    width: "100%",
    height: 190,

    zIndex: 5,
    elevation: 5,
  },
});
