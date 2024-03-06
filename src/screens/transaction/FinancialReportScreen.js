import {
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/FontAwesome6';
import ArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PieChartIcon from 'react-native-vector-icons/Fontisto';
import SortIcon from 'react-native-vector-icons/Octicons';
import BarChartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Graph from '../../assets/graph.png';
import TransactionCard from '../../components/TransactionCard';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const FinancialReportScreen = ({navigation}) => {
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
    <SafeAreaView className="w-full h-full bg-white font-inter">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <View className="p-4 flex flex-row items-center">
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-left" color={'#000'} size={20} />
        </Pressable>
        <View className="flex-1 flex flex-row items-center justify-center pr-3">
          <Text className="text-lg font-semibold text-black">
            Financial Report
          </Text>
        </View>
      </View>

      <ScrollView>
        <View className="pb-10">
          <View>
            <View className="flex flex-row items-center justify-between px-4 mt-5">
              <View className="h-10 rounded-full px-4 border border-light-60 flex items-center justify-center flex-row">
                <ArrowIcon
                  name="chevron-double-down"
                  color="#7F3DFF"
                  size={18}
                />
                <Text className="text-black text-sm font-medium ml-1">
                  Month
                </Text>
              </View>
              <View className="rounded-xl border border-light-60 flex items-center justify-center flex-row overflow-hidden">
                <Pressable className="px-3 py-2.5 bg-violet-100">
                  <BarChartIcon
                    name="chart-timeline-variant"
                    color="#fff"
                    size={18}
                  />
                </Pressable>
                <Pressable className="px-3 py-2.5">
                  <PieChartIcon name="pie-chart-1" color="#7F3DFF" size={18} />
                </Pressable>
              </View>
            </View>
            <View className="mt-5">
              <Text className="text-3xl font-bold text-black ml-5">$ 332</Text>
              <Image source={Graph} className="object-cover" />
            </View>
          </View>

          <View className="px-4 mt-5">
            <View className="p-1 bg-light-60 rounded-[32px] flex flex-row items-center justify-center w-full">
              <TouchableOpacity className="bg-violet-100 rounded-[32px] flex items-center justify-center w-1/2 py-4">
                <Text className="text-base font-medium text-white text-center">
                  Expense
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-transparent rounded-[32px] flex items-center justify-center w-1/2 py-4">
                <Text className="text-base font-medium text-black text-center">
                  Income
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-5 px-2">
              <View className="flex flex-row items-center justify-between">
                <View className="h-9 rounded-full px-4 border border-light-60 flex items-center justify-center flex-row">
                  <ArrowIcon
                    name="chevron-double-down"
                    color="#7F3DFF"
                    size={18}
                  />
                  <Text className="text-black text-sm font-medium ml-1">
                    Transaction
                  </Text>
                </View>
                <View className="p-2 rounded-xl border border-light-60 flex items-center justify-center flex-row">
                  <SortIcon name="sort-desc" color="#000" size={20} />
                </View>
              </View>

              <View>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinancialReportScreen;
