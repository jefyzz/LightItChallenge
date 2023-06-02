import React, { useState } from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import SaveButton from "../SaveButton";

function TopBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <View
        className="flex flex-row justify-around items-center h-24"
        style={styles.root}
      >
        <Image
          className="w-12 h-12 rounded-full"
          source={require("../../img/logo.png")}
        />
        <SaveButton
          text="Guardar y salir"
          handleDropdownToggle={handleDropdownToggle}
          isDropdownOpen={isDropdownOpen}
        />
      </View>
    </>
  );
}

export default TopBar;
