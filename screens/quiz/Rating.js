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
  
  // Rating the quiz screen
  export default function Rating({ navigation, incrementStat }) {

    const giveRating = () => {
      incrementStat(3);
      navigation.navigate("Homepage");
    }

    return (
      <SafeAreaView style={styles.homeScreenWrapper}>
        {/* Header */}
        <SimpleHeader />

        {/* Section Content */}
        <View style={styles.sectionContent}>
          {/* Section Title */}
          <TitlePill title="How did we do?" />

          {/* Description of rating */}
          <Text>Let the AI know if you liked this quiz using the buttons below. It will take this feedback and try its best to learn from it!</Text>

          {/* Rating thumbs */}
          <View>
            <Button
                title="Like"
                onPress={giveRating}
            />
            <Button 
                title="Dislike"
                onPress={giveRating}
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
      width: "100%",
      paddingHorizontal: 24,
    },
  
    sectionTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      textAlign: "center",
    },
  });
  