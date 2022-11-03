import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS, assets, quizzes, quizzes_questions_and_answers } from "../constants";
  
  // Component imports
  import Header from "../components/Header";
import SimpleHeader from "../components/SimpleHeader";
  
  // Home screen
  export default function QuizUpload({ navigator }) {
    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Upload Your Slides!</Text>

          {/* Description of what input does */}
          <Text>Please upload a PDF or PPTX format file by clicking the button below!</Text>

          {/* Input for importing files */}

          {/* Note after input */}
          <Text>Ensure your PDF contains enough text.</Text>
  
          {/* Confirmation button */}
          <Button
            onPress={() => navigator.navigate(
                'QuizCreate', 
                {quiz: quizzes_questions_and_answers[0]}
            )}
            title="Confirm Upload"
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
  
    newQuizButton: {
      width: 67,
      height: 67,
      backgroundColor: COLOURS.white,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      position: "absolute",
      top: 130,
      left: 30,
    },
  
    newQuizButtonIcon: {
      width: 60,
      height: 60,
      bottom: -3,
      right: -1,
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
  
    quizList: {
      marginTop: 28,
    },
  
    quizListItem: {
      height: 102,
      marginBottom: 24,
      borderRadius: 20,
      padding: 12,
    },
  
    quizTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      marginBottom: 18,
    },
  
    cardBottomContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  
    lastAccessedText: {
      color: COLOURS.secondaryText,
      fontFamily: "HammersmithOne",
      fontSize: 14,
      width: 160,
    },
  
    deleteButton: {
      borderRadius: 100,
      backgroundColor: COLOURS.trashRed,
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
    },
  
    trashIcon: {
      width: 20,
      height: 20,
    },
  
    shadow: {
      shadowColor: COLOURS.black,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
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
  