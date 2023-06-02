import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "./styles";

function SaveButton({ text }: { text: string }) {
  return (
    <TouchableOpacity
      className="bg-white flex-row items-center rounded-md px-3"
      activeOpacity={0.95}
    >
      <Text className="pr-1">{text}</Text>
      <View className="border-l-2 border-gray-200 mx-2 h-8" />
      <Image
        source={require("../../img/chevron-left.png")}
        className="-rotate-90 border-l-4"
      />
    </TouchableOpacity>
  );
}

export default SaveButton;
