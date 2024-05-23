import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AddHeader from '../../Components/AddLive/Header/AddHeader';
import AddRecord from '../../Components/AddLive/Record/AddRecord';

import styles from './styles';

const AddLive = ({ navigation }) => {
  const date = new Date();

  return (
    <View style={styles.addLiveContainer}>
      <AddHeader containerStyle={styles.addHeaderContainer} />
      <AddRecord 
        containerStyle={styles.addRecordContainer}
        date={date}
        navigation={navigation}
      />
    </View>
  );
};

export default AddLive;
