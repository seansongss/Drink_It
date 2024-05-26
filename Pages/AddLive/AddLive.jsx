import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AddHeader from '../../Components/AddLive/Header/AddHeader';
import AddRecord from '../../Components/AddLive/Record/AddRecord';

import styles from './styles';

const AddLive = ({ navigation }) => {
  const date = new Date();
  const recipeList = [
    { name: "soju", icon: "soju", alcohol: [17, 19]},
    { name: "wine", icon: "wine", alcohol: [12, 15]},
    { name: "beer", icon: "beer", alcohol: [4, 5]},
    { name: "vodka", icon: "vodka", alcohol: [30, 40]},
    { name: "soju", icon: "soju", alcohol: [17, 19]},
    { name: "wine", icon: "wine", alcohol: [12, 15]},
    { name: "beer", icon: "beer", alcohol: [4, 5]},
    { name: "vodka", icon: "vodka", alcohol: [30, 40]},
  ];

  return (
    <View style={styles.addLiveContainer}>
      <AddHeader containerStyle={styles.addHeaderContainer} />
      <AddRecord 
        containerStyle={styles.addRecordContainer}
        date={date}
        navigation={navigation}
        recipeList={recipeList}
      />
    </View>
  );
};

export default AddLive;
