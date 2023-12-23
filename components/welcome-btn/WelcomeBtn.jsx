import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

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

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: { fontSize: 18, fontFamily: "bold" },
});

export default Button;
