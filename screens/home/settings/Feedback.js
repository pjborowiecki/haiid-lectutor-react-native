import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { assets, COLOURS } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import TitlePill from "../../../components/TitlePill";
import FunctionCircle from "../../../components/FunctionCircle";

// Feedback screen
export default function Feedback({ navigation }) {
  return (
    <View style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        image={assets.plusIcon}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <TitlePill title="Give Feedback" />

      {/* Explanation of screen */}
      <Text>Your feedback is greatly appreciated and it helps us make the application even better!</Text>

      {/* Feedback input */}
      <TextInput 
        placeholder="Please tell us what you think..."
      />

      {/* Submit button */}
      <Button
        title="Submit"
        onPress={() => navigation.navigate("Home")}
      />
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
