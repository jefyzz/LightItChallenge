import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { ModalCategoryContext } from "../../contexts";
import { ImageFallback } from "../ImageFallback";
import COLORS from "../../utils/colors";

export function ModalCategoryContentItem() {
  const {
    selectedCategory,
    selectedItems,
    isLoading,
    fetchCategories,
    setSelectedItems,
  } = useContext(ModalCategoryContext);
  return (
    <View className="flex flex-column items-start">
      <TouchableOpacity
        activeOpacity={0.3}
        className="flex flex-row justify-start items-center opacity-50 mb-2"
        onPress={() => setSelectedItems(undefined)}
      >
        <Image
          className="w-4 h-4"
          source={require("../../../assets/img/chevron-left.png")}
        />
        <Text className="capitalize">{selectedCategory}</Text>
      </TouchableOpacity>
      <Text
        style={{ color: COLORS.categoryTitle }}
        className="capitalize text-lg font-bold mb-4"
      >
        {selectedItems?.name}
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          className="flex"
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={selectedItems?.items}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={`categoryItem-${item.name}`}
                className="flex flex-col items-center w-1/2 my-3"
                onPress={() => console.log(`pressed ${item.name}`)}
              >
                <ImageFallback
                  className="w-28 h-28"
                  source={{ uri: item.img }}
                  fallback={require("../../../assets/img/placeholder.png")}
                />
                <Text className="capitalize">{item.name}</Text>
              </TouchableOpacity>
            );
          }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => fetchCategories(selectedCategory)}
            />
          }
        />
      )}
    </View>
  );
}
