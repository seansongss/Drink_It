import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const RecordHeader = ({ startTime, setStartTime, endTime, setEndTime, location, setLocation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentPicker, setCurrentPicker] = useState(null); // 'start' or 'end'

  const showDatePicker = (picker) => {
    setCurrentPicker(picker);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setCurrentPicker(null);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    if (currentPicker === 'start') {
      setStartTime(selectedDate);
    } else if (currentPicker === 'end') {
      setEndTime(selectedDate);
    }
  };

  const formatDateTime = (date) => {
    const formattedDate = date.toLocaleDateString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${formattedDate} ${hours}:${minutes}`;
  };

  return (
    <KeyboardAvoidingView>
      <View>
        <TouchableOpacity onPress={() => showDatePicker('start')}>
          <Text>Start Time: {formatDateTime(startTime)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showDatePicker('end')}>
          <Text>End Time: {formatDateTime(endTime)}</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            value={location}
            onChangeText={setLocation}
            placeholder="Enter location"
          />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RecordHeader;
