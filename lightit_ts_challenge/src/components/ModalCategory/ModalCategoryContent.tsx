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
import Modal, { ModalContent, ModalFooter, ModalProps } from "../Modal";
import { modalCategoryItems } from "../Modal/constants";
import { ModalCategoryContext } from "../../contexts";
import { APIItem, APIItemResponse } from "../../contexts/ModalCategory/types";

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

  const handleSelectItems = (items: APIItemResponse["items"]) => {
    setSelectedItems(items);
  };

  if (selectedItems) {
    return <Text>ola vengo a flotar</Text>;
  }

  return (
    <View className="flex flex-column items-start">
      <Text
        style={{ color: "#707070" }}
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
              onPress={() => handleSelectItems(item.items)}
              key={`category-${item.name}`}
            >
              <Text style={{ color: "#8c8c8c" }}>{item.name}</Text>
              <Image
                className="rotate-180 h-3 w-3"
                source={require("../../img/chevron-left.png")}
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
