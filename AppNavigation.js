import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useTabMenu} from './src/context/TabContext';

import HomeStack from './src/stack/HomeStack';
import TransactionStack from './src/stack/TransacationStack';
import BudgetStack from './src/stack/BudgetStack';
import ProfileStack from './src/stack/ProfileStack';
import AddButton from './src/components/AddButton';

import Home_active from '../Awesome/src/assets/icons/home_active.svg';
import Home_inactive from '../Awesome/src/assets/icons/home_inactive.svg';

import Transaction_active from '../Awesome/src/assets/icons/transaction_active.svg';
import Transaction_inactive from '../Awesome/src/assets/icons/transaction_inactive.svg';

import Budget_active from '../Awesome/src/assets/icons/budget_active.svg';
import Budget_inactive from '../Awesome/src/assets/icons/budget_inactive.svg';

import Profile_active from '../Awesome/src/assets/icons/user_active.svg';
import Profile_inactive from '../Awesome/src/assets/icons/user_inactive.svg';

const Tab = createBottomTabNavigator();
const tabBarStyleOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#7F3DFF',
  tabBarInactiveTintColor: '#C6C6C6',
  //tailwindCSS not compatible here as screenOptions prop for bottom navigation accepts CSS Object as tabBarStyle options
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
};

const TabsNavigator = () => {
  const {opened, toggleOpened} = useTabMenu();
  return (
    <Tab.Navigator screenOptions={tabBarStyleOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? <Home_active /> : <Home_inactive />}
              <Text
                style={{
                  color: color,
                  fontSize: 10,
                }}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? <Transaction_active /> : <Transaction_inactive />}
              <Text
                style={{
                  color: color,
                  fontSize: 10,
                }}>
                Transaction
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeStack}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? <Budget_active /> : <Budget_inactive />}
              <Text
                style={{
                  color: color,
                  fontSize: 10,
                }}>
                Budget
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? <Profile_active /> : <Profile_inactive />}
              <Text
                style={{
                  color: color,
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

// import React from 'react';
// import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home_icon from 'react-native-vector-icons/Ionicons';
// import Transaction_icon from 'react-native-vector-icons/FontAwesome6';
// import Add_icon from 'react-native-vector-icons/Feather';
// import Budget_icon from 'react-native-vector-icons/Fontisto';
// import User_icon from 'react-native-vector-icons/FontAwesome';

// import AuthStack from './src/stack/AuthStack';
// import HomeStack from './src/stack/HomeStack';
// import ProfileStack from './src/stack/ProfileStack';
// import BudgetStack from './src/stack/BudgetStack';
// import TransactionStack from './src/stack/TransacationStack';

// const Tab = createBottomTabNavigator();
// const tabBarStyleOptions = {
//   headerShown: false,
//   tabBarShowLabel: false,
//   tabBarActiveTintColor: '#7F3DFF',
//   tabBarInactiveTintColor: '#C6C6C6',
//   //tailwindCSS not compatible here as screenOptions prop for bottom navigation accepts CSS Object as tabBarStyle options
//   tabBarStyle: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     elevation: 0,
//     backgroundColor: '#FCFCFC',
//     borderRadius: 32,
//     height: 70,
//   },
// };

// const BottomNavigation = (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={tabBarStyleOptions}

//       // initialRouteName="Home"
//       // activeColor={'#7F3DFF'}
//       // shifting={false}
//       // inactiveColor={'#000'}
//       // barStyle={{
//       //   backgroundColor: '#fff',
//       //   padding: 6,
//       //   justifyContent: 'space-between',
//       //   alignItems: 'center',
//       // }}
//       // tabBarOptions={{
//       //   headerShown: false,
//       //   tabBarShowLabel: false,
//       // }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <>
//               <Home_icon name="home" color={color} size={22} />
//               <Text
//                 style={{
//                   color: color,
//                   fontSize: 10,
//                 }}>
//                 Home
//               </Text>
//             </>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Transaction"
//         component={TransactionStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <>
//               <Transaction_icon
//                 name="arrow-right-arrow-left"
//                 color={color}
//                 size={22}
//               />
//               <Text
//                 style={{
//                   color: color,
//                   fontSize: 10,
//                 }}>
//                 Transaction
//               </Text>
//             </>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name=" "
//         component={TransactionStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <View
//               style={{
//                 backgroundColor: '#fff',
//                 borderRadius: 50,
//                 bottom: 30,
//                 width: 58,
//                 height: 58,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 shadowColor: '#000',
//                 shadowOffset: {width: -2, height: 4},
//                 shadowOpacity: 1,
//                 shadowRadius: 10,
//               }}>
//               <View
//                 style={{
//                   backgroundColor: '#7F3DFF',
//                   borderRadius: 50,
//                   width: 50,
//                   height: 50,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Add_icon name="plus" color={'#fff'} size={32} />
//               </View>
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Budget"
//         component={BudgetStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <>
//               <Budget_icon name="pie-chart-1" color={color} size={22} />
//               <Text
//                 style={{
//                   color: color,
//                   fontSize: 10,
//                 }}>
//                 Budget
//               </Text>
//             </>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <>
//               <User_icon name="user" color={color} size={22} />
//               <Text
//                 style={{
//                   color: color,
//                   fontSize: 10,
//                 }}>
//                 Profile
//               </Text>
//             </>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// const AppNavigation = () => {
//   return (
//     <>
//       {1 ? (
//         <>{BottomNavigation}</>
//       ) : (
//         <>
//           <NavigationContainer>
//             <AuthStack />
//           </NavigationContainer>
//         </>
//       )}
//     </>
//   );
// };

// export default AppNavigation;
