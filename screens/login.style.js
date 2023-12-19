import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  containerSpace: {
    marginVertical: 22,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 11,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  title: {
    fontSize: 14,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  FieldContainer: {
    marginBottom: 12,
  },
  TextField: {
    fontSize: 14,
    marginVertical: 8,
  },
  inputFieldContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
  },
  eyes: {
    position: "absolute",
    right: 12,
  },

  OtherCredientialsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  OtherCredientialsContainer: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray2,
    marginHorizontal: 10,
  },
  anotherSignup: {
    fontSize: 14,
    color: COLORS.primary,
  },
  FGWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  FGBtn: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    height: 60,
    backgroundColor: COLORS.primary,
    margin: 10,
  },
  FGImg: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
  slugText: {
    fontSize: 14,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  loggedIn: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  loginText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
  },
});

export default styles;
