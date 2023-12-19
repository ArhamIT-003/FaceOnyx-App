import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./welcomebtn.style.js";
import { COLORS } from "../../constants/theme.js";

const Button = ({ title, onPress, color, filled, style }) => {
  const filledBgColor = color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = filled ? filledBgColor : outlinedColor;
  const textColor = filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...{ backgroundColor: bgColor }, ...style }}
      onPress={onPress}
    >
      <Text style={{ ...styles.btnTxt, ...{ color: textColor } }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
