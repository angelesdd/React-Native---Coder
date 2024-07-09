import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, error = '',  goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
      </View>

      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={24} color='rgba(112,113,115,255)' />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome6 name="eraser" size={24} color='rgba(112,113,115,255)' />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color='rgba(112,113,115,255)' />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 4,
    width: "65%",
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: "white",
    color: 'rgba(112,113,115,255)',
    borderRadius: 10,
  },
});
