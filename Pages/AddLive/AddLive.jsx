import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@realm/react';

import AddHeader from '../../components/AddLive/AddHeader/AddHeader';
import AddRecord from '../../components/AddLive/AddRecord/AddRecord';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddLive = ({ navigation }) => {
    const startTime = new Date();
    const [location, setLocation] = useState('DC Davis, Waterloo');

    const recipeTests = useQuery('recipeTest');
    console.log('recipeTests:', recipeTests);

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.addLiveContainer}>
            <AddHeader
                containerStyle={styles.addHeaderContainer}
                location={location}
                setLocation={setLocation}
                today={startTime}
            />
            <AddRecord
                containerStyle={styles.addRecordContainer}
                startTime={startTime}
                location={location}
                navigation={navigation}
                recipeTests={recipeTests}
            />
        </SafeAreaView>
    );
};

export default AddLive;
 