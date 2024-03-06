import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import IncomeScreen from '../screens/home/IncomeScreen';
import ExpenseScreen from '../screens/home/ExpenseScreen';
import MoneyExchangeScreen from '../screens/home/MoneyExchangeScreen';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IncomeScreen" component={IncomeScreen} />
      <Stack.Screen name="ExpenseScreen" component={ExpenseScreen} />
      <Stack.Screen name="MoneyExchangeScreen" component={MoneyExchangeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
