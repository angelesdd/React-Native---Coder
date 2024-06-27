import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// recibir la categoria seleccionada
const CategoryItem = ({ category }) => {
  return (
    <View style={styles.cardContainer}> 
      {/*Agregar pressable */}
      <Text>{category}</Text>
    </View>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});