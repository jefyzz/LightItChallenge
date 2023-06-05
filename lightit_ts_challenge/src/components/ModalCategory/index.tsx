import React, { useContext } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import Modal, { ModalContent, ModalFooter, ModalProps } from "../Modal";
import { modalCategoryItems } from "../Modal/constants";
import { ModalCategoryContext } from "../../contexts";
import ModalCategoryContent from "./ModalCategoryContent";
import COLORS from "../../utils/colors";

function ModalCategory({
  toggleModal,
  isModalVisible,
}: Pick<ModalProps, "toggleModal" | "isModalVisible">) {
  const { setSelectedCategory, setSelectedItems, selectedCategory } =
    useContext(ModalCategoryContext);

  return (
    <Modal toggleModal={toggleModal} isModalVisible={isModalVisible}>
      <ModalContent>
        <ModalCategoryContent />
      </ModalContent>
      <ModalFooter>
        {modalCategoryItems.map(({ label, id, icon }) => (
          <TouchableOpacity
            className="h-full w-20 flex-col items-center justify-center"
            onPress={() => {
              setSelectedCategory(id);
              setSelectedItems(undefined);
            }}
            key={id}
            style={{backgroundColor: selectedCategory === id ? COLORS.modalBackground : undefined}}
          >
            <Image className="w-8 h-8" source={icon} />
            <Text className="text-xs">{label}</Text>
          </TouchableOpacity>
        ))}
      </ModalFooter>
    </Modal>
  );
}

export default ModalCategory;
