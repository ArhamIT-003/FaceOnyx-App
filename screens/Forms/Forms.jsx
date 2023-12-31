import { View, Text } from "react-native";
import React from "react";
import styles from "./forms.styles";
import UserForms from "../../components/User-Forms/UserForms";

const Forms = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <UserForms value="update" />
      </View>
    </View>
  );
};

export default Forms;
