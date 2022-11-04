import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLOURS, statistics, assets } from "../../constants";
import { useState } from "react";

// Component imports
import Header from "../../components/Header";
import FunctionCircle from "../../components/FunctionCircle";
import TitlePill from "../../components/TitlePill";


// Stats screen
export default function Stats() {
  // Function to check if some statistics have been incremented
  const checkIfStatsExist = () => {
    return statistics.some(stat => stat.count > 0);
  }

  const [statsState, setStatsState] = useState(checkIfStatsExist())

  return (
    // Stats screen wrapper
    <SafeAreaView style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Share button */}
      <FunctionCircle
        image={assets.shareIcon}
      />

      {/* Section title pill */}
      <TitlePill title="Statistics"/>

      {/* Stats list */}
      <View style={styles.statsList}>
        {statistics.map((stat, index) => (
          <View
            key={stat.id}
            style={{
              ...styles.statsListItem,
              borderBottomWidth: index === statistics.length - 1 ? 1 : 0,
            }}
          >
            <Text style={{ fontFamily: "HammersmithOne", fontSize: 20 }}>
              {stat.name}
            </Text>
            <Text style={{ fontFamily: "HammersmithOne", fontSize: 20 }}>
              {stat.count}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom text */}
      {!statsState && <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>It's a bit quiet here...</Text>
        <Text style={styles.bottomText}>
          Try interacting with the app to record this data!
        </Text>
      </View>}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  statsScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    alignItems: "center",
  },

  statsList: {
    display: "flex",
    width: "100%",
    marginTop: 36,
  },

  statsListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: COLOURS.lightGray,
    paddingHorizontal: 46,
    height: 52,
  },

  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 46,
    marginBottom: 84,
    paddingHorizontal: 36,
  },

  bottomText: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
    color: COLOURS.tertiaryText,
  },
});
