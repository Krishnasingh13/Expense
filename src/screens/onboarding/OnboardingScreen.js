import React from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#fff', black: '#000'};

const slides = [
  {
    id: '1',
    image: require('../../assets/onboarding_img_1.png'),
    title: 'Gain total control of your money',
    subtitle: 'Become your own money manager and make every cent count.',
  },
  {
    id: '2',
    image: require('../../assets/onboarding_img_2.png'),
    title: 'Know where your money goes',
    subtitle:
      'Track your transaction easily, with categories and financial report ',
  },
  {
    id: '3',
    image: require('../../assets/onboarding_img_3.png'),
    title: 'Planning ahead',
    subtitle: 'Setup your budget for each category so you in control',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}} className="font-inter">
      <Image
        source={item?.image}
        style={{height: '80%', width, resizeMode: 'contain'}}
      />
      <View className="grid items-center">
        <Text
          style={{
            color: COLORS.black,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {item?.title}
        </Text>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 13,
            marginTop: 10,
            maxWidth: '70%',
            textAlign: 'center',
            lineHeight: 23,
          }}>
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
        }}
        className="px-5 justify-between ">
        {/* Indicator container */}
        <View className="flex flex-row justify-center mt-5 ">
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                currentSlideIndex == index && {
                  backgroundColor: '#7F3DFF',
                  width: 25,
                },
              ]}
              className="w-5 h-[2.5px] bg-violet-20 rounded mx-1"
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View className="mt-3 h-12 flex-row">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('SignUpScreen')}
                className="w-full bg-violet-100 rounded-md flex items-center justify-center">
                <Text className=" text-white text-center text-base font-semibold">
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="h-12 flex-row justify-between flex">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={skip}
                className="w-[48%] bg-violet-20 rounded-md flex items-center justify-center">
                <Text className="text-violet-100 text-center text-base font-semibold">
                  SKIP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                className="w-[48%] bg-violet-100 rounded-md flex items-center justify-center">
                <Text className="text-white text-center text-base font-semibold">
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'dark-content'} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          height: height * 0.85,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;