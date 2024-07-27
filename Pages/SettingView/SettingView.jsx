import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from "@rneui/base";
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

const SettingView = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>hello</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MyPage')}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={50}
                        color="black"
                        style={[styles.dailyViewButton]}
                    />
                </TouchableOpacity>

                <Icon name="settings" color="white" size={40} />
            </View>
            <View styles={styles.body}>
                <Text>Setting</Text>
            </View>
        </SafeAreaView>
    )
}

export default SettingView