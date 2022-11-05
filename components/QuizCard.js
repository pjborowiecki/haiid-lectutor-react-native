import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLOURS, assets } from "../constants";

// Individual quiz card
export default function QuizCard({ navigation, quiz }) {
  return (
    <TouchableOpacity
        style={{
            ...styles.quizListItem,
            ...styles.shadow,
            backgroundColor: quiz.colour,
        }}
        onPress={() => navigation.navigate(
            "QuizPlay", 
            {quizId: 1}
        )}
    >
        {/* Quiz Title */}
        <View>
            <Text style={styles.quizTitle}>{quiz.name}</Text>
        </View>

        {/* Card Bottom Container */}
        <View style={styles.cardBottomContainer}>
        {/* Last Accessed */}
        <Text style={styles.lastAccessedText}>
            Last accessed on{" "}
            <Text style={{ color: COLOURS.black }}>
            {quiz.lastAccessed}
            </Text>
        </Text>

        {/* Delete Button */}
        <TouchableOpacity style={styles.deleteButton}>
            <Image
                source={assets.trashIcon}
                resizeMode="contain"
                style={styles.trashIcon}
            />
        </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
    quizListItem: {
        height: 102,
        marginBottom: 24,
        borderRadius: 20,
        padding: 12,
      },
    
      quizTitle: {
        fontFamily: "HammersmithOne",
        fontSize: 20,
        marginBottom: 18,
      },
    
      cardBottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    
      lastAccessedText: {
        color: COLOURS.secondaryText,
        fontFamily: "HammersmithOne",
        fontSize: 14,
        width: 160,
      },
    
      deleteButton: {
        borderRadius: 100,
        backgroundColor: COLOURS.trashRed,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
    
      trashIcon: {
        width: 20,
        height: 20,
      },
    
      shadow: {
        shadowColor: COLOURS.black,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
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
