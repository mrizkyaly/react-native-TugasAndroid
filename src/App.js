import React from 'react';
import {ScrollView, View} from 'react-native';
import {Login, UserProfile} from './pages';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Login /> */}
        <UserProfile />
      </ScrollView>
    </View>
  );
};

export default App;
