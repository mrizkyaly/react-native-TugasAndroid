import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ILLogo from '../../assets/img/pablita-success.png';
import {Button, Input, Link} from '../../components/atoms';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Welcome Back, Guys</Text>
      <Text style={styles.subTitle}>Sign In to continue</Text>
      <View>
        <Image source={ILLogo} style={styles.logo} />
      </View>
      <View style={styles.fillAuth}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
      <Link title="Forget my password ?" />
      <Button title="Login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 12,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#B0B0B0',
    marginTop: 6,
  },
  logo: {
    marginTop: 28,
    width: 333,
    height: 188,
    alignSelf: 'center',
  },
  fillAuth: {
    marginTop: 28,
    marginBottom: 16,
  },
});
