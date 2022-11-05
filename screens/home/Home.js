import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLOURS, assets, quizzes } from "../../constants";

// Component imports
import Header from "../../components/Header";
import QuizCard from "../../components/QuizCard";
import FunctionCircle from "../../components/FunctionCircle";

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
            <QuizCard key={quiz.id} quiz={quiz} navigation={navigation} />
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
    // alignItems: "center",
    // justifyContent: "center",
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
