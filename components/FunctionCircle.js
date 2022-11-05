import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLOURS } from "../constants";

// Function circle that appears in the header
export default function FunctionCircle({
  navigation = null,
  icon,
  iconSize,
  bottom,
  right,
  navigateTo,
}) {
  return (
    <TouchableOpacity
      onPress={() => (navigation ? navigation.navigate(navigateTo) : {})}
      style={styles.button}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: iconSize,
          height: iconSize,
          bottom: bottom,
          right: right,
        }}
      />
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  button: {
    width: 67,
    height: 67,
    backgroundColor: COLOURS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: "absolute",
    top: 140,
    left: 30,
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
