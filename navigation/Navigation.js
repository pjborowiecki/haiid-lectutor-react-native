import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { _flashcards, _quizzes, _statistics, _streak } from "../constants";

// Screen imports
import Home from "../screens/home/Home";
import Stats from "../screens/home/Stats";
import Settings from "../screens/home/Settings";

import Feedback from "../screens/home/settings/Feedback";
import HelpAndSupport from "../screens/home/settings/HelpAndSupport";
import HowDoesItWork from "../screens/home/settings/HowDoesItWork";
import TermsAndConditions from "../screens/home/settings/TermsAndConditions";

import QuizUpload from "../screens/quiz/QuizUpload";
import QuizCreator from "../screens/quiz/QuizCreator";
import QuizPlayer from "../screens/quiz/QuizPlayer";
import Rating from "../screens/quiz/Rating";
import QuizLoadingScreen from "../screens/quiz/QuizLoadingScreen";
import QuestionReview from "../screens/quiz/QuestionReview";
import IncrementStreak from "../screens/quiz/IncrementStreak";

// Navigation component
export default function Navigation() {
  const Stack = createStackNavigator();

  // Data variables
  const [statistics, setStats] = useState(_statistics);
  const [quizzes, setQuizzes] = useState(_quizzes);
  const [flashcards, setFlashcards] = useState(_flashcards);
  const [streak, setStreak] = useState(_streak);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [tabActive, setTabActive] = useState("Home");

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
          fc.question = "What is backpropagation?";
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
            "The use and development of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyse and draw inferences from patterns in data.";
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

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: true,
      }}
    >
      {/* Home Navigation */}
      <Stack.Screen name="Homepage">
        {(props) => (
          <Home
            {...props}
            statistics={statistics}
            deleteQuiz={deleteQuiz}
            quizzes={quizzes}
            streak={streak.streak}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Stats">
        {(props) => (
          <Stats
            {...props}
            statistics={statistics}
            streak={streak}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      {/* Settings Navigation */}
      <Stack.Screen name="Settings">
        {(props) => (
          <Settings
            {...props}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="HelpAndSupport">
        {(props) => (
          <HelpAndSupport
            {...props}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="TermsAndConditions">
        {(props) => (
          <TermsAndConditions
            {...props}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="HowDoesItWork">
        {(props) => (
          <HowDoesItWork
            {...props}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Feedback">
        {(props) => (
          <Feedback
            {...props}
            showModal={showFeedbackModal}
            setShowModal={setShowFeedbackModal}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
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
