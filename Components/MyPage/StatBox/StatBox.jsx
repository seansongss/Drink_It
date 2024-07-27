import React from 'react'
import { ScrollView, View } from 'react-native'

import StatCard from '@components/MyPage/StatCard/StatCard'
import ImageComponent from '@components/utils/ImageComponent'

import styles from './styles'

const StatBox = () => {
  return (
    <ScrollView style={styles.statBox}>
        <View style={styles.statTop}>
            <ImageComponent type="utils" value="stat" size={60} />
        </View>
        <View style={styles.statList}>
            <StatCard title="TODAY'S FUN FACT" />
            <StatCard title="WEEKLY SUMMARY" />
            <StatCard title="DRINKING ANALYSIS" />
        </View>
    </ScrollView>
  )
}

export default StatBox