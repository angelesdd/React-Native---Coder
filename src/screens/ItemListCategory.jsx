import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem.jsx";
import { useGetProductsByCategoryQuery } from "../services/shopServices.js";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);

  const { category: categorySelected } = route.params;

  const { data: productsFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);

  useEffect(() => {
    if (!isLoading) {
      const productsFiter = productsFetched.filter((product) =>
        product.title.toLowerCase().includes(keyWord.toLowerCase())
      );
      setProductsFiltered(productsFiter);
    }
  }, [keyWord, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.flatListContainer}>
      <Search
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
