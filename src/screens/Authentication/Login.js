import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet, Text, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";

const { width, height } = Dimensions.get("window");

const Login = () => {
    const [passwordHideState, setPasswordHideState] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (
        <View style={CommonStyles.flexOne}>
            <View style={styles.main}>
                <View style={[styles.inputView, styles.mb16]}>
                    <Ionicons size={height * 0.04} name="mail-open-outline" />
                    <Input
                        onChange={setUsername}
                        value={username}
                        placeHolder={"Email"}
                        secureText={false}
                    />
                </View>

                <View style={[styles.inputView, styles.mb32]}>
                    <TouchableOpacity onPress={() => setPasswordHideState(!passwordHideState)}>
                        {passwordHideState == true ? (
                            <Ionicons size={height * 0.04} name="eye-outline" />
                        ) : (
                            <Ionicons size={height * 0.04} name="eye-off-outline" />
                        )}
                    </TouchableOpacity>
                    <Input
                        onChange={setPassword}
                        value={password}
                        placeHolder={"Password"}
                        secureText={passwordHideState}
                    />
                </View>
                <Button title={"Login"} style={styles.btn} />
                <TouchableOpacity
                    style={styles.textContainer}
                    onPress={() => navigation.navigate(APP_ROUTES.SIGNUP)}
                >
                    <Text style={styles.text}>Create an account ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        ...CommonStyles.flexOne,
        backgroundColor: Colors.white,
        paddingHorizontal: width * 0.05,
        ...CommonStyles.justifyCenter,
    },
    mb16: {
        marginBottom: 16,
    },
    mb32: {
        marginBottom: 32,
    },
    textContainer: {
        ...CommonStyles.alignItemCenter,
        marginTop: 20,
    },
    text: {
        textDecorationLine: "underline",
    },
    inputView: {
        ...CommonStyles.flexRow,
        ...CommonStyles.alignItemCenter,
        borderBottomColor: "silver",
        borderBottomWidth: 1,
    },
    btn: {
        marginHorizontal: width * 0.1,
    },
});

export default Login;
