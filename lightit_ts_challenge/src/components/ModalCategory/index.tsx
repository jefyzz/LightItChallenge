import React, { useContext } from "react";
import { Image, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import Modal, { ModalContent, ModalFooter, ModalProps } from "../Modal";
import { modalCategoryItems } from "../Modal/constants";
import { ModalCategoryContext } from "../../contexts";
import ModalCategoryContent from './ModalCategoryContent'

function ModalCategory({
  toggleModal,
  isModalVisible,
}: Pick<ModalProps, "toggleModal" | "isModalVisible">) {
  const { setSelectedCategory } = useContext(ModalCategoryContext);
  return (
    <Modal toggleModal={toggleModal} isModalVisible={isModalVisible}>
      <ModalContent>
        <ModalCategoryContent/>
      </ModalContent>
      <ModalFooter>
        {modalCategoryItems.map(({ label, id, icon }) => (
          <TouchableOpacity
            className="h-full w-20 flex-col items-center justify-center"
            onPress={() => setSelectedCategory(id)}
            key={id}
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
