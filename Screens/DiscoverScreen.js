import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import Book from "../Components/Book";
// import { ScrollView, FlatList } from "react-native-gesture-handler";

import Input from "../Components/Input";
export default function DiscoverScreen() {
  const [books, setBooks] = React.useState([]);
  const [query, setQuery] = React.useState("");

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Input setBooks={setBooks} query={query} setQuery={setQuery} />
      <View style={styles.container}>
        {books
          .filter((book) => book.volumeInfo.imageLinks !== undefined)
          .map((book) => (
            <Book {...book} key={book.id} />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    marginVertical: 15,
  },
});
