import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  FieldContainer: {
    marginBottom: 12,
  },
  TextField: {
    fontSize: 14,
    marginVertical: 8,
    fontFamily: "semiBold",
    color: COLORS.white,
  },
  inputFieldContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.lightWhite,
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
    borderColor: COLORS.white,
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
    borderLeftColor: COLORS.gray2,
    height: "100%",
  },
  phoneInput: {
    width: "80%",
    height: "100%",
  },
  accountBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 24,
  },

  accountBtnText: {
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    textTransform: "capitalize",
    fontFamily: "bold",
    fontSize: 16,
  },
});

export default styles;
