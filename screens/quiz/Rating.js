import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { assets, COLOURS } from "../../constants";

// Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Footer from "../../components/Footer";
import TitlePill from "../../components/TitlePill";

// Rating the quiz screen
export default function Rating({ navigation, incrementStat, route }) {
  const streak = route.params?.streak;

  const giveRating = (like) => {
    if (like === true) incrementStat(3);
    if (like === false) incrementStat(4);
    if (streak) navigation.navigate("IncrementStreak", { streak: streak });
    else navigation.navigate("Homepage");
  };

  return (
    <SafeAreaView style={styles.ratingScreenWrapper}>
      {/* Header and Section Title Container */}
      <View style={styles.headerAndTitleWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          <Text style={styles.sectionTitle}>How did we do?</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContentWrapper}>
        {/* Instructions Container */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>
            Let the AI know if you liked this quiz using the buttons below. It
            will take this feedback and try its best to learn from it!
          </Text>
        </View>

        {/* Buttons container */}
        <View style={styles.buttonsContainer}>
          {/* Like button */}
          <TouchableOpacity
            onPress={() => giveRating(true)}
            style={{
              ...styles.ratingButton,
              ...styles.shadowDark,
              backgroundColor: COLOURS.yesGreen,
            }}
          >
            <Image source={assets.thumbUpIcon} style={styles.ratingIcon} />
          </TouchableOpacity>

          {/* Dislike button */}
          <TouchableOpacity
            onPress={() => giveRating(false)}
            style={{
              ...styles.ratingButton,
              ...styles.shadowDark,
              backgroundColor: COLOURS.noRed,
            }}
          >
            <Image source={assets.thumbDownIcon} style={styles.ratingIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer and Confirm Button Wrapper */}
      <View style={styles.footerAndConfirmButtonWrapper}>
        {/* Confirm Button Wrapper */}
        <View style={styles.skipButtonWrapper}>
          {/* Skip pill */}
          <View style={{ ...styles.skipPill, ...styles.shadowDark }}>
            {/* Skip button */}
            <TouchableOpacity
              onPress={() => giveRating()}
              style={styles.skipButton}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  ratingScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  headerAndTitleWrapper: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    borderRadius: 70,

    width: 300,
    height: 48,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 140,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  mainContentWrapper: {
    flex: 1,

    display: "flex",
    alignItems: "center",

    justifyContent: "center",

    marginTop: 8,
  },

  instructionsContainer: {
    paddingHorizontal: 36,
  },

  instructionsText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
  },

  buttonsContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",

    justifyContent: "space-evenly",

    marginTop: 40,
    paddingHorizontal: 56,
  },

  ratingButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 70,

    padding: 12,
  },

  ratingIcon: {
    width: 60,
    height: 60,
  },

  footerAndConfirmButtonWrapper: {
    width: "100%",
  },

  skipButtonWrapper: {
    width: "100%",

    position: "absolute",
    top: 36,

    zIndex: 99,
    elevation: 99,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "auto",
  },

  skipPill: {
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  skipButton: {
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  skipButtonText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    fontSize: 18,
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
