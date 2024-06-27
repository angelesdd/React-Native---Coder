import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './Categories';

const Header = ({ title = "Hola!" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'green',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default Header



