import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todos } from "./src/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodos = (title) => {
    const todo = {
      title,
      id: Date.now().toString(),
      done: false
    };
    setTodos((prev) => [...prev, todo]);
  };
  const removeTodos = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const setDone = id => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    }))
  }
  return (
    <View style={styles.container}>
      <Navbar title="Список дел" />
      <AddTodo onAdd={addTodos} />

      <View style={styles.wrapper}>
        <Todos todos={todos} onRemove={removeTodos} onDone={setDone}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    alignItems: 'center'
  }
});
