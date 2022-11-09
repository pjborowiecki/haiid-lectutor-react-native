import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLOURS } from "../constants";

// Import components
import SettingsSwitch from "./SettingsSwitch";

// Function circle that appears in the header
export default function SingleSetting({ 
  navigation, 
  setting, 
  switchEnabled,
  onToggle,
  lastSetting=false,
  fontFamily,
  iconColour,
}) {

  // Styles
const styles = StyleSheet.create({
  singleSetting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: iconColour === COLOURS.white ? COLOURS.black : COLOURS.lightGray,
    paddingHorizontal: 36,
    height: 50,
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
    color: iconColour,
  },

  settingTitle: {
    fontFamily: fontFamily,
    fontSize: 20,
    color: iconColour
  },

  chevronRightIcon: {
    width: 28,
    height: 28,
    color: iconColour,
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

  return (
    <View>
      {setting.route && <TouchableOpacity
        onPress={() => navigation.navigate(setting.route)}
        style={{
          ...styles.singleSetting,
          borderBottomWidth: lastSetting ? 1 : 0,
        }}
        >
        <View style={styles.settingIconTitleGroup}>
          <Image
            source={setting.icon}
            resizeMode="contain"
            style={styles.settingIcon}
          />
          <Text style={styles.settingTitle}>{setting.name}</Text>
        </View>
        <View>
          <Image
            source={setting.component}
            resizeMode="contain"
            style={styles.chevronRightIcon}
          />
        </View>
      </TouchableOpacity>}
      {setting.route === undefined && <View 
        style={{
          ...styles.singleSetting,
          borderBottomWidth: lastSetting ? 1 : 0,
        }}>
        <View style={styles.settingIconTitleGroup}>
          <Image
            source={setting.icon}
            resizeMode="contain"
            style={styles.settingIcon}
          />
          <Text style={styles.settingTitle}>{setting.name}</Text>
        </View>
        <View>
          <SettingsSwitch
            isEnabled={switchEnabled}
            toggleSwitch={onToggle}
          />
        </View>
      </View>} 
    </View>
  );
}
