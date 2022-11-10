import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../../constants";
import { useState } from "react";

// Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Flashcard from "../../components/Flashcard";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

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

  const modalText =
    "This action will cause a question to be reloaded. Are you sure?";

  const [showModal, setShowModal] = useState(false);

  const onDeleteFlashcard = () => {
    deleteFlashcard(showModal.flashcardId, showModal.quizId);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.questionReviewScreenWrapper}>
      {/* Deletion modal */}
      {showModal && (
        <View style={styles.modalOverlay}>
          <Modal
            modalText={modalText}
            fontSize={20}
            onYes={onDeleteFlashcard}
            onNo={() => setShowModal(false)}
          />
        </View>
      )}

      {/* Header */}
      <View style={styles.headerAndTitleWrapper}>
        <SimpleHeader />

        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          <Text style={styles.sectionTitle}>Alter the flashcards</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContentWrapper}>
        {/* Instructions */}
        <Text style={styles.instructionsText}>
          Don't like one of the questions? Reload it here or simply delete it.
          AI may be prone to mistakes!
        </Text>

        {/* Flashcard review scroll container */}

        <ScrollView>
          {flashcards.map((flashcard) => (
            <Flashcard
              key={flashcard.id}
              flashcard={flashcard}
              quizId={id}
              onReroll={rerollFlashcard}
              onDelete={(fcId, qId) =>
                setShowModal({ flashcardId: fcId, quizId: qId })
              }
            />
          ))}
          <View style={styles.quizListEnd} />
        </ScrollView>
      </View>

      {/* Footer and Start Quiz Button Wrapper */}
      <View style={styles.footerAndStartQuizButtonWrapper}>
        {/* Start Quiz Button Wrapper */}
        <View style={styles.startQuizButtonWrapper}>
          {/* Start Quiz Pill */}
          <View
            style={{
              ...styles.startQuizPill,
              ...styles.shadowDark,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("QuizPlay", { id: route.params.id })
              }
              style={{ ...styles.startQuizButton, ...styles.shadowDark }}
            >
              <Text style={styles.startQuizButtonText}>Start quiz!</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Footer marginBottom={20}/>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  questionReviewScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  headerAndTitleWrapper: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    borderRadius: 70,

    width: 300,
    height: 48,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 60,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  mainContentWrapper: {
    flex: 1,

    display: "flex",
    alignItems: "center",

    justifyContent: "flex-start",

    marginTop: 32,

    // borderColor: "red",
    // borderWidth: 1,

    // marginBottom: "100%",
    // marginBottom: -40,
    marginBottom: "-100%",
  },

  instructionsText: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",

    paddingHorizontal: 42,
    paddingBottom: 16,
  },

  questionList: {
    height: "auto",
    width: "100%",
    backgroundColor: COLOURS.lightGray,
  },

  quizListEnd: {
    width: "100%",
    height: 300,
  },

  footerAndStartQuizButtonWrapper: {
    width: "100%",

    bottom: -70,
  },

  startQuizButtonWrapper: {
    width: "100%",

    position: "absolute",
    top: 36,

    zIndex: 98,
    elevation: 98,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "auto",
  },

  startQuizPill: {
    backgroundColor: COLOURS.yesGreen,
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  startQuizButton: {
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  startQuizButtonText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    fontSize: 18,
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
    elevation: 99,
    backgroundColor: "rgba(0,0,0,0.9)",
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
