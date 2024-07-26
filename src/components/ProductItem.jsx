import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/Shop/ShopSlice";

const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title));
    navigation.navigate("ItemDetail", { productoId: product.id });
  };

  return (
    <Card style={styles.card}>
      <Pressable style={styles.pressable} onPress={handleNavigate}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: product.images[0] }}
          />
          <Text style={styles.textCategory}>{product.title}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 370,
    margin: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  pressable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
 
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",

    
  },
  textCategory: {
    fontSize: 18,
    marginTop: 5,
    
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 160,
    width: "100%",
  },
});
