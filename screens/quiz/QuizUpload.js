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
      await pick().then((file) => {
        console.log(file);
      });
    } catch (err) {
      console.log(err);
    }
    setFileUploaded(!fileUploaded);
  };

  return (
    <SafeAreaView style={styles.quizUploadScreenWrapper}>
      <View style={styles.headerAndTitleWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section title pill */}
        <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
          <Text style={styles.sectionTitle}>Upload your slides</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContentWrapper}>
        {/* Top instructions */}
        <View style={styles.instructionsContainer}>
          <Text
            style={{
              ...styles.instructionsText,
              fontSize: 24,
              paddingHorizontal: 30,
            }}
          >
            Please upload a PDF or PPTX format file by
          </Text>
          <Text
            style={{
              ...styles.instructionsText,
              fontSize: 24,
              paddingHorizontal: 30,
            }}
          >
            clicking the button below!
          </Text>
        </View>

        {/* Upload Pill */}
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

        {/* Bottom instructions */}
        <View
          style={{ ...styles.instructionsContainer, paddingHorizontal: 40 }}
        >
          <Text
            style={{
              ...styles.instructionsText,
              fontSize: 16,
            }}
          >
            Ensure your PDF contains enough text. The AI relies on keywords to
            write
          </Text>
          <Text
            style={{
              ...styles.instructionsText,
              fontSize: 16,
            }}
          >
            good flashcards!
          </Text>
        </View>
      </View>

      {/* Footer and Confirm Button Wrapper */}
      <View style={styles.footerAndConfirmButtonWrapper}>
        {/* Confirm Button Wrapper */}
        <View style={styles.confirmButtonWrapper}>
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
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  quizUploadScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  headerAndTitleWrapper: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    borderRadius: 70,

    width: 300,
    height: 48,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 140,
  },

  sectionTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 24,
    textAlign: "center",
    top: 2,
  },

  mainContentWrapper: {
    flex: 1,

    display: "flex",
    alignItems: "center",

    justifyContent: "center",

    marginTop: 32,
  },

  instructionsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  instructionsText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
  },

  uploadPill: {
    backgroundColor: COLOURS.white,
    borderRadius: 70,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: 258,
    height: 83,
  },

  uploadButton: {
    backgroundColor: COLOURS.homeIconBg,
    borderRadius: 100,

    width: 58,
    height: 58,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 16,
  },

  uploadButtonText: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    textAlign: "center",
    width: 140,
  },

  uploadIcon: {
    width: 32,
    height: 32,
  },

  footerAndConfirmButtonWrapper: {
    width: "100%",
  },

  confirmButtonWrapper: {
    width: "100%",

    position: "absolute",
    top: 36,

    zIndex: 99,
    elevation: 99,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "auto",
  },

  confirmPill: {
    width: 192,
    height: 61,
    borderRadius: 70,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
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
