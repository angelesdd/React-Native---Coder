import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = () => {

    return (
        <View style={styles.container}>
            <FlatList
                styles={styles.container}
                data={categories}
                renderItem={({ item, index, separators }) => (
                    <View>
                        <CategoryItem 
                          category={item} 
                        />
                 
                    </View>
                )}
                keyExtractor={(category) =>category}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

export default Categories
