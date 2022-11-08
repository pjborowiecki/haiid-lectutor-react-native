import { useState } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import { assets, COLOURS } from "../constants";

export default function Searchbar() {
  const [focused, setFocused] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchBar}>
        {/* Search Icon */}
        <Image source={assets.searchIcon} style={styles.searchIcon} />

        {/* Input Field */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => setFocused((previous) => !previous)}
        />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  searchBarWrapper: {
    width: "82%",
    marginHorizontal: "14%",
    marginBottom: 20,
  },

  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 70,

    height: 38,

    paddingHorizontal: 16,
    // width: 292,

    backgroundColor: COLOURS.white,

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  searchIcon: {
    width: 20,
    height: 20,
  },

  searchInput: {
    width: "100%",
    height: "100%",
    fontFamily: "HammersmithOne",
    fontSize: 20,
    marginLeft: 16,
  },
});
