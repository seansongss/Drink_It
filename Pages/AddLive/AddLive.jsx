import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddHeader from '../../Components/AddLive/Header/AddHeader';
import AddRecord from '../../Components/AddLive/Record/AddRecord';
import styles from './styles';

const AddLive = ({ navigation }) => {
    const startTime = new Date();
    const [recipeList, setRecipeList] = useState({
        soju: { icon: "soju", alcohol: 17, description: 'Nice one sonny' },
        wine: { icon: "wine", alcohol: 15, description: 'Nice one sonny' },
        beer: { icon: "beer", alcohol: 4.5, description: 'Nice one sonny' },
        vodka: { icon: "vodka", alcohol: 40, description: 'Nice one sonny' },
    });
    const [location, setLocation] = useState('DC Davis, Waterloo');

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
        <View style={styles.addLiveContainer}>
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
                recipeList={recipeList}
                updateRecipeList={updateRecipeList}
            />
        </View>
    );
};

export default AddLive;
 