import { View, Image, StyleSheet } from "react-native";
import { COLOURS, assets } from "../constants";

export default function Footer({ navigation, marginBottom=-50 }) {
  // Styles
const styles = StyleSheet.create({
  footerImage: {
    width: "100%",
    height: 190,
    marginBottom: marginBottom,

    zIndex: 5,
    elevation: 5,
  },
});
  return <Image source={assets.footer} style={styles.footerImage} />;
}
