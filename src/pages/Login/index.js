import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ILLogo from '../../assets/img/pablita-success.png';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Welcome Back, Guys</Text>
      <Text style={styles.subTitle}>Sign In to continue</Text>
      <View style={styles.imageSection}>
        <Image source={ILLogo} style={styles.logo} />
      </View>
      <View style={styles.fillAuth}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#000'}
        />
      </View>
      <Text style={styles.linkForget}>Forget Password ?</Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.btnLoginText}>Sign In</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#5A38FD',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 16,
    color: '#000',
  },
  linkForget: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: '#B0B0B0',
  },
  btnLogin: {
    backgroundColor: '#5A38FD',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 18,
  },
  btnLoginText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});
