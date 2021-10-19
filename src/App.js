import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {UserProfile, Login} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <Login />
      {/* <UserProfile /> */}
    </NavigationContainer>
  );
};

export default App;
