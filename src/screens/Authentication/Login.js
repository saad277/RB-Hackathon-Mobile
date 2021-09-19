import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { login } from "../../store/actions";

const { width, height } = Dimensions.get("window");

import Logo from "../../assets/logo.png";

const Login = (props) => {
    const { login } = props;

    const [passwordHideState, setPasswordHideState] = useState(true);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const navigation = useNavigation();

    const canSubmit = () => {
        if (!(phone.trim().length && password.trim().length)) {
            Snackbar.show({
                text: "Please please fill all fields",
                duration: Snackbar.LENGTH_SHORT,
            });
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (!canSubmit()) {
            return;
        }

        setFetching(true);

        let payload = {
            phone: phone,
            password: password,
        };

        login(payload)
            .then((res) => {
                navigation.replace(APP_ROUTES.USER);
            })
            .catch(() => {})
            .finally(() => {
                setFetching(false);
            });
    };
    //0332234822
    return (
        <View style={CommonStyles.flexOne}>
            <View style={styles.main}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
                <View style={[styles.inputView, styles.mb16]}>
                    <Ionicons size={height * 0.04} name="mail-open-outline" />
                    <Input
                        onChange={setPhone}
                        value={phone}
                        placeHolder={"Phone"}
                        secureText={false}
                        keyboardType={"phone-pad"}
                    />
                </View>

                <View style={[styles.inputView, styles.mb32]}>
                    <TouchableOpacity onPress={() => setPasswordHideState(!passwordHideState)}>
                        <Ionicons
                            size={height * 0.04}
                            name={passwordHideState ? "eye-outline" : "eye-off-outline"}
                        />
                    </TouchableOpacity>
                    <Input
                        onChange={setPassword}
                        value={password}
                        placeHolder={"Password"}
                        secureText={passwordHideState}
                    />
                </View>
                <Button
                    title={"Login"}
                    style={styles.btn}
                    onPress={handleSubmit}
                    loading={fetching}
                />
                <TouchableOpacity
                    style={styles.textContainer}
                    disabled={fetching}
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
    logo: {
        width: 200,
        height: 100,
        ...CommonStyles.alignSelfCenter,
    },
});

const mapDispatchToProps = {
    login,
};

export default connect(null, mapDispatchToProps)(Login);
