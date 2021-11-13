import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Verified from '../../assets/icon/icon_female.svg';
import userImg from '../../assets/img/user1.jpg';

const UserProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://10.0.2.2:3000/users').then(res => {
      console.log('data', res.data);
      setUsers(res.data);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
          <Image source={userImg} style={styles.avatar} />
          <Verified style={styles.verified} />
        </View>
        <Text style={styles.name}>{users.name}</Text>
        <Text style={styles.npm}>{users.npm}</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 140 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  verified: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
  npm: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 4,
  },
});
