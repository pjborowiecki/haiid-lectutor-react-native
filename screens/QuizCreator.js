import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS } from "../constants";
  
  // Component imports
import SimpleHeader from "../components/SimpleHeader";
  
  // Home screen
  export default function QuizCreator({ navigator }) {
    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Create your quiz!</Text>

          {/* Title input descrition */}
          <Text>Type in the name of the quiz:</Text>

          {/* Quiz title input */}

          {/* Number of questions input description */}
          <Text>Enter the number of questions you would like to see:</Text>

          {/* Number of questions input */}
          

          {/* Colour selector description */}
          <Text>Type in the name of the quiz:</Text>

          {/* Colour selector */}

          {/* Note after input */}
          <Text>Ensure your PDF contains enough text.</Text>
  
          {/* Generate quiz button */}
          <Button
            onPress={() => navigator.navigate(
                'PlayQuiz', 
                {quiz: quizzes_questions_and_answers[0]}
            )}
            title="Generate quiz!"
          />
        </View>

        {/* Footer */}
      </SafeAreaView>
    );
  }
  
  // Styles
  const styles = StyleSheet.create({
    homeScreenWrapper: {
      backgroundColor: COLOURS.white,
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
  
    sectionContent: {
      top: 234,
      width: "100%",
      paddingHorizontal: 24,
    },
  
    sectionTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      textAlign: "center",
    },
  });
  