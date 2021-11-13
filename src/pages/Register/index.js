import axios from 'axios';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import ImgRegister from '../../assets/img/img-register.png';
import {Button, Input, Link} from '../../components/atoms';
import {useToast} from 'react-native-toast-notifications';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const onPress = () => {
    const data = {
      name,
      email,
      npm,
      password,
    };

    if (
      data.name === '' ||
      data.email === '' ||
      data.npm === '' ||
      data.password === ''
    ) {
      toast.show('Pastikan isi form dengan lengkap !! ', {
        type: 'danger',
        placement: 'top',
      });
    } else {
      axios.post('http://10.0.2.2:3000/users', data).then(res => {
        setName('');
        setNpm('');
        setEmail('');
        setPassword('');
      });

      toast.show('Register Berhasil !! ', {
        type: 'success',
        placement: 'top',
      });
      navigation.navigate('UserProfile');
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subTitle}>Sign Up and Get Started</Text>
      <View>
        <Image source={ImgRegister} style={styles.logo} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fillAuth}>
          <Input
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={value => setName(value)}
          />
          <Input
            placeholder="NPM"
            value={npm}
            onChangeText={value => setNpm(value)}
          />
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
          title="Already Have an Account ?"
          onPress={() => navigation.navigate('Login')}
        />
        <Button title="Register Now" onPress={onPress} />
      </ScrollView>
    </View>
  );
};

export default Register;

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
