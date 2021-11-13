import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={'#000'}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#5A38FD',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 16,
    color: '#000',
  },
});
