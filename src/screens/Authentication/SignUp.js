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
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import ImagePicker from "react-native-image-crop-picker";
import Snackbar from "react-native-snackbar";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { DatePicker } from "../../components/DatePicker";
import { GenderConstants, UserRoles } from "../../constants";
import { signUp } from "../../store/actions";

import Avatar from "../../assets/avatar.png";

const { width, height } = Dimensions.get("window");

const GENDER_LABELS = {
    [GenderConstants.MALE]: "Male",
    [GenderConstants.FEMALE]: "Female",
};

const Login = (props) => {
    const { signUp } = props;
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
    const [showGenderPicker, setShowGenderPicker] = useState(false);
    const [image, setImage] = useState(null);
    const [fetching, setFetching] = useState(false);
    const navigation = useNavigation();

    const handleGenderChange = (itemValue) => {
        setShowGenderPicker(false);
        setGender(itemValue);
    };

    const canSubmit = () => {
        if (
            !(
                firstName.trim().length &&
                lastName.trim().length &&
                email.trim().length &&
                password.trim().length &&
                phone.trim().length &&
                Boolean(date) &&
                address.trim().length &&
                Boolean(gender)
            )
        ) {
            Snackbar.show({
                text: "Please please fill all fields",
                duration: Snackbar.LENGTH_SHORT,
            });

            return false;
        }

        if (!image) {
            Snackbar.show({
                text: "Please please select an image",
                duration: Snackbar.LENGTH_SHORT,
            });
            return false;
        }

        return true;
    };

    const openGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            cropping: true,
        })
            .then((image) => {
                setImage({ base64: image.data, path: image.path });
            })
            .catch((err) => {});
    };

    const handleSubmit = () => {
        if (!canSubmit()) {
            return;
        }

        let payload = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            phone: phone,
            dob: date,
            gender: gender,
            address: address,
            email: email,
            role: UserRoles.PATIENT,
            img: image.base64,
        };

        signUp(payload)
            .then((res) => {})
            .catch((err) => {})
            .finally(() => {
                setFetching(false);
            });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.wrapper}>
                        <Image
                            source={image ? { uri: image.path } : Avatar}
                            style={styles.img}
                            resizeMode="cover"
                        />
                        <TouchableOpacity style={styles.editContainer} onPress={openGallery}>
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
                            keyboardType={"phone-pad"}
                        />
                    </View>

                    <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                        <View style={[styles.inputView, styles.mb16]}>
                            <Ionicons size={height * 0.04} name="md-calendar-sharp" />
                            <Input
                                onChange={setDate}
                                value={date ? moment(date).format("DD-MM-YYYY") : ""}
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

                    <TouchableWithoutFeedback
                        onPress={() => setShowGenderPicker(!showGenderPicker)}
                    >
                        <View style={[styles.inputView, styles.mb16]}>
                            <Ionicons size={height * 0.04} name="person-circle" />
                            <Input
                                onChange={setGender}
                                value={GENDER_LABELS[gender]}
                                placeHolder={"Gender"}
                                secureText={false}
                                editable={false}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    {showGenderPicker && (
                        <View style={CommonStyles.relative}>
                            <Picker
                                dropdownIconColor="white"
                                mode="dialog"
                                selectedValue={gender}
                                onValueChange={handleGenderChange}
                            >
                                <Picker.Item label="Male" value={GenderConstants.MALE} />
                                <Picker.Item label="Female" value={GenderConstants.FEMALE} />
                            </Picker>
                            <Ionicons
                                size={height * 0.04}
                                name="md-arrow-down-circle"
                                style={{ position: "absolute", right: "2%", top: "25%" }}
                            />
                        </View>
                    )}

                    <View style={[styles.inputView, styles.mb16]}>
                        <Ionicons size={height * 0.04} name="card-outline" />
                        <Input
                            onChange={setAddress}
                            value={address}
                            placeHolder={"Address"}
                            secureText={false}
                        />
                    </View>

                    <Button
                        title={"Sign Up"}
                        style={styles.btn}
                        onPress={handleSubmit}
                        loading={fetching}
                    />
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

const mapDispatchToProps = {
    signUp,
};

export default connect(null, mapDispatchToProps)(Login);
