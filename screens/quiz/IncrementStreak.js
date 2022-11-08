import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { assets, COLOURS } from "../../constants";
import { useEffect, useState } from "react";

// Streak screen
export default function IncrementStreak({ navigation, route }) {
  const [streak, setStreak] = useState(route.params.streak.streak);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStreak(streak+1);
      setTimeout(() => {
        setShowText(true);
        setTimeout(() => {
          setShowButton(true);
        }, 2000);
      }, 1500);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Streak value and logo */}
        <View>
            <Image source={assets.logo} />
            <Text style={styles.loadingTitle}><Image source={assets.fireIcon} />{streak}</Text>
            {showText && <Text>Come back tomorrow to continue your streak!</Text>}
        </View>
        
        {showButton && <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          style={{
            ...styles.button,
            ...styles.shadowDark,
            backgroundColor: COLOURS.primary,
          }}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: COLOURS.settingsGreen,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },

  sectionContent: {
    width: "100%",
  },

  loadingTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 28,
    textAlign: "center",
  },

  loadingSubtitle: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
    opacity: 0.5,
    marginTop: 8,
  },

  progressbarWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
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
    color: COLOURS.white,
  },
});
