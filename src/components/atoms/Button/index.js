import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('UserProfile')}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#5A38FD',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 18,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});
