import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Divider, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi'

import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

// getAlcoholIcon by name
const getAlchoholIcon = (name) => {
    switch (name) {
        case "soju":
            return require("../../assets/alcohol/soju_logo.png");
        case "beer":
            return require("../../assets/alcohol/beer_logo.png");
        case "wine":
            return require("../../assets/alcohol/wine_logo.png");
        case "vodka":
            return require("../../assets/alcohol/vodka_logo.png");

        default:
            log.error('Invalid alcohol name');
            break;
    }
};

// getfeelingicon by feeling 1-5
const getfeelingicon = (feeling) => {
    switch (feeling) {
        case 1:
            return require("../../assets/Daily_view/feeling5.png");
        case 2:
            return require("../../assets/Daily_view/feeling4.png");
        case 3:
            return require("../../assets/Daily_view/feeling3.png");
        case 4:
            return require("../../assets/Daily_view/feeling2.png");
        case 5:
            return require("../../assets/Daily_view/feeling1.png");

        default:
            log.error('Invalid feeling number');
            break;
    }
};

const DailyView = ({ navigation, route }) => {
    const { year, month, date } = route.params;
    const dayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const [activeDate, setActiveDate] = useState(new Date(year, month, date));

    const getDateObject = (date) => {
        AsyncStorage.getItem(`${year}-${month}-${date}`, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            return JSON.parse(result);
        });
    }

    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    const changeDate = (n) => {
        setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() + n));
    }

    const Unit = ({ name, count }) => {
        return (
            <View style={styles.unitContainer}>
                <View style={styles.unitWrapper}>
                    <Image
                        source={getAlchoholIcon(name)}
                        style={{ width: 30, height: 30, resizeMode: "center" }}
                    />
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Text style={styles.text}>x {count}</Text>
            </View>
        )
    };

    // feeling component
    const Feeling = ({ name }) => {
        return (
            <View style={styles.Feeling}>
                <View style={styles.FeelingImage}>
                    <Image
                        source={getfeelingicon(3)}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: "center",
                        }}
                    />
                </View>
                <Text style={styles.text}>{name}</Text>
            </View>
        );
    };

    // note component
    const NoteText = ({ text }) => {
        return (
            <Text style={styles.noteText}>{'\u2022'} {text}</Text>
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
                        <Image source={require('../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                {/* ScrollView for main content */}
                <ScrollView>
                    <View style={styles.unitListContainer}>
                        <Unit name='soju' count={2} />
                        <Unit name='beer' count={3} />
                        <Unit name='wine' count={1} />
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#E69C4D' }]}>
                        <Image source={require('../../assets/Daily_view/clock.png')}
                            style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                            resizeMode='contain' />
                        <Text style={styles.text}>11 PM - 1 AM</Text>
                    </View>
                    <View style={[styles.dailyViewInfo, { backgroundColor: '#afeeee' }]}>
                        <Image source={require('../../assets/Add_live/bright_location.png')}
                            style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                            resizeMode='contain' />
                        <Text style={styles.text}>DALDONGNAE, WATERLOO</Text>
                    </View>
                    <View style={styles.dailyViewFeeling}>
                        <Feeling name='Before' />
                        <Feeling name='During' />
                        <Feeling name='After' />
                    </View>
                    <View style={styles.dailyViewNote}>
                        <Image source={require('../../assets/Add_live/bright_note.png')}
                            style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                            resizeMode='contain' />
                        <NoteText text='Notes text text text' />
                        <NoteText text='Notes 2 text text text' />
                        <NoteText text='Notes 3 text text' />
                        <NoteText text='Notes 4 text text text' />
                        <NoteText text='Notes 5 text text text' />
                    </View>
                    <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
                </ScrollView>
            </View>
        </View>
    )
}

export default DailyView