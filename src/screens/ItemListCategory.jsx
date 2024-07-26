import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem.jsx";
import { useGetProductsByCategoryQuery } from "../services/shopServices.js";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { category: categorySelected } = route.params;
  const { data: productsFetched, error: errorFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);

  useEffect(() => {
    if (!isLoading) {
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
    }
  }, [keyWord, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search
          onSearch={setKeyword}
          goBack={() => navigation.goBack()}
        />
      </View>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(producto) => producto.id}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default ItemListCategory;

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229, 231, 233)', 
    padding: 10, 
  },
  searchContainer: {
    marginBottom: 15, 
    width: width * 0.9, 
    alignSelf: 'center', 
  },
  flatListContentContainer: {
    paddingBottom: 20, 
  },
});
