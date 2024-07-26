import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Icon } from "@rneui/base";
import { useUser } from "@realm/react";

import UserProfile from "@components/MyPage/UserProfile/UserProfile";
import Stat_card from "@components/My_page_view/Stat_card";

import styles from "./styles";
import ImageComponent from "@components/utils/ImageComponent";
import { SafeAreaView } from "react-native-safe-area-context";

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
                <UserProfile username={user.customData.username} exp={0.3} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 1 pressed")}
                    >
                        <Image
                            style={styles.button}
                            source={require("@assets/my_page/my_favorites.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={logOutButton}
                    >
                        <Image
                            style={styles.button}
                            source={require("@assets/my_page/my_combinations.png")}
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
            </View>
            <View style={styles.statList}>
                <Stat_card />
                <Stat_card />
                <Stat_card />
            </View>
        </View>
    );
};

const MyPage = () => {
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
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <View style={styles.userContainer}>
                <UserProfile username={user.customData.username} exp={0.5} />
                <View style={styles.userSetting}>
                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={logOutButton}
                    >
                        <Icon name="settings" color="white" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={logOutButton}
                    >
                        <ImageComponent
                            type="calendar"
                            value="rankings"
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.statContainer}>
                <StatBox />
            </View>
        </SafeAreaView>
    );
};

export default MyPage;
