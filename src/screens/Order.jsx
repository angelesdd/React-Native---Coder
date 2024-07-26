import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";
import { useSelector } from 'react-redux';

const Order = () => {
  const user = useSelector((state) => state.auth.value.user);
  const { data: orderData, isLoading } = useGetOrdersByUserQuery(user);
  //if(!isLoading){
   
  //}

  return (
    <View>
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

const styles = StyleSheet.create({})
