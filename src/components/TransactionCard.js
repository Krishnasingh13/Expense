import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Shopping_bag_icon from '../assets/icons/shopping_bag_icon.png';

const TransactionCard = ({navigation}) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailTransactionScreen')}>
      <View className="w-full h-fit p-4 rounded-3xl bg-light-80 mb-5">
        <View className="flex flex-row gap-2">
          <View className="p-2 bg-yellow-20 rounded-2xl">
            <Image source={Shopping_bag_icon} alt="icon" />
          </View>
          <View className="flex-1 justify-between">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-black font-medium text-base">Shopping</Text>
              <Text className="text-red-100 font-semibold text-base">
                - $120
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-dark-25 font-medium text-sm">
                Buy some grocery
              </Text>
              <Text className="text-dark-25 font-medium text-sm">
                10:00 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
