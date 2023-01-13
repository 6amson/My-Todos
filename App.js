import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, Alert, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import Addtodo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'eat breakfast', key: '1' },
    { text: 'Pay light bills', key: '2' },
    { text: 'get groceries', key: '3' },
    { text: 'see a movie', key: '4' },
  ]);

  

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }


  const submitHandler = (value) => {
    console.log(value)

    if(value.length > 3){
      setTodos((prevTodos) => {

        /*return prevTodos.push({ text: value, key: Math.random().toString() });*/ 
        return [
         { text: value, key: Math.random().toString() },
         ...prevTodos
       ];
      })

    }else{
      Alert.alert('OOPS!', 'Todos must be 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ])
    }  
  }


 
  return (
   // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
  content: {
    padding: 40,
    flex: 1,
   
  },
  list: {
    flex: 1,
    marginTop: 20,
    
  }

});
