import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS, quizzes, quizzes_questions_and_answers } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import { useState } from "react";
import Flashcard from "../../components/Flashcard";
  
  // Quiz player screen
  export default function QuizPlayer({ navigation, quizId }) {
    const quiz = quizzes.filter(quiz => quiz.id === quizId)
    const flashcards = quizzes_questions_and_answers.filter(quiz => quizId === quiz.quizId)[0].flashcards

    const [index, setIndex] = useState(0)
    const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);

    const endQuiz = () => {
        // modal
        navigation.navigate("Rating")
    }
    
    const onNext = () => {
        if (index < flashcards.length - 1) {
            setCurrentFlashcard(flashcards[index+1]);
            setIndex(index+1);
        }
    }

    const onPrev = () => {
        if (index > 0) {
            setCurrentFlashcard(flashcards[index-1]);
            setIndex(index-1);
        }
    }

    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>{quiz.title}</Text>

          {/* Flashcard */}
          <Flashcard 
            flashcard={currentFlashcard}
            size={flashcards.length}
            revealAnswers={true}
            onNext={onNext}
            onPrev={onPrev}
          />
          
          {/* End quiz button */}
          <Button
            onPress={endQuiz}
            title="End Quiz"
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
  