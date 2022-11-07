import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { assets, COLOURS } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import TitlePill from "../../../components/TitlePill";
import FunctionCircle from "../../../components/FunctionCircle";
import InfoModal from "../../../components/InfoModal";

// Feedback screen
export default function Feedback({ navigation, showModal, setShowModal }) {
  const modalText = "Thank you for submitting your feedback!";

  const onSubmit = () => {
    setShowModal(false);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <TitlePill title="Give Feedback" />

      {/* Explanation modal */}
      { showModal && <InfoModal 
        modalText={modalText}
        answerText="OK"
        fontSize={24}
        onPress={onSubmit}
      /> }

      {/* Explanation of screen */}
      <Text>
        Your feedback is greatly appreciated and it helps us make the
        application even better!
      </Text>

      {/* Feedback input */}
      <TextInput placeholder="Please tell us what you think..." />

      {/* Submit button */}
      <Button title="Submit" onPress={() => setShowModal(true)} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  statsScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    alignItems: "center",
  },
});
