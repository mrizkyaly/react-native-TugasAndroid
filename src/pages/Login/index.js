import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import ILLogo from '../../assets/img/pablita-success.png';
import {Button, Input, Link} from '../../components/atoms';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const [itemLogin, setItemLogin] = useState({});

  const toast = useToast();

  const getDataUser = useCallback(async () => {
    const result = await axios.get('http://10.0.2.2:3000/users');
    setDataUser(result);
  }, []);

  useEffect(() => {
    getDataUser();
  }, []);

  const onPress = () => {
    const data = {
      email,
      password,
    };

    if (data.email === '' || data.password === '') {
      toast.show('Pastikan isi form dengan lengkap !!', {
        type: 'danger',
        placement: 'bottom',
      });
    } else {
      dataUser.data.map(item => {
        if (data.email === item.email && data.password === item.password) {
          toast.show('Login Berhasil', {
            type: 'success',
            placement: 'top',
          });
          navigation.navigate('UserProfile');
        }
      });
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Welcome Back, Guys</Text>
      <Text style={styles.subTitle}>Sign In to continue</Text>
      <View>
        <Image source={ILLogo} style={styles.logo} />
      </View>
      <View style={styles.fillAuth}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <Link
        title="Have an account ?"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login" onPress={onPress} />
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
