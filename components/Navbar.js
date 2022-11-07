import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLOURS } from "../constants";

// Title pill after the header to introduce a screen
export default function Navbar({ navigation }) {
  return (
    <View style={styles.sectionTitlePill}>
      <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
        <Text>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsNavigation")}>
        <Text>Sett</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 244,
    height: 37,
    borderRadius: 70,
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  }
});
