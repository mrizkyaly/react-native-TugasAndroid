import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import logo from '../../assets/img/user1.jpg';

const Login = () => {
  return (
    <View>
      <Image source={logo} width={50} height={50} />
      <View>
        <Text>NPM</Text>
        <TextInput style={styles.input} />
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <Button title="Sign In" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 10,
    padding: 12,
  },
});
