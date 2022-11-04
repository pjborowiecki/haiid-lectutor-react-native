import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS, colour_selector } from "../constants";
  
  // Component imports
import SimpleHeader from "../components/SimpleHeader";
import { TextInput } from "react-native-gesture-handler";

const Col = ({ children }) => {
  return  (
    <View style={styles["col"]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)
  
  // Home screen
  export default function QuizCreator({ navigation }) {
    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Create your quiz!</Text>

          {/* Title input descrition */}
          <Text>Type in the name of the quiz:</Text>

          {/* Quiz title input */}

          {/* Number of questions input description */}
          <Text>Enter the number of questions you would like to see:</Text>

          {/* Number of questions input */}
          <TextInput
            placeholder="15"
            keyboardType="numeric"
          />

          {/* Colour selector description */}
          <Text>Type in the name of the quiz:</Text>

          {/* Colour selector */}
          <View>
            {colour_selector.map((row, i) => (
              <Row key={i}>
                {row.map((colour, j) => (
                  <Col key={j}>
                    <Text>{colour}</Text>
                  </Col>
                ))}
              </Row>
            ))}
          </View>

          {/* Note after input */}
          <Text>Ensure your PDF contains enough text.</Text>
  
          {/* Generate quiz button */}
          <Button
            onPress={() => navigation.navigate(
                'PlayQuiz', 
                {quizId: 1}
            )}
            title="Generate quiz!"
          />
        </View>

        {/* Footer */}
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
      top: 234,
      width: "100%",
      paddingHorizontal: 24,
    },
  
    sectionTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      textAlign: "center",
    },

    row: {
      flexDirection: "row"
    },

    "col":  {
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  1
    },
  });
  