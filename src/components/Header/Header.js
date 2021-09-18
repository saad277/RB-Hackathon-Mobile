import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { Colors, CommonStyles } from "../../styles";

import APP_ROUTES from "../../navigation";

import Avatar from "../../assets/avatar.png";

const Header = (props) => {
    const { title = "", logout, rightIcon = true } = props;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            {rightIcon ? (
                <TouchableOpacity onPress={() => navigation.navigate(APP_ROUTES.PROFILE)}>
                    <Image source={Avatar} style={styles.icon} />
                </TouchableOpacity>
            ) : (
                <View style={styles.icon} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexRow,
        ...CommonStyles.justifyBetween,
        backgroundColor: Colors.secondary,
        height: 65,
        ...CommonStyles.alignItemCenter,
        elevation: 2,
        paddingHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        color: Colors.white,
    },
});

export default Header;
