import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
import Toast from 'react-native-toast-message';
import {clearCart} from '../features/Cart/CartSlice';


const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const [triggerPostOrder, result] = usePostOrderMutation();
  const user = useSelector((state) => state.auth.value.user);
  const dispatch = useDispatch();

  const onConfirmOrder = async () => {
    try {
      await triggerPostOrder({ items: CartData, user: user, total, createdAt: new Date().toLocaleString() }).unwrap();
      dispatch(clearCart());
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Orden Confirmada',
        text2: 'Tu orden ha sido confirmada exitosamente.',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al Confirmar',
        text2: 'No se pudo confirmar la orden. Intenta de nuevo.',
      });
    }
  };

  return (
    <View style={styles.container}>
      {CartData.length > 0 ? (
        <>
          <FlatList
            data={CartData}
            renderItem={({ item }) => <CartItem cartItem={item} />}
            keyExtractor={(producto) => producto.id}
          />
          <View style={styles.totalContainer}>
            <Pressable onPress={onConfirmOrder} style={styles.button}>
              <Text style={styles.buttonText}>Confirm Order</Text>
            </Pressable>
            <Text style={styles.totalText}>Total: $ {total}</Text>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>No tienes productos agregados a tu carrito</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: 'rgb(127, 179, 213)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
  },
});
