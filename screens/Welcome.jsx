import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./welcome.style";
import { COLORS } from "../constants/theme";
import Button from "../components/welcome-btn/WelcomeBtn";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.wrapper}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <SafeAreaView style={styles.wrapper}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.imgOne}
          />
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.imgTwo}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.imgThree}
          />
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.imgFour}
          />
        </View>

        {/*content*/}

        <View style={styles.textContainer}>
          <Text style={styles.text}>Let's Get</Text>
          <Text style={styles.text}>Started</Text>
          <View style={styles.slugContainer}>
            <Text style={styles.slugText}>
              Experience the feature of future
            </Text>
          </View>
          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Register")}
            style={{ paddingTop: 22 }}
          />

          <View style={styles.loggedIn}>
            <Text style={styles.slugText}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
