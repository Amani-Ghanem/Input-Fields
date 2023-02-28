import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName]= useState('Amani');
  const [age, setAge]= useState('30');

  
  

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>    
     
      <TextInput 
      multiline
      style={styles.input}
      placeholder = 'e.g. Jhon Doe'
      onChangeText={(val) => setName(val)}      
      />
       <Text>Enter age:  </Text>
      <TextInput
      multiline    
      style={styles.input}
      placeholder = 'e.g. 40'
      onChangeText={(val) => setAge(val)}      
      />
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
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 200,
    
    

  },
  
  });
