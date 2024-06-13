import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import styles from './styles';

const RecordHeader = ({ containerStyle, startTime, setStartTime, endTime, setEndTime, location, setLocation }) => {
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
    if (currentPicker === 'start') {
      setStartTime(selectedDate);
    } else {
      setEndTime(selectedDate);
    }
    hideDatePicker();
  };

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var ampm = 'AM';
    if (hours > 12) {
      hours = hours - 12;
      ampm = 'PM';
    }
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <KeyboardAvoidingView style={{paddingHorizontal: 30}}>
      <View>
        <TouchableOpacity
          style={styles.unitContainer}
          onPress={() => showDatePicker('start')}
        >
          <Text style={styles.text}>Start Time: {formatDateTime(startTime)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.unitContainer}
          onPress={() => showDatePicker('end')}
        >
          <Text style={styles.text}>End Time: {formatDateTime(endTime)}</Text>
        </TouchableOpacity>
        <View
          style={styles.unitContainer}
        >
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.text}
            placeholder="Enter location"
          />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          date={currentPicker === 'start' ? startTime : endTime}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RecordHeader;
