import { useState } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { COLOURS, assets } from "../../constants";

// Component imports
import Header from "../../components/Header";
import QuizCard from "../../components/QuizCard";
import FunctionCircle from "../../components/FunctionCircle";

// Home screen
export default function Home({ navigation, quizzes, streak, setShowModal }) {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <Header streak={streak} showFire={true} />

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

      {/* Section Content */}
      <ScrollView style={styles.sectionContent}>
        {/* List of Quizzes */}
        <ScrollView style={styles.quizList}>
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onDelete={() => setShowModal(quiz)}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  sectionContent: {
    width: "100%",
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 8,
  },

  quizList: {
    width: "100%",
    marginTop: 8,
    flex: 1,
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
});
