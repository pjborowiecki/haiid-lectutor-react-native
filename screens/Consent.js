import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { assets, COLOURS } from "../constants";

// Consent screen
export default function Consent() {
  const [modalOn, setModalOn] = useState(true);
  const [consent, setConsent] = useState(false);

  const handleReject = () => {
    setModalOn((previousState) => !previousState);
  };

  const handleAccept = () => {
    setModalOn((previousState) => !previousState);
    setConsent((previousState) => !previousState);

    // TimeOut (?) and Redirect to Main with the tab nav =>
  };

  return (
    // Consen Screen Wrapper
    <View style={styles.consentScreenWrapper}>
      {modalOn ? (
        // Modal Wrapper
        <View
          style={{
            ...styles.moddalWrapper,
            ...styles.shadowDark,
          }}
        >
          {/* Modal Text */}
          <Text style={styles.modalText}>
            This app features uploading lecture slides, which may contain
            personal data. Do you consent to the app having access to and
            storing them?
          </Text>

          {/* Button Group */}
          <View style={styles.buttonGroup}>
            {/* Yes Button */}
            <TouchableOpacity
              onPress={handleAccept}
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
              onPress={handleReject}
              style={{
                ...styles.button,
                ...styles.shadowDark,
                backgroundColor: COLOURS.cancelRed,
              }}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : consent ? (
        // Consent View after Yes
        <View style={styles.acceptView}>
          <Image source={assets.logo} />
        </View>
      ) : (
        // Consent View after No
        <View style={styles.rejectView}>
          <Image source={assets.logo} />
          <Text style={styles.rejectText}>
            Our app requires internal storage permissions.
          </Text>
          <Text style={styles.rejectText}>
            Please try re-opening the app to accept the terms
          </Text>
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  consentScreenWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.primary,
  },

  moddalWrapper: {
    backgroundColor: COLOURS.white,
    marginHorizontal: 26,
    paddingHorizontal: 16,
    paddingVertical: 28,
    borderRadius: 20,
    alignItems: "center",
  },

  modalText: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
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

  logo: {
    width: "100%",
    height: "100%",
  },

  shadow: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
