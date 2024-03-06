import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Shopping_bag_icon from '../../assets/icons/shopping_bag_icon.png';
import AlertIcon from 'react-native-vector-icons/Ionicons';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const DetailBudgetScreen = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#FCFCFC',
          borderRadius: 32,
          height: 70,
        },
      });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full h-full bg-white font-inter pb-10 p-4">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <View className="flex flex-row items-center justify-between">
        <Pressable onPress={() => navigation.goBack()} className="pr-4 py-4">
          <ArrowIcon name="chevron-left" color={'#000'} size={16} />
        </Pressable>
        <Text className="text-lg text-black font-medium">Detail Budget</Text>
        <Pressable>
          <DeleteIcon name="delete" color={'#000'} size={20} />
        </Pressable>
      </View>
      <View className="h-full flex items-center justify-between pb-10">
        <View>
          <View className="flex flex-row items-center justify-center mt-10 mb-5">
            <View className="p-3 bg-light-80 border border-light-40 rounded-3xl flex flex-row items-center w-fit">
              <View className="p-1 bg-yellow-20 rounded-2xl mr-3">
                <Image source={Shopping_bag_icon} alt="icon" className="" />
              </View>
              <Text className="text-lg text-black font-semibold">Shopping</Text>
            </View>
          </View>
          <Text className="text-2xl text-center font-semibold text-black">
            Remaining
          </Text>
          <Text className="text-[64px] text-center font-semibold text-black">
            $0
          </Text>
          <View className="bg-yellow-100 p-2 rounded-3xl flex flex-row items-center justify-center mx-1 mt-4"></View>
          <View className="bg-red-100 py-2 px-5 rounded-3xl flex flex-row items-center justify-center mx-10 mt-4">
            <AlertIcon name="alert-circle" color={'#fff'} size={24} />
            <Text className="text-white text-base font-medium ml-2">
              You’ve exceed the limit!
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-3">
          <Text className=" text-white text-center text-base font-semibold">
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailBudgetScreen;
