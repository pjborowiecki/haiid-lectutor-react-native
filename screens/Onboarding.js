import AppIntroSlider from "react-native-app-intro-slider";

import { View, Image, Text, StyleSheet } from "react-native";
import { COLOURS, onboardingData } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

// Onboarding screen
export default function Onboarding({ onDone }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* Slide Title */}
        <Text
          style={{
            ...styles.slideTitle,
            fontSize:
              item.id === 1 ? 55 : item.id === 4 ? 32 : item.id === 5 ? 28 : 36,
            marginTop: item.id === 1 ? 96 : 78,
          }}
        >
          {item.title}
        </Text>

        {/* Slide Image */}
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width:
              item.id === 1
                ? 292
                : item.id === 2
                ? 288
                : item.id === 3
                ? 203
                : item.id === 4
                ? 326
                : item.id === 5
                ? 234
                : item.id === 6
                ? 368
                : "100%",
            height:
              item.id === 1
                ? 344
                : item.id === 2
                ? 224
                : item.id === 3
                ? 225
                : item.id === 4
                ? 279
                : item.id === 5
                ? 211
                : item.id === 6
                ? 378
                : "100%",
            marginVertical:
              item.id === 1
                ? 40
                : item.id === 2
                ? 68
                : item.id === 3
                ? 56
                : item.id === 4
                ? 24
                : item.id === 5
                ? 32
                : item.id === 6
                ? 0
                : 36,
            left: item.id === 3 ? 16 : 0,
          }}
        />

        {/* Slide Text */}
        <Text
          style={{
            ...styles.slideText,
            fontSize:
              item.id === 1 ? 36 : item.id === 3 ? 34 : item.id === 6 ? 34 : 28,
            paddingHorizontal: item.id === 5 ? 52 : 40,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => onDone(false)}
        style={{
          ...styles.buttonWrapper,
          backgroundColor: COLOURS.primary,
          borderRadius: 25,
          paddingHorizontal: 16,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 20,
        }}
      >
        <Text
          style={{
            ...styles.rightButtonText,
            color: COLOURS.white,
            fontSize: 16,
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    );
  };

  const renderNextButton = (endOnboarding) => {
    return (
      <View
        style={{
          ...styles.buttonWrapper,
          marginRight: 20,
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View
        style={{
          ...styles.buttonWrapper,
          marginLeft: 20,
        }}
      >
        <Text style={styles.buttonText}>Back</Text>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  return (
    <AppIntroSlider
      data={onboardingData}
      keyExtracotr={keyExtractor}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      renderSkipButton={renderDoneButton}
      showPrevButton={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}

// Styles
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",

    backgroundColor: COLOURS.onboardingBg,
  },

  slideTitle: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    paddingHorizontal: 40,
  },

  slideText: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
  },

  buttonWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: COLOURS.gray,
    fontWeight: "bold",
  },

  dotStyle: {
    backgroundColor: COLOURS.onboardingDotsGray,
    width: 14,
    height: 14,
    borderRadius: 25,
  },

  activeDotStyle: {
    backgroundColor: COLOURS.primary,
    width: 16,
    height: 16,
    borderRadius: 25,
  },
});
