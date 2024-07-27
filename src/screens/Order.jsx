import { StyleSheet, Text, View, FlatList } from 'react-native';
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";
import { useSelector } from 'react-redux';
import Loader from "../components/Loader";

const Order = () => {
  const user = useSelector((state) => state.auth.value.user);
  const { data: orderData, isLoading } = useGetOrdersByUserQuery(user);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }

  if (!orderData || orderData.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>No hay órdenes agregadas</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orderData}
        keyExtractor={(orderItem) => orderItem.createdAt}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: 'gray',
  },
});
