import React, { useRef, useEffect } from "react";
import { Animated, Easing, TouchableOpacity, Text, Image, View } from "react-native";

function SaveButton({
  text,
  handleDropdownToggle,
  isDropdownOpen,
}: {
  text: string;
  handleDropdownToggle: () => void;
  isDropdownOpen: boolean;
}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isDropdownOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [isDropdownOpen]);
  return (
    <TouchableOpacity
      className="bg-white flex-row items-center rounded-md px-3"
      activeOpacity={1}
      onPress={handleDropdownToggle}
    >
      <Text className="pr-1">{text}</Text>
      <View className="border-l-2 border-gray-100 mx-2 h-8" />
      <Image
        source={require("../../img/chevron-left.png")}
        className="-rotate-90 opacity-50"
      />
      {isDropdownOpen && (
        <Animated.View className="absolute bg-white p-2 top-8" style={{opacity: fadeAnim}}>
          <View className="border-b-0.5 border-gray-300 py-2">
          <Text>Guardar y salir</Text>
          </View>
          <View className="border-b-0.5 border-gray-300 py-2">
          <Text>Guardar y continuar</Text>
          </View>
          <View className="border-b-0.5 border-gray-300 py-2">
          <Text>Salir sin guardar</Text>
          </View>
          
          
        </Animated.View>
      )}
    </TouchableOpacity>
  );
}

export default SaveButton;
