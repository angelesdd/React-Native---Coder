import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        onSearch(text);
    };

    const clearSearch = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar categoría"
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <Pressable onPress={clearSearch}>
                <FontAwesome6 name="eraser" size={24} color="black" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    input: {
   
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
    },
});

export default Search;
