import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: { fontSize: 18 },
});

export default styles;
