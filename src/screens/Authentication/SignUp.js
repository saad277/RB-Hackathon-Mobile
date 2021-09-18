import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { DatePicker } from "../../components/DatePicker";

import Avatar from "../../assets/avatar.png";

const { width, height } = Dimensions.get("window");

const Login = () => {
    const [passwordHideState, setPasswordHideState] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();


    console.log(date)

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
                            onChange={setFirstName}
                            value={firstName}
                            placeHolder={"First Name"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="person-outline" />
                        <Input
                            onChange={setLastName}
                            value={lastName}
                            placeHolder={"Last Name"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="md-mail-outline" />
                        <Input
                            onChange={setEmail}
                            value={email}
                            placeHolder={"Email"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
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

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="phone-portrait-outline" />
                        <Input
                            onChange={setPhone}
                            value={phone}
                            placeHolder={"Phone"}
                            secureText={false}
                        />
                    </View>

                    <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                        <View style={[styles.inputView, styles.mb16]}>
                            <Ionicons size={height * 0.04} name="md-calendar-sharp" />
                            <Input
                                onChange={setDate}
                                value={String(date)}
                                placeHolder={"Date"}
                                secureText={false}
                                editable={false}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <DatePicker
                        isOpen={showDatePicker}
                        setDateTime={setDate}
                        setShow={setShowDatePicker}
                    />

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="person-circle" />
                        <Input
                            onChange={setGender}
                            value={gender}
                            placeHolder={"Gender"}
                            secureText={false}
                        />
                    </View>

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="card-outline" />
                        <Input
                            onChange={setAddress}
                            value={address}
                            placeHolder={"Address"}
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
        marginBottom: 20,
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
        marginTop: 15,
    },
    wrapper: {
        ...CommonStyles.relative,
        marginBottom: 30,
        marginTop: 16,
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
