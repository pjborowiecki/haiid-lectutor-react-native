import { View, Text, StyleSheet, FlatList } from "react-native";
import { assets, COLOURS, how_does_it_work } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// How does it work screen
export default function HowDoesItWork({ navigation, tabActive, setTabActive }) {
  // List item component
  const listItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemQuestion}>{item.question}</Text>
      <Text style={styles.listItemAnswer}>{item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.howDoesItWorkScreenWrapper}>
      {/* Header */}
      <Header  marginTop={0}/>

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="How does it work?" />
      </View>

      {/* List of questions and answers */}
      <FlatList
        data={how_does_it_work}
        renderItem={listItem}
        keyExtractor={(item) => item.id}
        style={styles.questionsAndAnswersList}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  howDoesItWorkScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  titlePillWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  questionsAndAnswersList: {
    width: "100%",
    display: "flex",
    flex: 1,
    paddingHorizontal: 38,
  },

  listItem: {
    marginBottom: 24,
  },

  listItemQuestion: {
    fontFamily: "HammersmithOne",
    fontSize: 22,
    marginBottom: 16,
    flex: 1,
    width: "100%",
  },

  listItemAnswer: {
    fontFamily: "HammersmithOne",
    fontSize: 16,
    flex: 1,
    width: "100%",
  },

  bottomNavWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLOURS.white,
    paddingVertical: 20,

    display: "flex",

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    zIndex: 99,
  },
});
