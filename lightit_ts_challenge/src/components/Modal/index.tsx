import React, { ReactNode } from "react";
import ModalComponent from "react-native-modal";
import {
  type ImageSourcePropType,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";
import ModalCategory from "../ModalCategory";
import { modalCategoryItems } from "./constants";
import COLORS from "../../utils/colors";
import { Category } from "../../contexts/ModalCategory/types";

export type ModalCategoryItem = {
  label: string;
  id: Category
  icon: ImageSourcePropType;
};

export interface ModalProps {
  toggleModal: () => void;
  isModalVisible: boolean;
  children: ReactNode | ReactNode[];
}

function Modal({ toggleModal, isModalVisible, children }: ModalProps) {
  return (
    <ModalComponent
      isVisible={isModalVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      backdropColor="black"
      onBackdropPress={toggleModal}
    >
      <View
        className="flex flex-1 rounded-xl flex-column justify-between"
        style={{ backgroundColor: COLORS.modalBackground }}
      >
        {children}
      </View>
    </ModalComponent>
  );
}

export function ModalContent({ children }: { children: ReactNode }) {
  return <View className="p-4" >{children}</View>;
}

export function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <View
      className="flex flex-row justify-evenly items-center h-20"
    >
      {children}
    </View>
  );
}

export default Modal;
