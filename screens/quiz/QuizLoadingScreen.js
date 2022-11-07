import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { COLOURS } from "../../constants";
import { useEffect, useState } from "react";

// Import components
import { Bar } from "react-native-progress";

// Loading Screen screen
export default function QuizLoadingScreen({ navigation, route }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 1) {
      setTimeout(() => {
        navigation.navigate("QuestionReview", { id: route.params.id });
      }, 250);
    }
    setTimeout(() => {
      const newProgress = progress + Math.random() / 1.5;
      setProgress(newProgress > 1 ? 1 : newProgress);
    }, 500);
  }, [progress]);

  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Section Title */}
        <Text style={styles.loadingTitle}>Generating Quiz...</Text>

        {/* Title input descrition */}
        <Text style={styles.loadingSubtitle}>This may take a moment</Text>

        {/* Progress bar */}
        <View style={{ ...styles.progressbarWrapper, ...styles.shadowDark }}>
          <Bar
            progress={progress}
            height={38}
            width={292}
            color={COLOURS.loadingGreen}
            unfilledColor={COLOURS.white}
            borderRadius={70}
          />
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
