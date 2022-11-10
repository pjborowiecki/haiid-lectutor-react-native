import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { COLOURS, assets } from "../../constants";

// Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Footer from "../../components/Footer";
import Flashcard from "../../components/Flashcard";
import TitlePill from "../../components/TitlePill";
import InfoModal from "../../components/InfoModal";

// Quiz player screen
export default function QuizPlayer({
  navigation,
  route,
  incrementStat,
  quizzes,
  _flashcards,
  streak,
  updateQuizDate,
  incrementStreak,
  prevAnswer,
  nextAnswer,
  showModal,
  setShowModal,
}) {
  const modalText =
    "Ready to see the answer? Tap the corner of the card to flip it! Press the arrows to switch to the next card.";
  const id = route.params.id;
  const quiz = quizzes.filter((quiz) => quiz.id === id)[0];
  const flashcards = _flashcards.filter((quiz) => id === quiz.id)[0].flashcards;

  const [index, setIndex] = useState(0);
  const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [revealedAnswerOnce, setRevealedAnswerOnce] = useState(false);
  const [isAltAnswer, setIsAltAnswer] = useState(null);

  const [answer, setAnswer] = useState("");

  const size = flashcards.length;

  const generateDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  useEffect(() => {
    updateQuizDate(quiz.id, generateDate());
  }, []);

  const endQuiz = () => {
    // modal
    // increment quizzes done
    incrementStat(0);
    if (revealAnswer || revealedAnswerOnce) incrementStat(1);
    if (streak.time < new Date().getTime() - 8.64e7) {
      incrementStreak();
      navigation.navigate("Rating", { streak: streak });
    } else {
      navigation.navigate("Rating");
    }
  };

  const onNext = () => {
    // Assume that when person clicks next and
    // they have revealed answer then they have
    // answered the question
    if (index < flashcards.length - 1) {
      prevAnswer(flashcards[0].id, id);
      setIsAltAnswer(null);
      setRevealedAnswerOnce(false);
      setRevealAnswer(false);
      if (revealAnswer || revealedAnswerOnce) incrementStat(1);
      setCurrentFlashcard(flashcards[index + 1]);
      setIndex(index + 1);
    }
  };

  const onPrev = () => {
    // Assume that when person clicks prev and
    // they have revealed answer then they have
    // answered the question
    if (index > 0) {
      prevAnswer(flashcards[0].id, id);
      setIsAltAnswer(null);
      setRevealedAnswerOnce(false);
      setRevealAnswer(false);
      if (revealAnswer || revealedAnswerOnce) incrementStat(1);
      setCurrentFlashcard(flashcards[index - 1]);
      setIndex(index - 1);
    }
  };

  return (
    <SafeAreaView style={styles.quizPlayerScreenWrapper}>
      {/* Modal */}
      {showModal && (
        <View style={styles.modalOveraly}>
          <InfoModal
            modalText={modalText}
            answerText="Got it!"
            fontSize={18}
            onPress={() => {
              setShowModal(false);
            }}
          />
        </View>
      )}

      {/* Header */}
      <View style={styles.headerAndTitleWrapper}>
        <SimpleHeader />

        {/* Quiz Title Pill */}
        <View style={styles.quizTitlePillWrapper}>
          <TitlePill title={quiz.name} />
        </View>
      </View>

      {/* Main content */}
      <View style={styles.mainContanetWrapper}>
        {/* Flashcard */}
        <Flashcard
          flashcard={currentFlashcard}
          quizId={id}
          size={flashcards.length}
          index={index + 1}
          playingQuiz={true}
          isAltAnswer={isAltAnswer}
          setIsAltAnswer={setIsAltAnswer}
          onNextAnswer={nextAnswer}
          onPrevAnswer={prevAnswer}
          revealAnswer={revealAnswer}
          setRevealAnswer={setRevealAnswer}
          setRevealedAnswerOnce={setRevealedAnswerOnce}
        />

        {/* Answer Input */}
        <View style={styles.answerInputContainer}>
          <TextInput
            value={answer}
            onChange={(value) => setAnswer(value)}
            placeholder="Enter your answer (optional):"
            style={styles.answerInput}
          />
        </View>
      </View>

      {/* Footer and button wrapper */}

      {/* Footer and Start Quiz Button Wrapper */}
      <View style={styles.footerAndEndQuizButtonWrapper}>
        {/* Controls */}

        {/* Start Quiz Button Wrapper */}
        <View style={styles.endQuizButtonWrapper}>
          {/* CONTROLS */}
          <View style={styles.controlsWrapper}>
            {/* Previous button */}
            <TouchableOpacity
              onPress={() => {
                setAnswer("");
                onPrev();
              }}
              style={
                index > 0
                  ? [styles.controlButton, styles.shadowDark]
                  : styles.controlButtonFiller
              }
            >
              {index > 0 && (
                <Image
                  source={assets.chevronLeftIcon}
                  style={styles.controlIcon}
                />
              )}
            </TouchableOpacity>

            {/* Question Counter */}
            <View style={styles.questionCounterWrapper}>
              <Text style={styles.questionCounterText}>
                {index + 1}/{size}
              </Text>
            </View>

            {/* Next button */}

            <TouchableOpacity
              onPress={() => {
                setAnswer("");
                onNext();
              }}
              style={
                index < size - 1
                  ? [styles.controlButton, styles.shadowDark]
                  : styles.controlButtonFiller
              }
            >
              {index < size - 1 && (
                <Image
                  source={assets.chevronRightIcon}
                  style={styles.controlIcon}
                />
              )}
            </TouchableOpacity>
          </View>

          {/* Start Quiz Pill */}
          <View
            style={{
              ...styles.endQuizPill,
              ...styles.shadowDark,
            }}
          >
            <TouchableOpacity
              onPress={endQuiz}
              style={{ ...styles.endQuizButton, ...styles.shadowDark }}
            >
              <Text style={styles.endQuizButtonText}>End quiz</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  quizPlayerScreenWrapper: {
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

  quizTitlePillWrapper: {
    position: "absolute",
    top: 140,
  },

  mainContanetWrapper: {
    flex: 1,

    width: "100%",

    display: "flex",
    alignItems: "center",

    marginTop: 32,
  },

  answerInputContainer: {
    marginTop: -8,

    width: "100%",
    height: "100%",

    paddingHorizontal: "11%",
    backgroundColor: COLOURS.white,
  },

  answerInput: {
    height: 100,

    width: "100%",

    fontFamily: "HammersmithOne",
    fontSize: 16,

    borderColor: COLOURS.lightGray,
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 16,
    paddingBottom: 64,

    textAlignVertical: "top",
  },

  controlsWrapper: {
    width: "100%",
    height: 70,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  questionCounterWrapper: {
    width: "auto",
    height: "auto",

    paddingHorizontal: 80,
  },

  questionCounterText: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    color: COLOURS.tertiaryText,
    letterSpacing: 2,

    width: "100%",
  },

  controlButton: {
    backgroundColor: COLOURS.white,

    width: 50,
    height: 50,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 100,
  },

  controlButtonFiller: {
    backgroundColor: "transparent",
    borderRadius: 100,
    width: 50,
    height: 50,
  },

  controlIcon: {
    width: 28,
    height: 28,
  },

  footerAndEndQuizButtonWrapper: {
    width: "100%",
  },

  endQuizButtonWrapper: {
    width: "100%",

    position: "absolute",
    top: -36,

    zIndex: 70,
    elevation: 70,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "auto",
  },

  endQuizPill: {
    width: "100%",
    backgroundColor: COLOURS.yesGreen,
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  endQuizButton: {
    width: "100%",
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  endQuizButtonText: {
    width: "100%",
    fontFamily: "HammersmithOne",
    textAlign: "center",
    fontSize: 18,
  },

  modalOveraly: {
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
