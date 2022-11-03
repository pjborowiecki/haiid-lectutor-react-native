import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLOURS, settings } from "../../constants";

// Component imports
import Header from "../../components/Header";
import SettingsSwitch from "../../components/SettingsSwitch";

// Settings screen
export default function Settings() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [easyReadModeEnabled, setEasyReadModeEnabled] = useState(false);

  // Helper functions
  const toggleDarkMode = () => {
    setDarkModeEnabled((previousState) => !previousState);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  const toggleEasyReadMode = () => {
    setEasyReadModeEnabled((previousState) => !previousState);
  };

  // Screen return
  return (
    // Settings screen wrapper
    <View style={styles.settingsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Section title pill */}
      <View style={{ ...styles.sectionTitlePill, ...styles.shadowDark }}>
        <Text style={styles.sectionTitleText}>Settings</Text>
      </View>

      {/* Settings List */}
      <View style={styles.settingsList}>
        {settings.map((option, index) => (
          <View
            key={option.id}
            style={{
              ...styles.singleSetting,
              borderBottomWidth: index === settings.length - 1 ? 1 : 0,
            }}
          >
            {/* Left-hand Side (Icon and Text) */}
            <View style={styles.settingIconTitleGroup}>
              <Image
                source={option.icon}
                resizeMode="contain"
                style={styles.settingIcon}
              />
              <Text style={styles.settingTitle}>{option.name}</Text>
            </View>

            {/* Right-hand Side (Switch or Chevron) */}
            <View>
              {option.type === "darkModeSwitch" && (
                <SettingsSwitch
                  isEnabled={darkModeEnabled}
                  toggleSwitch={setDarkModeEnabled}
                />
              )}

              {option.type === "notificationsSwitch" && (
                <SettingsSwitch
                  isEnabled={notificationsEnabled}
                  toggleSwitch={setNotificationsEnabled}
                />
              )}

              {option.type === "easyReadModeSwitch" && (
                <SettingsSwitch
                  isEnabled={easyReadModeEnabled}
                  toggleSwitch={setEasyReadModeEnabled}
                />
              )}

              {option.type === "chevron" && (
                <Image
                  source={option.component}
                  resizeMode="contain"
                  style={styles.chevronRightIcon}
                />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  settingsScreenWrapper: {
    backgroundColor: COLOURS.white,
    height: "100%",
    display: "flex",
    alignItems: "center",
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

  settingsList: {
    display: "flex",
    width: "100%",
    marginTop: 36,
  },

  singleSetting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: COLOURS.lightGray,
    paddingHorizontal: 36,
    height: 48,
  },

  settingIconTitleGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  settingIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },

  settingTitle: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
  },

  chevronRightIcon: {
    width: 28,
    height: 28,
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
