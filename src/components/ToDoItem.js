import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ToDoItem = probs => {
  let styles = probs.isDone ? doneStyles : undoneStyles;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.dot} />
        <Text style={styles.text}>{probs.myTitle}</Text>
      </View>
      {probs.isDone && (
        <View>
          <Text>Yapıldı</Text>
        </View>
      )}
    </View>
  );
};

const doneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ff8a65',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  dot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

const undoneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#aed581',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export {ToDoItem};
