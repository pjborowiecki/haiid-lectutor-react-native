import {
    SafeAreaView,
    View,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS, quizzes, quizzes_questions_and_answers } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import { useState } from "react";
import Flashcard from "../../components/Flashcard";
import TitlePill from "../../components/TitlePill";
  
  // Quiz player screen
  export default function QuizPlayer({ navigation, route, incrementStat }) {
    const quizId = route.params.quizId;
    const quiz = quizzes.filter(quiz => quiz.id === quizId)[0]
    const flashcards = quizzes_questions_and_answers.filter(quiz => quizId === quiz.id)[0].flashcards

    const [index, setIndex] = useState(0)
    const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);

    const endQuiz = () => {
        // modal
        // increment quizzes done
        incrementStat(0);
        if (currentFlashcard.id === flashcards.length) incrementStat(1);
        navigation.navigate("Rating")
    }
    
    const onNext = (revealAnswer) => {
        // Assume that when person clicks next and
        // they have revealed answer then they have
        // answered the question
        if (revealAnswer) incrementStat(1);
        if (index < flashcards.length - 1) {
            setCurrentFlashcard(flashcards[index+1]);
            setIndex(index+1);
        }
    }

    const onPrev = (revealAnswer) => {
        // Assume that when person clicks prev and
        // they have revealed answer then they have
        // answered the question
        if (revealAnswer) incrementStat(1);
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
          <TitlePill title={quiz.name} />

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
      width: "100%",
      paddingHorizontal: 50,
    },
  });
  