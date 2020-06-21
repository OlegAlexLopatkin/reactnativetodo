import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./Navbar";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { DB } from "./db";

export function Main() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async function () {
      const todosAll = await DB.getTodos();
      setTodos(todosAll);
    })();
  }, []);
  const addTodos = async (title) => {
    const todo = {
      title,
      done: false,
    };
    const id = await DB.createTodo(todo);
    todo.id = id;
    setTodos((prev) => [...prev, todo]);
  };
  const removeTodos = async (id) => {
    await DB.removeTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const setDone = async (id) => {
    const todo = todos.find(t => t.id === id)
    await DB.updateTodo(todo);
    // console.log(todo)
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
    
  };
  return (
    <View style={styles.container}>
      <Navbar title="Список дел" />
      <AddTodo onAdd={addTodos} />

      <View style={styles.wrapper}>
        <Todos todos={todos} onRemove={removeTodos} onDone={setDone} />
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
    alignItems: "center",
  },
});
