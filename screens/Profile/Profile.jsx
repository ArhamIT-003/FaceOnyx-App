import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./profile.style";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import UserForms from "../../components/User-Forms/UserForms";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Forms");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <FontAwesome name="user-circle" size={100} color="gray" />
        </View>
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Text style={styles.mainTitle}>Account setting</Text>
            <TouchableOpacity onPress={handleNavigation}>
              <View style={styles.mainBtn}>
                <MaterialIcons name="update" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

// {update && <UserForms key="update" />}
