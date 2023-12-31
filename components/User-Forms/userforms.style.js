import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    color: COLORS.tertiary,
    fontFamily: "bold",
    textAlign: "center",
    marginBottom: 30,
    textTransform: "uppercase",
  },
  container: {
    gap: 10,
  },
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
    justifyContent: "space-around",
    padding: 10,
  },

  accountBtnText: {
    textTransform: "capitalize",
    fontFamily: "bold",
    fontSize: 16,
    color: COLORS.lightWhite,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  accountBtnConditions: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});

export default styles;
