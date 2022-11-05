import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
  } from "react-native";
  import { COLOURS } from "../../constants";
  import { Bar } from "react-native-progress";
import { useEffect, useState } from "react";
  
  // Loading Screen screen
  export default function LoadingScreen({ navigation }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress >= 1) return;
        setTimeout(() => {
            const newProgress = progress + Math.random()/2;
            setProgress(newProgress > 1 ? 1 : newProgress);
            if (newProgress >= 1) {
                navigation.navigate("QuizPlay", {quizId: 1});
            }
        }, 500)
    }, [progress])

    return (
      <SafeAreaView style={styles.homeScreenWrapper}>

        {/* Section Content */}
        <View style={styles.sectionContent}>

          {/* Section Title */}
          <Text>Generating Quiz...</Text>

          {/* Title input descrition */}
          <Text>This may take a moment</Text>

          {/* Progress bar */}
          <Bar
            progress={progress}
          />
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
      paddingHorizontal: 100,
    },
  });
  