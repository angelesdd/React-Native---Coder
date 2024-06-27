import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import ProductItem from './ProductItem';

const CategoryItem = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    if(selectedCategory){
      setSelectedCategory(null)
    }else{
      setSelectedCategory(category);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={() => selectCategory(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
      {selectedCategory === category && <ProductItem category={category} />}
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});
