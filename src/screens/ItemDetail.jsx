import React, { useEffect, useState } from "react";
import {Button,Image,StyleSheet,Text,View,useWindowDimensions,TouchableOpacity,} from "react-native";
import { useGetProductByIdQuery } from "../services/shopServices";

const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const { productoId: idSelected } = route.params;
  const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);


  return (
    <View>
       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="cover"
          />
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart"></Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },

  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
  },
  backButton: {
    padding: 10,
    alignSelf: "flex-start",
    backgroundColor: 'rgba(0,172,237,255)',
    marginLeft: '95%',
    marginTop: 10,
    borderRadius: 5,
  },
  backText: {
    fontSize: 16,
    color: "white",
  },

});
