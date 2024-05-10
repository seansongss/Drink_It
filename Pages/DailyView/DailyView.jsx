import React from 'react'
import { View, Text } from 'react-native'

const DailyView = ({ date }) => {
  return (
    <View>
      <Text>{date}</Text>
    </View>
  )
}

export default DailyView