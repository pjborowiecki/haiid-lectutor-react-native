import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { COLOURS, assets } from "../../constants";
import { useState } from "react";

// Component imports
import Header from "../../components/Header";
import QuizCard from "../../components/QuizCard";
import FunctionCircle from "../../components/FunctionCircle";
import Modal from "../../components/Modal";


// Home screen
export default function Home({ navigation, deleteQuiz, quizzes, streak }) {
  const modalText = "This will delete the quiz from storage and all its settings. Are you sure about this?";

  const [showModal, setShowModal] = useState(false);

  const onDeleteQuiz = () => {
    // showModal stores the quiz cause I can't be bothered
    deleteQuiz(showModal);
    setShowModal(false);
  }

  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <Header streak={streak}  showFire={true} />

      {/* NewQuiz button */}
      <FunctionCircle
        navigation={navigation}
        navigateTo="QuizUpload"
        icon={assets.plusIcon}
        iconSize={60}
        bottom={-3}
        right={-1}
      />

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Your Suggested Quizzes</Text>

      {/* Deletion Modal */}
      { showModal && <Modal 
        modalText={modalText} 
        onYes={onDeleteQuiz} 
        onNo={() => setShowModal(false)}
      />}

      {/* Section Content */}
      <ScrollView style={styles.sectionContent}>
        {/* List of Quizzes */}
        <ScrollView style={styles.quizList}>
          {quizzes.map((quiz) => (
            <QuizCard 
              key={quiz.id} 
              quiz={quiz} 
              onDelete={() => setShowModal(quiz)}
              navigation={navigation} />
          ))}
          <View style={styles.quizListEnd}></View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    display: "flex",
  },

  sectionContent: {
    width: "100%",
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
    marginTop: 210,
    paddingVertical: 8,
  },

  quizList: {
    marginTop: 28,
  },

  quizListEnd: {
    width: "100%",
    height: 100,
  },
});
