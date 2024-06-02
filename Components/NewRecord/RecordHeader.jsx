import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getFeeling, getAlcohol } from '../utils/GetImage'
import DatePicker from 'react-native-date-picker'

const RecordHeader = ({ startTime, setStartTime, endTime, setEndTime, location, setLocation }) => {
  const [startTimeOpen, setStartTimeOpen] = useState(false)
  const [endTimeOpen, setEndTimeOpen] = useState(false)
  return (
    <View>
      <TouchableOpacity onPress={() => setStartTimeOpen(true)}>
        <Text>{startTime}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={startTimeOpen}
        date={startTime}
        onConfirm={(date) => {
          setStartTimeOpen(false)
          setStartTime(date)
        }}
        onCancel={() => {
          setStartTimeOpen(false)
        }}
      />
      <TouchableOpacity onPress={() => setEndTimeOpen(true)}>
        <Text>{endTime}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={setEndTimeOpen}
        date={endTime}
        onConfirm={(date) => {
          setEndTimeOpen(false)
          setEndTime(date)
        }}
        onCancel={() => {
          setEndTimeOpen(false)
        }}
      />
      <View>
        <Text>Location</Text>
        <TouchableOpacity>
          <Text>Current Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RecordHeader