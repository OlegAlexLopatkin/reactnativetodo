import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const AddTodo = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} style={styles.input} />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10
  },
  input: {
    width: "70%",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    borderStyle: "solid",
    padding: 5,
    fontSize: 20,
  },
});
