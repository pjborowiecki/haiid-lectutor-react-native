import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { COLOURS, settings } from "../../constants";

// Component imports
import Header from "../../components/Header";
import SingleSetting from "../../components/SingleSetting";
import TitlePill from "../../components/TitlePill";

// Settings screen
export default function Settings({ navigation }) {
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
      <TitlePill title="Settings" />

      {/* Settings List */}
      <View style={styles.settingsList}>
        {settings.map((setting, index) => (
          <View key={index}>
            {setting.type === "darkModeSwitch" && <SingleSetting navigation={navigation} setting={setting} switchEnabled={darkModeEnabled} onToggle={toggleDarkMode}/>}
            {setting.type === "notificationsSwitch" && <SingleSetting navigation={navigation} setting={setting} switchEnabled={notificationsEnabled} onToggle={toggleNotifications}/>}
            {setting.type === "easyReadModeSwitch" && <SingleSetting navigation={navigation} setting={setting} switchEnabled={easyReadModeEnabled} onToggle={toggleEasyReadMode}/>}
            {setting.type === "chevron" && <SingleSetting navigation={navigation} setting={setting} lastSetting={index === settings.length-1}/>}
          </View>
        ))}
      </View>
    </SafeAreaView>
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

  settingsList: {
    display: "flex",
    width: "100%",
    marginTop: 36,
  },
});


