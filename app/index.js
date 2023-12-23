import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "../components/navigation/BottomNavigation";
import Welcome from "../screens/Welcome/Welcome";
import { Home, Login, Register } from "../screens";

const Stack = createStackNavigator();

const App = () => {
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
      {/* Uncomment the following line if you want to include BottomNavigation */}
      {/* <Stack.Screen
          name="bottom-navigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        /> */}
    </Stack.Navigator>
  );
};

export default App;
