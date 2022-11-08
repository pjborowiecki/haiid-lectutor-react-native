import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLOURS, assets } from "../../constants";
import { pick } from "react-native-document-picker";

// Component imports
import SimpleHeader from "../../components/SimpleHeader";
import Footer from "../../components/Footer";

// Quiz upload screen
export default function QuizUpload({ navigation }) {
  const [fileUploaded, setFileUploaded] = useState(false);

  const uploadFile = async () => {
    try {
      await pick()
      .then(file => {
        console.log(file)
      });
    }
    catch (err) {
      console.log(err)
    }
    setFileUploaded(!fileUploaded)
  }

  return (
    <SafeAreaView style={styles.quizUploadScreenWrapper}>
      {/* Header */}
      <SimpleHeader />

      {/* Section Content */}
      <View style={styles.sectionContent}>
        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Upload your slides</Text>
        </View>

        {/* Description of what input does */}
        <Text
          style={{ ...styles.uploadInstructions, fontSize: 24, marginTop: 32 }}
        >
          Please upload a PDF or PPTX format file by
        </Text>
        <Text
          style={{
            ...styles.uploadInstructions,
            fontSize: 24,
            paddingHorizontal: 30,
          }}
        >
          clicking the button below!
        </Text>

        {/* File upload pill  */}
        <View style={{ ...styles.uploadPill, ...styles.shadowDark }}>
          {/* File upload button */}
          <TouchableOpacity
            onPress={uploadFile}
            style={{ ...styles.uploadButton, ...styles.shadowDark }}
          >
            {/* File upload icon */}
            <Image source={assets.fileUploadIcon} style={styles.uploadIcon} />
          </TouchableOpacity>
          {/* Uploaded file name */}
          <Text style={styles.uploadButtonText}>
            {fileUploaded ? "machine_learning_slides.pdf" : ""}
          </Text>
        </View>

        {/* Note after input */}
        <Text
          style={{ ...styles.uploadInstructions, fontSize: 16, marginTop: 32 }}
        >
          Ensure your PDF contains enough text. The AI relies on keywords to
          write
        </Text>
        <Text style={{ ...styles.uploadInstructions, fontSize: 16 }}>
          good flashcards!
        </Text>

        {/* Confirmation pill */}
        <View
          style={
            !fileUploaded
              ? {
                  ...styles.confirmPill,
                  ...styles.shadowDark,
                  background: COLOURS.lightGray,
                }
              : {
                  ...styles.confirmPill,
                  ...styles.shadowDark,
                  backgroundColor: COLOURS.yesGreen,
                }
          }
        >
          {/* Confirmation button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("QuizCreate")}
            disabled={!fileUploaded}
            style={
              !fileUploaded
                ? {
                    ...styles.confirmButton,
                    ...styles.confirmButtonDisabled,
                  }
                : { ...styles.confirmButton, ...styles.shadowDark }
            }
          >
            <Text
              style={
                !fileUploaded
                  ? { ...styles.confirmButtonText, opacity: 0.3 }
                  : styles.confirmButtonText
              }
            >
              Confirm upload
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
  questionREviewScreenWrapper: {
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

  uploadInstructions: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    paddingHorizontal: 16,
  },

  uploadPill: {
    marginTop: 36,
    backgroundColor: COLOURS.white,
    width: 258,
    height: 83,
    borderRadius: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  uploadButton: {
    backgroundColor: COLOURS.homeIconBg,
    width: 58,
    height: 58,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },

  uploadIcon: {
    width: 32,
    height: 32,
  },

  uploadButtonText: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    textAlign: "center",
    width: 140,
  },

  confirmPill: {
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // bottom: -108,
    top: 470,
  },

  confirmButton: {
    backgroundColor: COLOURS.white,
    width: 168,
    height: 38,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  confirmButtonDisabled: {
    backgroundColor: COLOURS.lightGray,
    textColor: COLOURS.gray,
  },

  confirmButtonText: {
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
