import React, { useEffect, useState, useContext, useRef, useCallback, useMemo } from 'react';
import {
    View, Text, TouchableOpacity, Alert,
    StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';
import { Icon } from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecordsContext } from '../../Context/RecordsContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ImageComponent from '../../utils/ImageComponent';
import AlcoholUnit from './AlcoholUnit';
import FeelingUnit from './FeelingUnit';
import RecipeModal from './RecipeModal';

import styles from './styles';

const AddRecord = ({ children, containerStyle, startTime, endTime, location, navigation, recipeTests }) => {
    const { loadRecords } = useContext(RecordsContext);
    const scrollRef = useRef(null);
    const [addAlcoholList, setAddAlcoholList] = useState([
        { name: 'soju', icon: 'soju', count: 0 },
        { name: 'beer', icon: 'beer', count: 0 }
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [feelings, setFeelings] = useState({
        Before: 3,
        During: 3,
        After: 3,
    });
    const [memo, setMemo] = useState('');

    const unitDelete = (index) => {
        Alert.alert(`Delete ${addAlcoholList[index].name}`, 'Are you sure you want to delete this?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: () => {
                    setAddAlcoholList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
                },
                style: 'destructive'
            },
        ]);
    };

    const changeUnitCount = useCallback((index, change) => {
        setAddAlcoholList((prev) => {
            const newCount = prev[index].count + change;
            if (newCount < 0) {
                Alert.alert(`Delete ${prev[index].name}`, 'Are you sure you want to delete this?', [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Delete',
                        onPress: () => {
                            setAddAlcoholList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
                        },
                        style: 'destructive'
                    },
                ]);
            } else {
                const updatedList = [...prev];
                updatedList[index] = { ...updatedList[index], count: newCount };
                return updatedList;
            }
            return prev;
        });
    }, []);

    const changeFeeling = useCallback((name) => {
        setFeelings(prev => {
            const newValue = prev[name] % 5 + 1;
            return { ...prev, [name]: newValue };
        });
    }, []);

    const addNewUnit = (name) => {
        const recipe = recipeList[name];
        if (!recipe) {
            Alert.alert("Error", "Recipe not found.");
            return;
        }
        const existingIndex = addAlcoholList.findIndex(item => item.name === name);
        if (existingIndex >= 0) {
            changeUnitCount(existingIndex, 1);
        } else {
            setAddAlcoholList(prev => [...prev, { name, icon: recipe.icon, count: 1 }]);
        }
    };

    const formatDate = (startTime) => {
        let month = '' + (startTime.getMonth() + 1);
        let day = '' + startTime.getDate();
        const year = startTime.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    };

    const getHighestCountAlcohol = (addAlcoholList) => {
        if (addAlcoholList.length === 0) return null;
        return addAlcoholList.reduce((max, alcohol) => alcohol.count > max.count ? alcohol : max, addAlcoholList[0]);
    };

    const saveRecord = async () => {
        const highestCountAlcohol = getHighestCountAlcohol(addAlcoholList);

        const record = {
            startDate: startTime,
            endDate: endTime ? endTime : new Date(),
            location: location ? location : 'DC Davis, Waterloo',
            addAlcoholList,
            feelings,
            highestCountAlcohol: highestCountAlcohol ? highestCountAlcohol.icon : null,
            memo,
        };
        const dateKey = formatDate(startTime);
        try {
            await AsyncStorage.setItem(dateKey, JSON.stringify(record));
            Alert.alert("Success", "Record saved successfully!");
            const savedRecord = await AsyncStorage.getItem(dateKey);
            console.log("Record saved:", savedRecord);
            loadRecords();
            navigation.navigate('CalendarView');
        } catch (error) {
            console.error("Error saving record:", error);
            Alert.alert("Error", "Failed to save the record.");
        }
    };

    const NewUnitButton = () => (
        <View style={styles.addUnitContainer}>
            <TouchableOpacity
                style={styles.newUnitButton}
                onPress={() => setModalVisible(true)}
            >
                <Icon name="add" color={"#c1dfb0"} size={50} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={containerStyle}>
            <KeyboardAwareScrollView
                style={{ paddingHorizontal: 30 }}
                keyboardShouldPersistTaps="never"
                extraHeight={300}
                extraScrollHeight={-70}
            >
                {children}
                {addAlcoholList.map((item, i) => (
                    <AlcoholUnit key={`${item.name}`} index={i} alcohol={item} changeUnitCount={changeUnitCount} />
                ))}
                <NewUnitButton />
                <View style={styles.addFeelingContainer}>
                    <Text style={styles.text}>How are you feeling?</Text>
                    <View style={styles.addFeelingWrapper}>
                        <FeelingUnit name="Before" feelingValue={feelings['Before']} changeFeeling={changeFeeling} />
                        <FeelingUnit name="During" feelingValue={feelings['During']} changeFeeling={changeFeeling} />
                        <FeelingUnit name="After" feelingValue={feelings['After']} changeFeeling={changeFeeling} />
                    </View>
                </View>
                <View style={styles.memoContainer}>
                    <Text style={styles.text}>Memo</Text>
                    <TextInput
                        style={styles.memoInput}
                        placeholder="Memo"
                        value={memo}
                        multiline
                        onChangeText={(text) => setMemo(text)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.addUnitContainer}
                    onPress={saveRecord}
                >
                    <Text style={styles.text}>Record</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

            <RecipeModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addNewUnit={addNewUnit}
                recipeTests={recipeTests}
            />
        </View>
    );
};

export default AddRecord;
