import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const LaunchScreen = ({navigation}) => {
  const opacity = useSharedValue(0);

  const startAnimation = () => {
    opacity.value = withTiming(1, {duration: 500, easing: Easing.exp});
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <SafeAreaView className=" flex-1 w-full h-full bg-violet-100 flex items-center justify-center font-inter">
      <Animated.View style={{opacity: opacity}}>
        <Text
          className="text-white text-[56px] font-bold"
          style={{
            textShadowColor: 'black',
            textShadowRadius: 2,
            textShadowOffset: {width: 2, height: 2},
          }}>
          montra
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default LaunchScreen;
