import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./profile.style";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import Accounts from "../../components/Accounts/Accounts";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <FontAwesome name="user-circle" size={100} color="gray" />
        </View>
        <View style={styles.main}>
          <Accounts />
        </View>
      </View>
    </View>
  );
};

export default Profile;
