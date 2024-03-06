import {
  View,
  Text,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/FontAwesome6';
import FocusAwareStatusBar from '../../hooks/useStatusBar';

const CreateBudgetScreen = ({navigation}) => {
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
        backgroundColor={'#7F3DFF'}
      />
      <View className="w-full h-full bg-violet-100">
        <View className="p-4 flex flex-row items-center">
          <Pressable onPress={() => navigation.goBack()} className="pr-4 py-4">
            <BackIcon name="chevron-left" color={'#fff'} size={20} />
          </Pressable>
          <View className="flex-1 flex flex-row items-center justify-center pr-3">
            <Text className="text-lg font-semibold text-white">
              Create Budget
            </Text>
          </View>
        </View>
        <View className="flex-1 flex items-center justify-end">
          <View className="w-full px-4">
            <Text className="text-lg font-semibold text-light-40">
              How much do yo want to spend?
            </Text>
            <Text className="text-[64px] font-semibold text-light-80">$0</Text>
          </View>
          <View className="w-full bg-light-80 mt-5 rounded-[32px] px-4 relative overflow-hidden pb-10">
            <Text>Driopdown</Text>

            <View>
              <View>
                <Text className="text-dark-25 text-base font-medium">
                  Receive Alert
                </Text>
                <Text className="text-light-20 text-sm font-medium">
                  Receive alert when it reaches {'\n'} some point.
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateBudgetScreen;
