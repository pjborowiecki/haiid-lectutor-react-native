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
export default function QuizCreator({ navigation }) {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizColour, setQuizColour] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  return (
    <SafeAreaView style={styles.quizCreatorScreenWrapper}>
      {/* Header */}
      <SimpleHeader />

      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Create your quiz</Text>
        </View>

        {/* Title input descrition */}
        <Text style={{ ...styles.instructions, marginTop: 16 }}>
          Type in the quiz name:
        </Text>

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

        {/* Number of questions input description */}
        <Text style={{ ...styles.instructions, marginTop: 16 }}>
          Enter the number of questions you would like to see:
        </Text>

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

        {/* Colour selector instruction */}
        <Text style={{ ...styles.instructions, marginTop: 16 }}>
          Pick a colour theme:
        </Text>

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
          {/* Generate quiz button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("QuizLoadingScreen")}
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
      <Footer />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  quizCreatorScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    width: "100%",
    display: "flex",
  },

  sectionContent: {
    top: 132,
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 48,
    borderRadius: 70,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  instructions: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    textAlign: "center",
  },

  textInput: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    height: 38,
    backgroundColor: COLOURS.white,
    textAlign: "center",
    borderRadius: 70,
  },

  colourSelector: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 32,
    marginTop: 8,
  },

  colourTile: {
    width: 44,
    height: 44,
    margin: 6,
    borderStyle: "solid",
    borderColor: COLOURS.strokeBrown,
  },

  generateQuizPill: {
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // bottom: -78,
    top: 470,
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
