import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

function NavButtons() {
  return (
    <View className="flex flex-row justify-end items-end absolute bottom-2 right-2">
      <View className="flex flex-col justify-center items-center  bg-white rounded-lg">
        <TouchableOpacity>
          <Image className="h-8 w-6" source={require("../../img/add.png")} />
        </TouchableOpacity>
        <View className="border-b-2 border-gray-200 mx-2 w-6 pt-1" />
        <TouchableOpacity>
          <Image className="h-8 w-6" source={require("../../img/remove.png")} />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

export default NavButtons;
