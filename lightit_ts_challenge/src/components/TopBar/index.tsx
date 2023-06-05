import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import SaveButton from "../SaveButton";

function TopBar() {
  return (
    <>
      <View
        className="flex flex-row justify-around items-center h-24"
        style={styles.root}
      >
        <Image
          className="w-12 h-12 rounded-full"
          source={require("../../../assets/img/logo.png")}
        />
        <SaveButton />
      </View>
    </>
  );
}

export default TopBar;
