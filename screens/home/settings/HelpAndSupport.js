import { View, Text, StyleSheet } from "react-native";
import { assets, COLOURS } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// Help and support screen
export default function HelpAndSupport({ navigation }) {
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
      <TitlePill title="Help & Support" />

      {/* Explanation of screen */}
      <Text>
        If you need any help with using the app, feel overwhelmed or just want
        somebody to talk to, please feel free to contact us at Team Alpha HQ:
      </Text>

      {/* Support email */}
      <View>
        <View style={styles.hr} />
        <Text>lectutor@teamalpha.com</Text>
        <View style={styles.hr} />
      </View>

      {/* Thank you section */}
      <View>
        <Text>
          Thank you for using this app and supporting our work. We hope that we
          were able to meet and exceed your needs and expectations and wish all
          the best with learning in the future!
        </Text>
        <Text>Love, Team Alpha ❤️</Text>
      </View>
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

  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
