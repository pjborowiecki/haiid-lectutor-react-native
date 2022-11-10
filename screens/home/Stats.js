import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLOURS, assets } from "../../constants";
import { useState } from "react";

// Component imports
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import FunctionCircle from "../../components/FunctionCircle";
import TitlePill from "../../components/TitlePill";

// Stats screen
export default function Stats({
  navigation,
  statistics,
  streak,
  tabActive,
  setTabActive,
}) {
  // Function to check if some statistics have been incremented
  const checkIfStatsExist = () => {
    return statistics.some((stat) => stat.count > 0);
  };

  const [statsState, setStatsState] = useState(checkIfStatsExist());

  return (
    // Stats screen wrapper
    <SafeAreaView style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header streak={streak} showFire={true} />

      {/* Share button */}
      <FunctionCircle icon={assets.shareIcon} iconSize={34} right={1} />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="Statistics" />
      </View>

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
            <Text style={styles.statsListItemText}>{stat.name}</Text>
            <Text style={styles.statsListItemText}>{stat.count}</Text>
          </View>
        ))}
      </View>

      {/* Bottom text */}
      {!statsState && (
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>It's a bit quiet here...</Text>
          <Text style={styles.bottomText}>
            Try interacting with the app to record this data!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  statsScreenWrapper: {
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
    marginBottom: 36,
  },

  statsList: {
    width: "100%",
    display: "flex",

    height: "auto",
  },

  statsListItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: COLOURS.lightGray,
    paddingHorizontal: 46,
    height: 50,
  },

  statsListItemText: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
  },

  bottomTextContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLOURS.white,

    flex: 1,

    paddingHorizontal: 36,
    paddingVertical: 16,
  },

  bottomText: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
    color: COLOURS.tertiaryText,
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
