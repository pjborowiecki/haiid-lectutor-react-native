import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { COLOURS, assets, quizzes } from "../../constants";

// Component imports
import Header from "../../components/Header";

// Home screen
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <Header />

      {/* NewQuiz button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizUpload')}
        style={{
          ...styles.newQuizButton,
          ...styles.shadowDark,
        }}
      >
        <Image
          source={assets.plusIcon}
          resizeMode="contain"
          style={styles.newQuizButtonIcon}
        />
      </TouchableOpacity>

      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Section Title */}
        <Text style={styles.sectionTitle}>Your Suggested Quizzes</Text>

        {/* List of Quizzes */}
        <ScrollView style={styles.quizList}>
          {quizzes.map((quiz, index) => (
            <View
              key={quiz.id}
              style={{
                ...styles.quizListItem,
                ...styles.shadow,
                backgroundColor: quiz.colour,
              }}
            >
              {/* Quiz Title */}
              <View>
                <Text style={styles.quizTitle}>{quiz.name}</Text>
              </View>

              {/* Card Bottom Container */}
              <View style={styles.cardBottomContainer}>
                {/* Last Accessed */}
                <Text style={styles.lastAccessedText}>
                  Last accessed on{" "}
                  <Text style={{ color: COLOURS.black }}>
                    {quiz.lastAccessed}
                  </Text>
                </Text>

                {/* Delete Button */}
                <TouchableOpacity style={styles.deleteButton}>
                  <Image
                    source={assets.trashIcon}
                    resizeMode="contain"
                    style={styles.trashIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
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

  newQuizButton: {
    width: 67,
    height: 67,
    backgroundColor: COLOURS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: "absolute",
    top: 130,
    left: 30,
  },

  newQuizButtonIcon: {
    width: 60,
    height: 60,
    bottom: -3,
    right: -1,
  },

  sectionContent: {
    top: 234,
    width: "100%",
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
  },

  quizList: {
    marginTop: 28,
  },

  quizListItem: {
    height: 102,
    marginBottom: 24,
    borderRadius: 20,
    padding: 12,
  },

  quizTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    marginBottom: 18,
  },

  cardBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lastAccessedText: {
    color: COLOURS.secondaryText,
    fontFamily: "HammersmithOne",
    fontSize: 14,
    width: 160,
  },

  deleteButton: {
    borderRadius: 100,
    backgroundColor: COLOURS.trashRed,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  trashIcon: {
    width: 20,
    height: 20,
  },

  shadow: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
