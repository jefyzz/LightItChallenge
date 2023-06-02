import React from "react";
import TopBar from "../TopBar/index";
import { SafeAreaView } from "react-native";

import styles from "./styles"

function Main() {
  return (
    <SafeAreaView style={styles.root} className="">
      <TopBar />
    </SafeAreaView>
  );
}

export default Main;
