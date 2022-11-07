import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
  } from "react-native";
  import { COLOURS } from "../../constants";
  import { useEffect, useState } from "react";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Flashcard from "../../components/Flashcard";
import TitlePill from "../../components/TitlePill";
import { TouchableOpacity } from "react-native-gesture-handler";
  
  // Quiz player screen
  export default function QuizPlayer({ 
    navigation, 
    route,
    incrementStat,
    quizzes,
    _flashcards,
    updateQuizDate,
  }) {
    const id = route.params.id;
    const quiz = quizzes.filter(quiz => quiz.id === id)[0];
    const flashcards = _flashcards.filter(quiz => id === quiz.id)[0].flashcards;

    const [index, setIndex] = useState(0);
    const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);

    const generateDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }

    useEffect(() => {
      updateQuizDate(quiz.id, generateDate());
    }, [])

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
            index={index+1}
            playingQuiz={true}
            onNext={onNext}
            onPrev={onPrev}
          />
          
          {/* End quiz button */}
          <TouchableOpacity
            onPress={endQuiz}
          >
            <Text>End Quiz</Text>
          </TouchableOpacity>
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
  