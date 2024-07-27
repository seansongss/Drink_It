import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';

const StatCard = ({children, title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        {children}
    </View>
  )
}

export default StatCard