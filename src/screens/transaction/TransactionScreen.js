import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterIcon from 'react-native-vector-icons/Ionicons';
import RightIcon from 'react-native-vector-icons/FontAwesome6';
import TransactionCard from '../../components/TransactionCard';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const TransactionScreen = ({navigation}) => {
  return (
    <SafeAreaView className="w-full h-full bg-light-100 font-inter pb-10">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <ScrollView>
        <View className="pb-32 p-4">
          <View className="flex flex-row items-center justify-between">
            <View className="h-9 rounded-full px-4 border border-light-60 flex items-center justify-center flex-row">
              <ArrowIcon name="chevron-double-down" color="#7F3DFF" size={18} />
              <Text className="text-black text-sm font-medium ml-1">
                October
              </Text>
            </View>
            <View className="p-2 rounded-xl border border-light-60 flex items-center justify-center flex-row">
              <FilterIcon name="filter" color="#000" size={18} />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('FinancialReportScreen')}
            className="p-4 flex flex-row items-center justify-between bg-violet-20 rounded-xl my-5">
            <Text className="text-violet-100 text-base font-normal">
              See your financial report
            </Text>
            <RightIcon name="angles-right" color="#7F3DFF" size={18} />
          </TouchableOpacity>

          <View>
            <Text className="text-lg text-black font-semibold">Today</Text>
            <View className="mt-3">
              <TransactionCard navigation={navigation} />
              <TransactionCard navigation={navigation} />
              <TransactionCard navigation={navigation} />
            </View>
          </View>

          <View>
            <Text className="text-lg text-black font-semibold">Yesterday</Text>
            <View className="mt-3">
              <TransactionCard navigation={navigation} />
              <TransactionCard navigation={navigation} />
              <TransactionCard navigation={navigation} />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View className=" w-full h-full bg-[#d8d8d84e] z-10 absolute flex items-end justify-end">
        <View className=" w-full rounded-t-[32px] bg-white p-4 px-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-base text-black font-semibold">
              Filter Transaction
            </Text>
            <View className="bg-violet-20 py-1.5 px-4 rounded-2xl">
              <Text className="text-violet-100 text-sm font-medium">Reset</Text>
            </View>
          </View>

          <View className="pt-4">
            <Text className="text-base text-black font-semibold">
              Filter By
            </Text>
            <View className="flex flex-row items-center justify-between mt-3 pr-2">
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Income</Text>
              </View>
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Expense</Text>
              </View>
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Transfer</Text>
              </View>
            </View>
          </View>

          <View className="pt-4">
            <Text className="text-base text-black font-semibold">Sort By</Text>
            <View className="flex flex-row items-center justify-between flex-wrap mt-3 pr-2 gap-y-3 pt-5">
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Highest</Text>
              </View>
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Lowest</Text>
              </View>
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Newest</Text>
              </View>
              <View className="px-6 py-2 border border-light-20 rounded-3xl">
                <Text className="text-sm text-black font-medium">Oldest</Text>
              </View>
            </View>
          </View>

          <View className="pt-4">
            <Text className="text-base text-black font-semibold">Category</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-5">
            <Text className=" text-white text-center text-base font-semibold">
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default TransactionScreen;
