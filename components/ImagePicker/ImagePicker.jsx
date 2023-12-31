import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const imgDir = FileSystem.documentDirectory + "images/";

async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    console.log("Image directory doesn't exist, creating…");
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
}

const MyImagePicker = () => {
  const [images, setImages] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const options = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.75,
  };

  const captureImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync(options);

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri) => {
    await ensureDirExists();
    const filename = new Date().getTime() + ".jpg";
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImages([...images, dest]);
  };

  const handleWarningPress = () => {
    setShowWarning(!showWarning);
  };

  return (
    <View>
      {images.length < 2 ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={selectImage}>
            <View style={styles.iconTextContainer}>
              <AntDesign name="profile" size={24} color="black" />
              <Text style={styles.text}>Profile Image</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={captureImage}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="tag-faces" size={24} color="black" />
              <Text style={styles.text}>Face Image</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.imgContainer}>
          {images.map((img) => (
            <Image
              key={img}
              source={{ uri: img }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.warning} onPress={handleWarningPress}>
        {!showWarning && (
          <Text style={styles.warningText}>
            <AntDesign name="warning" size={24} color={COLORS.tertiary} />
          </Text>
        )}
        {showWarning && (
          <Text style={styles.warningText}>
            Hands should be wide so that the face can be captured clearly.
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    backgroundColor: "white",
  },
  text: {
    textTransform: "capitalize",
    fontFamily: "semiBold",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  warning: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  warningText: {
    color: COLORS.tertiary,
    textAlign: "center",
  },
});

export default MyImagePicker;

// <View style={styles.container}>
// Important Guide. Clicking Image for face should be done using selfiee
//           camera of phone. And hands should be wide so that face can be detect
//           easily. Thank you.
//     </View>
