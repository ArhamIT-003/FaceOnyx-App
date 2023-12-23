import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "bold",
    fontSize: 24,
    color: COLORS.white,
    marginBottom: 8,
    textTransform: "capitalize",
  },
  subTitle: {
    color: COLORS.gray2,
    fontFamily: "semiBold",
  },
  image: {
    width: "100%",
    height: 250,
  },
});

export default styles;
