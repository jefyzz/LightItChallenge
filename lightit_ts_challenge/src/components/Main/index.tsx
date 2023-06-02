import React from "react";
import TopBar from "../TopBar/index";
import { SafeAreaView } from "react-native";

import styles from "./styles"
import NavButtons from "../NavigationButtons";

function Main() {
  return (
    <SafeAreaView style={styles.root} className="flex-1">
      <TopBar />
      <NavButtons />
    </SafeAreaView>
  );
}

export default Main;
