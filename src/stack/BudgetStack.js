import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BudgetScreen from '../screens/budget/BudgetScreen';
import DetailBudgetScreen from '../screens/budget/DetailBudgetScreen';
import CreateBudgetScreen from '../screens/budget/CreateBudgetScreen';

const BudgetStack = () => {
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
      <Stack.Screen name="BudgetScreen" component={BudgetScreen} />
      <Stack.Screen name="DetailBudgetScreen" component={DetailBudgetScreen} />
      <Stack.Screen name="CreateBudgetScreen" component={CreateBudgetScreen} />
    </Stack.Navigator>
  );
};

export default BudgetStack;
