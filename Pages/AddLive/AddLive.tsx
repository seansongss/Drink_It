import React, { useState, useEffect } from 'react';
import { useQuery, Realm } from '@realm/react';

import { SafeAreaView } from 'react-native-safe-area-context';

import AddHeader from '@components/AddLive/AddHeader/AddHeader';
import AddRecord from '@components/AddLive/AddRecord/AddRecord';

import styles from './styles';

interface AddLiveProps {
    navigation: any; // Ideally, replace `any` with a more specific type from your navigation setup
}

const AddLive: React.FC<AddLiveProps> = ({ navigation }) => {
    const startTime = new Date();
    const [location, setLocation] = useState<string>('DC Davis, Waterloo');

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
