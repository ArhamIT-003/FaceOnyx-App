import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOptions = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        <Text style={styles.optionText}>{item.name}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  optionText: {
    color: COLORS.tertiary,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOptions;
