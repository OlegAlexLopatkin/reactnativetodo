import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Navbar = ({ title }) => (
  <View style={styles.navbar}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "brown",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#fff",
  },
});
