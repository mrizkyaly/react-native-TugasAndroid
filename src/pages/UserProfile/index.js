import React from 'react';
import {Image, StyleSheet, Text, View, Button} from 'react-native';
import userImg from '../../assets/img/user1.jpg';
import Verified from '../../assets/icon/icon_female.svg';

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
          <Image source={userImg} style={styles.avatar} />
          <Verified style={styles.verified} />
        </View>
        <Text style={styles.name}>Muhammad Rizky Aly</Text>
        <Text style={styles.npm}>06.2018.1.07051</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
