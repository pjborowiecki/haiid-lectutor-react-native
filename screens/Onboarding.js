import { View, Text, StyleSheet } from "react-native";
import { COLOURS } from "../constants";

// Onboarding screen
export default function Onboarding() {
  return (
    <View style={styles.onboardingScreenWrapper}>
      <Text>Onboarding screen</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  onboardingScreenWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.onboardingBg,
  },
});
