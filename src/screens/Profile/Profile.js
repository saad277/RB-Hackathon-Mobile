import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { logout } from "../../store/actions";

import Avatar from "../../assets/avatar.png";

const { width, height } = Dimensions.get("window");

const Profile = (props) => {
    const { user, logout } = props;
    const navigation = useNavigation();

    const handleLogout = () => {
        logout().then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: APP_ROUTES.AUTH }],
            });
        });
    };

    const renderField = (label, text) => {
        return (
            <View style={styles.field}>
                <Text style={styles.font17}>
                    {label} : {text}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header title="Profile" rightIcon={false} />
            <ScrollView>
                <View style={styles.wrapper1}>
                    <View style={styles.wrapper}>
                        <Image
                            source={user?.img ? { uri: user?.img } : Avatar}
                            style={styles.img}
                            resizeMode="cover"
                        />
                        <TouchableOpacity style={styles.editContainer}>
                            <Ionicons size={height * 0.04} name="pencil" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {renderField("First Name", user?.firstName || "-")}
                        {renderField("Last Name", user?.lastName || "-")}
                        {renderField("Email", user?.email || "-")}
                        {renderField("Phone", user?.phone || "-")}
                    </View>
                    <Button title="Logout" style={styles.btn} onPress={handleLogout} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        ...CommonStyles.flexOne,
    },
    wrapper: {
        ...CommonStyles.relative,
        marginBottom: 80,
        marginTop: 16,
    },
    font17: {
        fontSize: 17,
    },
    wrapper1: {
        ...CommonStyles.flexOne,
        ...CommonStyles.justifyBetween,
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 100,
        marginTop: 10,
        ...CommonStyles.alignSelfCenter,
    },
    field: {
        backgroundColor: Colors.light,
        padding: 12,
        marginBottom: 18,
        marginHorizontal: 14,
        borderRadius: 10,
    },
    editContainer: {
        ...CommonStyles.absolute,
        bottom: -10,
        right: "30%",
        backgroundColor: Colors.light,
        borderRadius: 100,
        padding: 6,
    },
    editIcon: {
        width: 30,
        height: 30,
    },
    btn: {
        marginHorizontal: 24,
        marginBottom: 20,
        marginTop: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
