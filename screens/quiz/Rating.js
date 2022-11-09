import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import { COLOURS } from "../../constants";
  
  // Component imports
import SimpleHeader from "../../components/SimpleHeader";
import TitlePill from "../../components/TitlePill";
  
  // Rating the quiz screen
  export default function Rating({ navigation, incrementStat, route }) {
    const streak = route.params?.streak;

    const giveRating = (like) => {
      if (like === true) incrementStat(3);
      if (like === false) incrementStat(4);
      if (streak) navigation.navigate("IncrementStreak", {streak: streak});
      else navigation.navigate("Homepage");
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
            <TouchableOpacity
              onPress={() => giveRating(true)}>
              <Text>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => giveRating(false)}>
              <Text>Dislike</Text>
            </TouchableOpacity>
          </View>
          
          {/* Skip button */}
          <TouchableOpacity
            onPress={() => giveRating()}>
            <Text>Skip</Text>
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
  
    sectionTitle: {
      fontFamily: "HammersmithOne",
      fontSize: 20,
      textAlign: "center",
    },
  });
  