import React, { useState, useEffect, useContext } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecordsContext } from '../../components/Context/RecordsContext';

import AddRecord from '../../components/AddLive/AddRecord/AddRecord';
import AddHeader from '../../components/AddLive/AddHeader/AddHeader';

import styles from './styles';
import RecordHeader from '../../components/NewRecord/RecordHeader';

const NewRecord = ({ navigation }) => {
    const { loadRecords } = useContext(RecordsContext); // Use context to get loadRecords
    const [recipeList, setRecipeList] = useState({
        soju: { icon: "soju", alcohol: [17, 19] },
        wine: { icon: "wine", alcohol: [12, 15] },
        beer: { icon: "beer", alcohol: [4, 5] },
        vodka: { icon: "vodka", alcohol: [30, 40] },
    });
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [location, setLocation] = useState('');

    useEffect(() => {
        const loadRecipeList = async () => {
            try {
                const storedRecipeList = await AsyncStorage.getItem('recipeList');
                if (storedRecipeList) {
                    const parsedRecipeList = JSON.parse(storedRecipeList);
                    setRecipeList(parsedRecipeList);
                    console.log('Stored recipe list:', parsedRecipeList);
                }
            } catch (error) {
                console.error('Failed to load recipe list:', error);
            }
        };

        loadRecipeList();
    }, []);

    useEffect(() => {
        console.log('Loaded recipe list:', recipeList);
    }, [recipeList]);

    const updateRecipeList = async (newRecipeList) => {
        try {
            await AsyncStorage.setItem('recipeList', JSON.stringify(newRecipeList));
            setRecipeList(newRecipeList);
        } catch (error) {
            console.error('Failed to update recipe list:', error);
            Alert.alert('Error', 'Failed to update recipe list.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <RecordHeader
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                location={location}
                setLocation={setLocation}
            />
            <AddRecord
                containerStyle={{ flex: 1 }}
                startTime={startTime}
                endTime={endTime}
                location={location}
                navigation={navigation}
                recipeList={recipeList}
                updateRecipeList={updateRecipeList}
            />
        </View>
    );
};

export default NewRecord;
