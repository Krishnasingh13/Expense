import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Attachment_img from '../../assets/attachment_img.png';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const DetailTransactionScreen = ({navigation}) => {
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
          display: 'initial',
        },
      });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full h-full bg-white font-inter pb-10">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#FD3C4A'}
      />
      <View className="w-full h-full bg-white">
        <View className="bg-red-100 pb-14 rounded-b-[32px]">
          <View className="flex flex-row items-center justify-between p-4">
            <Pressable
              onPress={() => navigation.goBack()}
              className="pr-4 py-4"
              >
              <ArrowIcon name="chevron-left" color={'#fff'} size={16} />
            </Pressable>
            <Text className="text-lg text-white font-medium">
              Detail Transaction
            </Text>
            <Pressable>
              <DeleteIcon name="delete" color={'#fff'} size={20} />
            </Pressable>
          </View>
          <View>
            <Text className="text-white text-[48px] font-bold text-center leading-[80px]">
              $120
            </Text>
            <Text className="text-base text-white font-medium text-center">
              Buy some grocery
            </Text>
            <Text className="text-sm text-light-80 text-center my-1">
              Saturday 4 June 2021 16:20
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-around border border-light-60 py-3 mx-4 rounded-2xl bg-white -mt-9 ">
          <View>
            <Text className="text-sm text-light-20 font-medium text-center">
              Type
            </Text>
            <Text className="text-base text-black font-semibold text-center">
              Expense
            </Text>
          </View>
          <View>
            <Text className="text-sm text-light-20 font-medium text-center">
              Category
            </Text>
            <Text className="text-base text-black font-semibold text-center">
              Expense
            </Text>
          </View>
          <View>
            <Text className="text-sm text-light-20 font-medium text-center">
              Type
            </Text>
            <Text className="text-base text-black font-semibold text-center">
              Expense
            </Text>
          </View>
        </View>
        <ScrollView>
          <View className="p-4">
            <View>
              <Text className="text-base text-light-20 font-semibold">
                Description
              </Text>
              <Text className="text-base text-black font-medium leading-[23px] mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
            </View>
            <View className="py-4">
              <Text className="text-base text-light-20 font-semibold">
                Attachment
              </Text>
              <Image source={Attachment_img} alt="image" className="mt-2" />
            </View>
          </View>
        </ScrollView>
        {/* <View className="px-4">
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-3">
            <Text className=" text-white text-center text-base font-semibold">
              Edit
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default DetailTransactionScreen;
