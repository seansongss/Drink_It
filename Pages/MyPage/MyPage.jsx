import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Icon } from "@rneui/base";
import { useUser } from "@realm/react";
import { SafeAreaView } from "react-native-safe-area-context";

import UserProfile from "@components/MyPage/UserProfile/UserProfile";
import StatBox from "@components/MyPage/StatBox/StatBox";
import ImageComponent from "@components/utils/ImageComponent";

import styles from "./styles";

const MyPage = ({navigation}) => {
    const user = useUser();

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <View style={styles.userContainer}>
                <UserProfile username={user.customData.username} exp={0.5} />
                <View style={styles.userSetting}>
                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={() => navigation.navigate('SettingView')}
                    >
                        <Icon name="settings" color="white" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={() => navigation.navigate('RecipeRanking')}
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
