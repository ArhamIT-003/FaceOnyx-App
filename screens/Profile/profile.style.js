import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary,
  },
  wrapper: {
    flexDirection: "column",
    gap: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
