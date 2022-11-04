import { View, Text, StyleSheet, FlatList } from "react-native";
import { assets, COLOURS, terms_and_conditions } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// Terms & conditions screen
export default function TermsAndConditions({ navigation }) {

  // List item component
  const listItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        image={assets.plusIcon}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <TitlePill title="Terms & Conditions" />

      {/* List of terms & conditions */}
      <FlatList 
        data={terms_and_conditions}
        renderItem={listItem}
        keyExtractor={item => item.id}
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

  listItem: {

  },

  listItemText: {

  },
});
