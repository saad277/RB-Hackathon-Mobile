import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: width * 0.05,
    },
    heading: {
        fontSize: width * 0.1,
        fontWeight: "700",
        color: "#346DFF",
        textAlign: "center",
    },
    image: {
        marginVertical: height * 0.03,
        width: width,
        height: height * 0.2,
        alignSelf: "center",
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
    loginbtn: {
        backgroundColor: "#346DFF",
        width: "100%",
        borderRadius: width * 0.05,
        marginVertical: height * 0.05,
        paddingVertical: height * 0.018,
    },
    loginbtntext: {
        color: "white",
        textAlign: "center",
        fontWeight: "700",
    },
    bottom: {
        flexDirection: "row",
    },
    text: {
        fontSize: width * 0.04,
    },
    btnText: {
        fontSize: width * 0.04,
        color: "#346DFF",
    },
});
