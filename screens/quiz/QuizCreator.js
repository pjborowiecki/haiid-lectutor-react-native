import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLOURS, quizColours } from "../../constants";

// Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Footer from "../../components/Footer";

// Quiz creator screen
export default function QuizCreator({
  navigation,
  addQuiz,
  addFlashcards,
  numberOfQuizzes,
  incrementStat,
}) {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizColour, setQuizColour] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  const generateDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  const onAddQuiz = () => {
    const id = numberOfQuizzes + 1;
    const newQuiz = {
      id: id,
      name: quizTitle,
      lastAccessed: generateDate(),
      colour: quizColour,
    };
    addQuiz(newQuiz);
    addFlashcards(id);
    incrementStat(2);
    navigation.navigate("QuizLoadingScreen", { id: id });
  };

  return (
    <SafeAreaView style={styles.quizCreatorScreenWrapper}>
      <View style={styles.headerAndTitleWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          <Text style={styles.sectionTitle}>Create your quiz</Text>
        </View>
      </View>

      {/* Main content */}
      <View style={styles.mainContentWrapper}>
        {/* Top instruction */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Type in the name of the quiz:
          </Text>
        </View>

        {/* Quiz title input */}
        <TextInput
          onChangeText={(text) => setQuizTitle(text)}
          placeholder="Machine Learning"
          style={{
            ...styles.textInput,
            ...styles.shadowDark,
            width: 292,
            marginTop: 8,
          }}
        />

        {/* Middle instructions */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Enter the number of questions you would like to see:
          </Text>
        </View>

        {/* Number of questions input */}
        <TextInput
          onChange={(number) => setNumberOfQuestions(number)}
          placeholder="15"
          keyboardType="numeric"
          style={{
            ...styles.textInput,
            ...styles.shadowDark,
            width: 92,
            marginTop: 8,
          }}
        />

        {/* Bottom instructions */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>Pick a colour theme:</Text>
        </View>

        {/* Colour selector */}
        <View style={styles.colourSelector}>
          {quizColours.map((colour, index) => (
            <TouchableOpacity
              value={colour}
              key={index}
              onPress={() => {
                setQuizColour(colour.colour);
              }}
              style={{
                ...styles.colourTile,
                backgroundColor: colour.colour,
                borderWidth: colour.colour === quizColour ? 3 : 1,
              }}
            />
          ))}
        </View>
      </View>

      {/* Footer and Generate Qui Button Wrapper */}
      <View style={styles.footerAndGenerateQuizButtonWrapper}>
        {/* Generate Quiz Button Wrapper */}
        <View style={styles.generateQuizButtonWrapper}>
          {/* Generate Quiz Pill */}
          <View
            style={
              !quizTitle || !quizColour || !numberOfQuestions
                ? {
                    ...styles.generateQuizPill,
                    ...styles.shadowDark,
                    background: COLOURS.lightGray,
                  }
                : {
                    ...styles.generateQuizPill,
                    ...styles.shadowDark,
                    backgroundColor: COLOURS.yesGreen,
                  }
            }
          >
            {/* Generate Quiz Button */}
            <TouchableOpacity
              onPress={onAddQuiz}
              disabled={!quizTitle || !quizColour || !numberOfQuestions}
              style={
                !quizTitle || !quizColour || !numberOfQuestions
                  ? {
                      ...styles.generateQuizButton,
                      ...styles.generateQuizButtonDisabled,
                    }
                  : { ...styles.generateQuizButton, ...styles.shadowDark }
              }
            >
              <Text
                style={
                  !quizTitle || !quizColour || !numberOfQuestions
                    ? { ...styles.generateQuizButtonText, opacity: 0.3 }
                    : styles.generateQuizButtonText
                }
              >
                Generate quiz!
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  quizCreatorScreenWrapper: {
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

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    borderRadius: 70,

    width: 300,
    height: 48,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 140,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  mainContentWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",

    justifyContent: "center",

    marginTop: 32,
  },

  instructionContainer: {
    paddingHorizontal: 50,

    marginTop: 16,
    paddingbottom: 8,
  },

  instructionText: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
  },

  textInput: {
    backgroundColor: COLOURS.white,
    fontFamily: "HammersmithOne",
    fontSize: 16,
    height: 38,

    textAlign: "center",
    borderRadius: 70,
  },

  colourSelector: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 80,
  },

  colourTile: {
    width: 36,
    height: 36,
    margin: 6,
    borderStyle: "solid",
    borderColor: COLOURS.strokeBrown,
  },

  footerAndGenerateQuizButtonWrapper: {
    width: "100%",
  },

  generateQuizButtonWrapper: {
    width: "100%",

    position: "absolute",
    top: 36,

    zIndex: 99,
    elevation: 99,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "auto",
  },

  generateQuizPill: {
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  generateQuizButton: {
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  generateQuizButtonDisabled: {
    backgroundColor: COLOURS.lightGray,
    textColor: COLOURS.gray,
  },

  generateQuizButtonText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    fontSize: 18,
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
