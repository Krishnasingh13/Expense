import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import Income_icon from '../../assets/icons/income_icon.png';
import Expense_icon from '../../assets/icons/expense_icon.png';
import Shopping_bag_icon from '../../assets/icons/shopping_bag_icon.png';
import Graph from '../../assets/graph.png';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../hooks/useStatusBar';
// import { useIsFocused } from '@react-navigation/native';

// function FocusAwareStatusBar(props) {
//   const isFocused = useIsFocused();

//   return isFocused ? <StatusBar {...props} /> : null;
// }

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSeeAllPress = () => {
    // Navigate to the "Transaction" stack
    navigation.navigate('TransactionScreen', {screen: 'TransactionScreen'});
  };
  return (
    <SafeAreaView className="w-full h-full bg-white font-inter pb-10">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#F7E6C5'}
      />
      <ScrollView>
        <View className="pb-3">
          <LinearGradient
            colors={['#F7E6C5', '#FBF5E9']}
            className="h-fit w-full px-4 pb-6 pt-4 rounded-b-[32px]">
            <View>
              <View className="flex items-center justify-between flex-row">
                <View className="w-9 h-9 rounded-full flex items-center justify-center border border-violet-100">
                  <View className="w-8 h-8 rounded-full bg-black"></View>
                </View>
                <View className="h-9 rounded-full px-4 border border-violet-100 flex items-center justify-center flex-row">
                  <ArrowIcon
                    name="chevron-double-down"
                    color="#7F3DFF"
                    size={18}
                  />
                  <Text className="text-black text-sm font-medium ml-1">
                    October
                  </Text>
                </View>
                <NotificationIcon
                  name="notifications"
                  color="#7F3DFF"
                  size={24}
                />
              </View>
              <View className="mt-5">
                <Text className="text-light-20 text-sm font-medium text-center">
                  Account Balance
                </Text>
                <Text className="text-black text-[40px] font-semibold text-center">
                  $9400
                </Text>
              </View>
              <View className=" w-full flex items-center justify-between flex-row mt-5">
                <View className=" bg-green-100 w-[48%] h-full flex flex-row items-center justify-between p-4 rounded-[28px]">
                  <View className="p-2 bg-white rounded-2xl">
                    <Image source={Income_icon} alt="icon" className="" />
                  </View>
                  <View>
                    <Text className="text-sm text-white font-medium">
                      Income
                    </Text>
                    <Text className="text-2xl text-white font-semibold">
                      $5000
                    </Text>
                  </View>
                </View>
                <View className=" bg-red-100 w-[48%] h-full flex flex-row items-center justify-between p-4 rounded-[28px]">
                  <View className="p-2 bg-white rounded-2xl">
                    <Image source={Expense_icon} alt="icon" className="" />
                  </View>
                  <View>
                    <Text className="text-sm text-white font-medium">
                      Expenses
                    </Text>
                    <Text className="text-2xl text-white font-semibold">
                      $5000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View>
            <View className="px-4 py-4">
              <Text className="text-lg text-black font-semibold">
                Spend Frequency
              </Text>
            </View>
            <Image source={Graph} className="object-cover" />

            <View className="px-4 pt-3">
              <View className="flex flex-row items-center justify-between border border-light-80 rounded-2xl">
                <View className="bg-yellow-20 py-2 px-6 rounded-2xl">
                  <Text className="text-yellow-100 text-sm font-bold">
                    Today
                  </Text>
                </View>
                <View className="py-2 px-6 rounded-2xl">
                  <Text className="text-light-20 text-sm font-medium">
                    Week
                  </Text>
                </View>
                <View className="py-2 px-6 rounded-2xl">
                  <Text className="text-light-20 text-sm font-medium">
                    Month
                  </Text>
                </View>
                <View className="py-2 px-6 rounded-2xl">
                  <Text className="text-light-20 text-sm font-medium">
                    Year
                  </Text>
                </View>
              </View>

              <View className="mt-5">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-lg font-semibold text-black">
                    Recent Transaction
                  </Text>
                  <Pressable
                    onPress={() => handleSeeAllPress()}
                    className="bg-violet-20 py-2 px-4 rounded-2xl">
                    <Text className="text-violet-100 text-sm font-bold">
                      See All
                    </Text>
                  </Pressable>
                </View>

                <View className="py-5">
                  <View className="p-4 rounded-3xl bg-light-80 mb-5">
                    <View className="flex flex-row gap-2">
                      <View className="p-2 bg-yellow-20 rounded-2xl">
                        <Image source={Shopping_bag_icon} alt="icon" />
                      </View>
                      <View className="flex-1 justify-between">
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-black font-medium text-base">
                            Shopping
                          </Text>
                          <Text className="text-red-100 font-semibold text-base">
                            - $120
                          </Text>
                        </View>
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-light-20 font-medium text-sm">
                            Buy some grocery
                          </Text>
                          <Text className="text-light-20 font-medium text-sm">
                            10:00 AM
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="p-4 rounded-3xl bg-light-80 mb-5">
                    <View className="flex flex-row gap-2">
                      <View className="p-2 bg-yellow-20 rounded-2xl">
                        <Image source={Shopping_bag_icon} alt="icon" />
                      </View>
                      <View className="flex-1 justify-between">
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-black font-medium text-base">
                            Shopping
                          </Text>
                          <Text className="text-red-100 font-semibold text-base">
                            - $120
                          </Text>
                        </View>
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-light-20 font-medium text-sm">
                            Buy some grocery
                          </Text>
                          <Text className="text-light-20 font-medium text-sm">
                            10:00 AM
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="p-4 rounded-3xl bg-light-80 mb-5">
                    <View className="flex flex-row gap-2">
                      <View className="p-2 bg-yellow-20 rounded-2xl">
                        <Image source={Shopping_bag_icon} alt="icon" />
                      </View>
                      <View className="flex-1 justify-between">
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-black font-medium text-base">
                            Shopping
                          </Text>
                          <Text className="text-red-100 font-semibold text-base">
                            - $120
                          </Text>
                        </View>
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-light-20 font-medium text-sm">
                            Buy some grocery
                          </Text>
                          <Text className="text-light-20 font-medium text-sm">
                            10:00 AM
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
