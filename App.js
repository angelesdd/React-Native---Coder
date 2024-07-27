import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import { useDB } from "./src/hooks/useDB";
import { useEffect } from "react";

export default function App() {
  const {initDB} = useDB()
  useEffect(()=>{
    initDB()
  })
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require('./assets/JosefinSans-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigator />
        <Toast />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: 'rgb(127, 179, 213)',
  },
});
