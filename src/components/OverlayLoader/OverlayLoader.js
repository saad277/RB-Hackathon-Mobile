import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

import { Colors, CommonStyles } from "../../styles";

const OverlayLoader = (props) => {
    const { title = "Processing..." } = props;

    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.primary} size="large" />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.absolute,
        zIndex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    text: {
        color: Colors.primary,
        ...CommonStyles.alignSelfCenter,
        fontSize: 17,
    },
});

export default OverlayLoader;
