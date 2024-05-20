import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles';

import Funfact_card from '../Funfact_card/Funfact_card';
import Stat_simple from '../Stat_simple/Stat_simple';

function CalendarView({ navigation }) {
    // reference at node_modules/@expo-google-fonts/jaldi
    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    const [activeDate, setActiveDate] = useState(new Date());

    // month array
    const months = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sept", "Oct",
        "Nov", "Dec"];
    // weekdays array
    const weekDays = [[
        "S", "M", "T", "W", "T", "F", "S"
    ]];
    // number of days each month starting in January
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const changeMonth = (n) => {
        setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth() + n, 1));
    }

    // Generate the matrix for the calendar
    const generateMatrix = () => {
        const matrix = [];

        const firstDay = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1).getDay();
        let maxDays = nDays[activeDate.getMonth()];
        if (activeDate.getMonth() == 1) {
            if ((activeDate.getFullYear() % 4 == 0 && activeDate.getFullYear() % 100 != 0) || activeDate.getFullYear() % 400 == 0) {
                maxDays = 29;
            }
        }

        let counter = 1;
        for (let row = 0; row < 6; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 0 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 0 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }

        if (matrix[5][0] == -1) {
            matrix.pop();
        }

        return matrix;
    }

    const matrix = generateMatrix();

    const day_row = weekDays.map((day, i) => {
        let d = day.map((item, i) => {
            return (
                <View style={styles.date} key={`day_${i}`}>
                    <Text style={styles.dateText}>
                        {item}
                    </Text>
                </View>
            )
        });
        return (
            <View style={styles.dateRow} key={`day_row`}>
                {d}
            </View>
        )
    });

    const date_row = matrix.map((row, i) => {
        let days = row.map((item, i) => {
            return (
                <TouchableOpacity style={styles.date}
                    key={`${activeDate.getFullYear()}_${activeDate.getMonth() + 1}_${item != -1 ? item : item - i}`}
                    onPress={() => navigation.navigate('DailyView',
                        { year: activeDate.getFullYear(), month: activeDate.getMonth() + 1 , date: item })}>
                    <ImageBackground
                        source={item == 6 || item == 21 ? require('../../../assets/alcohol/beer_logo.png') :
                            item == 9 ? require('../../../assets/alcohol/wine_logo.png') :
                                item == 14 || item == 17 ? require('../../../assets/alcohol/soju_logo.png') :
                                    item == 24 ? require('../../../assets/alcohol/vodka_logo.png') : null}
                        // imageStyle={item == 5 || item == 9 || item == 14 || item == 21 || item == 24 ? { opacity: 1 } : { opacity: 0 }}
                        resizeMode='center'
                        style={styles.dateBox}
                        onPress=''>
                        <Text
                            style={styles.dateText}>
                            {item != -1 ? item : ''}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity >
            )
        });
        return (
            <View style={styles.dateRow} key={`row_${ i }`}>
                {days}
            </View>
        )
    });

    // Safe area calculation
    const inset = useSafeAreaInsets();

    return (
        <View style={styles.calendarViewContainer}>
            {/* Month navigation */}
            <View style={styles.monthRow}>
                <View style={styles.monthContainer}>
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={40}
                        color="#FFC870"
                        style={[styles.monthButton]}
                        onPress={() => changeMonth(-1)} />
                    <Text style={styles.month}>
                        {months[activeDate.getMonth()]} {activeDate.getFullYear()}
                    </Text>
                    <MaterialIcons
                        name='keyboard-arrow-right'
                        size={40}
                        color="#FFC870"
                        style={[styles.monthButton]}
                        onPress={() => changeMonth(+1)} />
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.rankingContainer}>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setActiveDate(new Date())}>
                        <Image source={require('../../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.calendarContainer}>
                {/* Days of the week */}
                {day_row}
                <Divider orientation='horizontal' style={styles.divider} width={3} color='#E69C4D' />
                {/* Dates */}
                {date_row}
            </View>
        </View>
    )
}

export default CalendarView;