import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./home.style";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "../../assets/mainlogo.png";
import car from "../../assets/car.png";
import MenuOptions from "../../components/MenuOptions/MenuOptions";
import options from "../../assets/options";
import Controls from "../../components/Controls/Controls";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Honda civic</Text>

          <Text style={styles.subTitle}>Authenticated</Text>
        </View>

        <Pressable onPress={() => navigation.navigate("Profile")}>
          <FontAwesome name="user-circle" size={30} color="gray" />
        </Pressable>
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />

      <Controls />
      <FlatList
        data={options}
        renderItem={MenuOptions}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

// ListHeaderComponent={Controls}
