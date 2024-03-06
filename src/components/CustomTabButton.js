import React from "react";
import { TouchableOpacity, View } from "react-native";

const CustomTabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      className="shadow-2xl shadow-blue-800 rounded-full justify-center align-middle items-center"
      onPress={onPress}
    >
      <View className="w-16 h-16 rounded-full bg-blue-700">{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;