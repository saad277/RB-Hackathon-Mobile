import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";

import { Colors, CommonStyles } from "../../styles";

import Avatar from "../../assets/avatar.png";

const Header = (props) => {
    const { title = "", logout } = props;

    return (
        <View style={styles.container}>
            <View style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Image source={Avatar} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
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
