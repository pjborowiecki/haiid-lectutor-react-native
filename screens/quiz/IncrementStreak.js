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
        <Image source={assets.logo} />
        <View style={styles.bottom}>
          <Text style={styles.loadingTitle}><Image style={styles.logoView} source={assets.fireIcon} />{streak}</Text>
          {showText && <Text style={styles.motivationText}>Come back tomorrow to continue your streak!</Text>}
        
          {showButton && <TouchableOpacity
            onPress={() => navigation.navigate("Homepage")}
            style={{
              ...styles.button,
              ...styles.shadowDark,
              backgroundColor: COLOURS.homeIconBg,
            }}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>}
        </View>
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
    marginTop: 220,
    display: "flex",
    flex: 1
  },

  bottom: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },

  loadingTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 28,
    textAlign: "center",
  },

  logoView: {
    backgroundColor: COLOURS.homeIconBg,
    borderRadius: "50%",
  },

  motivationText: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center"
  },

  loadingSubtitle: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
    opacity: 0.5,
    marginTop: 8,
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
    marginTop: 80
  },

  buttonText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    color: COLOURS.home,
  },
});
