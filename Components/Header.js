import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import Colors from "../Constants/Colors";
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}{" "}
        <AntDesign name="book" color={Colors.aestheticWhite} size={33} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: Colors.aestheticRed,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: Colors.aestheticWhite,
  },
});
