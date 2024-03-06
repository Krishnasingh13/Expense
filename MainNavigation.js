import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './AppNavigation';
import {TabContextProvider} from './src/context/TabContext';
import AuthStack from './src/stack/AuthStack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <>
      {1 ? (
        <TabContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Root"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Root" component={TabsNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </TabContextProvider>
      ) : (
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      )}
    </>
  );
};

export default MainNavigator;
