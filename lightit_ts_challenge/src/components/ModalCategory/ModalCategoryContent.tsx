import React, { useContext } from "react";
import {
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  View,
  RefreshControl,
} from "react-native";
import { ModalCategoryContext } from "../../contexts";
import { APIItemResponse } from "../../contexts/ModalCategory/types";
import { ModalCategoryContentItem } from "./ModalCategoryContentItem";
import COLORS from "../../utils/colors";

function ModalCategoryContent() {
  const {
    isLoading,
    selectedCategory,
    categories,
    setSelectedItems,
    selectedItems,
    fetchCategories,
  } = useContext(ModalCategoryContext);

  const categoryItems = categories[selectedCategory];

  const handleSelectItems = (items: APIItemResponse) => {
    setSelectedItems(items);
  };

  if (selectedItems) {
    return <ModalCategoryContentItem />;
  }

  return (
    <View className="flex flex-column items-start">
      <Text
        style={{ color: COLORS.categoryTitle }}
        className="capitalize text-lg font-bold"
      >
        {selectedCategory}
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          className="w-full"
          data={categoryItems}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex flex-row items-center justify-between py-2 px-4 bg-white rounded-md my-2"
              activeOpacity={0.9}
              onPress={() => handleSelectItems(item)}
              key={`category-${item.name}`}
            >
              <Text style={{ color: "#8c8c8c" }}>{item.name}</Text>
              <Image
                className="rotate-180 h-3 w-3"
                source={require("../../../assets/img/chevron-left.png")}
              />
            </TouchableOpacity>
          )}
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

export default ModalCategoryContent;
