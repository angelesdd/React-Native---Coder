import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message'; // Importa el componente Toast
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
    return null; // Puedes mostrar un componente de carga aquí si lo prefieres
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "orange", //ver
  },
});
