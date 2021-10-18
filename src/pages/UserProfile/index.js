import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import userImg from '../../assets/img/user1.jpg';

const UserProfile = () => {
  return (
    <View>
      <Image source={userImg} width={50} height={50} />
      <View>
        <Text>Muhammad Rizky Aly</Text>
        <Text>06.2018.1.07051</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
