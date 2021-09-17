import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: width * 0.05,
    },
    inputView: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderBottomColor: "silver",
        borderBottomWidth: 1,
    },
    input: {
        marginLeft: width * 0.04,
        width: "100%",
    },
});
