import { View, Switch } from "react-native";
import { COLOURS } from "../constants";

export default function SettingsSwitch(props) {
  return (
    <View>
      <Switch
        trackColor={{ false: COLOURS.gray, true: COLOURS.settingsGreen }}
        thumbColor={COLOURS.white}
        ios_backgroundColor={COLOURS.gray}
        onValueChange={props.toggleSwitch}
        value={props.isEnabled}
      />
    </View>
  );
}
