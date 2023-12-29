import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/Welcome";
import { Home, Login, Profile, Register } from "../screens";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [fontsloaded] = useFonts({
    regular: require("../assets/font/Comfortaa-Regular.ttf"),
    light: require("../assets/font/Comfortaa-Light.ttf"),
    medium: require("../assets/font/Comfortaa-Medium.ttf"),
    semiBold: require("../assets/font/Comfortaa-SemiBold.ttf"),
    bold: require("../assets/font/Comfortaa-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  if (!fontsloaded) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;

{
  /* Uncomment the following line if you want to include BottomNavigation */
}
{
  /* <Stack.Screen
          name="bottom-navigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        /> */
}
