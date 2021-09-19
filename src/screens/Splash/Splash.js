import React, { useEffect } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import { getMe } from "../../store/actions";

const { width } = Dimensions.get("window");

import Logo from "../../assets/logo.png";

const Splash = (props) => {
    const { getMe } = props;
    const navigation = useNavigation();

    useEffect(() => {
        const initialize = async () => {
            const token = await AsyncStorage.getItem("token");

            if (token) {
                getMe(token)
                    .then((res) => {
                        navigation.replace(APP_ROUTES.USER);
                    })
                    .catch((err) => {
                        navigation.replace(APP_ROUTES.AUTH);
                    });

                return;
            }

            navigation.navigate(APP_ROUTES.AUTH);
        };

        setTimeout(() => {
            initialize();
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

const mapDispatchToProps = {
    getMe,
};

export default connect(null, mapDispatchToProps)(Splash);
