import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const AddButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
      <Text style={styles.textStyle}>{props.myTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#af8eb5',
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export {AddButton};
