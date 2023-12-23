import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

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
    fontFamily: "bold",
    marginVertical: 11,
    color: COLORS.primary,
  },
  title: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: "regular",
  },
  FieldContainer: {
    marginBottom: 12,
  },
  TextField: {
    marginVertical: 8,
    fontFamily: "semiBold",
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
  inputPhoneContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneCode: {
    width: "12%",
    marginLeft: 10,
    borderRightWidth: 1,
    borderLeftColor: COLORS.primary,
    height: "100%",
  },
  phoneInput: {
    width: "80%",
    height: "100%",
  },
  eyes: {
    position: "absolute",
    right: 12,
  },
  CheckBox: {
    flexDirection: "row",
    marginVertical: 8,
  },
  check: {
    marginRight: 10,
    marginTop: 4,
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
    fontFamily: "regular",
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
    fontFamily: "regular",
  },
  loggedIn: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  loginText: {
    color: COLORS.primary,
    fontFamily: "bold",
    fontSize: 14,
    textTransform: "capitalize",
  },
});

export default styles;
