import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName]= useState('Amani');
  const [age, setAge]= useState('30');

  
  

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>    
      <TextInput style={styles.input}/>

      <Text>name: {name}, age: {age} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderwidth:1,
    borderColor: '#754',
    padding: 8,
    margin:10,
    wigth: 200,
    

  },
  
  });
