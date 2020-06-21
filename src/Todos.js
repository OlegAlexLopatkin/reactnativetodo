import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export const Todos = ({ todos, onRemove, onDone }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          const styleText = item.done ? styles.done : styles.text;
          return (
            <TouchableHighlight
              onPress={() => onDone(item.id)}
              onLongPress={() => onRemove(item.id)}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
            >
              <Text style={styleText}>
                {item.title}
              </Text>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const text = {
  fontSize: 20,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 3,
  padding: 5,
  marginBottom: 5,
};

const done = { ...text, textDecorationLine: "line-through" };

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 10,
  },
  text,
  done,
});
