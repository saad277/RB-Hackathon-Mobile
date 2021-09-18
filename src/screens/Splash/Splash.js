import React, { useEffect } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";

const { width } = Dimensions.get("window");

import Logo from "../../assets/logo.png";

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace(APP_ROUTES.AUTH);
        }, 5000);
    }, []);

    return (
        <View style={CommonStyles.flexOne}>
            <View style={styles.main}>
                <Image source={Logo} style={styles.img} resizeMode="contain" />
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
    img: {
        width: 270,
        height: 300,
        ...CommonStyles.alignSelfCenter,
    },
});

export default Splash;
