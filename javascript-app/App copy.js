import {   } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
// import TextCentral from './src/components/TextCentral';
import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

export default function App() {

  if (Platform.OS === "android") {
    console.warn("android")
  } else if (Platform.OS === "ios") {
    console.warn("IOS")
  } else {
    console.warn("Que isso ?")
  }

  return (
    <SafeAreaView style={styles.container}>
        <TelaA/>
        <TelaB/>
        <TelaC/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  }
})


