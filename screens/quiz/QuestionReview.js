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
  const flashcards = _flashcards.filter((quiz) => id === quiz.id)[0].flashcards;

  return (
    <SafeAreaView style={styles.questionReviewScreenWrapper}>
      {/* Header */}
      <SimpleHeader />

      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Alter the flashcards</Text>
        </View>

        {/* Title input descrition */}
        <Text style={styles.rewriteInstructions}>
          Don’t like one of the quesitons? Reload it here or simply delete it.
          AI may be prone to mistakes!
        </Text>

        {/* Flashcard review scroll container */}
        <ScrollView style={styles.questionList}>
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
          onPress={() =>
            navigation.navigate("QuizPlay", { id: route.params.id })
          }
          style={{ ...styles.startQuizButton, ...styles.shadowDark }}
        >
          <Text style={styles.startQuizButtonText}>Start quiz!</Text>
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.footerWrapper}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  questionReviewScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    display: "flex",
  },

  sectionContent: {
    top: 132,
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 48,
    borderRadius: 70,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  rewriteInstructions: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },

  startQuizButton: {
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 480,
  },

  startQuizButtonText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    fontSize: 18,
  },

  questionList: {},

  footerWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    // zIndex: 1,
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
