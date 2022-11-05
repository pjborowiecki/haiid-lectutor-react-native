import { View, Text, StyleSheet, FlatList } from "react-native";
import { assets, COLOURS, how_does_it_work } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// How does it work screen
export default function HowDoesItWork({ navigation }) {
  // List item component
  const listItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemQuestion}>{item.question}</Text>
      <Text style={styles.listItemAnswer}>{item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <TitlePill title="How does it work?" />

      {/* List of terms & conditions */}
      <FlatList
        data={how_does_it_work}
        renderItem={listItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  statsScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    alignItems: "center",
  },

  listItem: {},

  listItemQuestion: {},

  listItemAnswer: {},
});
