/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {ToDoItem, AddButton} from './components';

function App(probs) {
  const [entry, setEntry] = useState('');
  const [done, setDone] = useState(false);
  const [listData, setList] = useState([
    {todo: 'Ev temizlenecek', isDone: false},
    {todo: 'Alışveriş yapılacak', isDone: true},
  ]);

  changeText = text => {
    setEntry(text);
  };

  function updateDone(number) {
    let newDone = [...listData];
    newDone[number].isDone
      ? (newDone[number].isDone = false)
      : (newDone[number].isDone = true);
    setDone(newDone);
  }

  addToList = () => {
    let newList = [...listData];
    newList.push({todo: entry, isDone: false});
    setList(newList);
    setEntry('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 5}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={listData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                updateDone(index);
              }}>
              <ToDoItem myTitle={item.todo} isDone={item.isDone} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={changeText}
          value={entry}
        />
        <AddButton myTitle="Ekle" myPress={addToList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textInput: {
    alignSelf: 'center',
    backgroundColor: '#af8eb5',
    color: 'white',
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
    margin: 20,
    width: Dimensions.get('screen').width * 0.9,
  },
});

export default App;
