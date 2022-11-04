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
  
  // Rating the quiz screen
  export default function Rating({ navigation }) {
    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>How did we do?</Text>

          {/* Description of rating */}
          <Text>Let the AI know if you liked this quiz using the buttons below. It will take this feedback and try its best to learn from it!</Text>

          {/* Rating thumbs */}
          <View>
            <Button
                title="Like"
                onPress={() => navigation.navigate("Homepage")}
            />
            <Button 
                title="Dislike"
                onPress={() => navigation.navigate("Homepage")}
            />
          </View>
          
          {/* Skip button */}
          <Button
            onPress={() => navigation.navigate("Homepage")}
            title="Skip"
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
  