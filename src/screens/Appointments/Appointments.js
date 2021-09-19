import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image, ActivityIndicator } from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import { Header } from "../../components/Header";
import { getAppointments } from "../../store/actions";

import Doctor from "../../assets/doctor.jpg";

const Appointments = (props) => {
    const { getAppointments } = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        getAppointments().then((res) => {});
    }, []);

    const renderItem = ({ item, index }) => {
        const { name, timing, fees, designation } = item;
        return (
            <View style={[styles.card, index === mock.length && styles.mb20]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.img} source={Doctor} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.designation}>{designation}</Text>
                    <View style={styles.timing}>
                        <Material name="clock-time-three-outline" color={Colors.primary} />
                        <Text style={styles.time}>{timing}</Text>
                    </View>
                    <Text style={styles.fees}>{fees}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={CommonStyles.flexOne}>
            <Header title="Appointments" />
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={mock}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexOne,
        backgroundColor: "white",
    },
    mb20: {
        marginBottom: 20,
    },
    card: {
        ...CommonStyles.flexRow,
        backgroundColor: Colors.light,
        elevation: 4,
        height: 110,
        marginTop: 16,
        borderRadius: 9,
        marginHorizontal: 20,
    },
    imageContainer: {
        paddingTop: 8,
        ...CommonStyles.alignItemCenter,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 20,
    },
    detailsContainer: {
        marginLeft: 15,
        paddingTop: 8,
    },
    name: {
        fontWeight: "bold",
        color: "#607D8B",
        fontSize: 22,
    },
    designation: {
        color: "gray",
    },
    timing: {
        marginTop: 8,
        ...CommonStyles.flexRow,
        ...CommonStyles.alignItemCenter,
    },
    time: {
        marginLeft: 5,
        fontSize: 11,
    },
    fees: {
        color: "gray",
    },
});

const mapDispatchToProps = {
    getAppointments,
};

export default connect(null, mapDispatchToProps)(Appointments);

const mock = [
    { id: 1, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 2, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 3, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 4, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 5, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
];
