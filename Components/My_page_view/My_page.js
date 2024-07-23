import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Icon } from "@rneui/base";
import { useUser } from "@realm/react";

import Profile_components from "../Profile_component/Profile_component";
import Stat_card from "./Stat_card";

import styles from "./styles";

const UserBox = () => {
    const user = useUser();
    
    const logOutButton = () => {
        Alert.alert('Logout', 'Are you sure you want to log out?', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => user.logOut(),
                style: 'destructive'
            },
        ]);
    };
    
    return (
        <View style={styles.userBox}>
            <View style={styles.userInfo}>
                <Profile_components nickname={user.customData.username} exp={0.3} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 1 pressed")}
                    >
                        <Image
                            style={styles.button}
                            source={require("../../assets/my_page/my_favorites.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={logOutButton}
                    >
                        <Image
                            style={styles.button}
                            source={require("../../assets/my_page/my_combinations.png")}
                        />
                    </TouchableOpacity>
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
                <Image
                    source={require("@assets/my_page/stat.png")}
                    style={{ width: 60, height: 45 }}
                    resizeMode="stretch"
                />
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
