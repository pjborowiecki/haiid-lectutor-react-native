import { createStackNavigator } from "@react-navigation/stack";

// Component imports
import HomeNavigation from "./HomeNavigation";
import QuizUpload from "../screens/quiz/QuizUpload";
import QuizCreator from "../screens/quiz/QuizCreator";
import QuizPlayer from "../screens/quiz/QuizPlayer";
import Rating from "../screens/quiz/Rating";
import QuizLoadingScreen from "../screens/quiz/QuizLoadingScreen";
import QuestionReview from "../screens/quiz/QuestionReview";

// Navigation component
export default function Navigation() {
  const Stack = createStackNavigator();

  const [statistics, setStats] = useState(_statistics);
  const [quizzes, setQuizzes] = useState(_quizzes);
  const [flashcards, setFlashcards] = useState(_flashcards);

  const incrementStat = (index) => {
    const newStats = statistics.map(stat => {
      if (stat.id === index+1) stat.count++;
      return stat;
    })
    setStats(newStats);
  }

  const deleteFlashcard = (flashcardId, quizId) => {
    const newFlashcards = flashcards.filter(quiz => quiz.id === quizId)[0]
      .flashcards
      .filter(fc => fc.id !== flashcardId);
    const newFullFlashcards = flashcards.map(quiz => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    })
    setFlashcards(newFullFlashcards);
  }

  const rerollFlashcard = (flashcardId, quizId) => {
    const newFlashcards = flashcards.filter(quiz => quiz.id === quizId)[0]
      .flashcards
      .map(fc => {
        if (fc.id === flashcardId) {
          fc.question = "What is backpropagation?";
          fc.answer = "A widely used algorithm for training feedforward neural networks";
        }
        return fc;
    });
    const newFullFlashcards = flashcards.map(quiz => {
      if (quiz.id === quizId) quiz.flashcards = newFlashcards;
      return quiz;
    })
    setFlashcards(newFullFlashcards);
  }

  const addQuiz = (quiz) => {
    const newQuizzes = [quiz, ...quizzes];
    setQuizzes(newQuizzes);
  }

  const deleteQuiz = (quiz) => {
    const newQuizzes = quizzes.filter(q => q !== quiz);
    setQuizzes(newQuizzes);
  }

  const updateQuizDate = (id, date) => {
    const newQuizzes = quizzes.map(quiz => {
      if (quiz.id === id) quiz.lastAccessed = date;
      return quiz;
    })
    setQuizzes(newQuizzes);
  }

  const addFlashcards = (id) => {
    const flashcard = {...flashcards[0], id: id}
    const newFlashcards = [...flashcards, flashcard];
    setFlashcards(newFlashcards);
  }

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen
        name="Homepage"
      >
        {props => <HomeNavigation 
                    {...props} 
                    statistics={statistics}
                    deleteQuiz={deleteQuiz}
                    quizzes={quizzes}
                  />}
      </Stack.Screen>
      
      <Stack.Screen
        name="QuizUpload"
        component={QuizUpload}
      />
      <Stack.Screen
        name="QuizCreate"
      >
        {props => <QuizCreator 
                    {...props} 
                    incrementStat={incrementStat}
                    addQuiz={addQuiz}
                    addFlashcards={addFlashcards}
                    numberOfQuizzes={quizzes.length}
                  />}
      </Stack.Screen>
      <Stack.Screen
        name="QuizLoadingScreen"
        component={QuizLoadingScreen}
      />
      <Stack.Screen
        name="QuestionReview"
      >
        {props => <QuestionReview 
                    {...props}
                    _flashcards={flashcards}
                    deleteFlashcard={deleteFlashcard}
                    rerollFlashcard={rerollFlashcard}
                  />}
      </Stack.Screen>
      <Stack.Screen
        name="QuizPlay"
      >
        {props => <QuizPlayer 
                    {...props} 
                    incrementStat={incrementStat}
                    quizzes={quizzes}
                    _flashcards={flashcards}
                    updateQuizDate={updateQuizDate}
                  />}
      </Stack.Screen>
      <Stack.Screen
        name="Rating"
      >
        {props => <Rating {...props} incrementStat={incrementStat}/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
