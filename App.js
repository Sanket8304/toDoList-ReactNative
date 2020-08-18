import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import ToDoList from './components/todoList'
import AddToDo from './components/addToDo'

export default function App() {
  const [todos, setToDos] = useState([]);

  const deleteToDo = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key);
    });
  }

  const addToDo = (text) =>{
    setToDos((prevToDos) => {
      return [
        { text:text, key: Math.random().toString() },
        ...prevToDos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <ToDoList list={todos} deleteToDo={deleteToDo}/>
        
        <AddToDo  addToDo={addToDo}/>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    flex:1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
