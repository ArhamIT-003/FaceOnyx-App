import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./accounts.style";
import { COLORS } from "../../constants/theme";
import MyImagePicker from "../ImagePicker/ImagePicker";
import { useNavigation } from "@react-navigation/native";

const Accounts = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.FieldContainer}>
        <Text style={styles.TextField}>Full name</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            placeholder="Enter your name"
            keyboardType="name-phone-pad"
            placeholderTextColor={COLORS.gray2}
            style={styles.inputField}
          />
        </View>
      </View>

      <View style={styles.FieldContainer}>
        <Text style={styles.TextField}>Email address</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            placeholder="Enter your email address"
            keyboardType="email-address"
            placeholderTextColor={COLORS.gray2}
            style={styles.inputField}
          />
        </View>
      </View>

      <View style={styles.FieldContainer}>
        <Text style={styles.TextField}>Phone number</Text>
        <View style={styles.inputPhoneContainer}>
          <TextInput
            placeholder="+92"
            keyboardType="numeric"
            placeholderTextColor={COLORS.gray2}
            style={styles.phoneCode}
          />
          <TextInput
            placeholder="Enter your phone number"
            keyboardType="numeric"
            placeholderTextColor={COLORS.gray2}
            style={styles.phoneInput}
          />
        </View>
      </View>

      <MyImagePicker />

      <View style={styles.FieldContainer}>
        <Text style={styles.TextField}>Car name</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            placeholder="Enter your car name"
            keyboardType="name-phone-pad"
            placeholderTextColor={COLORS.gray2}
            style={styles.inputField}
          />
        </View>
      </View>

      <View style={styles.accountBtnContainer}>
        <TouchableOpacity style={styles.accountBtn}>
          <Text style={styles.accountBtnText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.accountBtnText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Accounts;
