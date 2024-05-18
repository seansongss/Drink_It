import React from 'react'
import { View } from 'react-native'
import AddHeader from '../../Components/AddLive/Header/AddHeader'
import AddRecord from '../../Components/AddLive/Record/AddRecord'

import styles from './styles'

const AddLive = () => {
  return (
    <View style={styles.addLiveContainer}>
        <AddHeader containerStyle={styles.addHeaderContainer} />
        <AddRecord containerStyle={styles.addRecordContainer} />
    </View>
  )
}

export default AddLive