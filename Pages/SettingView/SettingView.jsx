import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, Divider } from "@rneui/base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useUser } from '@realm/react';

import ImageComponent from '@components/utils/ImageComponent'

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
                    <TouchableOpacity
                        style={styles.settingWrapper}
                    >
                        <Text style={styles.text}>PROFILE</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingWrapper}
                    >
                        <Text style={styles.text}>PERSONAL INFO</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingWrapper}
                    >
                        <Text style={styles.text}>SECURITY</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingWrapper}
                        onPress={logOutButton}
                    >
                        <Text style={styles.text}>LOGOUT</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                </View>
                <Divider color='white' width={5} style={styles.divider} />
                <View style={styles.personalSetting}>
                    <Ionicons name="person" size={45} color={"#b2d8b2"} />
                    <TouchableOpacity
                        style={styles.settingWrapper}
                    >
                        <Text style={styles.text}>LAGUAGE</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingWrapper}
                    >
                        <Text style={styles.text}>NOTIFICATIONS</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.settingWrapper, {marginBottom: 20}]}
                    >
                        <Text style={styles.text}>THEMES</Text>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#b2d8b2"
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingView