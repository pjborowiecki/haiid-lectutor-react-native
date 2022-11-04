import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { COLOURS, assets, quizzes } from "../../constants";

// Component imports
import Header from "../../components/Header";
import FunctionCircle from "../../components/FunctionCircle";
import TitlePill from "../../components/TitlePill";
import QuizCard from "../../components/QuizCard";

// Home screen
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <Header />

      {/* NewQuiz button */}
      <FunctionCircle
        navigation={navigation}
        navigateTo="QuizUpload"
        image={assets.plusIcon}
      />

      {/* Section Content */}
      <View style={styles.sectionContent}>

        {/* Section Title */}
        <TitlePill title="Your Suggested Quizzes" />

        {/* List of Quizzes */}
        <ScrollView style={styles.quizList}>
          {quizzes.map(quiz => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
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

  quizList: {
    marginTop: 28,
  },
});
