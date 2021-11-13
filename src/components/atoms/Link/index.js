import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: '#B0B0B0',
  },
});
