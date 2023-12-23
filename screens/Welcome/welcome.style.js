import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imgOne: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  imgTwo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  imgThree: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },

  imgFour: {
    width: 200,
    height: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 110,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  textContainer: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  text: {
    fontSize: 50,
    color: COLORS.white,
    fontFamily: "semiBold",
  },
  slugContainer: {
    marginVertical: 22,
  },
  slugText: {
    color: COLORS.white,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "regular",
  },
  btn: {
    width: 100,
  },
  loggedIn: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
});

export default styles;
