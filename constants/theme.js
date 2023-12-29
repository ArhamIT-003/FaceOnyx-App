import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#222831",
  secondary: "#393E46",
  tertiary: "#D65A31",
  gray: "#D65A31", // Suggested texture color
  gray2: "#C0C0C0", // Suggested light shadow color

  white: "#FFFFFF",
  lightWhite: "#EEEEEE", // Suggested light color
};

const SHADOWS = {
  small: {
    shadowColor: "rgba(0, 0, 0, 0.3)", // Suggested shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "rgba(0, 0, 0, 0.3)", // Suggested shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};
const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  height,
  width,
};

export { COLORS, SHADOWS, SIZES };
