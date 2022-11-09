import { useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { COLOURS, settings } from "../../constants";

// Component imports
import Header from "../../components/Header";
import SingleSetting from "../../components/SingleSetting";
import TitlePill from "../../components/TitlePill";

// Settings screen
export default function Settings({ navigation, tabActive, setTabActive }) {
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
    <SafeAreaView style={styles.settingsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="Settings" />
      </View>

      {/* Settings List */}
      <ScrollView style={styles.settingsList}>
        {settings.map((setting, index) => (
          <View key={index}>
            {setting.type === "darkModeSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={darkModeEnabled}
                onToggle={toggleDarkMode}
              />
            )}
            {setting.type === "notificationsSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={notificationsEnabled}
                onToggle={toggleNotifications}
              />
            )}
            {setting.type === "easyReadModeSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={easyReadModeEnabled}
                onToggle={toggleEasyReadMode}
              />
            )}
            {setting.type === "chevron" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                lastSetting={index === settings.length - 1}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  settingsScreenWrapper: {
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
  },

  settingsList: {
    display: "flex",
    flex: 1,
    width: "100%",
    marginTop: 36,
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
