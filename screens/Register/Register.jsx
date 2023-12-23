import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./register.style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../../components/welcome-btn/WelcomeBtn.jsx";
import { COLORS } from "../../constants/theme.js";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const GoogleIcon = require("../../assets/google.png");
  const FacebookIcon = require("../../assets/facebook.png");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.appWrapper}>
      <View style={styles.container}>
        <View style={styles.containerSpace}>
          <Text style={styles.text}>Register</Text>
          <Text style={styles.title}>
            Authorize your car today following signing up!
          </Text>
        </View>

        <View style={styles.FieldContainer}>
          <Text style={styles.TextField}>Email address</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              placeholder="Enter your email address"
              keyboardType="email-address"
              style={styles.inputField}
            />
          </View>
        </View>

        <View style={styles.FieldContainer}>
          <Text style={styles.TextField}>Phone Number</Text>
          <View style={styles.inputPhoneContainer}>
            <TextInput
              placeholder="+92"
              keyboardType="numeric"
              style={styles.phoneCode}
            />
            <TextInput
              placeholder="Enter your phone number"
              keyboardType="numeric"
              style={styles.phoneInput}
            />
          </View>
        </View>

        <View style={styles.FieldContainer}>
          <Text style={styles.TextField}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={isPasswordShown}
              style={styles.inputField}
            />
            <View style={styles.eyes}>
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown === true ? (
                  <Ionicons name="eye-off" size={24} color="black" />
                ) : (
                  <Ionicons name="eye" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.CheckBox}>
          <Checkbox
            style={styles.check}
            value={isChecked}
            onValueChange={setIsChecked}
          />
          <Text
            style={{
              fontFamily: "semiBold",
            }}
          >
            I agree to the terms and conditions
          </Text>
        </View>

        <Button
          title={"Sign up"}
          filled
          style={{ marginTop: 10, marginBottom: 8 }}
        />

        <View style={styles.OtherCredientialsWrapper}>
          <View style={styles.OtherCredientialsContainer} />
          <Text style={styles.anotherSignup}>Or Signup with</Text>
          <View style={styles.OtherCredientialsContainer} />
        </View>

        <View style={styles.FGWrapper}>
          <TouchableOpacity
            style={styles.FGBtn}
            onPress={() => console.log("pressed")}
          >
            <Image
              source={GoogleIcon}
              style={styles.FGImg}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontFamily: "regular",
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.FGBtn}
            onPress={() => console.log("pressed")}
          >
            <Image
              source={FacebookIcon}
              style={styles.FGImg}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontFamily: "regular",
              }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loggedIn}>
          <Text style={styles.slugText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
