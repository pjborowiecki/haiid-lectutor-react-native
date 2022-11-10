import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { assets, COLOURS } from "../../constants";
import { useEffect, useState } from "react";

// Streak screen
export default function IncrementStreak({ navigation, route }) {
  const [streak, setStreak] = useState(route.params.streak.streak);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [streakBg, setStreakBg] = useState(COLOURS.white);


  useEffect(() => {
    setTimeout(() => {
      setStreak(streak + 1);
      setStreakBg(COLOURS.deleteRed);
      setTimeout(() => {
        setShowText(true);
        setTimeout(() => {
          setShowButton(true);
        }, 2000);
      }, 1500);
    }, 2000);
  }, []);

  // Styles
const styles = StyleSheet.create({
  incrementStreakScreenWrapper: {
    display: "flex",
    flex: 1,
    width: "100%",

    backgroundColor: COLOURS.settingsGreen,

    justifyContent: "center",
    alignItems: "center",
  },

  counterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: -40,
  },

  fireIconContainer: {
    backgroundColor: streakBg,
    borderRadius: 70,

    padding: 14,
  },

  fireIcon: {},

  counterTextWrapper: {
    marginLeft: 16,
  },

  counterText: {
    fontFamily: "HammersmithOne",
    fontSize: 32,
  },

  motivationTextContainer: {
    marginVertical: 36,
    paddingHorizontal: 32,
  },

  motivationText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
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

  button: {
    borderRadius: 70,
    width: 138,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
  },

  buttonText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    color: COLOURS.home,
  },
});

  return (
    <SafeAreaView style={styles.incrementStreakScreenWrapper}>
      {/* Streak value and logo */}

      <View style={styles.logoContainer}>
        <Image source={assets.logo} />
      </View>

      {/* Fire icon and counter container */}
      <View style={styles.counterContainer}>
        {/* Fire icons */}
        <View style={{ ...styles.fireIconContainer, ...styles.shadowDark }}>
          <Image source={assets.fireIcon} />
        </View>

        {/* Streak count */}
        <View style={styles.counterTextWrapper}>
          <Text style={styles.counterText}>{streak}</Text>
        </View>
      </View>

      {/* Motivation text */}
      {showText && (
        <View style={styles.motivationTextContainer}>
          <Text style={styles.motivationText}>
            Come back tomorrow to continue your streak!
          </Text>
        </View>
      )}

      {/* OK Button */}
      {showButton && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={{
            ...styles.button,
            ...styles.shadowDark,
            backgroundColor: COLOURS.homeIconBg,
          }}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}


