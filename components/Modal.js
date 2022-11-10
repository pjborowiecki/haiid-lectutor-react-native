import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../constants";

// Modal component
export default function Modal({
  modalText,
  onNo = () => {},
  onYes = () => {},
  fontSize=18
}) {

  // Styles
const styles = StyleSheet.create({
  moddalWrapper: {
    backgroundColor: COLOURS.white,

    width: "90%",
    height: "auto",

    backgroundColor: COLOURS.white,
    marginHorizontal: 26,
    paddingHorizontal: 16,
    paddingVertical: 28,
    borderRadius: 22,
    alignItems: "center",
  },

  modalText: {
    fontFamily: "HammersmithOne",
    fontSize: fontSize,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "90%",
  },

  buttonGroup: {
    flexDirection: "row",
  },

  button: {
    borderRadius: 70,
    width: 129,
    height: 61,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
    marginBottom: 20,
  },

  buttonText: {
    fontFamily: "HammersmithOne",
    fontSize: 32,
    color: COLOURS.white,
  },

  acceptView: {},

  rejectView: {},

  rejectText: {
    fontFamily: "HammersmithOne",
    fontSize: 17,
    color: COLOURS.black,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 30,
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
  return (
    <SafeAreaView
      style={{
        ...styles.moddalWrapper,
        ...styles.shadowDark,
      }}
    >
      {/* Modal Text */}
      <Text style={styles.modalText}>{modalText}</Text>

      {/* Button Group */}
      <View style={styles.buttonGroup}>
        {/* Yes Button */}
        <TouchableOpacity
          onPress={onYes}
          style={{
            ...styles.button,
            ...styles.shadowDark,
            backgroundColor: COLOURS.primary,
          }}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        {/* No Button */}
        <TouchableOpacity
          onPress={onNo}
          style={{
            ...styles.button,
            ...styles.shadowDark,
            backgroundColor: COLOURS.cancelRed,
          }}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


