import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImgRegister from '../../assets/img/img-register.png';
import {Button, Input, Link} from '../../components/atoms';

const Register = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subTitle}>Sign Up and Get Started</Text>
      <View>
        <Image source={ImgRegister} style={styles.logo} />
      </View>
      <View style={styles.fillAuth}>
        <Input placeholder="Nama Lengkap" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
      <Link
        title="Already Have an Account ?"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Register Now" onPress={onPress} />
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
