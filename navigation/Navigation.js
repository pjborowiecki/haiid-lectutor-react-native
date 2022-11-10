import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  COLOURS,
  _flashcards,
  _quizzes,
  _statistics,
  _streak,
} from "../constants";

// Screen imports
import QuizUpload from "../screens/quiz/QuizUpload";
import QuizCreator from "../screens/quiz/QuizCreator";
import QuizPlayer from "../screens/quiz/QuizPlayer";
import Rating from "../screens/quiz/Rating";
import QuizLoadingScreen from "../screens/quiz/QuizLoadingScreen";
import QuestionReview from "../screens/quiz/QuestionReview";
import IncrementStreak from "../screens/quiz/IncrementStreak";
import BottomNav from "../components/BottomNav";
import { StyleSheet, View } from "react-native";
import Searchbar from "../components/Searchbar";
import HomeNavigation from "./HomeNavigation";
import Modal from "../components/Modal";

// Navigation component
export default function Navigation({ setShowRect }) {
  const Stack = createStackNavigator();

  const deletionModalText =
    "This will delete the quiz from storage and all its settings. Are you sure about this?";

  // Data variables
  const [statistics, setStats] = useState(_statistics);
  const [quizzes, setQuizzes] = useState(_quizzes);
  const [quizzesShown, setQuizzesShown] = useState(quizzes);
  const [flashcards, setFlashcards] = useState(_flashcards);
  const [streak, setStreak] = useState(_streak);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [tabActive, setTabActive] = useState("Home");
  const [renderNavbar, setRenderNavbar] = useState(true);
  const [navbarIconColour, setNavbarIconColour] = useState(COLOURS.homeIconBg);
  const [bgColour, setBgColour] = useState(COLOURS.white);
  const [showDeletionModal, setShowDeletionModal] = useState(false);
  const [isFiltering, setIsFiltering] = useState(20);

  useEffect(() => {
    setShowRect(true);
  },[])

  const onDeleteQuiz = () => {
    // showModal stores the quiz cause I can't be bothered
    deleteQuiz(showDeletionModal.id);
    setShowDeletionModal(false);
  };

  const filterQuizzes = (filter) => {
    setQuizzesShown(
      quizzes.filter((quiz) =>
        quiz.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const incrementStreak = () => {
    setStreak({
      streak: streak.streak + 1,
      time: new Date().getTime(),
    });
  };

  // One-time modal states
  const [showQuizPlayerModal, setShowQuizPlayerModal] = useState(true);

  const incrementStat = (index) => {
    const newStats = statistics.map((stat) => {
      if (stat.id === index + 1) stat.count++;
      return stat;
    });
    setStats(newStats);
  };

  const deleteFlashcard = (flashcardId, quizId) => {
    const newFlashcards = flashcards
      .filter((quiz) => quiz.id === quizId)[0]
      .flashcards.filter((fc) => fc.id !== flashcardId);
    const newFullFlashcards = flashcards.map((quiz) => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    });
    setFlashcards(newFullFlashcards);
  };

  const rerollFlashcard = (flashcardId, quizId) => {
    const newFlashcards = flashcards
      .filter((quiz) => quiz.id === quizId)[0]
      .flashcards.map((fc) => {
        if (fc.id === flashcardId) {
          fc.question = "What is Backpropagation?";
          fc.answer =
            "A widely used algorithm for training feedforward neural networks";
        }
        return fc;
      });
    const newFullFlashcards = flashcards.map((quiz) => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    });
    setFlashcards(newFullFlashcards);
  };

  const nextAnswer = (flashcardId, quizId) => {
    const newFlashcards = flashcards
      .filter((quiz) => quiz.id === quizId)[0]
      .flashcards.map((fc) => {
        if (fc.id === flashcardId) {
          fc.answer =
            "The use of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to draw inferences from patterns in data.";
          fc.type = "Alt Answer";
        }
        return fc;
      });
    const newFullFlashcards = flashcards.map((quiz) => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    });
    setFlashcards(newFullFlashcards);
  };

  const prevAnswer = (flashcardId, quizId) => {
    const newFlashcards = flashcards
      .filter((quiz) => quiz.id === quizId)[0]
      .flashcards.map((fc) => {
        if (fc.id === flashcardId) {
          fc.answer =
            "Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks.";
          fc.type = "Best Match";
        }
        return fc;
      });
    const newFullFlashcards = flashcards.map((quiz) => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    });
    setFlashcards(newFullFlashcards);
  };

  const addQuiz = (quiz) => {
    const newQuizzes = [quiz, ...quizzes];
    setQuizzes(newQuizzes);
  };

  const deleteQuiz = (id) => {
    const newQuizzes = quizzes.filter((q) => q.id !== id);
    const newFlashcards = flashcards.filter((fc) => fc.id !== id);
    setQuizzes(newQuizzes);
    setQuizzesShown(newQuizzes);
    setFlashcards(newFlashcards);
  };

  const updateQuizDate = (id, date) => {
    const newQuizzes = quizzes.map((quiz) => {
      if (quiz.id === id) quiz.lastAccessed = date;
      return quiz;
    });
    setQuizzes(newQuizzes);
  };

  const addFlashcards = (id) => {
    const flashcard = { ...flashcards[0], id: id };
    const newFlashcards = [...flashcards, flashcard];
    setFlashcards(newFlashcards);
  };

  // Styles
  const styles = StyleSheet.create({
    bottomNavWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: bgColour,
      paddingVertical: 20,

      display: "flex",

      shadowColor: COLOURS.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
      zIndex: 99,
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
      backgroundColor: "rgba(0,0,0,0.9)",
    },
  });

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Home Navigation */}
      <Stack.Screen name="Homepage">
        {(props) => (
          <>
            <HomeNavigation
              {...props}
              statistics={statistics}
              deleteQuiz={deleteQuiz}
              quizzes={quizzesShown}
              streak={streak.streak}
              showFeedbackModal={showFeedbackModal}
              setShowFeedbackModal={setShowFeedbackModal}
              setNavbarIconColour={setNavbarIconColour}
              bgColour={bgColour}
              setBgColour={setBgColour}
              setShowModal={setShowDeletionModal}
              setTabActive={setTabActive}
              isFiltering={isFiltering}
            />
            {/* Bottom Navigation and SearchBar Wrapper */}
            <View style={styles.bottomNavWrapper}>
              {tabActive === "Home" && (
                <Searchbar
                  filterQuizzes={filterQuizzes}
                  setRenderNavbar={setRenderNavbar}
                  isFiltering={isFiltering}
                  setIsFiltering={setIsFiltering}
                />
              )}
              {renderNavbar && (
                <BottomNav
                  {...props}
                  tabActive={tabActive}
                  setTabActive={setTabActive}
                  navbarIconColour={navbarIconColour}
                  bgColour={bgColour}
                />
              )}
            </View>
            {/* Deletion Modal */}
            {showDeletionModal && (
              <View style={styles.modalOverlay}>
                <Modal
                  modalText={deletionModalText}
                  onYes={onDeleteQuiz}
                  onNo={() => setShowDeletionModal(false)}
                />
              </View>
            )}
          </>
        )}
      </Stack.Screen>

      {/* Main Flow Navigation */}
      <Stack.Screen name="QuizUpload" component={QuizUpload} />

      <Stack.Screen name="QuizCreate">
        {(props) => (
          <QuizCreator
            {...props}
            incrementStat={incrementStat}
            addQuiz={addQuiz}
            addFlashcards={addFlashcards}
            numberOfQuizzes={quizzes.length}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="QuizLoadingScreen" component={QuizLoadingScreen} />

      <Stack.Screen name="QuestionReview">
        {(props) => (
          <QuestionReview
            {...props}
            _flashcards={flashcards}
            deleteFlashcard={deleteFlashcard}
            rerollFlashcard={rerollFlashcard}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="QuizPlay">
        {(props) => (
          <QuizPlayer
            {...props}
            incrementStat={incrementStat}
            quizzes={quizzes}
            _flashcards={flashcards}
            streak={streak}
            updateQuizDate={updateQuizDate}
            incrementStreak={incrementStreak}
            prevAnswer={prevAnswer}
            nextAnswer={nextAnswer}
            showModal={showQuizPlayerModal}
            setShowModal={setShowQuizPlayerModal}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Rating">
        {(props) => <Rating {...props} incrementStat={incrementStat} />}
      </Stack.Screen>

      <Stack.Screen name="IncrementStreak" component={IncrementStreak} />
    </Stack.Navigator>
  );
}
