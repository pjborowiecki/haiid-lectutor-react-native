import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLOURS, assets } from "../constants";

// Component imports
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

// Flashcard component
export default function Flashcard({
  flashcard,
  size,
  index,
  playingQuiz = false,
  quizId = null,
  onNext = () => {},
  onPrev = () => {},
  onReroll = () => {},
  onDelete = () => {},
}) {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [revealedAnswerOnce, setRevealedAnswerOnce] = useState(false);
  const [answer, setAnswer] = useState("");

  const flipCard = () => {
    if (playingQuiz) {
      setRevealAnswer(!revealAnswer);
    }
  };

  const nextCard = () => {
    setRevealedAnswerOnce(revealAnswer || revealedAnswerOnce ? true : false);
    onNext(revealAnswer || revealedAnswerOnce ? true : false);
    setRevealAnswer(false);
  };

  const prevCard = () => {
    setRevealedAnswerOnce(revealAnswer || revealedAnswerOnce ? true : false);
    onPrev(revealAnswer || revealedAnswerOnce ? true : false);
    setRevealAnswer(false);
  };

  return (
    <View style={styles.flashCardWrapper}>
      {/* Flashcard question */}
      {playingQuiz && !revealAnswer && (
        <TouchableOpacity onPress={flipCard}>
          <Text>{flashcard.question}</Text>
        </TouchableOpacity>
      )}

      {/* Flashcard answer */}
      {playingQuiz && revealAnswer && (
        <TouchableOpacity onPress={flipCard}>
          <Text>{flashcard.answer}</Text>
        </TouchableOpacity>
      )}

      {/* Input for typing in answer */}
      {playingQuiz && (
        <TextInput
          value={answer}
          onChange={(value) => setAnswer(value)}
          placeholder="Enter your answer (optional):"
        />
      )}

      {/* Question counter */}
      {playingQuiz && (
        <Text>
          {index}/{size}
        </Text>
      )}

      {/* Next/Previous buttons */}
      {playingQuiz && (
        <View>
          {index > 1 && (
            <TouchableOpacity
              onPress={() => {
                setAnswer("");
                prevCard();
              }}
            >
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
          {index < size && (
            <TouchableOpacity
              onPress={() => {
                setAnswer("");
                nextCard();
              }}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
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
    // padding: 16,

    marginTop: 24,
    display: "flex",
    alignItems: "center",
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
