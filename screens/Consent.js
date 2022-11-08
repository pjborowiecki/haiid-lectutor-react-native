import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { assets, COLOURS } from "../constants";

// Import components
import Modal from "../components/Modal";

// Consent screen
export default function Consent({ navigation }) {
  const modalText = "This app features uploading lecture slides, which may contain personal data. Do you consent to the app having access to and storing them?"

  const [modalOn, setModalOn] = useState(true);
  const [consent, setConsent] = useState(false);

  const handleReject = () => {
    setModalOn((previousState) => !previousState);
  };

  const handleAccept = () => {
    setModalOn((previousState) => !previousState);
    setConsent((previousState) => !previousState);
    setTimeout(() => {
      navigation.navigate("App");
      setTimeout(() => {
        setModalOn(true);
        setConsent(false);
      }, 2000)
    }, 1000);
  };

  return (
    // Consen Screen Wrapper
    <SafeAreaView style={styles.consentScreenWrapper}>
      {modalOn ? (
        // Modal Wrapper
        <Modal modalText={modalText} onYes={handleAccept} onNo={handleReject} />
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
    </SafeAreaView>
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
