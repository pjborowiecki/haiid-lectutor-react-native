  import {
      SafeAreaView,
      View,
      Text,
      StyleSheet,
    } from "react-native";
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
                navigation.navigate(
                  "QuestionReview", 
                  {id: route.params.id
                });
            }, 250)
        }
        setTimeout(() => {
            const newProgress = progress + Math.random()/1.5;
            setProgress(newProgress > 1 ? 1 : newProgress);
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
