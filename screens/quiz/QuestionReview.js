import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
  } from "react-native";
  import { COLOURS } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import TitlePill from "../../components/TitlePill";
import Flashcard from "../../components/Flashcard";
  
// Quiz creator screen
export default function QuestionReview({ navigation, route }) {
    const quizId = route.params.quizId;
    const flashcards = quizzes_questions_and_answers.filter(quiz => quizId === quiz.id)[0].flashcards;

    const deleteFlashcard = (flashcard) => {
        const newFlashcards = flashcards.filter(fc => fc !== flashcard);
        setFlashcards(newFlashcards);
    }

    const rerollFlashcard = (flashcard) => {
        const newFlashcards = flashcard.map(fc => {
            if (fc === flashcard) flashcard.question = "What is Backpropagation?";
            return flashcard;
        })
        setFlashcards(newFlashcards);
    }
return (
    <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
            {/* Section Title */}
            <TitlePill title="Alter the flashcards" />

            {/* Title input descrition */}
            <Text>Don’t like one of the quesitons? Reload it here or simply delete it. 
AI may be prone to mistakes!</Text>

            {/* Flashcard review scroll */}
            <ScrollView style={styles.quizList}>
                {flashcards.map((flashcard) => (
                    <Flashcard 
                        key={flashcard.id}
                        flashcard={flashcard}
                        onReroll={rerollFlashcard}
                        onDelete={deleteFlashcard}
                    />
                ))}
                <View style={styles.quizListEnd}></View>
            </ScrollView>


            {/* Colour selector description */}
            <Text>Type in the name of the quiz:</Text>
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
    paddingHorizontal: 24,
    },
});