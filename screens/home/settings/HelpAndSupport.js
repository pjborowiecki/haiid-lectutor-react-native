import { View, ScrollView, Text, StyleSheet } from "react-native";
import { assets, COLOURS } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// Help and support screen
export default function HelpAndSupport({
  navigation,
  tabActive,
  setTabActive,
}) {
  return (
    <View style={styles.helpSupportScreenWrapper}>
      {/* Header */}
      <Header marginBottom={50} marginTop={0}/>

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="Help & Support" />
      </View>

      <ScrollView style={styles.contentBox}>
        {/* Explanation of screen */}
        <View style={styles.textBox}>
          <Text style={styles.text}>
            If you need any help with using the app, feel overwhelmed or just
            want somebody to talk to, please feel free to contact us at Team
            Alpha HQ:
          </Text>
        </View>

        {/* Support email */}
        <View style={styles.emailBox}>
          <Text style={styles.emailText}>lectutor@teamalpha.com</Text>
        </View>

        {/* Thank you section */}
        <View style={{ ...styles.textBox, marginTop: 16 }}>
          <Text style={styles.text}>
            Thank you for using this app and supporting our work. We hope that
            we were able to meet and exceed your needs and expectations and wish
            all the best with learning in the future!
          </Text>
        </View>

        <View style={{ ...styles.textBox, marginTop: 18, marginBottom: 24 }}>
          <Text style={styles.text}>Love, Team Alpha ❤️</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  helpSupportScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  titlePillWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  contentBox: {
    width: "100%",
    display: "flex",
    flex: 1,
  },

  textBox: {
    width: "100%",
    paddingHorizontal: 50,
    display: "flex",
    alignItems: "flex-start",
  },

  text: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
  },

  emailBox: {
    borderColor: COLOURS.lightGray,
    borderWidth: 1,
    width: "100%",
    padding: 16,
    marginTop: 16,
  },

  emailText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
  },

  bottomNavWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLOURS.white,
    paddingVertical: 20,

    display: "flex",

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    zIndex: 99,
  },
});
