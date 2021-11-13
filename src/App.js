import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </NavigationContainer>
  );
};

export default App;
