import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./login.style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/welcome-btn/WelcomeBtn.jsx";
import { COLORS } from "../../constants/theme.js";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const GoogleIcon = require("../../assets/google.png");
  const FacebookIcon = require("../../assets/facebook.png");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.appWrapper}>
      <View style={styles.container}>
        <View style={styles.containerSpace}>
          <Text style={styles.text}>Log-In</Text>
          <Text style={styles.title}>
            Login to experience a future security!
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

        <Button
          title={"Sign-in"}
          filled
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: 10, marginBottom: 8 }}
        />

        <View style={styles.OtherCredientialsWrapper}>
          <View style={styles.OtherCredientialsContainer} />
          <Text style={styles.anotherSignup}>Or Sign-in with</Text>
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
            <Text style={{ fontSize: 14, color: COLORS.white }}>Google</Text>
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
            <Text style={{ fontSize: 14, color: COLORS.white }}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loggedIn}>
          <Text style={styles.slugText}>New to the app? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.loginText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
