import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from "react-native";
import { COLOURS } from "../constants";

// Information Modal component
export default function InfoModal({ modalText, answerText, onPress, fontSize }) {
  return (
    <SafeAreaView style={{
        ...styles.moddalWrapper,
        ...styles.shadowDark,
        }}>
        {/* Modal Text */}
        <Text style={{
            ...styles.modalText,
            fontSize: fontSize}}>
            {modalText}
        </Text>

        {/* Button Group */}
        <View style={styles.buttonGroup}>
            {/* Yes Button */}
            <TouchableOpacity
                onPress={onPress}
                style={{
                ...styles.button,
                ...styles.shadowDark,
                backgroundColor: COLOURS.primary
                }}
            >
                <Text style={styles.buttonText}>{answerText}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
    moddalWrapper: {
        backgroundColor: COLOURS.white,
        marginHorizontal: 26,
        paddingHorizontal: 16,
        paddingVertical: 28,
        borderRadius: 20,
        alignItems: "center",
      },
    
      modalText: {
        fontFamily: "HammersmithOne",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
      },
    
      buttonGroup: {
        flexDirection: "row",
      },
    
      button: {
        borderRadius: 70,
        width: 129,
        height: 61,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 14,
      },
    
      buttonText: {
        fontFamily: "HammersmithOne",
        fontSize: 24,
        color: COLOURS.white,
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
