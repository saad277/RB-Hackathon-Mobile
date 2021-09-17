import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Colors, CommonStyles } from "../../styles";

const Input = (props) => {
    const { onChange=()=>{}, value, placeHolder, secureText = false } = props;

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
        borderColor: Colors.primary,
        borderWidth: 1.4,
        borderRadius: 12,
        height: 50,
        marginBottom: 20,
        ...CommonStyles.justifyCenter,
        padding: 20,
    },
    inputText: {
        height: 50,
        fontSize: 20,
        color: Colors.primary,
    },
});

export default Input;
