import { useState } from "react";

import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLOURS, assets } from "../constants";

// Flashcard component
export default function Flashcard({
  flashcard,
  revealAnswer,
  setRevealAnswer,
  setRevealedAnswerOnce,
  isAltAnswer,
  setIsAltAnswer,
  playingQuiz = false,
  quizId = null,
  onReroll = () => {},
  onDelete = () => {},
  onNextAnswer = () => {},
  onPrevAnswer = () => {},
}) {
  const showAnswer = () => {
    if (playingQuiz) {
      setRevealAnswer(true);
      setRevealedAnswerOnce(true);
    }
  }

  const showQuestion = () => {
    if (playingQuiz) {
      setRevealAnswer(false);
    }
  }

  return (
    <View style={styles.flashCardWrapper}>
      {/* Flashcard question */}
      {playingQuiz && !revealAnswer && (
        <TouchableOpacity 
          onPress={showAnswer}
          style={styles.questionCardWrapper}>
          <View style={styles.rightCornerButtonContainer}>
            {/* Right corenr image (reveal answer button) */}
            <View
              style={styles.rightCornerButton}
            >
              <Image
                source={assets.cardCornerRight}
                style={styles.rightCornerImage}
              />
            </View>
          </View>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionText}>{flashcard.question}</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Flashcard answer */}
      {playingQuiz && revealAnswer && (
        <View style={styles.answerCardWrapper}>
          {/* Left corner image (back to question button) */}
          <TouchableOpacity style={styles.leftCornerButton} onPress={showQuestion}>
            <Image
              source={assets.cardCornerLeft}
              style={styles.leftCornerImage}
            />
          </TouchableOpacity>

          {/* Answer Header Container */}
          <View style={styles.answerHeaderContainer}>
            {/* Left Arrow Container */}
            <View style={styles.leftArrowContainer}>
              <TouchableOpacity
                onPress={() => {setIsAltAnswer(null); onPrevAnswer(flashcard.id, quizId)}}
                style={styles.changeAnswerButton}
                disabled={isAltAnswer === null}
              >
                {isAltAnswer && <Image
                  source={isAltAnswer}
                  style={styles.chevronIcon}
                />}
                {isAltAnswer === null && <Image
                  source={null}
                  style={styles.chevronIcon}
                />}
              </TouchableOpacity>
            </View>

            {/* Answer Type Container */}
            <View style={styles.answerTypeContainer}>
              <Text style={styles.answerWordText}>Answer</Text>
              <Text style={styles.answerTypeText}>{flashcard.type}</Text>
            </View>

            {/* Right Arrow Container */}
            <View style={styles.rightArrowContainer}>
              <TouchableOpacity
                onPress={() => {setIsAltAnswer(assets.chevronLeftIcon); onNextAnswer(flashcard.id, quizId)}}
                style={styles.changeAnswerButton}
              >
                <Image
                  source={assets.chevronRightIcon}
                  style={styles.chevronIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Answer Text Container */}
          <TouchableOpacity onPress={showQuestion} style={styles.answerTextContainer}>
            <Text style={styles.answerText}>{flashcard.answer}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* REWRITE FLASHCARd SCREEN */}
      {!playingQuiz && (
        <View style={styles.rewriteCardWrapper}>
          <View style={styles.rewriteCardTop}>
            <TouchableOpacity onPress={() => onReroll(flashcard.id, quizId)}>
              <Image
                source={assets.newQuestionArrowsIcon}
                style={styles.cardIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rewriteCardMiddle}>
            <Text style={styles.cardText}>{flashcard.question}</Text>
          </View>
          <View style={styles.rewriteCardBottom}>
            <TouchableOpacity onPress={() => onDelete(flashcard.id, quizId)}>
              <Image source={assets.trashIcon} style={styles.cardIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  flashCardWrapper: {
    backgroundColor: COLOURS.rewriteFlashcardBg,

    height: 168,
    width: 300,

    borderColor: COLOURS.black,
    borderWidth: 1,
    borderRadius: 10,

    display: "flex",

    marginBottom: 24,
  },

  questionCardWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  questionWrapper: {
    display: "flex",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  questionText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
  },

  rightCornerButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",

    width: "100%",
    height: "auto",
  },

  rightCornerButton: {
    position: "absolute",
    top: 1,
    right: 2,
  },

  leftCornerButton: {
    position: "absolute",
    top: 1,
    left: 1,
  },

  answerCardWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },

  answerHeaderContainer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
  },

  answerTypeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  answerWordText: {
    fontFamily: "HammersmithOne",
    fontSize: 22,
  },

  answerTypeText: {
    fontFamily: "HammersmithOne",
    fontSize: 11,
    textAlign: "center",
  },

  answerTextContainer: {
    display: "flex",

    width: "100%",

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 8,
    paddingTop: 8,
  },

  answerText: {
    fontFamily: "HammersmithOne",
    fontSize: 13,
    textAlign: "center",
  },

  rightArrowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  leftArrowContainer: {
    display: "flex",
    justifyContent: "center",
  },

  changeAnswerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 28,
    height: 28,
  },

  chevronIcon: {
    width: 24,
    height: 24,
  },

  rewriteCardWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: 12,
  },

  rewriteCardTop: {
    display: "flex",
    alignItems: "flex-end",
  },

  rewriteCardMiddle: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },

  rewriteCardBottom: {
    display: "flex",
    alignItems: "flex-end",
  },

  cardIcon: {
    width: 24,
    height: 24,
  },

  cardText: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
  },
});
