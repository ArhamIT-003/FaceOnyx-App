import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: COLORS.white,
    marginBottom: 8,
    textTransform: "capitalize",
  },
  subTitle: {
    color: COLORS.gray2,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default styles;
