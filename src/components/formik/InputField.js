import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import EyeIcon from 'react-native-vector-icons/Entypo';

const InputField = ({
  name,
  placeHolder, // Change to placeHolder
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
  type = 'text',
  secure,
  setSecure,
  iconName,
  style,
}) => {
  return (
    <View className="mt-4">
      <View
        style={[styles.inputContainer, style]}
        // className="w-full bg-[#f7f8f8] flex items-center justify-between flex-row rounded-xl px-4"
      >
        {iconName && <Icon name={iconName} color="#3a3a3a" />}
        <TextInput
          className="px-3 py-3.5 text-sm text-[#3a3a3a] flex-1 placeholder:text-black"
          name={name}
          secureTextEntry={secure}
          placeholderTextColor={'#3a3a3a'}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={value}
          keyboardType="default"
          placeholder={placeHolder}
        />
        {type == 'password' &&
          (secure ? (
            <Pressable className="p-2" onPress={() => setSecure(!secure)}>
              <EyeIcon name="eye-with-line" color="#3a3a3a" />
            </Pressable>
          ) : (
            <Pressable className="p-2" onPress={() => setSecure(!secure)}>
              <EyeIcon name="eye" color="#3a3a3a" />
            </Pressable>
          ))}
      </View>
      {touched && errors && (
        <Text className="text-red-500 text-xs mt-1 ml-5">{errors}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: '#f7f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 16, // Adjust as needed
  },
});

export default InputField;
