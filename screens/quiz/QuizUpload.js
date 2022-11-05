import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import TitlePill from "../../components/TitlePill";
  
  // Quiz upload screen
  export default function QuizUpload({ navigation }) {

    const createQuiz = () => {
      navigation.navigate("QuizCreate");
    }

    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <TitlePill title="Upload Your Slides!" />

          {/* Description of what input does */}
          <Text>Please upload a PDF or PPTX format file by clicking the button below!</Text>

          {/* Input for importing files */}
          <Button
            title="Input file"
          />

          {/* Note after input */}
          <Text>Ensure your PDF contains enough text.</Text>
  
          {/* Confirmation button */}
          <Button
            onPress={createQuiz}
            title="Confirm Upload"
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
      width: "100%",
      paddingHorizontal: 24,
    },
  });
  