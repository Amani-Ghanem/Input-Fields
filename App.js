import React, { useState } from 'react';
import { StyleSheet, Text, View ,FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';




export default function App() {
  const [todos, setTodos]= useState([
    { text: 'Do 1' , key: '1' },
    { text: 'Do 2' , key: '2' },
    { text: 'Do 3' , key: '3' },
    { text: 'Do 4' , key: '4' },
    { text: 'Do 5' , key: '5' },
    { text: 'Do 6' , key: '6' },
    { text: 'Do 7' , key: '7' },

    
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler = (text) => {
    if(text.length >= 4){
      setTodos ((prevTodos) => {
        return[ 
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
  
      });
    } else {
      Alert.alert('Invalid Input', 'To do must be 4 or more chars long', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ]);


    }
   
  }



  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={( ) => {
      Keyboard.dismiss();
      console.log('dismissed keyboard'); 
    }}>
    <View style={styles.container}>
      <Header/>
      <View style = {styles.content}>
        <AddTodo submitHandler={submitHandler}/>
      
        <View style= {styles.list}>
          <FlatList 
          data = {todos} 
          renderItem= {({item}) => (        
           <TodoItem item= {item} pressHandler= {pressHandler} />
          )}
          />

        </View>

      </View>
   
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding: 40,
    flex: 1,
    },
    list:{
      marginTop: 20,
    },
    item:{
      marginTop:24,
      padding: 5,
      fontSize: 20,
      marginHorizontal:10,
      marginTop: 24,
      
    },
});
