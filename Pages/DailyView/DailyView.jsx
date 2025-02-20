import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageComponent from '@components/utils/ImageComponent';

import styles from './styles';

const DailyView = ({ navigation, route }) => {
    const { year, month, date } = route.params;
    const dayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const [activeDate, setActiveDate] = useState(new Date(year, month, date));
    const [record, setRecord] = useState(null);

    useEffect(() => {
        const loadRecord = async () => {
            try {
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const savedRecord = await AsyncStorage.getItem(dateKey);
                if (savedRecord) {
                    setRecord(JSON.parse(savedRecord));
                } else {
                    // Alert.alert('No Entry', 'There is no entry for the selected date.', [
                    //     { text: 'OK', onPress: () => navigation.navigate('CalendarView') }
                    // ]);
                    setRecord({
                        startDate: 'No Entry',
                        endDate: 'No Entry',
                        addAlcoholList: [],
                        location: 'No Entry',
                        feelings: { Before: 3, During: 3, After: 3 },
                        memo: 'No entry for the selected date.',
                    });
                }
            } catch (error) {
                console.error('Failed to load record:', error);
            }
        };
        loadRecord();
    }, [year, month, date]);

    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    const changeDate = (n) => {
        const newDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() + n);
        setActiveDate(newDate);
        navigation.setParams({ year: newDate.getFullYear(), month: newDate.getMonth(), date: newDate.getDate() });
    }

    const Unit = ({ name, icon, count }) => {
        return (
            <View style={styles.unitContainer}>
                <View style={styles.unitWrapper}>
                    <ImageComponent type={'alcohol'} value={icon} size={30} />
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Text style={styles.text}>x {count}</Text>
            </View>
        );
    };

    const FeelingUnit = ({ name, feelingValue }) => {
        return (
            <View style={styles.Feeling}>
                <View style={styles.FeelingImage}>
                    <ImageComponent type={'feeling'} value={feelingValue} size={50} />
                </View>
                <Text style={styles.text}>{name}</Text>
            </View>
        );
    };

    const NoteText = ({ text }) => {
        return (
            <Text style={styles.noteText}>{'\u2022'} {text}</Text>
        );
    };

    if (!record) {
        return (
            <View style={styles.dailyViewContainer}>
                <Text style={styles.text}>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.dailyViewContainer}>
            <View style={styles.dailyViewWrapper}>
                <View style={styles.dailyViewHeader}>
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={50}
                        color="black"
                        style={[styles.dailyViewButton]}
                        onPress={() => changeDate(-1)} />
                    <Text style={styles.dateText}>{`${activeDate.getMonth() + 1}/${activeDate.getDate()} ${dayList[activeDate.getDay()]}`}</Text>
                    <MaterialIcons
                        name='keyboard-arrow-right'
                        size={50}
                        color="black"
                        style={[styles.dailyViewButton]}
                        onPress={() => changeDate(+1)} />
                </View>
                <Divider orientation='horizontal' style={styles.divider} width={3} color='#E69C4D' />
                <View style={styles.editContainer}>
                    {/* change for delete icon */}
                    <TouchableOpacity onPress={() => console.log('edit button pressed')}>
                        <ImageComponent type={'calendar'} value={'edit_pen'} size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('edit button pressed')}>
                        <ImageComponent type={'calendar'} value={'edit_pen'} size={40} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.unitListContainer}>
                        {record.addAlcoholList.map((item, index) => (
                            <Unit key={index} name={item.name} icon={item.icon} count={item.count} />
                        ))}
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#E69C4D' }]}>
                        <ImageComponent type={'calendar'} value={'clock'} size={30} />
                        <Text style={styles.text}>  {new Date(record.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(record.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#afeeee' }]}>
                        <ImageComponent type={'calendar'} value={'location'} size={30} />
                        <Text style={styles.text}> {record.location}</Text>
                    </View>
                    <View style={styles.dailyViewFeeling}>
                        <FeelingUnit name='During' feelingValue={record.feelings['During']} />
                        <FeelingUnit name='Before' feelingValue={record.feelings['Before']} />
                        <FeelingUnit name='After' feelingValue={record.feelings['After']} />
                    </View>
                    <View style={styles.dailyViewNote}>
                        <View style={styles.dailyViewNoteHeader}>
                            <ImageComponent type={'calendar'} value={'note'} size={30} />
                            <Text style={[styles.text, { marginLeft: 5 }]}>Note</Text>
                        </View>
                        <Text style={styles.text}>{record.memo}</Text>
                    </View>
                    <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default DailyView;
