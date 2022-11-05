import { SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLOURS, assets, quizzes } from "../../constants";

// Component imports
import Header from "../../components/Header";
import TitlePill from "../../components/TitlePill";
import QuizCard from "../../components/QuizCard";

// Home screen
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <Header />

      {/* NewQuiz button */}
      <TouchableOpacity
        onPress={() => navigation ? navigation.navigate("QuizUpload") : {}}
        style={styles.button}
        >
        <Image
            source={assets.plusIcon}
            resizeMode="contain"
            style={styles.buttonIcon}
        />
      </TouchableOpacity>

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

  button: {
    width: 67,
    height: 67,
    backgroundColor: COLOURS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  buttonIcon: {
    width: 60,
    height: 60,
    bottom: -3,
    right: -1,
  },
});
