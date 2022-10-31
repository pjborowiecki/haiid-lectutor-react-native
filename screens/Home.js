import {SafeAreaView, View, Text} from "react-native"

import {COLOURS} from "../constants"


const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLOURS.primary}}>
    <Text>Hello LecTutor!</Text>
    </SafeAreaView>
  )
}

export default Home