import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import { COLOURS } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import TitlePill from "../../components/TitlePill";
import Flashcard from "../../components/Flashcard";
import Footer from "../../components/Footer";
  
// Quiz creator screen
export default function QuestionReview({ 
    navigation, 
    route, 
    deleteFlashcard, 
    rerollFlashcard, 
    _flashcards,
}) {
    const id = route.params.id;
    const flashcards = _flashcards.filter(quiz => id === quiz.id)[0].flashcards;

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
                        quizId={id}
                        onReroll={rerollFlashcard}
                        onDelete={deleteFlashcard}
                    />
                ))}
                <View style={styles.quizListEnd}></View>
            </ScrollView>

            {/* Start quiz button */}
            <TouchableOpacity
                onPress={() => navigation.navigate(
                    "QuizPlay",
                    {id: route.params.id}
                )}
                style={{ ...styles.confirmButton, ...styles.shadowDark }}
            >
                <Text
                    style={styles.confirmButtonText}
                >
                    Start quiz!
                </Text>
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <Footer />
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

    confirmButton: {
        backgroundColor: COLOURS.white,
        width: 168,
        height: 38,
        borderRadius: 70,
        justifyContent: "center",
        alignItems: "center",
    },

    confirmButtonText: {
        fontFamily: "HammersmithOne",
        textAlign: "center",
        fontSize: 18,
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