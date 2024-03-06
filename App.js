import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
// import AppNavigation from './AppNavigation';
import TabsNavigator from './AppNavigation';
import MainNavigator from './MainNavigation';
import AuthStack from './src/stack/AuthStack';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <MainNavigator />
    </View>
  );
};

export default App;
