import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Colors, CommonStyles } from "../../styles";

const Input = (props) => {
    const {
        onChange = () => {},
        value,
        placeHolder,
        secureText = false,
        containerStyles = {},
        editable = true,
        keyboardType = "default",
    } = props;

    return (
        <View style={[styles.inputView, containerStyles]}>
            <TextInput
                value={value}
                style={styles.inputText}
                placeholder={placeHolder}
                placeholderTextColor={Colors.secondary}
                onChangeText={(value) => onChange(value)}
                secureTextEntry={secureText}
                editable={editable}
                keyboardType={keyboardType}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
        borderRadius: 25,
        marginLeft: 10,
        ...CommonStyles.justifyCenter,
        ...CommonStyles.flexOne,
    },
    inputText: {
        height: 50,
        fontSize: 16,
        color: Colors.black,
    },
});

export default Input;
