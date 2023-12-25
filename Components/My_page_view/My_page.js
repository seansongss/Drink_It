import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Profile_components from "../Profile_component/Profile_component";
import Placeholer from "../Placeholder";
import { Icon } from "@rneui/base";
import Stat_card from "./Stat_card";
import styles from "./styles";

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

export default My_page;
