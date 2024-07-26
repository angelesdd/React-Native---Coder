import { StyleSheet, Text, View, Modal, Pressable, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { useState } from "react";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable style={styles.card} onPress={() => setModalVisible(true)}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{order.createdAt}</Text>
          <Text style={styles.text2}>${total}</Text>
        </View>
        <Feather name="search" size={30} color="black" />
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Feather name="x" size={24} color="black" />
            </Pressable>
            <FlatList
              data={order.items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={{ uri: item.images[0] }}
                  />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.gray100,
    padding: 10,
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
    fontSize: 17,
    color: "black",
  },
  text2: {
    fontSize: 19,
    color: "gray",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: 0,
    padding: 2,
  },
  itemContainer: {
    marginBottom: 10,
    width: "100%",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 0,
  },
  itemSubtitle: {
    fontSize: 14,
    color: "gray",
    marginLeft: 0,
  },
  image: {
    width: "100%",
    height: 100, 
    marginBottom: 10,
    borderRadius: 10,
  },
});
