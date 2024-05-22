import React, { useState } from 'react'
import { View } from 'react-native'
import AddHeader from '../../Components/AddLive/Header/AddHeader'
import AddRecord from '../../Components/AddLive/Record/AddRecord'

import styles from './styles'

const AddLive = () => {
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState(0);

  return (
    <View style={styles.addLiveContainer}>
      <AddHeader
        containerStyle={styles.addHeaderContainer}
        onDateChange={setDate}
        onDurationChange={setDuration}
      />
      <AddRecord
        containerStyle={styles.addRecordContainer}
        date={date}
        duration={duration}
      />
    </View>
  )
}

export default AddLive
