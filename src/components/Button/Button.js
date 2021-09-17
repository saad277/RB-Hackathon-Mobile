import React from "react";
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

import { Colors } from "../../styles";

const Button = (props) => {
    const { title, onPress = () => {}, loading = false, disabled = false, style } = props;

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={loading || disabled}
        >
            {loading ? (
                <ActivityIndicator color="#fff" size="large" />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: Colors.white,
        fontSize: 20,
    },
});

export default Button;
