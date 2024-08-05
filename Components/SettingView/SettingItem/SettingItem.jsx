import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Text from '@components/utils/Text'

import styles from './styles'

const SettingItem = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.settingWrapper}
            onPress={onPress}
        >
            <Text fontSize={22}>{name}</Text>
            <MaterialIcons
                name='keyboard-arrow-right'
                size={50}
                color="#b2d8b2"
            />
        </TouchableOpacity>
    )
}

export default SettingItem