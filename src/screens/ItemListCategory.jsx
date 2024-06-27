// ItemListCategory.js

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import Search from '../components/Search';
import categories from'../data/categories.json';
import CategoryItem from '../components/CategoryItem';

const ItemListCategory = () => {
    const [filteredCategories, setFilteredCategories] = useState(categories);

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        if (lowerCaseQuery === '') {
            setFilteredCategories(categories);
        } else {
            const filteredData = categories.filter(category =>
                category.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredCategories(filteredData);
        }
    };

    return (
        <View style={styles.container}>
            <Search onSearch={handleSearch} />
            {filteredCategories.map(category => (
                <CategoryItem key={category} category={category} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
});

export default ItemListCategory;
