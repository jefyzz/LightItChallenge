import React, { useRef, useEffect, useState, type ReactNode } from "react";
import {
  Animated,
  Easing,
  TouchableOpacity,
  Text,
  Image,
  View,
  type GestureResponderEvent,
} from "react-native";
import cx from "classnames";

export type DropdownItem = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  className?: string;
};

interface DropdownProps {
  items: DropdownItem[];
  className?: string;
  children: ReactNode;
}

function Dropdown({ children, className, items }: DropdownProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isDropdownOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [isDropdownOpen]);
  return (
    <TouchableOpacity
      className="bg-white flex-row items-center justify-between rounded-md px-3 w-40"
      activeOpacity={1}
      onPress={handleDropdownToggle}
    >
      <Text className={cx("pr-1 ", className)}>{children}</Text>
      <View className="flex-row jusitfy-center items-center">
        <View className="border-l-2 border-gray-100 mx-2 h-8" />
        <Image
          source={require("../../img/chevron-left.png")}
          className="-rotate-90 opacity-50"
        />
      </View>
      {isDropdownOpen && (
        <Animated.View
          className="absolute bg-white px-2 pb-2 top-10 w-40 rounded-md"
          style={{ opacity: fadeAnim }}
        >
          {items.map(({ label, className }, idx) => (
            <TouchableOpacity
              activeOpacity={1}
              className={cx(
                "pl-1",
                idx === items.length - 1
                  ? "pt-2"
                  : "border-b-0.5 border-gray-300 py-2",
                className
              )}
              key={`dropdown-item-${label}`}
            >
              <Text>{label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </TouchableOpacity>
  );
}

export default Dropdown;
