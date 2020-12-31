import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../Constants/Colors";

export default function Input({ query, setQuery, setBooks }) {
  const [isDisabled, setDisabled] = React.useState(true);
  const queryHandler = (search) => {
    search.length > 2 ? setDisabled(false) : setDisabled(true);
    setQuery(search);
  };

  const searchQuery = () => {
    if (!query) return;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query
        .toLowerCase()
        .trim()}&maxResults=39&key=AIzaSyAtjF-Dwd3XE__QoyCU1-fewK18rg4dFZ8`
    )
      .then((data) => data.json())
      .then((res) => setBooks(res.items))
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={queryHandler.bind(this)}
        style={styles.query}
      />
      <Button
        title="Search"
        color={Colors.aestheticRed}
        disabled={isDisabled}
        onPress={() => searchQuery()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  query: {
    borderBottomWidth: 1,
    borderBottomColor: "#c0c0c0",
    width: 300,
    maxWidth: "80%",
    margin: 15,
    marginVertical: 30,
  },
});
