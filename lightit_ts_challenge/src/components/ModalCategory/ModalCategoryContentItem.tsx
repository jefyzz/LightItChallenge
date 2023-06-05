import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ModalCategoryContext } from "../../contexts";
import { ImageFallback } from "../ImageFallback";

export function ModalCategoryContentItem() {
  const { selectedCategory, selectedItems } = useContext(ModalCategoryContext);
  return (
    <View className="flex flex-column items-start">
      <Text
        style={{ color: "#707070" }}
        className="capitalize text-lg font-bold mb-4"
      >
        {selectedCategory}
      </Text>
      <View className="flex flex-row flex-wrap justify-between">
        {selectedItems!.map(({ img, name }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`categoryItem-${name}`}
              className="flex flex-col items-center w-1/2 my-3"
              onPress={() => console.log(`pressed ${name}`)}
            >
              <ImageFallback
                className="w-28 h-28"
                source={{ uri: img }}
                fallback={require("../../../assets/img/placeholder.png")}
              />
              <Text className="capitalize">{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
