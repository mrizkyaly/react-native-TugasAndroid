import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, Register, UserProfile, TestModal} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="TestModal">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TestModal"
        component={TestModal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
