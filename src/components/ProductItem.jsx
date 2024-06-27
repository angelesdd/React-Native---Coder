import React from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import products from '../data/products.json';

const ProductItem = ({ category }) => {
  const filteredProducts = products.filter(product => product.category === category);

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductItem;
