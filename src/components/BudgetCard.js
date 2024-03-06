import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AlertIcon from 'react-native-vector-icons/Ionicons';

const BudgetCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailBudgetScreen')}>
      <View className="bg-light-100 p-4 mt-5 rounded-2xl">
        <View className="flex flex-row items-center justify-between">
          <View className="px-3 py-2 border border-light-60 rounded-3xl bg-light-80">
            <Text className="text-sm text-black font-medium">🟠 Shopping</Text>
          </View>
          <AlertIcon name="alert-circle" color={'#FD3C4A'} size={24} />
        </View>
        <View className="mt-2">
          <Text className="text-2xl text-black font-semibold">
            Remaining $0
          </Text>
          <View className="w-full h-3 bg-yellow-100 rounded-md mt-1.5"></View>
          <Text className="text-light-20 text-base font-medium mt-1.5">
            $1200 of $1000
          </Text>
          <Text className="text-red-100 text-base font-medium">
            You’ve exceed the limit!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BudgetCard;
