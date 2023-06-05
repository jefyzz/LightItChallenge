import React, { ReactNode } from "react";
import ModalComponent from "react-native-modal";
import {
  type ImageSourcePropType,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../utils/colors";
import { Category } from "../../contexts/ModalCategory/types";

export type ModalCategoryItem = {
  label: string;
  id: Category;
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
      <View className="flex-row justify-around my-1.5 w-28 self-end">
        <TouchableOpacity
          activeOpacity={0.9}
          className="bg-gray-100 rounded-md w-12 h-12 justify-center items-center"
          onPress={() => console.log("pressed Fijar")}
        >
          <Image
            className="w-8 h-8 rotate-90"
            source={require("../../../assets/img/pin.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          className="bg-gray-100 rounded-md w-12 h-12 justify-center items-center"
          onPress={() => console.log("pressed Borrar")}
        >
          <Image
            className="w-8 h-8"
            source={require("../../../assets/img/trash.png")}
          />
        </TouchableOpacity>
      </View>
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
  return <View className="p-4 h-4/5 max-h-4/5 flex-1">{children}</View>;
}

export function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <View className="flex flex-row justify-evenly items-center max-h-20 bg-white rounded">
      {children}
    </View>
  );
}

export default Modal;
