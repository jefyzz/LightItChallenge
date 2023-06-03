import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import cx from "classnames";

function NavButtons() {
  const containerClass = "flex flex-row justify-between absolute bottom-6";
  const iconSize = "h-4 w-4";
  const handlePress = (actionType: string) => {
    console.log(`button ${actionType} was pressed`);
  };
  return (
    <>
      <View className={cx(containerClass, "left-6 bottom-8")}>
        <TouchableOpacity
          activeOpacity={0.95}
          className="p-1 bg-white rounded-full"
          style={{ elevation: 5 }}
        >
          <Image className="h-10 w-10" source={require("../../img/add.png")} />
        </TouchableOpacity>
      </View>
      <View className={cx("right-6", containerClass)}>
        <View className="rounded-md elevation-sm flex flex-col justify-between items-center bg-white p-1">
          <TouchableOpacity
            onPress={() => handlePress("zoomIn")}
            className="grow flex justify-center"
          >
            <Image
              className={cx(iconSize)}
              source={require("../../img/add.png")}
            />
          </TouchableOpacity>
          <View className="border-b-2 border-gray-300 w-6 my-1.5" />
          <TouchableOpacity
            onPress={() => handlePress("zoomOut")}
            className="grow flex justify-center "
          >
            <Image
              className={cx(iconSize)}
              source={require("../../img/remove.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-col bg-white w-16 ml-4 items-center elevation-sm rounded-md h-full p-2">
          <View>
            <TouchableOpacity onPress={() => handlePress("moveUp")}>
              <Image
                className={cx(iconSize)}
                source={require("../../img/uparrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between w-full">
            <TouchableOpacity onPress={() => handlePress("moveLeft")}>
              <Image
                className={cx(iconSize, "-rotate-90")}
                source={require("../../img/uparrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("moveRight")}>
              <Image
                className={cx(iconSize, "rotate-90")}
                source={require("../../img/uparrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => handlePress("moveDown")}>
              <Image
                className={cx(iconSize, "rotate-180")}
                source={require("../../img/uparrow.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default NavButtons;
