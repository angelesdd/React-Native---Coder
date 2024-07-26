import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../features/Cart/CartSlice';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {cartItem.title}
        </Text>
        <Text style={styles.detail}>
          Artista: {cartItem.brand}
        </Text>
        <Text style={styles.detail}>
          Cantidad: {cartItem.quantity}
        </Text>
        <Text style={styles.price}>
          Precio: ${cartItem.price}
        </Text>
      </View>
      <TouchableOpacity onPress={handleRemoveItem} style={styles.iconButton}>
        <Entypo name="trash" size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: 'rgb(229, 231, 233)',
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    color: 'rgb(127, 179, 213)',
    fontWeight: 'bold',
  },
  detail: {

    fontSize: 14,
    color: "black",
  },
  price: {
    fontSize: 14,
    color: "black",
  },
  iconButton: {
    padding: 5,
  },
});
