import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
  } from "react-native";
  import { COLOURS } from "../constants";
  
  // Component imports
import SimpleHeader from "../components/SimpleHeader";
  
  // Home screen
  export default function QuizUpload({ navigation }) {
    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Upload Your Slides!</Text>

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
            onPress={() => navigation.navigate(
                'QuizCreate'
            )}
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
      top: 234,
      width: "100%",
      paddingHorizontal: 24,
    },
  
    sectionTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      textAlign: "center",
    },
  });
  