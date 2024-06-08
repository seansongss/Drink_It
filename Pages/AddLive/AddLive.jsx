import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddHeader from '../../Components/AddLive/Header/AddHeader';
import AddRecord from '../../Components/AddLive/Record/AddRecord';
import styles from './styles';

const AddLive = ({ navigation }) => {
    const date = new Date();
    const [recipeList, setRecipeList] = useState({
        soju: { icon: "soju", alcohol: [17, 19] },
        wine: { icon: "wine", alcohol: [12, 15] },
        beer: { icon: "beer", alcohol: [4, 5] },
        vodka: { icon: "vodka", alcohol: [30, 40] },
    });

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.addLiveContainer}>
                <AddHeader containerStyle={styles.addHeaderContainer} />
                <AddRecord
                    containerStyle={styles.addRecordContainer}
                    startTime={date}
                    navigation={navigation}
                    recipeList={recipeList}
                    updateRecipeList={updateRecipeList}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AddLive;
