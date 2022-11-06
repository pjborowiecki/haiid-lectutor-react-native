import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import { COLOURS, colour_selector } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import { TextInput } from "react-native-gesture-handler";
import TitlePill from "../../components/TitlePill";
  
  // Quiz creator screen
  export default function QuizCreator({ navigation, incrementStat }) {

    // Colour selector column
    const Col = ({ children }) => {
      return  (
        <View style={styles["col"]}>{children}</View>
      )
    }
    
    // Colour selector row
    const Row = ({ children }) => (
      <View style={styles.row}>{children}</View>
    )

    const createQuiz = () => {
      incrementStat(2);
      navigation.navigate(
        "QuizPlay", 
        {quizId: 1}
      )
    }

    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <TitlePill title="Create your quiz!" />

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
          <TouchableOpacity onPress={createQuiz}>
            <Text>Generate quiz!</Text>
          </TouchableOpacity>
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
      width: "100%",
      paddingHorizontal: 24,
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
  