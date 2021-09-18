import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";

import Avatar from "../../assets/avatar.png";

const { width, height } = Dimensions.get("window");

const Login = () => {
    const [passwordHideState, setPasswordHideState] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.wrapper}>
                        <Image source={Avatar} style={styles.img} resizeMode="cover" />
                        <TouchableOpacity style={styles.editContainer}>
                            <Ionicons size={height * 0.04} name="pencil" />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="person" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="person-outline" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
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

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="phone-portrait-outline" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="md-calendar-sharp" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="person-circle" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="card-outline" />
                        <Input
                            onChange={setUsername}
                            value={username}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <Button title={"Sign Up"} style={styles.btn} />
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() => navigation.navigate(APP_ROUTES.LOGIN)}
                    >
                        <Text style={styles.text}>Already have an account ?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        ...CommonStyles.flexOne,
    },
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
    wrapper: {
        ...CommonStyles.relative,
        marginBottom: 30,
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 100,
        marginTop: 10,
        alignSelf: "center",
    },
    editContainer: {
        ...CommonStyles.absolute,
        bottom: -10,
        right: "30%",
        backgroundColor: Colors.light,
        borderRadius: 100,
        padding: 6,
    },
});

export default Login;
