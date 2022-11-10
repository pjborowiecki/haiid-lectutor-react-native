import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../constants";

// Information Modal component
export default function InfoModal({
  modalText,
  answerText,
  onPress,
  fontSize,
}) {
  return (
    <SafeAreaView
      style={{
        ...styles.moddalWrapper,
        ...styles.shadowDark,
      }}
    >
      {/* Modal Text */}
      <Text
        style={{
          ...styles.modalText,
          fontSize: fontSize,
        }}
      >
        {modalText}
      </Text>

      {/* Button Group */}
      <View style={styles.buttonGroup}>
        {/* Yes Button */}
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.button,
            ...styles.shadowDark,
            backgroundColor: COLOURS.primary,
          }}
        >
          <Text style={styles.buttonText}>{answerText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  moddalWrapper: {
    backgroundColor: COLOURS.white,

    width: "90%",
    height: "auto",

    marginHorizontal: 26,
    paddingHorizontal: 40,
    paddingTop: 36,
    paddingBottom: 24,
    borderRadius: 22,
    alignItems: "center",
  },

  modalText: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  buttonGroup: {
    flexDirection: "row",
  },

  button: {
    borderRadius: 70,
    width: 138,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
    marginVertical: 14,
  },

  buttonText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    color: COLOURS.white,
  },

  shadowDark: {
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
