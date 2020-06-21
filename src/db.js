import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todos.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, done INT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
        
    }

    static getTodos() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM todos',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_,error) => reject(error)
                )
            })
        })
    }

    static createTodo({title, done}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO todos (title, done) VALUES (?, ?)`,
                    [title, done],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static updateTodo(todo) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE todos SET done = ? WHERE id = ?',
                    [todo.done ? 0 : 1, todo.id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static removeTodo(id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM todos WHERE id = ?',
                    [id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }
}