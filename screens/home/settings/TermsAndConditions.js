import { View, ScrollView, Text, StyleSheet, FlatList } from "react-native";
import { assets, COLOURS, terms_and_conditions } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import BottomNav from "../../../components/BottomNav";
import FunctionCircle from "../../../components/FunctionCircle";
import TitlePill from "../../../components/TitlePill";

// Terms & conditions screen
export default function TermsAndConditions({
  navigation,
  tabActive,
  setTabActive,
}) {
  // List item component
  const listItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listItemNumberContainer}>
        <Text style={styles.listItemText}>{item.id}.</Text>
      </View>
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.termsConditionsScreenWrapper}>
      {/* Header */}
      <Header marginTop={0}/>

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="Terms & Conditions" />
      </View>

      {/* List of terms and conditions */}
      <FlatList
        data={terms_and_conditions}
        renderItem={listItem}
        keyExtractor={(item) => item.id}
        style={styles.termsAndConditionsList}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  termsConditionsScreenWrapper: {
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

  termsAndConditionsList: {
    width: "100%",
    display: "flex",
    flex: 1,
    paddingHorizontal: 46,
  },

  listItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },

  listItemNumberContainer: {
    width: 24,
  },

  listItemTextContainer: {
    width: "100%",
    flex: 1,
  },

  listItemText: {
    fontFamily: "HammersmithOne",
    fontSize: 17,
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
