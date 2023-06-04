import React, { useState } from "react";
import {
  SafeAreaView,
  PanResponder,
  type PanResponderGestureState,
  type GestureResponderEvent,
} from "react-native";
import TopBar from "../TopBar/index";
import NavButtons from "../NavigationButtons";

import styles from "./styles";
import Modal from "../Modal";
import ModalCategory from "../ModalCategory";
import { ModalCategoryProvider } from "../../contexts";

function Main() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDragRelease = (
    _e: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    const { dx } = gestureState;
    if (dx < -140 && isModalVisible === true) {
      toggleModal();
    }
  };
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderRelease: handleDragRelease,
  });
  return (
    <SafeAreaView
      style={styles.root}
      className="flex-1"
      {...panResponder.panHandlers}
    >
      <TopBar />
      <NavButtons openModal={toggleModal} />
      <ModalCategoryProvider>
        <ModalCategory
          toggleModal={toggleModal}
          isModalVisible={isModalVisible}
        />
      </ModalCategoryProvider>
    </SafeAreaView>
  );
}

export default Main;
