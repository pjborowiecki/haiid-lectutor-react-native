import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { assets, COLOURS } from "../../constants";
import { useEffect, useState } from "react";

// Streak screen
export default function IncrementStreak({ navigation, route }) {
  const [streak, setStreak] = useState(route.params.streak.streak);

  useEffect(() => {
    setTimeout(() => {
      setStreak(streak+1);
      setTimeout(() => {
        navigation.navigate("Homepage");
      }, 2500);
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
});
