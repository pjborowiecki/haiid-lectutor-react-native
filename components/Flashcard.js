import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOURS } from "../constants";

// Component imports
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

// Flashcard component
export default function Flashcard({ 
  flashcard, 
  size, 
  index,
  playingQuiz=false, 
  quizId=null,
  onNext=() => {}, 
  onPrev=() => {},
  onReroll=() => {}, 
  onDelete=() => {},
}) {

  const [revealAnswer, setRevealAnswer] = useState(false);
  const [revealedAnswerOnce, setRevealedAnswerOnce] = useState(false);
  const [answer, setAnswer] = useState("");

  const flipCard = () => {
      if (playingQuiz) {
          setRevealAnswer(!revealAnswer);
      }
  }

  const nextCard = () => {
    setRevealedAnswerOnce(revealAnswer || revealedAnswerOnce ? true : false);
    onNext(revealAnswer || revealedAnswerOnce ? true : false);
    setRevealAnswer(false);
  }

  const prevCard = () => {
    setRevealedAnswerOnce(revealAnswer || revealedAnswerOnce ? true : false);
    onPrev(revealAnswer || revealedAnswerOnce ? true : false);
    setRevealAnswer(false);
  }

  return (
    <View style={styles.homeScreenWrapper}>

        {/* Flashcard question */}
        { playingQuiz && !revealAnswer && <TouchableOpacity onPress={flipCard}>
          <Text>{flashcard.question}</Text>
        </TouchableOpacity>}
        
        {/* Flashcard answer */}
        { playingQuiz && revealAnswer && <TouchableOpacity onPress={flipCard}>
          <Text>{flashcard.answer}</Text>
        </TouchableOpacity>}

        { !playingQuiz && <View>
          <Text>{flashcard.question}</Text>
        </View>}
        
        {/* Input for typing in answer */}
        { playingQuiz && <TextInput
          value={answer}
          onChange={value => setAnswer(value)}
          placeholder="Enter your answer (optional):"
        />}

        {/* Question counter */}
        { playingQuiz && <Text>{index}/{size}</Text>}

        {/* Next/Previous buttons */}
        { playingQuiz && <View>
          {index > 1 && <TouchableOpacity 
              onPress={() => {setAnswer(""); prevCard()}}
          >
            <Text>Prev</Text>
          </TouchableOpacity>}
          {index < size && <TouchableOpacity 
              onPress={() => {setAnswer(""); nextCard()}}
          >
            <Text>Next</Text>
          </TouchableOpacity>}
        </View>}
        
        {/* Reroll and delete buttons */}
        { !playingQuiz && <View>
            <TouchableOpacity
              onPress={() => onReroll(flashcard.id, quizId)}>
              <Text>Reroll</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDelete(flashcard.id, quizId)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
        </View>}
    </View>
  );
}
  
  // Styles
  const styles = StyleSheet.create({
    homeScreenWrapper: {
      backgroundColor: COLOURS.white,
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  });
  