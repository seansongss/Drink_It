import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Profile_components from "./Profile_component";
import Placeholer from "./Components/Placeholder";
import { Icon } from "@rneui/base";
import Stat_card from "./Stat_card";

const UserBox = () => {
    return (
        <View style={styles.userBox}>
            <View style={styles.userInfo}>
                <Profile_components nickname="test_id_1123" exp={0.3} />
            </View>
            <Placeholer width={20} />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 1 pressed")}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 2 pressed")}
                    ></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Sub-component StatBox
const StatBox = () => {
    return (
        <View style={styles.statBox}>
            <View style={styles.statTop}>
                <Icon name="equalizer" size={60} color="white" />
                <TouchableOpacity>
                    <Icon name="navigate-next" size={50} />
                </TouchableOpacity>
            </View>
            <Stat_card />
            <Stat_card />
            <Stat_card />
        </View>
    );
};

const My_page = () => {
    return (
        <View style={styles.container}>
            <UserBox />
            <StatBox />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: "10%", // 10% margin at the top
        marginHorizontal: "2.5%", // 2.5% margin at the left and right
        backgroundColor: "white",
    },
    statTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statBox: {
        width: "80%",
        height: "70%",
        backgroundColor: "#CCE2B1",
        padding: "10%",
        marginHorizontal: "10%",
        borderRadius: 20,
        justifyContent: "space-between",
    },
    userBox: {
        flexDirection: "row", // Horizontal layout
        width: "90%",
        height: "20%",
        margin: "5%",
        backgroundColor: "#E0EED0",
        justifyContent: "space-evenly",
        paddingHorizontal: 10,
    },
    userInfo: {
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
    },
    buttonsRow: {
        flexDirection: "row", // Horizontal layout
        justifyContent: "spacebetween",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "blue",
        alignItems: "center",
        margin: 10,
    },
});

export default My_page;
