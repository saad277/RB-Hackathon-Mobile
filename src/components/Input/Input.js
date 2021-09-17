import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Colors, CommonStyles } from "../../styles";

const Input = (props) => {
    const { onChange, value, placeHolder, secureText = false } = props;

    return (
        <View style={styles.inputView}>
            <TextInput
                value={value}
                style={styles.inputText}
                placeholder={placeHolder}
                placeholderTextColor="#fff"
                onChangeText={(value) => onChange(value)}
                secureTextEntry={secureText}
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
