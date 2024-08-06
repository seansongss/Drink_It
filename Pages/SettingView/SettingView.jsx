import React from 'react'
import { View, TouchableOpacity, ScrollView, Alert, SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, Divider } from "@rneui/base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useUser } from '@realm/react';

import Text from '@components/utils/Text'
import SettingItem from '@components/SettingView/SettingItem/SettingItem';

import styles from './styles'

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

    sectionData = [
        {
            title: 'First section',
            data: [
                {
                    name: 'ACCOUNT',
                    onPress: () => navigation.navigate('Account'),
                },
                {
                    name: 'PERSONAL INFO',
                    onPress: () => navigation.navigate('PersonalInfo'),
                },
                {
                    name: 'SECURITY',
                    onPress: () => navigation.navigate('Security'),
                },
                {
                    name: 'LOGOUT',
                    onPress: logOutButton,
                }
            ]
        },
        {
            title: 'Second section',
            data: [
                {
                    name: 'LANGUAGE',
                    onPress: () => navigation.navigate('Language'),
                },
                {
                    name: 'NOTIFICATIONS',
                    onPress: () => navigation.navigate('Notifications'),
                },
                {
                    name: 'THEMES',
                    onPress: () => navigation.navigate('Themes'),
                }
            ]
        },
    ]

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            {/* header section */}
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
            {/* setting content */}
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
            {/* <SectionList
                contentContainerStyle={styles.contentContainer}
                sections={sectionData}
                renderItem={({ item }) => (
                    <SettingItem name={item.name} onPress={item.onPress} />
                )}
                renderSectionHeader={({ section }) => (
                    <Ionicons name="person" size={45} color={"#b2d8b2"} />
                )}
                keyExtractor={(item, index) => item.name + index}
                SectionSeparatorComponent={() => <Divider color='white' width={5} style={styles.divider} />}
            /> */}
        </SafeAreaView>
    )
}

export default SettingView