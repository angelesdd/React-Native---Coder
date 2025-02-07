import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: 'rgb(127, 179, 213)' ,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: 'bold',
  },
});
