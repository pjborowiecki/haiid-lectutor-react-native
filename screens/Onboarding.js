import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLOURS, onboardingData } from "../constants";

// Onboarding screen
export default function Onboarding({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* Slide Title */}
        <Text
          style={{
            ...styles.slideTitle,
            fontSize: item.titleSize,
            paddingHorizontal: item.titlePaddingHorizontal,
          }}
        >
          {item.title}
        </Text>

        {/* Slide Image */}
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: item.imageWidth,
            height: item.imageHeight,
            marginVertical: item.imageMarginVertical,
            left: item.id === 3 ? 14 : item.id === 4 ? 10 : 0,
          }}
        />

        {/* Slide Subtitle */}
        <Text
          style={{
            ...styles.slideText,
            fontSize: item.subtitleSize,
            paddingHorizontal: item.subtitlePaddingHorizontal,
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
        onPress={() => navigation.navigate("Consent")}
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
            ...styles.buttonText,
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
        <Text style={styles.buttonText}></Text>
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
        <Text style={styles.buttonText}></Text>
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
    justifyContent: "center",
    backgroundColor: COLOURS.onboardingBg,
  },

  slideTitle: {
    fontFamily: "HammersmithOne",
    textAlign: "center",
    // paddingHorizontal: 40,
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
