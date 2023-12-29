import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";
import { COLORS } from "../../constants/theme";

const MyImagePicker = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleImagePicker = (imageNumber) => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        if (imageNumber === 1) {
          setImage1(source);
        } else {
          setImage2(source);
        }
      }
    });
  };

  const handleWarningPress = () => {
    setShowWarning(!showWarning);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePicker(1)}>
          <Text style={styles.text}>Image for Profile</Text>
        </TouchableOpacity>
        {image1 && (
          <Image source={image1} style={styles.image} resizeMode="cover" />
        )}

        <TouchableOpacity onPress={() => handleImagePicker(2)}>
          <Text style={styles.text}>Click for Face</Text>
        </TouchableOpacity>
        {image2 && (
          <Image source={image2} style={styles.image} resizeMode="cover" />
        )}
      </View>
      <TouchableOpacity style={styles.warning} onPress={handleWarningPress}>
        {!showWarning && (
          <Text style={styles.warningText}>Important guide for face Image</Text>
        )}
        {showWarning && (
          <Text style={styles.warningText}>
            Clicking Image for face should be done using the selfie camera of
            the phone. And hands should be wide so that the face can be detected
            easily. Thank you.
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    backgroundColor: "white",
  },
  text: {
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    textTransform: "capitalize",
    fontFamily: "semiBold",
  },
  warning: {
    alignItems: "center",
  },
  warningText: {
    color: COLORS.tertiary,
    textTransform: "capitalize",
  },
});

export default MyImagePicker;

// <View style={styles.container}>
// Important Guide. Clicking Image for face should be done using selfiee
//           camera of phone. And hands should be wide so that face can be detect
//           easily. Thank you.
//     </View>
