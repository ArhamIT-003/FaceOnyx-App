import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Login, Logs } from "../../screens/index";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />

      <Tab.Screen
        name="Register"
        component={Logs}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome name="history" size={24} color="black" />
            ) : (
              <MaterialIcons name="history" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome name="user" size={24} color="black" />
            ) : (
              <AntDesign name="user" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome5 name="sign-in-alt" size={24} color="black" />
            ) : (
              <FontAwesome name="sign-in" size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
