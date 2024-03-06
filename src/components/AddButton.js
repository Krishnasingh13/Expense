import React, {useEffect, useRef} from 'react';

import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import {COLORS} from '../utils/Constants';
import Add_icon from 'react-native-vector-icons/Feather';
import Income from '../assets/icons/income_icon.svg';
import Expense from '../assets/icons/expense_icon.svg';
import MoneyExchange from '../assets/icons/money_exchange_icon.svg';
import {useNavigation, useNavigationState} from '@react-navigation/native';

const AddButton = ({opened, toggleOpened}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const screenName = useNavigationState(
    state => state.routes[state.index].name,
  );

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  useEffect(() => {
    if (screenName !== 'Add' && opened) {
      toggleOpened();
    }
  }, [screenName]);

  const handleButtonPress = page => {
    // Navigate to the specified page
    navigation.navigate(page, {screen: page});
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableWithoutFeedback
          onPress={() => handleButtonPress('IncomeScreen')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                backgroundColor: COLORS.green100,
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Income />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => handleButtonPress('MoneyExchangeScreen')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                backgroundColor: COLORS.blue100,
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100],
                    }),
                  },
                ],
              },
            ]}>
            <MoneyExchange />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => handleButtonPress('ExpenseScreen')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                backgroundColor: COLORS.red100,
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Expense />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={toggleOpened}
          style={styles.addButton}>
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              },
            ]}>
            <View
              style={{
                backgroundColor: '#7F3DFF',
                borderRadius: 50,
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Add_icon name="plus" color={'#fff'} size={32} />
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
    backgroundColor: '#000',
  },
  box: {
    position: 'relative',
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowColor: COLORS.Dark25,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.violet100,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.light100,
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.violet100,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    width: 21,
    height: 21,
    tintColor: COLORS.white,
  },
});

export default AddButton;
