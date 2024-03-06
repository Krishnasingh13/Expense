import {
  View,
  Text,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';
import BudgetCard from '../../components/BudgetCard';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const BudgetScreen = ({navigation}) => {
  return (
    <SafeAreaView className="w-full h-full bg-white font-inter pb-10">
      <FocusAwareStatusBar
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#7F3DFF'}
      />
      <View className="w-full h-full bg-violet-100 pt-7">
        <View className="flex flex-row items-center justify-between p-4">
          <Pressable>
            <ArrowIcon name="chevron-left" color={'#fff'} size={18} />
          </Pressable>
          <Text className="text-2xl text-white font-medium">May</Text>
          <Pressable>
            <ArrowIcon name="chevron-right" color={'#fff'} size={18} />
          </Pressable>
        </View>
        <View className="w-full min-h-screen bg-light-80 mt-5 rounded-[32px] px-4 relative overflow-hidden">
          {0 ? (
            <View className="h-[62%] w-full mt-2 flex items-center justify-center">
              <Text className="text-light-20 text-base font-medium text-center">
                You don’t have a budget.{'\n'} Let’s make one so you in control.
              </Text>
            </View>
          ) : (
            <View className="h-[64%] w-full">
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <BudgetCard navigation={navigation} />
                <BudgetCard navigation={navigation} />
                <BudgetCard navigation={navigation} />
              </ScrollView>
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CreateBudgetScreen')}
            className="w-full bg-violet-100 rounded-xl flex items-center justify-center py-3.5 mt-3">
            <Text className=" text-white text-center text-base font-semibold">
              Create a budget
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BudgetScreen;
