import { StyleSheet, View, Text } from "react-native";
import { COLOURS } from "../constants";

// Title pill after the header to introduce a screen
export default function TitlePill({ title }) {
  return (
    <View style={styles.sectionTitlePill}>
        <Text style={styles.sectionTitleText}>{title}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
    sectionTitlePill: {
        backgroundColor: COLOURS.white,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 230,
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
    },

    sectionTitleText: {
        fontFamily: "HammersmithOne",
        fontSize: 22,
        top: 2,
    },
});
