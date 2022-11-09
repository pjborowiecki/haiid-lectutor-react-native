import { useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { COLOURS, settings, settingsDM } from "../../constants";

// Component imports
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import SingleSetting from "../../components/SingleSetting";
import TitlePill from "../../components/TitlePill";

// Settings screen
export default function Settings({ 
  navigation, 
  setNavbarIconColour, 
  bgColour, 
  setBgColour,
}) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [easyReadModeEnabled, setEasyReadModeEnabled] = useState(false);
  const [fontFamily, setFontFamily] = useState("HammersmithOne");
  const [fontColour, setFontColour] = useState(COLOURS.black);
  const [iconColour, setIconColour] = useState(COLOURS.black)
  const [showSettings, setShowSettings] = useState(settings);

  // Helper functions
  const toggleDarkMode = () => {
    if (darkModeEnabled) {
      setDarkModeEnabled(false);
      setIconColour(COLOURS.black);
      setBgColour(COLOURS.white);
      setNavbarIconColour(COLOURS.homeIconBg);
      setFontColour(COLOURS.black)
      setShowSettings(settings);
    } else {
      setDarkModeEnabled(true);
      setIconColour(COLOURS.white);
      setBgColour(COLOURS.darkModeBb);
      setNavbarIconColour(COLOURS.darkIconColour);
      setFontColour(COLOURS.white);
      setShowSettings(settingsDM);
    }
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  const toggleEasyReadMode = () => {
    if (easyReadModeEnabled) {
      setEasyReadModeEnabled(false);
      setFontFamily("HammersmithOne");
    } else {
      setEasyReadModeEnabled(true);
      setFontFamily("OpenDyslexic");
    }
  };

  // Styles
const styles = StyleSheet.create({
  settingsScreenWrapper: {
    backgroundColor: bgColour,
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

  // Screen return
  return (
    // Settings screen wrapper
    <SafeAreaView style={styles.settingsScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill 
          title="Settings" 
          fontFamily={fontFamily} 
          fontColour={fontColour} 
          bgColour={bgColour} 
        />
      </View>

      {/* Settings List */}
      <ScrollView style={styles.settingsList}>
        {showSettings.map((setting, index) => (
          <View key={index}>
            {setting.type === "darkModeSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={darkModeEnabled}
                onToggle={toggleDarkMode}
                fontFamily={fontFamily}
                iconColour={iconColour}
              />
            )}
            {setting.type === "notificationsSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={notificationsEnabled}
                onToggle={toggleNotifications}
                fontFamily={fontFamily}
                iconColour={iconColour}
              />
            )}
            {setting.type === "easyReadModeSwitch" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                switchEnabled={easyReadModeEnabled}
                onToggle={toggleEasyReadMode}
                fontFamily={fontFamily}
                iconColour={iconColour}
              />
            )}
            {setting.type === "chevron" && (
              <SingleSetting
                navigation={navigation}
                setting={setting}
                lastSetting={index === settings.length - 1}
                fontFamily={fontFamily}
                iconColour={iconColour}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
