import {   } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import Navigator from "./src/navegacao/index.jsx"

export default function App() {

  if (Platform.OS === "android") {
    console.warn("android")
  } else if (Platform.OS === "ios") {
    console.warn("IOS")
  } else {
    console.warn("Que isso ?")
  }

  return (
    <Navigator/>
  );
}



