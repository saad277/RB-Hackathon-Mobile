import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Button from "../components/Button";
import Input from "../components/Input";

const { width, height } = Dimensions.get("window");

const Signup = (props) => {

    const [passwordHideState1, setPasswordHideState1] = useState(true);
    const [passwordHideState2, setPasswordHideState2] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return (
        <View style={Styles.main}>
            <View style={Styles.inputView}>
                <Ionicons size={height * 0.04} name="mail-open-outline" />
                <Input
                    onChange={setUsername}
                    value={username}
                    placeHolder={"username"}
                    secureText={false}
                />
            </View>
            <View style={Styles.inputView}>
                <TouchableOpacity
                    onPress={() => {
                        setPasswordHideState1(!passwordHideState1);
                    }}
                >
                    {passwordHideState1 == true ? (
                        <Ionicons size={height * 0.04} name="eye-outline" />
                    ) : (
                        <Ionicons size={height * 0.04} name="eye-off-outline" />
                    )}
                </TouchableOpacity>
                <Input
                    onChange={setPassword}
                    value={password}
                    placeHolder={"Password"}
                    secureText={passwordHideState1}
                />
            </View>
            <View style={Styles.inputView}>
                <TouchableOpacity
                    onPress={() => {
                        setPasswordHideState2(!passwordHideState2);
                    }}
                >
                    {passwordHideState2 == true ? (
                        <Ionicons size={height * 0.04} name="eye-outline" />
                    ) : (
                        <Ionicons size={height * 0.04} name="eye-off-outline" />
                    )}
                </TouchableOpacity>
                <Input
                    onChange={setConfirmPassword}
                    value={confirmPassword}
                    placeHolder={"Password"}
                    secureText={passwordHideState2}
                />
            </View>
            <Button
                title={"sign up"}
                onPress={() => {
                    console.log("hello");
                }}
                loading={false}
                disabled={false}
                style={""}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
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

export default Signup;
