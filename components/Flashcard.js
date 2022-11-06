import {
    Text,
    StyleSheet,
    Button,
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
    revealAnswers=false, 
    onNext=() => {}, 
    onPrev=() => {},
  }) {

    const [revealAnswer, setRevealAnswer] = useState(false);
    const [revealedAnswerOnce, setRevealedAnswerOnce] = useState(false);

    const flipCard = () => {
        if (revealAnswers) {
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
          {!revealAnswer && <TouchableOpacity onPress={flipCard}>
            <Text>{flashcard.question}</Text>
          </TouchableOpacity>}
          
          {/* Flashcard answer */}
          {revealAnswer && <TouchableOpacity onPress={flipCard}>
            <Text>{flashcard.answer}</Text>
          </TouchableOpacity>}
          
          {/* Input for typing in answer */}
          <TextInput
            placeholder="Enter your answer (optional):"
          />

          {/* Question counter */}
          <Text>{flashcard.id}/{size}</Text>

          {/* Next/Previous buttons */}
          { revealAnswers && <View>
            {flashcard.id > 1 && <Button 
                title="Prev"
                onPress={prevCard}
            />}
            {flashcard.id < size && <Button 
                title="Next"
                onPress={nextCard}
            />}
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
  