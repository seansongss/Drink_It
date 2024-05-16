import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const StatSimple = () => {
    return (
        <View style={styles.statContainer}>
            <View style={styles.statBox} />
            <View style={styles.statBox} />
            <View style={styles.statBox} />
        </View>
    )
}

export default StatSimple