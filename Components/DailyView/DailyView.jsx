import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import { ImageComponent } from '../utils/ImageComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';
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
                    Alert.alert('No Entry', 'There is no entry for the selected date.', [
                        { text: 'OK', onPress: () => navigation.navigate('CalendarView') }
                    ]);
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
                    {/* <Image
                        source={getAlchoholIcon(icon)}
                        style={{ width: 30, height: 30, resizeMode: "center" }}
                    /> */}
                    <ImageComponent type={'alcohol'} value={icon} size={30} />
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Text style={styles.text}>x {count}</Text>
            </View>
        );
    };

    const Feeling = ({ name, feelingValue }) => {
        return (
            <View style={styles.Feeling}>
                <View style={styles.FeelingImage}>
                    {/* <Image
                        source={getFeelingIcon(feelingValue)}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: "center",
                        }}
                    /> */}
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
        <View style={styles.dailyViewContainer}>
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
                    <TouchableOpacity onPress={() => console.log('edit button pressed')}>
                        {/* <Image source={require('../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' /> */}
                        <ImageComponent type={'calendar'} value={'last_night'} size={40} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.unitListContainer}>
                        {record.addAlcoholList.map((item, index) => (
                            <Unit key={index} name={item.name} icon={item.icon} count={item.count} />
                        ))}
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#E69C4D' }]}>
                        {/* <Image source={require('../../assets/Daily_view/clock.png')}
                            style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                            resizeMode='contain' /> */}
                        <ImageComponent type={'calendar'} value={'clock'} size={30} />
                        <Text style={styles.text}>{new Date(record.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(record.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#afeeee' }]}>
                        {/* <Image source={require('../../assets/Add_live/bright_location.png')}
                            style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                            resizeMode='contain' /> */}
                        <ImageComponent type={'calendar'} value={'location'} size={30} />
                        <Text style={styles.text}>DALDONGNAE, WATERLOO</Text>
                    </View>
                    <View style={styles.dailyViewFeeling}>
                        <Feeling name='Before' feelingValue={record.feelings.before} />
                        <Feeling name='During' feelingValue={record.feelings.during} />
                        <Feeling name='After' feelingValue={record.feelings.after} />
                    </View>
                    <View style={styles.dailyViewNote}>
                        <View style={styles.dailyViewNoteHeader}>
                            {/* <Image source={require('../../assets/Add_live/bright_note.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode='contain' /> */}
                            <ImageComponent type={'calendar'} value={'ntoe'} size={30} />
                            <Text style={[styles.text, { marginLeft: 5 }]}>Note</Text>
                        </View>
                        <Text style={styles.text}>{record.memo}</Text>
                    </View>
                    <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
                </ScrollView>
            </View>
        </View>
    );
}

export default DailyView;
