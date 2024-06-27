import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";

const ItemListCategories = () => {
    //const category = "Your Category"; // Aquí deberías tener una variable category definida o pasada como prop

    return (
        <>
            <Header title={category} />
            <View style={styles.container}>
                <Text>ItemListCategory</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ItemListCategories