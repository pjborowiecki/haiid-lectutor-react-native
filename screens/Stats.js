import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLOURS, statistics, assets } from "../constants";

// Component imports
import Header from "../components/Header";

// Stats screen
export default function Stats({ navigation }) {
  return (
    // Stats screen wrapper
    <View style={styles.statsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Share button */}
      <TouchableOpacity
        style={{
          ...styles.shareButton,
          ...styles.shadowDark,
        }}
      >
        <Image
          source={assets.shareIcon}
          resizeMode="contain"
          style={styles.shareButtonIcon}
        />
      </TouchableOpacity>

      {/* Section title pill */}
      <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
        <Text style={styles.sectionTitleText}>Statistics</Text>
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
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>It's a bit quiet here...</Text>
        <Text style={styles.bottomText}>
          Try interacting with the app to record this data!
        </Text>
      </View>
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

  shareButton: {
    width: 67,
    height: 67,
    backgroundColor: COLOURS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    position: "absolute",
    top: 130,
    left: 30,
  },

  shareButtonIcon: {
    width: 34,
    height: 34,
    left: -2,
  },

  sectionTitlePill: {
    backgroundColor: COLOURS.white,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
    width: 244,
    height: 37,
    borderRadius: 70,
  },

  sectionTitleText: {
    fontFamily: "HammersmithOne",
    fontSize: 22,
    top: 2,
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

  shadow: {
    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
