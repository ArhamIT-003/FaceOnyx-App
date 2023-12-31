import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./userforms.style";
import { COLORS } from "../../constants/theme";
import MyImagePicker from "../ImagePicker/ImagePicker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const UserForms = ({ value }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.mainTitle}>
        {value === "update" ? "Update Your Account" : "Enter this form"}
      </Text>

      <View style={styles.container}>
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

        <MyImagePicker />

        <View
          style={[
            styles.accountBtnContainer,
            value !== "update" && styles.accountBtnConditions,
          ]}
        >
          <TouchableOpacity style={styles.accountBtn}>
            <View style={styles.iconTextContainer}>
              <Ionicons name="enter-outline" size={24} color="white" />
              <Text style={styles.accountBtnText}>
                {value === "update" ? "Update" : "Submit"}
              </Text>
            </View>
          </TouchableOpacity>
          {value === "update" && (
            <TouchableOpacity
              style={styles.accountBtn}
              onPress={() => navigation.goBack()}
            >
              <View style={styles.iconTextContainer}>
                <AntDesign name="back" size={24} color="white" />
                <Text style={styles.accountBtnText}>Go back</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserForms;
