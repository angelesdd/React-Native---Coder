import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";


const CartItem = ({cartItem}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} {cartItem.quantity}
        </Text>
        <Text>{cartItem.brand}</Text>
        <Text>{cartItem.price}</Text>
      </View>
    <Entypo name="trash" size={30} color="black" />
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    height: 90,
    backgroundColor: 'rgba(224,224,224,255)',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 19,
 
  },
  text2: {
    fontFamily: "Josefin",
    fontSize: 14,
 
  },
});
