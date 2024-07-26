import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from "react-native";
import { useGetProductByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/CartSlice";


const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const { productoId: idSelected } = route.params;
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
  };

  return (
    <View style={styles.container}>
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <View
            style={
              orientation === "portrait"
                ? styles.imageContainer
                : styles.imageContainerLandscape
            }
          >
            <Image
              source={{ uri: product.images[0] }}
              style={
                orientation === "portrait"
                  ? styles.image
                  : styles.imageLandscape
              }
              resizeMode="contain"
            />
          </View>
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.subtitle}>{product.subtitle}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <TouchableOpacity onPress={handleAddCart} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
    
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerLandscape: {
    width: "50%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageLandscape: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    marginBottom: 10,
    margin:7,
    textAlign: "justify", 
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: 'rgb(127, 179, 213)',
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgb(127, 179, 213)',
    margin: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
