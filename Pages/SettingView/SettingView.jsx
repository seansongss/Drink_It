import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, Divider } from "@rneui/base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useUser } from '@realm/react';

import ImageComponent from '@components/utils/ImageComponent'

import styles from './styles'
import SettingItem from '@components/SettingView/SettingItem/SettingItem';

const SettingView = ({ navigation }) => {
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
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('MyPage')}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={70}
                        color="#fff9d4"
                    />
                </TouchableOpacity>
                <View style={styles.settingIcon}>
                    <Icon name="settings" color="white" size={50} />
                </View>
            </View>
            <ScrollView
                style={styles.contentContainer}
            >
                <View style={styles.personalSetting}>
                    <Ionicons name="person" size={45} color={"#b2d8b2"} />
                    <SettingItem name="ACCOUNT" onPress={() => navigation.navigate('Account')} />
                    <SettingItem name="PERSONAL INFO" onPress={() => navigation.navigate('PersonalInfo')} />
                    <SettingItem name="SECURITY" onPress={() => navigation.navigate('Security')} />
                    <SettingItem name="LOGOUT" onPress={logOutButton} />
                </View>
                <Divider color='white' width={5} style={styles.divider} />
                <View style={styles.personalSetting}>
                    <Ionicons name="person" size={45} color={"#b2d8b2"} />
                    <SettingItem name="LANGUAGE" onPress={() => navigation.navigate('Language')} />
                    <SettingItem name="NOTIFICATIONS" onPress={() => navigation.navigate('Notifications')} />
                    <SettingItem name="THEMES" onPress={() => navigation.navigate('Themes')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingView