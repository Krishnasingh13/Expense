import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionScreen from '../screens/transaction/TransactionScreen';
import FinancialReportScreen from '../screens/transaction/FinancialReportScreen';
import DetailTransactionScreen from '../screens/transaction/DetailTransactionScreen';

const TransactionStack = () => {
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
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      <Stack.Screen name="FinancialReportScreen" component={FinancialReportScreen} />
      <Stack.Screen name="DetailTransactionScreen" component={DetailTransactionScreen} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
